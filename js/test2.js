$(function(){
  //리사이징 시 새로고침 js
  var lastWidth = $(window).width();
    $(window).resize(function(){
    if($(window).width()!=lastWidth){
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });

  //햄버거 메뉴 클릭 시 서브메뉴 펼쳐짐 js
  var navBtn = $('.view_btn');
    navBtn.click(function(){
      var allNav = $('li.all');
      allNav.toggleClass('on');
  });

  //메인 비주얼 슬라이드 fade swiper js
  var swiper = new Swiper(".main_visual_section .mySwiper", {
      spaceBetween: 30,
      autoplay: {        
          delay: 5500,
      },
      loop: true,
      effect: "fade",
    });


  //운영시설 auto swiper js

  var ww = $(window).width();
    if (ww >= 641) {
    mySwiper = new Swiper("#operate_area .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
  } else if (ww < 641) {
  // swiper 호출 안함
  }

  //모바일 nav js
  var navBtn = $('.mb_btn');
    navBtn.click(function(){
        var mbNav = $('.mb_nav');
        mbNav.toggleClass('on');
    });

    //모바일 nav li 클릭 시 창 slide 되도록 & 방향아이콘 바뀌는 js
    $('.gnb_mb > .depth1_mb > a').click(function(){
      $(this).toggleClass('on').next().slideToggle(300);
      $('.gnb_mb > .depth1_mb > a').not(this).removeClass('on').next().slideUp(300);
      return false;
  });
  

  //주요 공지사항 swiper js
    var swiper = new Swiper(".mb_survey .mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
})