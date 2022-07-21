// ---------------------------Slick
$(document).ready(function() {
    // 사진의 비율을 살린 갤러리디자인
    $('.slider.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.slider.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.slider.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // 사진이 꽉차보이는 갤러리디자인
    $('.slider2.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider2.slider-nav'
    });
    $('.slider2.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.slider2.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
    });

    // 기본 슬릭 + autoplay
    // $('.slider3').slick();
    $('.slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: false, // 마우스 올리면 멈춤 기능 비활성화
        pauseOnFocus: false, // 수동 동작시키면 멈춤 기능 비활성화
        dots: true
    });


    // vertical 갤러리
    $('.slider4.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider4.slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false
    });
    $('.slider4.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider4.slider-for',
        infinite: true,
        centerMode: true,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,  
    });

    
    // 기본 슬릭 append + css background
    var appendSlide01 = {
        slide01:[
            {
                title:"사과",
                alt:"사과",
                src:"/images/apple.png",
            },
            {
                title:"스파클링",
                alt:"스파클링",
                src:"/images/spakle.png",
            },
            {
                title:"노트북",
                alt:"노트북",
                src:"/images/notebook.png",
            },
            {
                title:"모히또",
                alt:"모히또",
                src:"/images/mojito.png",
            },
            {
                title:"봄꽃",
                alt:"봄꽃",
                src:"/images/flower.png",
            },
        ]
    };
    var photo = "";
    appendSlide01.slide01.forEach(function(value, index){
       console.log(value.title);
       console.log(index);
       photo += `<div class="img${index}" title="${value.title}"></div>`;
    // div로 삽입 시 css background로 설정 
    //    photo += `<img src="${value.src}" class="img${index}" title="${value.title}" alt="${value.alt}">`;
    // img로 삽입시 비율 css로 설정
    });
    console.log(photo);
    $('.slider5').append(photo);
    $('.slider5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        arrows: false
    });

});
