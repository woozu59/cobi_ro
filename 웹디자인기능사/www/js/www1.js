// A를 B하면 C가 D한다.
$(document).ready(function() {
    // 모달팝업
    $(".notice1").click(function() {
        $(".modalbg").show();
    });
    $(".bt2").click(function() {
        $(".modalbg").hide();
    });

    // 좌측형 nav 1(아코디언형태)
    $(".gnb > li > ul").hide();
    $(".gnb > li").hover(function() {
        $(this).find("ul").stop().slideToggle();
    });

    // 탑형 nav 1(단일메뉴 위아래)
    // 탑형 nav 2(전체 하위메뉴 위아래)
    $(".gnb3 > li > ul").hide();
    $(".gnb3").hover(function() {
        $(".gnb3 ul").stop().slideToggle();
    });

    // 탑형 nav 3(전체 하위메뉴+배경 full 위아래)
    $(".gnb4 > li > ul").hide();
    $(".gnb4").hover(function() {
        $(".gnb4 ul").stop().slideToggle();
    });

    // 탭메뉴 가로형
    $(".tab > ul > li").click(function() {
        $(this).addClass('on')
            .siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on')
            .siblings().removeClass('on');
    });


    // 슬라이드 fade in/out
    $('.contents03 .imgs a:gt(0)').hide();
    // img:gt(index)는 index 값보다 더 큰 값을 가진 요소를 선택한다. index 0보다 큰 1, 2을 추출해 감춘다.
    setInterval(function() {
        $('.contents03 .imgs a:first-child')
            .fadeOut().next('a').fadeIn().end()
            // 첫번째 객체를 fadeOut하고, 다음객체를 fadeIn하며, 끝에 도달하면
            .appendTo('.contents03 .imgs');
            // 선택자를 .imgs의 자식요소로 추가
    }, 2000);
    // 한 텀을 2초동안 반복진행


    // 슬라이드 최신형 좌우, 인터벌실행
    setInterval(function() {
        $('.contents04 .imgs').delay(2000).animate({
            marginLeft: -1200
        }).delay(2000).animate({
            marginLeft: -2400
        }).delay(2000).animate({
            marginLeft: 0
        }).delay(2000).end();
    });
    
    setInterval(function() {
        $('.contents05 .imgs').delay(2000).animate({
            marginLeft: -800
        }).delay(2000).animate({
            marginLeft: -1600
        }).delay(2000).animate({
            marginLeft: 0
        }).delay(2000).end();
    });

    // 슬라이드 최신형 상하, 인터벌실행
    setInterval(function() {
        $('.contents06 .imgs').delay(2000).animate({
            marginTop: -350
        }).delay(2000).animate({
            marginTop: -700
        }).delay(2000).animate({
            marginTop: 0
        }).delay(2000).end();
    });

});
