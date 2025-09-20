// ------------------- 카테고리 가중치 -------------------
const CAT_WEIGHTS = {
  batting: 0.35,
  pitching: 0.40,
  fielding: 0.20,
  baserunning: 0.05
};

// ------------------- 세부 지표 가중치 (text.txt 공식) -------------------
const BAT_WEIGHTS = { AVG: 0.050, PA: 0.020, AB: 0.020, R: 0.200, H: 0.130, '2B': 0.040, '3B': 0.030, HR: 0.100, TB: 0.100, RBI: 0.200, SAC: 0.050, SF: 0.060 };
const PIT_WEIGHTS = { ERA: 0.125, starter_ERA: 0.055, W: 0.100, L: 0.050, SV: 0.080, HLD: 0.050, WHIP: 0.150, IP: 0.100, H: 0.030, HR: 0.020, BB: 0.020, HBP: 0.020, SO: 0.120, R: 0.040, ER: 0.040 };
const FIE_WEIGHTS = { E: 0.200, PK: 0.100, PO: 0.100, A: 0.100, DP: 0.100, FPCT: 0.200, PB: 0.050, SB: 0.050, CS: 0.050, 'CS%': 0.050 };
const BAS_WEIGHTS = { SBA: 0.050, SB: 0.250, CS: 0.100, 'SB%': 0.200, OOB: 0.250, PKO: 0.150 };

// ------------------- 방향성 정의 -------------------
const LOWER_BETTER = {
  batting: [],
  pitching: ['ERA', 'WHIP', 'H', 'HR', 'BB', 'HBP', 'R', 'ER', 'L'],
  fielding: ['E', 'PB', 'SB'],
  baserunning: ['CS', 'OOB', 'PKO']
};

// ------------------- Helper -------------------
function zScore(val, arr, lowerBetter = false) {
  if (val == null || isNaN(val)) return 0;
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const std = Math.sqrt(arr.map(x => (x - mean) ** 2).reduce((a, b) => a + b, 0) / arr.length) || 1;
  let z = (val - mean) / std;
  z = Math.max(-3, Math.min(3, z));
  return lowerBetter ? -z : z;
}

function categoryScore(stats, weights, lowerBetterKeys, leagueStats) {
  let score = 0;
  for (const key in weights) {
    const val = stats[key];
    const arr = leagueStats ? leagueStats.map(s => s[key]).filter(v => v != null && !isNaN(v)) : [val];
    const z = zScore(val, arr, lowerBetterKeys.includes(key));
    score += (weights[key] || 0) * z;
  }
  return score;
}

function totalScore(teamStats, starterERA, leagueStats, starterERAs) {
  const bat = categoryScore(teamStats.batting, BAT_WEIGHTS, LOWER_BETTER.batting, leagueStats?.map(s => s.batting));

  // text.txt 공식에 따라 ERA는 0.125 가중치로, starter_ERA는 0.055 가중치로 별도 계산
  const pitWithoutStarter = { ...PIT_WEIGHTS };
  delete pitWithoutStarter.starter_ERA; // starter_ERA는 별도 처리

  const pit = categoryScore(teamStats.pitching, pitWithoutStarter, LOWER_BETTER.pitching, leagueStats?.map(s => s.pitching));
  const starterEraScore = PIT_WEIGHTS.starter_ERA * zScore(starterERA, starterERAs || [starterERA], true);
  const fie = categoryScore(teamStats.fielding, FIE_WEIGHTS, LOWER_BETTER.fielding, leagueStats?.map(s => s.fielding));
  const bas = categoryScore(teamStats.baserunning, BAS_WEIGHTS, LOWER_BETTER.baserunning, leagueStats?.map(s => s.baserunning));

  const totalScore = CAT_WEIGHTS.batting * bat +
                     CAT_WEIGHTS.pitching * (pit + starterEraScore) +
                     CAT_WEIGHTS.fielding * fie +
                     CAT_WEIGHTS.baserunning * bas;


  return totalScore;
}

function softmax(a, b, tau = 1) {
  const ea = Math.exp(a / tau);
  const eb = Math.exp(b / tau);
  return ea / (ea + eb);
}

// ------------------- 메인 함수 -------------------
function calculateWinProbability(homeStats, awayStats, homePitcherERA, awayPitcherERA, leagueStats, starterERAs) {
  const homeScore = totalScore(homeStats, homePitcherERA, leagueStats, starterERAs);
  const awayScore = totalScore(awayStats, awayPitcherERA, leagueStats, starterERAs);

  let homeProb = softmax(homeScore, awayScore);
  let awayProb = 1 - homeProb;

  return { homeProb, awayProb };
}