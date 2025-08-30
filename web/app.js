// KBO 팀 및 투수 데이터 예시 (실제 데이터는 서버 또는 파일에서 불러올 수 있음)
const teams = [
    {
        name: "Doosan Bears",
        logo: "../resources/teams/Dosan Bears/logo.svg",
        pitchers: ["곽빈", "잭 로그", "최승용", "최원준", "콜 어빈"]
    },
    {
        name: "Hanwha Eagles",
        logo: "../resources/teams/Hanwha Eagles/logo.svg",
        pitchers: ["라이언 와이스", "류현진", "문동주", "엄상백", "코디 폰세"]
    },
    {
        name: "KIA Tigers",
        logo: "../resources/teams/KIA Tigers/logo.svg",
        pitchers: ["김도현", "애덤 올러", "양현종", "윤영철", "제임스 네일"]
    },
    {
        name: "Kiwoom Heroes",
        logo: "../resources/teams/Kiwoom Heroes/logo.svg",
        pitchers: ["김윤하", "로젠버그", "윤현", "정현우", "하영민"]
    },
    {
        name: "kt Wiz",
        logo: "../resources/teams/kt Wiz/logo.svg",
        pitchers: []
    },
    {
        name: "LG Twins",
        logo: "../resources/teams/LG Twins/logo.svg",
        pitchers: ["손주영", "송승기", "엘리에이저 에르난데스", "요니 치리노스", "임찬규"]
    },
    {
        name: "Lotte Giants",
        logo: "../resources/teams/Lotte Giants/logo.svg",
        pitchers: ["김진욱", "나균안", "박세웅", "찰리 반즈", "터커 데이비슨"]
    },
    {
        name: "NC Dinos",
        logo: "../resources/teams/NC Dinos/logo.svg",
        pitchers: ["라일리", "로건", "신민혁", "신영우", "이재학"]
    },
    {
        name: "Samsung Lions",
        logo: "../resources/teams/Samsung Lions/logo.svg",
        pitchers: ["데니 레예스", "아리엘 후라도", "원태인", "이승현", "최원태"]
    },
    {
        name: "SSG Landers",
        logo: "../resources/teams/SSG Landers/logo.svg",
        pitchers: ["김광현", "드루 앤더슨", "문승원", "미치 화이트", "박종훈"]
    }
];

const homeTeamSelect = document.getElementById('home-team-select');
const awayTeamSelect = document.getElementById('away-team-select');
const homeLogo = document.getElementById('home-logo');
const awayLogo = document.getElementById('away-logo');
const homePitcherSelect = document.getElementById('home-pitcher');
const awayPitcherSelect = document.getElementById('away-pitcher');
const predictBtn = document.getElementById('predict-btn');
const resultDiv = document.getElementById('result');

function populateTeamSelects() {
    teams.forEach((team, idx) => {
        const option1 = document.createElement('option');
        option1.value = idx;
        option1.textContent = team.name;
        homeTeamSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = idx;
        option2.textContent = team.name;
        awayTeamSelect.appendChild(option2);
    });
    // 기본값
    homeTeamSelect.selectedIndex = 0;
    awayTeamSelect.selectedIndex = 1;
}

function updateTeamInfo(teamIdx, isHome) {
    const team = teams[teamIdx];
    if (isHome) {
        homeLogo.src = team.logo;
        populatePitchers(homePitcherSelect, team.pitchers);
    } else {
        awayLogo.src = team.logo;
        populatePitchers(awayPitcherSelect, team.pitchers);
    }
}

function populatePitchers(selectElem, pitchers) {
    selectElem.innerHTML = '';
    pitchers.forEach(p => {
        const option = document.createElement('option');
        option.value = p;
        option.textContent = p;
        selectElem.appendChild(option);
    });
}

homeTeamSelect.addEventListener('change', () => {
    updateTeamInfo(homeTeamSelect.value, true);
});

awayTeamSelect.addEventListener('change', () => {
    updateTeamInfo(awayTeamSelect.value, false);
});

predictBtn.addEventListener('click', () => {
    const homeTeam = teams[homeTeamSelect.value];
    const awayTeam = teams[awayTeamSelect.value];
    const homePitcher = homePitcherSelect.value;
    const awayPitcher = awayPitcherSelect.value;
    if (!homePitcher || !awayPitcher) {
        resultDiv.textContent = '선발 투수를 모두 선택해주세요.';
        return;
    }
    // 예측 로직 (임시 랜덤)
    const homeWinRate = (Math.random() * 100).toFixed(1);
    const awayWinRate = (100 - homeWinRate).toFixed(1);
    resultDiv.innerHTML = `<b>${homeTeam.name}</b> (${homePitcher}) 승률: <span style="color:#2d7be5">${homeWinRate}%</span><br><b>${awayTeam.name}</b> (${awayPitcher}) 승률: <span style="color:#e52d2d">${awayWinRate}%</span>`;
});

// 초기화
populateTeamSelects();
updateTeamInfo(0, true);
updateTeamInfo(1, false);
