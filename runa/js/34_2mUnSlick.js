$(document).ready(function(){
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    //모바일에서만 슬릭
    if($(window).width() < 641){
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        // $('.slider').slick('slickRemove', 3);
        // 원하는 슬라이드 제거
    }
    //모바일 이상 레이아웃 복귀
    else if($(window).width() > 640){
        $('.slider').slick('unslick');
    }
});
// $(document).ready(function(){
//     if($(window).width() < 641){
//         $('.modifiSlick').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//         });
//     }
//     else if($(window).width() > 640){
//         $('.slider').removeClass('modifiSlick');
//     }
// });
//슬릭이 진행되는 클래스를 제거함으로써 모바일만 슬릭 진행
