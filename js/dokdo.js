    var swiper = new Swiper(".slide", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }
    });
// $(document).ready(function(){
//   $(window).scroll(function(){
//     $('.title1').each(function(i){
      
//       var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();

//       if(bottom_of_window > bottom_of_element){
//         $(this).animate({'opacity':'1','margion-bottom':'0px'}, 1000);
//       }
//     });
//   });
// });