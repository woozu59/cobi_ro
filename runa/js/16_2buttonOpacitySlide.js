// buttonSlide구현
$(function() {
    $(".btnSlide_next").click(function() { //next버튼을 눌렀을때
        if (!$(".images li").last().is(":visible")) {
            //!는 부정연산자로써, li 마지막 객체가 :visible이 flase일때를 뜻한다
            $(".images li:visible").hide().next("li").fadeIn(400);
            //fadeIn(400) 1000분의 1초*400이며 기본값이다
            $(".btnSlide_prev").removeClass("off");
        } //마지막 객체가 안보일때

        if ($(".images li").last().is(":visible")) {
            //li 마지막 객체가 :visible이 true일때
            $(".btnSlide_next").addClass("off");
        } //마지막 객체가 보일때
        return false;
    });
    $(".btnSlide_prev").click(function() { //prev버튼을 눌렀을때
        if (!$(".images li").first().is(":visible")) {
            //!는 부정연산자로써, li 첫번째 객체가 :visible이 flase일때를 뜻한다
            $(".images li:visible").hide().prev("li").fadeIn(400);
            //fadeIn(400) 1000분의 1초*400이며 기본값이다
            $(".btnSlide_next").removeClass("off");
        } //첫번째 객체가 안보일때

        if ($(".images li").first().is(":visible")) {
            //li 첫번째 객체가 :visible이 true일때
            $(".btnSlide_prev").addClass("off");
        } //첫번째 객체가 보일때
        return false;
    });
});
