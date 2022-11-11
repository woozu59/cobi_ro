
var swiper1 = new Swiper('.scroll_v', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },

    speed: 500,
    pagination: {
        el: '.pageVertical',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    eventsTarget: 'scroll_v',
    on: {
        slideChangeTransitionStart: function() {
            $('.title').hide();
        },
        slideChangeTransitionEnd: function() {
            $('.title').delay(100).slideDown(1000);
            // setTimeout(function() {
            //     $('.title').slideDown(1000);
            // }, 1000);
            // AOS.init(); // AOS 강제실행 안됨
        },
        slideChangeTransitionStart: function() {
            $('.publish .inform').hide();
        },
        slideChangeTransitionEnd: function() {
            $('.publish .inform').delay(100).slideDown(1000);
        },
        reachEnd: function() {
            swiper1.mousewheel.disable();
            $('footer').addClass('on');
        }
    }
    
});

window.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        swiper1.mousewheel.enable();
        $('footer').removeClass('on');
    }else if(event.deltaY > 0){
        return false
    }
});





  