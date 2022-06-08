$(document).ready(function(){
    $(".gnb > li > ul").hide();
    $(".gnb").hover(function(){
        $(".gnb ul").stop().slideToggle();
    });
    //슬라이드 영역

    $(".contents1 .imgs a:gt(0)").hide();//a:gt(index)여서 imgs의 순서를 차례대로 숨기도록 설정
    setInterval(function(){
        $(".contents1 .imgs a:first-child") 
        .fadeOut().next("a").fadeIn().end()//첫번째 사진을 fadeout시키고 다음 사진을 fadein시킴 
        .appendTo(".contents1 .imgs");//사진 리스트가 끝나면 다시 class를 불러와서 재생
    },2000);//2초동안

    $(".tab > ul > li").click(function(){
        $(this).addClass("on")
        .siblings().removeClass("on");
        $("#" + $(this).data("id")).addClass("on")
        .siblings().removeClass("on");
    });

    $(".notice1").click(function(){
        $(".modalbg").show();
    });
    $(".bt").click(function(){
        $(".modalbg").hide();
    });
});