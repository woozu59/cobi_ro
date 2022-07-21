var swiper = new Swiper(".basic2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
    //     // loop: true,
    //     // slidesPerView: "auto",
    //     // centeredSlides: true,
    //     // spaceBetween: 50,
    //     // autoplay: {
    //     //     delay: 2000,
    //     // },
});