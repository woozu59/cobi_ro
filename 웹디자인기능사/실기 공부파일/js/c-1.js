$(document).ready(function(){
    //좌측 아코디언 nav
    $(".gnb > li > ul").hide();
    $(".gnb > li").hover(function(){
        $(this).find("ul").stop().slideToggle();
    });

    //fadein/out
   $(".contents1-2 .imgs a:gt(0)").hide();
   setInterval(function(){
       $(".contents1-2 .imgs a:first-child")
       .fadeOut().next("a").fadeIn().end()
       .appendTo(".contents1-2 .imgs");
   },2000);


   //탭 버튼
   $(".tab > ul > li").click(function(){
       $(this).addClass("on")
       .siblings().removeClass("on");
       $("#" + $(this).data("id")).addClass("on")
       .siblings().removeClass("on");
   });

   //modalbg
   $(".notice1").click(function(){
       $(".modalbg").show();
   });
   $(".bt").click(function(){
       $(".modalbg").hide();
   });
});