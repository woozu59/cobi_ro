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
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function(){
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });

    if($(window).width() < 1280){
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function(){
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });    
    }
});