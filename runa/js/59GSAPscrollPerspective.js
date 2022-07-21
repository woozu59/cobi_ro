
// 59GSAPscrollPerspective
// 휠 돌리면 글씨 돌아감

// 선택자를 파라미터로 설정하는 함수 선언
select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const stage = select('.stage');
const tubeInner = select(".tube__inner");
const clone = document.querySelectorAll(".line"); // 복제되어 업데이트 될 노드리스트
const numLines = 15;
const fontSize = 6;
const angle = 360 / numLines;  // numLines각형으로 만들기
let radius = 0;
let origin = 0;

function set3D() {
    let wiw = window.innerWidth;
    let fontSizePx = (wiw / 100) * fontSize; // vw로 출력되도록 계산
    radius = (fontSizePx / 2) / Math.sin((180 / numLines) * (Math.PI / 180)); // 피타고라스 정의 적용
    origin = `50% 50% -${radius}px`;
}

function clodeNode() {
    // 면을 채울 요소 cloning, numLines각형 만큼만
    for (var i = 0; i < (numLines - 1); i++) {
        let newClone = clone[0].cloneNode(true); // 호출된 노드의 복제본 반환
        let lineClass = "line--" + (i + 2); // 클래스명 생성
        newClone.classList.add(lineClass); // 클래스명 추가
        tubeInner.appendChild(newClone); // 복제본을 tubeInner의 자식으로 
    }
    clone[0].classList.add("line--1"); // 복제본 중 첫번재 노드에만 클래스 추가하여 구별
}

function positionTxt() {
    gsap.set('.line', {
        rotationX: function (index) {
            return -angle * index;
        },
        z: radius,
        transformOrigin: origin
    });
}
// 각각 복제본 노드에 속성값설정
function setProps(targets) {
    targets.forEach(function (target) {
        let paramSet = gsap.quickSetter(target, "css");
        let degrees = gsap.getProperty(target, "rotateX");
        let radians = degrees * (Math.PI / 180);
        let conversion = Math.abs(Math.cos(radians) / 2 + 0.5); // 1 - 0 half cosine wave
        let fontW = 200 + 700 * conversion;
        let fontS = `${100 + 1000 * conversion}%`;

        paramSet({
            opacity: conversion + 0.1,
            // x: 300*conversion, // 측면보기
            fontWeight: fontW,
            fontStretch: fontS
        });
        // console.log(fontW);
    });
}

function scrollRotate() {
    gsap.to('.line', {
        scrollTrigger: {
            trigger: '.stage', // 동작요소
            scrub: 3, // 스크롤 여부에 따라 애니메이션 되감기 기능, true/false, 숫자 사용가능
            start: "top top", // 시작 지점 선택, 화면 상단에 해당요소의 상단이 닿을때
            // markers: { // 인디케이터표시, 기준점
            //     startColor: "white", 
            //     endColor: "red", 
            //     fontSize: "16px", 
            //     fontWeight: "bold", 
            //     indent: 0
            // }
        },
        rotateX: "+=1080", //
        onUpdate: function () {
            setProps(this.targets());
            // 속성값업데이트
        }
    });

    gsap.to('.tube', {
        scrollTrigger: {
            trigger: '.stage',
            scrub: 1,
            start: "top top"
        },
        perspective: '1vw',
        ease: 'expo.out'
    });
}
// 실행함수
function init() {
    clodeNode();
    set3D();
    window.onresize = () => {
        set3D();
        positionTxt();
    };
    positionTxt();
    setProps(gsap.utils.toArray(".line"));
    scrollRotate();
    gsap.to(stage, { autoAlpha: 1, duration: 2 });
}
// 콜링
window.onload = () => {
    init();
};