//-----------------------------모바일메뉴
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
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function(){
        $(".nav").addClass("on");
        // nav에 on클래스 추가/삭제
    });
    $(".mCloseBt").click(function(){
        $(".nav").removeClass("on");
        // nav에 on클래스 추가/삭제
    });

    // 모바일용 아코디언 메뉴
    $(".snb").hide();
    // .mSnb를 숨기고 시작
    $(".nav > div > span").click(function(){
        $(this).next().slideDown(300);
        //this 다음 요소를 슬라이드다운
        $(".nav > div > span").not(this).next().slideUp(300);
    });    
});