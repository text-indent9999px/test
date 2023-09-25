
//풍션영역
const balloonContainer = document.getElementById("balloon");

//집 영역
const houseContainer = document.getElementById("house");

//집 영역 클릭 시 이벤트 발생
houseContainer.addEventListener("click", function() {

    //개별 풍선
    const balloon = document.createElement('div');
    balloon.className = 'balloon';

    //풍선 body1
    const balloon_body = document.createElement('div');
    balloon_body.className = 'body';
    balloon.appendChild(balloon_body);

    //풍선 body2
    const balloon_body2 = document.createElement('div');
    balloon_body2.className = 'body2';
    balloon_body.appendChild(balloon_body2);

    //랜덤 속성 부여
    const randomSize = getRandomSize(); //랜덤 사이즈
    const randomRotate = getRandomRotate(); //랜덤 기울기
    const randomTop = getRandomTop(); //랜덤 y값
    const randomColor = getRandomBrightColor(60, 70); //랜덤 색상

    balloon.style.color = randomColor;
    balloon.style.width = randomSize + '%';
    balloon.style.transform = `rotate(${randomRotate}deg) translateX(-50%)`;
    balloon.style.top = randomTop + '%';
    balloon.style.left = (50 + randomRotate) + '%';

    //기울기가 -5~5 사이일 때 center 클래스 추가
    if(randomRotate < 5 && randomRotate > -5){
        balloon.classList.add('center');
    }

    //랜덤 클래스 배열
    const classes = ["flower", "ribbon", "bear", "rainbow", "heart", "sale"];

    // 랜덤한 클래스 선택
    const isNormalClass = Math.random() < 0.85;
    const randomClass = isNormalClass ? "normal" : classes[Math.floor(Math.random() * (classes.length))];

    balloon.classList.add(randomClass);
    balloonContainer.appendChild(balloon);
});

//풍선 클릭 시 풍선 삭제
balloonContainer.addEventListener("click", function(event) {
    let target = event.target;

    // event.target에서 시작하여 부모 노드로 올라가면서 "balloon" 클래스를 가진 요소를 찾음
    while (target && !target.classList.contains("balloon")) {
        target = target.parentNode;
    }

    // "balloon" 클래스를 가진 조상 요소를 찾았을 때 처리
    if (target) {
        target.classList.add("remove-balloon");
        setTimeout(function() {
            target.remove();
        }, 1000);
    }
});

//랜덤 사이즈 생성 함수
function getRandomSize() {
    const minPercentage = 5;
    const maxPercentage = 8;
    const randomPercentage = Math.random() * (maxPercentage - minPercentage) + minPercentage;
    return randomPercentage;
}

//랜덤 기울기 생성 함수
function getRandomRotate() {
    const min = -45;
    const max = 45;
    const randomValue = Math.random() * (max - min) + min;
    return randomValue;
}

//랜덤 y값 생성 함수
function getRandomTop() {
    const min = -10;
    const max = 70;
    const randomValue = Math.random() * (max - min) + min;
    return randomValue;
}

//랜덤 밝은 색상 생성 함수
function getRandomBrightColor(minSaturation = 40, midLightness = 30) {
    // 랜덤한 HSL 색상 생성
    const randomHue = Math.floor(Math.random() * 360); // 0~359 사이의 랜덤한 색조
    const randomSaturation = Math.floor(Math.random() * (100 - minSaturation)) + minSaturation; // minSaturation 이상의 랜덤한 채도
    const randomLightness = midLightness;

    // HSL 값을 CSS 색상 문자열로 변환
    const color = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;

    return color;
}