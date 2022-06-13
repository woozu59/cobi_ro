$(document).ready(function(){

    //좌측 아코디언 nav
    $(".gnb > li > ul").hide();
    $(".gnb > li").hover(function(){
        $(this).find("ul").stop().slideToggle();
    });

    //fadein / out 슬라이드
   $("contents1 .imgs > a:gt(0)").hide();
   setInterval(function(){
       $(".contents1 .imgs a:first-child")
       .fadeOut().next("a").fadeIn().end()
       .appendTo(".contents1 .imgs");
   }, 2000);

   $(".notice1").click(function(){
       $(".modalbg").show();
   });
   $(".bt").click(function(){
       $(".modalbg").hide();
   });
});