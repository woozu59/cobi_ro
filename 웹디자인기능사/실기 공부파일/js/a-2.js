$(document).ready(function(){
    //모달 팝업 완성
    $(".notice1").click(function(){
        $(".modalbg").show();
    });
    $(".bt").click(function(){
        $(".modalbg").hide();
    });
    //nav full 완성 
    $(".gnb > li > ul").hide();
    $(".gnb").hover(function(){
        $(".gnb ul").stop().slideToggle();
    });
    //탭메뉴는 따로 적용할 필요가 없나?
    //slide 좌우 완성
    setInterval(function(){
        $('.contents01 .imgs').delay(2000).animate({
            marginLeft: -1200
        }).delay(2000).animate({
            marginLeft: -2400
        }).delay(2000).animate({
            marginLeft: 0
        }).delay(2000).end();
    });
})