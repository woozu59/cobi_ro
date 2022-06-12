$(document).ready(function(){
    $(".gnb > li > ul").hide();
    $(".gnb").hover(function(){
        $(".gnb ul").stop().slideToggle();
    });

    setInterval(function(){
        $(".contents1 .imgs").delay(2000).animate({
            marginTop: -300
        }).delay(2000).animate({
            marginTop: -600
        }).delay(2000).animate({
            marginTop: 0
        }).delay(2000).end();
    });

    $(".notice1").click(function(){
        $(".modalbg").show();
    });
    $(".bt").click(function(){
        $(".modalbg").hide();
    });
});