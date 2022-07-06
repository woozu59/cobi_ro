function counting() {
  // 정수카운팅
  $('.counter').each(function() {
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
              $this.text(numberWithCommas(Math.floor(this.countNum)));
          },
          complete: function() {
              $this.text(numberWithCommas(this.countNum));
          }
      });
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 3자리마다 ,콤마찍는 함수

$(document).scroll(function() {
  var scrolltop = $(window).scrollTop();
  //sheabutter에서부터 카운터세기 시작
  //그 밑으로 내려가서는 더이상 카운팅 하지 않도록 설정
  //변수로 설정하여 지정
  var start = $('.sheabutter').offset().top;
  var end = $('.sheabutter').offset().top + 50
      if (scrolltop > start && scrolltop < end) {
         
      counting();
  } else if(scrolltop < start ) {
      $(".counter").text('0');
  }
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 60,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidePerView: 1,
            spaceBetween: 50,
        },
    },
  });