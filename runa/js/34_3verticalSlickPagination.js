$(function() {
    $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
    });

    //스크롤감지,돌아가는 pagination
    var angle = 0;
    var pangle = 360;
    $(".vertical-slider").mousewheel(function(e) {
        if (e.deltaY < 0) {
            if ($(this).slick("slickCurrentSlide") == $(this).find(".slide").length - 1) {
                return
            }
            e.preventDefault();
            $(this).slick("slickNext");
            angle = angle == pangle ? 360 : angle += 90;
        } else {
            if ($(this).slick("slickCurrentSlide") == 0) {
                return
            }
            e.preventDefault();
            $(this).slick("slickPrev");
            angle = angle == pangle ? 0 : angle -= 90;
        }
        $(".slick-dots").css("transform", "rotate(" + angle + "deg)");
        return
    });
    // 페이징 클릭시 돌아가는 모션
    var paging = $('.slick-dots li');
    $(paging).click(function() {
        var rotateAngle = $(this).index() * 90 + 'deg';
        $(".slick-dots").css("transform", "rotate(" + rotateAngle + ")");
    });
});