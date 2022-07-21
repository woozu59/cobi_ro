// const swiper = new Swiper('.swiper-container', {});
// 기본형
//swiper의 옵션은 자바스크립트를 기반으로 한다. 배열의 키-값의 형태로 추가되는 형식이다.


new Swiper('.basic', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination.runa',
    },
    // allowTouchMove: false
});

//swiper 3단분할 후 iframe으로 영상 넣기
new Swiper('.iframeSwiper', {
    slidesPerView: 3,
    // spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.iframeSwiper .swiper-button-next',
        prevEl: '.iframeSwiper .swiper-button-prev',
    },
    pagination: {
        el: '.iframeSwiper .swiper-pagination',
    },
    scrollbar: {
        el: '.iframeSwiper .swiper-scrollbar',
        hide: true,
    },
});


//thumbGallery loop swiper 세로형
const swiper3 = new Swiper(".thumbSlide", {
    loop: true,
    slidesPerView: 3,
    direction: "vertical",
    centeredSlides: true,
    watchSlidesProgress: true,
});
new Swiper(".mainSlide", {
    loop: true,
    navigation: {
        nextEl: ".mainSlide .swiper-button-next",
        prevEl: ".mainSlide .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});

//thumbGallery 형식의 swiper 응용2
const swiper4 = new Swiper(".thumbSlide2", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    CenteredSlidesBounds: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    watchSlidesProgress: true,
});
new Swiper(".mainSlide2", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".mainSlide2 .swiper-button-next",
        prevEl: ".mainSlide2 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper4,
    },
});

//thumbGallery 형식의 swiper 응용3
const swiper5 = new Swiper(".thumbSlide3", {
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true
    },
});
new Swiper(".mainSlide3", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".mainSlide3 .swiper-button-next",
        prevEl: ".mainSlide3 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper5,
        multipleActiveThumbs: false,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90]
        },
        next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90]
        }
    }
});

//thumbGallery 형식의 swiper 응용4, thumbnail의 다음장이 메인으로 들어옴 
const swiper6 = new Swiper(".thumbSlide4", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false
    },
});
new Swiper(".mainSlide4", {
    loop: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400]
        },
        next: {
            translate: ["75%", "500px", 0]
        }
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false
    },
    navigation: {
        nextEl: ".mainSlide4 .swiper-button-next",
        prevEl: ".mainSlide4 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper6,
    },
});

//swiper 응용5, thumbnail의 다음장이 메인으로 들어옴, TouchMove 막힘 
new Swiper(".thumbSlide5", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    allowTouchMove: false
});
new Swiper(".mainSlide5", {
    loop: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400]
        },
        next: {
            translate: ["75%", "500px", 0]
        }
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: false
    },
    navigation: {
        nextEl: ".mainSlide4 .swiper-button-next",
        prevEl: ".mainSlide4 .swiper-button-prev",
    },
    allowTouchMove: false
});


//swiper active 슬라이드 확대형
const swiper7 = new Swiper(".expandSlide", {
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".expandSlide .swiper-button-next",
        prevEl: ".expandSlide .swiper-button-prev",
    },
});


//패럴랙스 슬라이드 loop
const swiper8 = new Swiper(".parallax", {
    speed: 600,
    loop: true,
    parallax: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


//탭안의 thumbGallery swiper + active 확대형
const swiper9 = new Swiper(".thumbSlide6", {
    slidesPerView: 2,
    loop: true,
});
const swiper10 = new Swiper(".mainSlide6", {
    loop: true,
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".mainSlide6 .swiper-button-next",
        prevEl: ".mainSlide6 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper9,
        slideThumbActiveClass: "swiper-slide-active"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});
const swiper11 = new Swiper(".thumbSlide7", {
    slidesPerView: 2,
    loop: true,
});
const swiper12 = new Swiper(".mainSlide7", {
    loop: true,
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".mainSlide7 .swiper-button-next",
        prevEl: ".mainSlide7 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper11,
        slideThumbActiveClass: "swiper-slide-active"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});
const swiper13 = new Swiper(".thumbSlide8", {
    slidesPerView: 2,
    loop: true,
});
const swiper14 = new Swiper(".mainSlide8", {
    loop: true,
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".mainSlide8 .swiper-button-next",
        prevEl: ".mainSlide8 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper13,
        slideThumbActiveClass: "swiper-slide-active"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});

// 3자리마다 ,콤마찍는 함수
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 정수카운팅
function counting() {
    $('h2').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        //시작 숫자와 종료숫자를 비교한다    
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                const thisNum = numberWithCommas(Math.floor(this.countNum));
                $this.text(thisNum);
            },
            complete: function() {
                const thisNum = numberWithCommas(Math.floor(this.countNum));
                $this.text(thisNum);
            }
        });
    });
}

// opacity tab에서 update swiper
$(function() {
    swiper9.update();
    swiper10.update();
    $("ul.tab > li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        // 클릭이벤트 후에 swiper 새로고침(thumbgallery전용, 다른 스와이퍼는 obsever로 해결가능)
        swiper9.update();
        swiper10.update();
        swiper11.update();
        swiper12.update();
        swiper13.update();
        swiper14.update();
        counting();
    });
});


// 패럴랙스 + coverflow + thumbnail
const swiper15 = new Swiper(".coverflowthumb", {
    speed: 600,
    parallax: true,
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true
    },
    navigation: {
        nextEl: ".coverflow .swiper-button-next",
        prevEl: ".coverflow .swiper-button-prev"
    },
    allowTouchMove: false
});
new Swiper(".coverflowmain", {
    loop: true,
    thumbs: {
        swiper: swiper15,
        slideThumbActiveClass: "swiper-slide-active"
    },
    pagination: {
        el: ".coverflow .swiper-pagination"
    },
    navigation: {
        nextEl: ".coverflow .swiper-button-next",
        prevEl: ".coverflow .swiper-button-prev"
    },
    allowTouchMove: false
});


//탭안의 thumbGallery swiper + active 확대형
const swiper16 = new Swiper(".thumbSlide9", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true
    },
    navigation: {
        nextEl: ".mainSlide9 .swiper-button-next",
        prevEl: ".mainSlide9 .swiper-button-prev"
    },
    allowTouchMove: false
});
new Swiper(".mainSlide9", {
    loop: true,
    navigation: {
        nextEl: ".mainSlide9 .swiper-button-next",
        prevEl: ".mainSlide9 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper16,
        slideThumbActiveClass: "swiper-slide-active"
    },
    pagination: {
        el: ".mainSlide9 .swiper-pagination",
        type: "fraction",
    },
});