$(document).ready(function(){
    //팝업창 js
    $(".notice1").click(function(){
        $(".modalbg").show();
    });
    $(".bt2").click(function(){
        $(".modalbg").hide();
    });

    //nav js
    $(".gnb > li > ul").hide();
    $(".gnb").hover(function(){
        $(".gnb ul").stop().slideToggle();
    });

    //tab 메뉴
    $(".tab > ul > li").click(function(){
        $(this).addClass('on')
          .siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
            .siblings().removeClass('on');
    });



    //슬라이드 상하로 인터벌
    setInterval(function(){
        $('.contents1 .imgs').delay(3000).animate({
            marginTop: -350
        }).delay(3000).animate({
            marginTop: -700
        }).delay(3000).animate({
            marginTop: 0
        }).delay(3000).end();
    });


});