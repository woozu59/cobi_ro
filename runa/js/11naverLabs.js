$(document).ready(function(){
     //리사이징 할때마다 새로고침
     var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });
    $(".scroll").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 1000);
        return false;
    });
    $(".mmenu").click(function(){
        $(".menu").addClass("on");
    });
    $(".mclose").click(function(){
        $(".menu").removeClass("on");
    });
});
new Swiper('.swipe1', { 
    scrollbar: {
        el: '.swiper-scrollbar',
        type: 'progressbar',
    },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    autoplay: {delay: 2000,},
});