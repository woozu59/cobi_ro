$(function(){
    $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
    });

    $('.vertical-slider').mousewheel(function(e){
        if(e.deltaY < 0) {
            if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
                return
            }

            e.preventDefault()
            $(this).slick('slickNext')
        } else {
            if ($(this).slick('slickCurrentSlide') == 0) {
                return
            }
            
            e.preventDefault()
            $(this).slick('slickPrev')
        }
    });
});