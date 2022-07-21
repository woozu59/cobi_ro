// 모바일 사이즈에서 i태그 클릭 시 모바일메뉴 열기/닫기
// i태그가 두개가 나란히 있으면서, on class여부에 따라 서로 교차로 보이기
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
    if($(window).width() < 641){
        $(".mmenu").click(function(){
            $("nav").slideDown().addClass("on");
            $("nav").addClass("on");
            $(this).toggleClass("on").next().toggleClass("on");
        });
        $(".mclose").click(function(){
            $("nav").slideUp().removeClass("on");
            $(this).toggleClass("on").prev().toggleClass("on");
        });
        $(".mgnb").click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        });
    }
});