// ---------------------------slick
$(function() {
    $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
    });
    //스크롤감지
    $('.vertical-slider').mousewheel(function(e) {
        if (e.deltaY < 0) {
            if ($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
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


// 카운팅 스크립트 변수선언 
function countUp() {
    $('.counting').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
            //시작 숫자와 종료숫자를 비교한다
        }, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }

        });
    });
};
// 슬라이드가 활성화 됐을때 카운팅
var element = $('.vertical-slider');
$(element).mousewheel(function(e) {
    $('h1.counting').text('0');
    //시작숫자를 계속 0으로 변경하여 슬라이드가 활성화 될때마다 숫자를 세도록 시킨다.
    if ($(this).slick('slickCurrentSlide') == 1) {
        countUp();
    }
});
$('h1').click(function() {
    $('h1.counting').text('0');
    countUp();
});

//로고 클릭시 슬릭 원하는 페이지로 이동
jQuery(document).ready(function() {
    $(".logo").click(function(e) {
        e.preventDefault();
        var home = $(this).data('slide');
        $('.vertical-slider').slick('slickGoTo', home - 1);
        //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
    });
});
