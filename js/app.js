// 팀 데이터를 저장할 변수
let teams = [];
let teamStatsCache = new Map(); // 팀 스탯 캐시

// 투수 데이터 (임시로 하드코딩, 나중에 데이터베이스에서 가져올 수 있음)
const pitchers = {
  "LG Twins": [
    { name: "임찬규", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/61101.jpg", ERA: 2.74 },
    { name: "요니 치리노스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55146.jpg", ERA: 3.47 },
    { name: "손주영", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67143.jpg", ERA: 3.30 },
    { name: "송승기", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51111.jpg", ERA: 3.50 },
    { name: "엘리에이저 에르난데스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54119.jpg", ERA: 4.23 },
    { name: "톨허스트", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55130.jpg", ERA: 2.84 }
  ],

  "Hanwha Eagles": [
    { name: "코디 폰세", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55730.jpg", ERA: 1.85 },
    { name: "라이언 와이스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54755.jpg", ERA: 2.99 },
    { name: "류현진", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76715.jpg", ERA: 3.23 },
    { name: "문동주", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52701.jpg", ERA: 3.59 },
    { name: "황준서", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54729.jpg", ERA: 5.57 }
  ],

  "SSG Landers": [
    { name: "드루 앤더슨", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54833.jpg", ERA: 2.28 },
    { name: "미치 화이트", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55855.jpg", ERA: 2.87 },
    { name: "김광현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/77829.jpg", ERA: 4.92 },
    { name: "문승원", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62869.jpg", ERA: 5.24 },
    { name: "송영진", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53898.jpg", ERA: 5.86 },
    { name: "전영준", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52809.jpg", ERA: 4.56 }
  ],

  "Samsung Lions": [
    { name: "아리엘 후라도", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53375.jpg", ERA: 2.70 },
    { name: "원태인", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69446.jpg", ERA: 3.24 },
    { name: "최원태", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65320.jpg", ERA: 4.92 },
    { name: "이승현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51454.jpg", ERA: 3.08 },
    { name: "가라비토", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55460.jpg", ERA: 2.63 },
    { name: "이재희", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51460.jpg", ERA: 3.00 },
    { name: "데니 레예스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54443.jpg", ERA: 4.14 },
    { name: "배찬승", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55455.jpg", ERA: 3.99 },
    { name: "이창용", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51407.jpg", ERA: 1.93 }
  ],

  "kt wiz": [
    { name: "헤이수스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54354.jpg", ERA: 3.94 },
    { name: "고영표", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64001.jpg", ERA: 3.16 },
    { name: "소형준", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50030.jpg", ERA: 3.25 },
    { name: "오원석", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50859.jpg", ERA: 3.24 },
    { name: "유규민", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/73117.jpg", ERA: 2.49 },
    { name: "이상동", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69054.jpg", ERA: 2.61 },
    { name: "주권권", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65060.jpg", ERA: 4.43 },
    { name: "배제성", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65516.jpg", ERA: 5.67 }
  ],

  "NC Dinos": [
    { name: "라일리", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55903.jpg", ERA: 3.51 },
    { name: "로건", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55912.jpg", ERA: 4.55 },
    { name: "신민혁", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68902.jpg", ERA: 4.79 },
    { name: "전사민", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69969.jpg", ERA: 4.34 },
    { name: "이재학", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60263.jpg", ERA: 4.82 },
    { name: "신영우", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53919.jpg", ERA: 7.80 }
  ],

  "Lotte Giants": [
    { name: "박세웅", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64021.jpg", ERA: 4.87 },
    { name: "나균안", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67539.jpg", ERA: 3.87 },
    { name: "터커 데이비슨", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55536.jpg", ERA: 3.65 },
    { name: "이민석", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52530.jpg", ERA: 5.26 },
    { name: "찰리 반즈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52528.jpg", ERA: 5.32 },
    { name: "송재영", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51594.jpg", ERA: 4.05 }
  ],

  "KIA Tigers": [
    { name: "제임스 네일", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54640.jpg", ERA: 2.25 },
    { name: "애덤 올러", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55633.jpg", ERA: 3.44 },
    { name: "양현종", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/77637.jpg", ERA: 4.74 },
    { name: "김도현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69745.jpg", ERA: 3.84 },
    { name: "황동하", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52641.jpg", ERA: 6.23 },
    { name: "이의리", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51648.jpg", ERA: 7.82 },
    { name: "윤영철", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53613.jpg", ERA: 5.58 }
  ],

  "Doosan Bears": [
    { name: "잭 로그", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55239.jpg", ERA: 2.83 },
    { name: "콜 어빈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55257.jpg", ERA: 4.65 },
    { name: "최승용", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51264.jpg", ERA: 4.40 },
    { name: "최원준", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67263.jpg", ERA: 4.66 },
    { name: "곽빈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68220.jpg", ERA: 4.31 },
    { name: "최민석", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55268.jpg", ERA: 4.40 }
  ],

  "Kiwoom Heroes": [
    { name: "하영민", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64350.jpg", ERA: 4.99 },
    { name: "알칸타라", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69045.jpg", ERA: 3.13 },
    { name: "로젠버그", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55322.jpg", ERA: 3.15 },
    { name: "김윤하", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54319.jpg", ERA: 6.14 },
    { name: "윤현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55396.jpg", ERA: 8.59 }
  ]
};

const homeTeamSelect = document.getElementById('home-team-select');
const awayTeamSelect = document.getElementById('away-team-select');
const homeLogo = document.getElementById('home-logo');
const awayLogo = document.getElementById('away-logo');
const homePitcherSelect = document.getElementById('home-pitcher');
const awayPitcherSelect = document.getElementById('away-pitcher');
const predictBtn = document.getElementById('predict-btn');
const resultDiv = document.getElementById('result');

// 데이터베이스에서 팀 목록을 가져오는 함수
async function loadTeams() {
    try {
        const teamList = await getAllTeams();
        teams = teamList.map(team => {
            // 팀 이름 매핑 (데이터베이스 이름 -> 투수 데이터 키)
            const teamNameMapping = {
                'kt wiz': 'kt wiz',
                // 다른 팀들은 데이터베이스와 투수 데이터, 폴더명이 모두 동일
            };

            const pitcherKey = teamNameMapping[team.team_name] || team.team_name;
            const logoFolderName = teamNameMapping[team.team_name] || team.team_name;

            return {
                ...team,
                logo: `resources/teams/${encodeURIComponent(logoFolderName)}/logo.svg`,
                pitchers: pitchers[pitcherKey] || []
            };
        });
        console.log('팀 데이터 로드 완료:', teams);
    } catch (error) {
        console.error('팀 데이터 로드 실패:', error);
        resultDiv.textContent = '팀 데이터를 불러오는데 실패했습니다.';
    }
}

// 팀 스탯을 가져오는 함수 (캐시 사용)
async function getTeamStatsCached(teamName) {
    if (teamStatsCache.has(teamName)) {
        return teamStatsCache.get(teamName);
    }
    
    try {
        const stats = await getTeamStats(teamName);
        teamStatsCache.set(teamName, stats);
        return stats;
    } catch (error) {
        console.error(`팀 스탯 로드 실패 (${teamName}):`, error);
        throw error;
    }
}

// IP 문자열을 소수점으로 변환하는 함수 ("1091 2/3" → 1091.67)
function parseIP(ipString) {
    if (!ipString) return 0;
    const str = ipString.toString().trim();

    // "1091 2/3" 형태 처리
    const match = str.match(/^(\d+)(?:\s+(\d+)\/(\d+))?$/);
    if (match) {
        const base = parseInt(match[1]) || 0;
        const numerator = parseInt(match[2]) || 0;
        const denominator = parseInt(match[3]) || 1;
        return base + (numerator / denominator);
    }

    // 일반 숫자로 파싱 시도
    return parseFloat(str) || 0;
}

// 퍼센트 값 정규화 (>1이면 100으로 나누기)
function normalizePercentage(value) {
    const num = parseFloat(value) || 0;
    return num > 1 ? num / 100 : num;
}

// 팀 스탯을 승률 계산에 필요한 형태로 변환하는 함수 (text.txt 공식 적용)
function convertStatsForWinRate(teamStats) {
    if (!teamStats || !teamStats.kbo_team_stats) {
        throw new Error('팀 스탯 데이터가 없습니다.');
    }

    const stats = teamStats.kbo_team_stats;
    const pitching = teamStats.kbo_team_pitching_stats || {};
    const fielding = teamStats.kbo_team_fielding_stats || {};
    const baserunning = teamStats.kbo_team_baserunning_stats || {};

    // 경기수
    const battingGames = parseInt(stats.G) || 1;
    const pitchingGames = parseInt(pitching.G) || 1;
    const baserunningGames = parseInt(baserunning.game) || 1;

    return {
        batting: {
            // AVG는 이미 비율이므로 그대로 사용
            AVG: parseFloat(stats.AVG) || 0,
            // 나머지는 per-game으로 변환
            PA: (parseInt(stats.PA) || 0) / battingGames,
            AB: (parseInt(stats.AB) || 0) / battingGames,
            R: (parseInt(stats.R) || 0) / battingGames,
            H: (parseInt(stats.H) || 0) / battingGames,
            '2B': (parseInt(stats['2B']) || 0) / battingGames,
            '3B': (parseInt(stats['3B']) || 0) / battingGames,
            HR: (parseInt(stats.HR) || 0) / battingGames,
            TB: (parseInt(stats.TB) || 0) / battingGames,
            RBI: (parseInt(stats.RBI) || 0) / battingGames,
            SAC: (parseInt(stats.SAC) || 0) / battingGames,
            SF: (parseInt(stats.SF) || 0) / battingGames
        },
        pitching: {
            // ERA, WHIP은 이미 비율
            ERA: parseFloat(pitching.ERA) || 0,
            WHIP: parseFloat(pitching.WHIP) || 0,
            // IP는 소수점 변환
            IP: parseIP(pitching.IP),
            // 나머지는 per-game으로 변환
            W: (parseInt(pitching.W) || 0) / pitchingGames,
            L: (parseInt(pitching.L) || 0) / pitchingGames,
            SV: (parseInt(pitching.SV) || 0) / pitchingGames,
            HLD: (parseInt(pitching.HLD) || 0) / pitchingGames,
            H: (parseInt(pitching.H) || 0) / pitchingGames,
            HR: (parseInt(pitching.HR) || 0) / pitchingGames,
            BB: (parseInt(pitching.BB) || 0) / pitchingGames,
            HBP: (parseInt(pitching.HBP) || 0) / pitchingGames,
            SO: (parseInt(pitching.SO) || 0) / pitchingGames,
            R: (parseInt(pitching.R) || 0) / pitchingGames,
            ER: (parseInt(pitching.ER) || 0) / pitchingGames
        },
        fielding: {
            // FPCT는 이미 비율
            FPCT: parseFloat(fielding.FPCT) || 0,
            // CSp -> CS% 변환 및 정규화
            'CS%': normalizePercentage(fielding.CSp),
            // PKO -> PK 매핑, 수비는 경기수 정보가 없으므로 batting 경기수 사용
            PK: (parseInt(fielding.PKO) || 0) / battingGames,
            E: (parseInt(fielding.E) || 0) / battingGames,
            PO: (parseInt(fielding.PO) || 0) / battingGames,
            A: (parseInt(fielding.A) || 0) / battingGames,
            DP: (parseInt(fielding.DP) || 0) / battingGames,
            PB: (parseInt(fielding.PB) || 0) / battingGames,
            SB: (parseInt(fielding.SB) || 0) / battingGames,
            CS: (parseInt(fielding.CS) || 0) / battingGames
        },
        baserunning: {
            // SBp -> SB% 변환 및 정규화
            'SB%': normalizePercentage(baserunning.SBp),
            // 나머지는 per-game으로 변환
            SBA: (parseInt(baserunning.SBA) || 0) / baserunningGames,
            SB: (parseInt(baserunning.SB) || 0) / baserunningGames,
            CS: (parseInt(baserunning.CS) || 0) / baserunningGames,
            OOB: (parseInt(baserunning.OOB) || 0) / baserunningGames,
            PKO: (parseInt(baserunning.PKO) || 0) / baserunningGames
        }
    };
}

function populateTeamSelects() {
    homeTeamSelect.innerHTML = '';
    awayTeamSelect.innerHTML = '';
    teams.forEach((team, idx) => {
        const option1 = document.createElement('option');
        option1.value = idx;
        option1.textContent = team.team_name;
        homeTeamSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = idx;
        option2.textContent = team.team_name;
        awayTeamSelect.appendChild(option2);
    });
    // 기본값
    homeTeamSelect.selectedIndex = 0;
    awayTeamSelect.selectedIndex = 1;
    updateTeamSelectOptions();
}

function updateTeamSelectOptions() {
    // 홈팀에서 선택된 팀은 어웨이에서 선택 불가, 반대도 마찬가지
    const homeIdx = homeTeamSelect.selectedIndex;
    const awayIdx = awayTeamSelect.selectedIndex;
    for (let i = 0; i < teams.length; i++) {
        homeTeamSelect.options[i].disabled = (i === awayIdx);
        awayTeamSelect.options[i].disabled = (i === homeIdx);
    }
}

function updateTeamInfo(teamIdx, isHome) {
    const team = teams[teamIdx];
    if (isHome) {
        homeLogo.src = team.logo;
        document.getElementById('home-team-name').textContent = team.team_name;
        populatePitchers(homePitcherSelect, team.pitchers);
    } else {
        awayLogo.src = team.logo;
        document.getElementById('away-team-name').textContent = team.team_name;
        populatePitchers(awayPitcherSelect, team.pitchers);
    }
}

function populatePitchers(selectElem, pitchers) {
    selectElem.innerHTML = '';
    pitchers.forEach((p, idx) => {
        const option = document.createElement('option');
        option.value = idx;
        option.textContent = p.name ? `${p.name} (ERA: ${p.ERA ?? '-'} )` : p;
        selectElem.appendChild(option);
    });
}

// 투수 정보 표시 영역 추가
function showPitcherInfo(teamIdx, pitcherIdx, isHome) {
    const team = teams[teamIdx];
    const pitcher = team.pitchers[pitcherIdx];
    const infoDivId = isHome ? 'home-pitcher-info' : 'away-pitcher-info';
    let infoDiv = document.getElementById(infoDivId);
    if (!infoDiv) {
        infoDiv = document.createElement('div');
        infoDiv.id = infoDivId;
        infoDiv.className = 'pitcher-info';
        (isHome ? homePitcherSelect : awayPitcherSelect).parentNode.appendChild(infoDiv);
    }
    if (pitcher && pitcher.img_url) {
        infoDiv.innerHTML = `<img src="${pitcher.img_url}" alt="${pitcher.name}" class="pitcher-face"><br><b>${pitcher.name}</b><br>ERA: ${pitcher.ERA}`;
    } else {
        infoDiv.innerHTML = '';
    }
}

homeTeamSelect.addEventListener('change', () => {
    updateTeamSelectOptions();
    updateTeamInfo(homeTeamSelect.value, true);
    showPitcherInfo(homeTeamSelect.value, homePitcherSelect.selectedIndex, true);
});

awayTeamSelect.addEventListener('change', () => {
    updateTeamSelectOptions();
    updateTeamInfo(awayTeamSelect.value, false);
    showPitcherInfo(awayTeamSelect.value, awayPitcherSelect.selectedIndex, false);
});

homePitcherSelect.addEventListener('change', () => {
    showPitcherInfo(homeTeamSelect.value, homePitcherSelect.selectedIndex, true);
});

awayPitcherSelect.addEventListener('change', () => {
    showPitcherInfo(awayTeamSelect.value, awayPitcherSelect.selectedIndex, false);
});

predictBtn.addEventListener('click', async () => {
    const homeTeam = teams[homeTeamSelect.value];
    const awayTeam = teams[awayTeamSelect.value];
    const homePitcherIdx = homePitcherSelect.value;
    const awayPitcherIdx = awayPitcherSelect.value;
    const homePitcher = homeTeam.pitchers[homePitcherIdx]?.name || '';
    const awayPitcher = awayTeam.pitchers[awayPitcherIdx]?.name || '';

    if (!homePitcher || !awayPitcher) {
        resultDiv.innerHTML = `
            <div class="loading-message" style="color: #e74c3c;">
                ⚠️ 선발 투수를 모두 선택해주세요
            </div>
        `;
        return;
    }

    // 버튼 비활성화 및 로딩 상태로 변경
    const buttonText = predictBtn.querySelector('.button-text');
    const loadingSpinner = predictBtn.querySelector('.loading-spinner');

    predictBtn.disabled = true;
    buttonText.textContent = '분석 중...';
    loadingSpinner.style.display = 'block';

    // 로딩 메시지 표시
    resultDiv.innerHTML = `
        <div class="loading-message">
            🤖 AI가 경기 데이터를 분석하고 있습니다...<br>
            <small>팀 성적, 투수 능력, 최근 폼 등을 종합적으로 검토 중</small>
        </div>
    `;

    // 3-5초 랜덤 딜레이
    const randomDelay = Math.random() * 2000 + 3000; // 3000ms ~ 5000ms

    try {
        // 모든 팀의 스탯을 가져오기 (리그 평균 계산용)
        const allTeamStatsPromises = teams.map(team => getTeamStatsCached(team.team_name));
        const allTeamStatsData = await Promise.all(allTeamStatsPromises);

        // 리그 전체 스탯을 변환
        const leagueStats = allTeamStatsData.map(teamData => convertStatsForWinRate(teamData));

        // 선발 투수 ERA 리스트 생성
        const starterERAs = [];
        Object.values(pitchers).forEach(teamPitchers => {
            teamPitchers.forEach(pitcher => {
                if (pitcher.ERA && !isNaN(pitcher.ERA)) {
                    starterERAs.push(pitcher.ERA);
                }
            });
        });

        // 두 팀의 스탯을 변환
        const homeStats = leagueStats[homeTeamSelect.value];
        const awayStats = leagueStats[awayTeamSelect.value];

        // 투수 ERA 가져오기
        const homePitcherERA = homeTeam.pitchers[homePitcherIdx].ERA;
        const awayPitcherERA = awayTeam.pitchers[awayPitcherIdx].ERA;

        // 승률 계산
        const { homeProb, awayProb } = calculateWinProbability(homeStats, awayStats, homePitcherERA, awayPitcherERA, leagueStats, starterERAs);

        // 랜덤 딜레이 적용
        await new Promise(resolve => setTimeout(resolve, randomDelay));

        // 결과 표시
        const homeWinRate = (homeProb * 100).toFixed(1);
        const awayWinRate = (awayProb * 100).toFixed(1);

        resultDiv.innerHTML = `
            <div class="prediction-result">
                <h3>🏆 예측 결과</h3>
                <div class="winrate-bar-container">
                    <div class="winrate-bar">
                        <div style="width:${homeProb*100}%">${homeWinRate}%</div>
                        <div style="width:${awayProb*100}%">${awayWinRate}%</div>
                    </div>
                </div>
                <div class="winrate-bar-labels">
                    <span>${homeTeam.team_name}</span>
                    <span>${awayTeam.team_name}</span>
                </div>
                <div style="margin-top: 20px; font-size: 0.9rem; color: #666;">
                    💡 팀 성적, 투수 능력, 홈/원정 어드밴티지를 종합 분석한 결과입니다
                </div>
            </div>
        `;

    } catch (error) {
        console.error('승률 계산 오류:', error);
        resultDiv.innerHTML = `
            <div class="loading-message" style="color: #e74c3c;">
                ❌ 승률 계산 중 오류가 발생했습니다<br>
                <small>${error.message}</small>
            </div>
        `;
    } finally {
        // 버튼 상태 복원
        predictBtn.disabled = false;
        buttonText.textContent = '승률 예측하기';
        loadingSpinner.style.display = 'none';
    }
});

// 초기화
async function initialize() {
    await loadTeams();
    if (teams.length > 0) {
        populateTeamSelects();
        updateTeamInfo(0, true);
        updateTeamInfo(1, false);
        showPitcherInfo(0, 0, true);
        showPitcherInfo(1, 0, false);
    } else {
        resultDiv.innerHTML = `
            <div class="loading-message" style="color: #e74c3c;">
                ❌ 팀 데이터를 불러올 수 없습니다<br>
                <small>페이지를 새로고침하거나 잠시 후 다시 시도해주세요</small>
            </div>
        `;
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initialize);



