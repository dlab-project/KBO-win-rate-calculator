// KBO 팀 및 투수 데이터 예시 (실제 데이터는 서버 또는 파일에서 불러올 수 있음)
const teams = [
    {
        name: "Doosan Bears",
        logo: "../resources/teams/Dosan Bears/logo.svg",
        pitchers: [
            { name: "곽빈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68220.jpg", ERA: 4.16 },
            { name: "잭 로그", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55239.jpg", ERA: 3.23 },
            { name: "최승용", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51264.jpg", ERA: 4.05 },
            { name: "최원준", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67263.jpg", ERA: 4.61 },
            { name: "콜 어빈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55257.jpg", ERA: 4.28 }
        ]
    },
    {
        name: "Hanwha Eagles",
        logo: "../resources/teams/Hanwha Eagles/logo.svg",
        pitchers: [
            { name: "문동주", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52701.jpg", ERA: 3.36 },
            { name: "라이언 와이스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54755.jpg", ERA: 2.95 },
            { name: "류현진", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76715.jpg", ERA: 3.59 },
            { name: "코디 폰세", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55730.jpg", ERA: 1.53 },
            { name: "엄상백", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65056.jpg", ERA: 7.42 }
        ]
    },
    {
        name: "KIA Tigers",
        logo: "../resources/teams/KIA Tigers/logo.svg",
        pitchers: [
            { name: "김도현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69745.jpg", ERA: 4.43 },
            { name: "애덤 올러", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55633.jpg", ERA: 3.48 },
            { name: "양현종", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/77637.jpg", ERA: 4.41 },
            { name: "윤영철", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53613.jpg", ERA: 5.58 },
            { name: "제임스 네일", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54640.jpg", ERA: 2.27 }
        ]
    },
    {
        name: "Kiwoom Heroes",
        logo: "../resources/teams/Kiwoom Heroes/logo.svg",
        pitchers: [
            { name: "김윤하", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54319.jpg", ERA: 6.14 },
            { name: "로젠버그", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55322.jpg", ERA: 3.23 },
            { name: "윤현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55396.jpg", ERA: 8.59 },
            { name: "정현우", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55313.jpg", ERA: 5.28 },
            { name: "하영민", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64350.jpg", ERA: 5.55 }
        ]
    },
    {
        name: "kt Wiz",
        logo: "../resources/teams/kt Wiz/logo.svg",
        pitchers: [
            { name: "소형준", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50030.jpg", ERA: 3.25 },
            { name: "고영표", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64001.jpg", ERA: 2.85 },
            { name: "윌리엄 쿠에바스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69032.jpg", ERA: 5.40 },
            { name: "오원석", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50859.jpg", ERA: 3.27 }
        ]
    },
    {
        name: "LG Twins",
        logo: "../resources/teams/LG Twins/logo.svg",
        pitchers: [
            { name: "손주영", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67143.jpg", ERA: 3.30 },
            { name: "송승기", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51111.jpg", ERA: 3.43 },
            { name: "엘리에이저 에르난데스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54119.jpg", ERA: 4.23 },
            { name: "요니 치리노스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55146.jpg", ERA: 3.47 },
            { name: "임찬규", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/61101.jpg", ERA: 2.74 }
        ]
    },
    {
        name: "Lotte Giants",
        logo: "../resources/teams/Lotte Giants/logo.svg",
        pitchers: [
            { name: "김진욱", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51516.jpg", ERA: 10 },
            { name: "나균안", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67539.jpg", ERA: 3.97 },
            { name: "박세웅", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64021.jpg", ERA: 4.94 },
            { name: "찰리 반즈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52528.jpg", ERA: 5.32 },
            { name: "터커 데이비슨", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55536.jpg", ERA: 3.65 }
        ]
    },
    {
        name: "NC Dinos",
        logo: "../resources/teams/NC Dinos/logo.svg",
        pitchers: [
            { name: "라일리", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55903.jpg", ERA: 3.64 },
            { name: "로건", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55912.jpg", ERA: 3.93 },
            { name: "신민혁", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68902.jpg", ERA: 5.27 },
            { name: "신영우", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53919.jpg", ERA: 7.88 },
            { name: "이재학", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60263.jpg", ERA: 4.6 }
        ]
    },
    {
        name: "Samsung Lions",
        logo: "../resources/teams/Samsung Lions/logo.svg",
        pitchers: [
            { name: "데니 레예스", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54443.jpg", ERA: 4.14 },
            { name: "아리엘 후라도", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53375.jpg", ERA: 2.56 },
            { name: "원태인", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69446.jpg", ERA: 3.31 },
            { name: "이승현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51454.jpg", ERA: 4.75 },
            { name: "최원태", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65320.jpg", ERA: 4.59 }
        ]
    },
    {
        name: "SSG Landers",
        logo: "../resources/teams/SSG Landers/logo.svg",
        pitchers: [
            { name: "김광현", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/77829.jpg", ERA: 4.41 },
            { name: "드루 앤더슨", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54833.jpg", ERA: 2.21 },
            { name: "문승원", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62869.jpg", ERA: 4.74 },
            { name: "미치 화이트", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55855.jpg", ERA: 2.84 },
            { name: "박종훈", img_url: "https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60841.jpg", ERA: 7.11 }
        ]
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
    homeTeamSelect.innerHTML = '';
    awayTeamSelect.innerHTML = '';
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
        populatePitchers(homePitcherSelect, team.pitchers);
    } else {
        awayLogo.src = team.logo;
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


predictBtn.addEventListener('click', () => {
    const homeTeam = teams[homeTeamSelect.value];
    const awayTeam = teams[awayTeamSelect.value];
    const homePitcherIdx = homePitcherSelect.value;
    const awayPitcherIdx = awayPitcherSelect.value;
    const homePitcher = homeTeam.pitchers[homePitcherIdx]?.name || '';
    const awayPitcher = awayTeam.pitchers[awayPitcherIdx]?.name || '';
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
showPitcherInfo(0, 0, true);
showPitcherInfo(1, 0, false);
