// $(function(){
//     $('img:gt(0)').hide();
//     setInterval(function(){
//         $('img:first-child').fadeOut().next('img').fadeIn().end().appendTo('.slide_inner');
//     },2000);
// });
$(function(){
    var navBtn = $('.view_btn');
    navBtn.click(function(){
        var allNav = $('li.all');
        allNav.toggleClass('on');
    });
    
    var swiper = new Swiper(".main_visual_section .mySwiper", {
        spaceBetween: 30,
        autoplay: {
            // 자동재생 여부
            delay: 5500, // 시작시간 설정
        },
        
        loop: true,
        effect: "fade",

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper("#operate_area .mySwiper", {
        slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
        centeredSlides: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})