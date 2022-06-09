$(document).ready(function(){
    $(".gnb > li > ul").hide();
    $(".gnb").hover(function(){
        $(".gnb ul").stop().slideToggle();
    });

    $(".contents1 .imgs a:gt(0)").hide();
    setInterval(function(){
        $(".contents1 .imgs a:first-child")
        .fadeOut().next("a").fadeIn().end()
        .appendTo(".contents1 imgs")
    }, 2000);

    $(".notice1").click(function(){
        $(".modalbg").show();
    });
    $(".bt").click(function(){
        $(".modalbg").hide();
    });
});