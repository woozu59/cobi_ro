gsap.registerPlugin(ScrollTrigger); // 사용할 플러그인 활성화
gsap.defaults({ ease: "power1", duration: 4 }); // 기본값설정, 가속도 소요시간

const tl = gsap.timeline(); // 순차적동작
tl.from(".s03", { xPercent: 100 })
    .from(".s04", { xPercent: 100 })
    .from(".s05", { yPercent: 100 });

ScrollTrigger.create({
    animation: tl, // 애니메이션 변수
    trigger: ".wrap", // 동작 요소
    markers: true, // 인디케이터표시, 기준점
    start: "top top", // 시작 지점 선택, 화면 상단에 해당요소의 상단이 닿을때
    end: "+=4000", // 종료지점, 시작지점으로부터 4000px이후  
    pin: true, // 화면고정여부, true/false, 요소의 class/id 사용가능
    scrub: 3, // 스크롤 여부에 따라 애니메이션 되감기 기능, true/false, 숫자 사용가능
    anticipatePin: 0 // 기본값 0, 애니메이션이 동작되는 패널을 얼마나 빨리 고정하느냐
});