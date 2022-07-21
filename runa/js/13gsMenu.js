// 스와이퍼 걷어내기
// new Swiper('.swiper-container.swipe1', { 
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     autoplay: {delay: 2000},
// });

// new Swiper('.swiper-container.swipe2', { 
//     autoplay: {delay: 2000},
//     loop: true,
//     direction: 'vertical',
// });


// querySelector 하나하나 설정해 줘야지만 적용이 된다.
// var clamp1 = new MultiClamp(document.querySelector('p.ellipsis'), {
//     ellipsis: '...', // 끝자리 붙을 모양
//     clamp: 1 // 라인수
// });
// var clamp2 = new MultiClamp(document.querySelector('p.ellipsis2'), {
//     ellipsis: '...',
//     clamp: 2
// });


// querySelectorAll을 사용시 유사배열이라 객체 생성자 함수 형식을 사용할 수 없음. 사용하더라도 첫번째 요소만 적용된다.
// Array.from(all변수).forEach()로 사용하여 일괄 적용한다. 최신방식
// var clamp = document.querySelectorAll('p.ellipsis');
// Array.from(clamp).forEach(function(eachClamp) {
//     new MultiClamp(eachClamp, {
//         ellipsis: '...',
//         clamp: 2
//     });
// })

// Array.prototype.forEach.call(all변수, function(){}) 이전방식, ie9까지 적용되는 forEach
var clamp = document.querySelectorAll('p.ellipsis');
[].forEach.call(clamp, function(eachClamp) {
    new MultiClamp(eachClamp, {
        ellipsis: '...',
        clamp: 2
    });
});

// display: none/flex가 되는 탭안에서는 새로고침을 해줘야 하므로, 변수처리 하여 탭을 누를때마다 .reload()를 실행시킨다

// clamp1.reload();
// clamp2.reload();



// 클릭 시 하위메뉴 열기, close버튼으로 하위메뉴 닫기
$(document).ready(function() {
    $(".mMenuBt").click(function() {
        $("nav").addClass("dpFlex");
    });
    $(".close").click(function() {
        $("nav").removeClass("dpFlex");
    });
    $(".depth1 > a").click(function() {
        $(this).next().addClass("on");
        $(".depth1 > a").not(this).siblings().removeClass("on");
    });
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    // slick으로 구현
    $('.swiper-container.swipe1 .swiper-wrapper').slick({
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.swiper-button-prev'),
        nextArrow: $('.swiper-button-next'),
    });
    $('.swiper-container.swipe2 .swiper-wrapper').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    });
});