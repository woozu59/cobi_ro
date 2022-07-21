// simpleSlide구현
// 슬라이드(top)변수들
let imgstop = 2; //가지고있는 슬라이드의 총 장수 index 번호
let nowtop = 0; //현재 페이지 index 번호
function slide1(){
    nowtop = nowtop == imgstop ? 0 : nowtop+=1;
    // 삼항연산자(if문을 한줄로 풀어쓴것)
    // 만약에 (조건)이 참이면 (왼쪽), 거짓이면 (오른쪽);
    // 변수 nowtop imgstop값을 비교하여 두 값이 같으면(true) nowtop값을 0으로 변경
    // 두 값이 다르면(false) nowtop값에 1씩 증가
    
    $(".imgs.top>img").eq(nowtop-1).css({"transform":"translateY(-100%)"});
    $(".imgs.top>img").eq(nowtop).css({"transform":"translateY(0%)"});
    // 슬라이드(top)
    // 이미지 이동 여부에 따라서 css속성을 골라서 사용한다.
    // position이 선언된 상태에서 top이나 left값을 사용. 
    // translate의 비율값을 사용한다면 이미지 사이즈를 편집할 필요가 없다.
    // 이 방법은 복잡해보이지만 의미를 알고나면 쉬운 방법에 속한다.
}
function start1(){
    $(".imgs.top>img").eq(0).siblings().css({"transform":"translateY(-100%)"});
    // .메서드().메서드().메서드()  체이닝기법
    setInterval(function(){
        slide1();
    },2000);
    // setInterval(function(){함수},시간);
    // 간격(2000ms = 2초 )을 두고 슬라이드(top) 동작을 실행
}
$(function(){
    start1();//함수 콜링
});


// 축약형으로 합쳐보기
$(function(){    
    let imgstop = 2;
    let nowtop = 0;
    (function start1(){
        $(".imgs.top>img").eq(0).siblings().css({"transform":"translateY(-100%)"});
        setInterval(function(){
            (function slide1(){
                nowtop = nowtop == imgstop ? 0 : nowtop+=1;
                $(".imgs.top>img").eq(nowtop-1).css({"transform":"translateY(-100%)"});
                $(".imgs.top>img").eq(nowtop).css({"transform":"translateY(0%)"});
            })();
        },2000);
    })();
});




//Simpleslide구현
//슬라이드(left)변수들


// let imgsleft = 2;
// let nowleft = 0;
// function slide2(){
//     nowleft = nowleft==imgsleft?0:nowleft+=1;
//     //삼항연산자 (조건문(if~else - true와 false)을 한줄로 표현할때 사용)
//     //변수 nowleft값과 imgsleft값을 비교하여 두 값이 같으면 nowleft값을 0으로 변경
//     //두 값이 다르면 nowleft값에 1씩 증가
//     $(".imgs.left>img").eq(nowleft-1).css({"left":"-2000px"});
//     $(".imgs.left>img").eq(nowleft).css({"left":"0px"});
//     //슬라이드(left)
// }
// function start2(){    
//     $(".imgs.left>img").eq(0).siblings().css({"left":"-2000px"});
//     setInterval(function(){
//         slide2();
//     },2000);
//     //간격(2000ms = 2초 )을 두고 슬라이드(left) 동작을 실행
// }
// // jQuery(document).ready(function(){
// $(function(){
//     start2();
// });