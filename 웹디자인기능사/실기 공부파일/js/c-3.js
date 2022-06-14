$(document).ready(function(){

    setInterval(function(){
        $(".contents1 > .imgs").delay(2000).animate({
            marginLeft: -800
        }).delay(2000).animate({
            marginLeft: -1600
        }).delay(2000).animate({
            marginLeft: 0
        }).delay(2000).end();
    });

    $(".notice1").click(function(){
        $(".modalbg").show();
    });
    $(".bt").click(function(){
        $(".modalbg").hide();
    });
});