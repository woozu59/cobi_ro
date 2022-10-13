// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 1 ) {
//             $(".nav > li").css("color","#A5D9FF");
//         }
//         else {
//             $(".nav > li").css("color","#ffffff");
//         }
//     });
// });


$(document).ready(function(){
    
    

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




    
  var scroll = $(window).scrollTop();



//   console.log(scroll.length);






  if (scroll > 721.6){
      $("footer").addClass(".hideBar");
  }



  else if (scroll < 721.5){
      $("footer").removeClass(".hideBar");
  }

   
});


  