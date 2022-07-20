//weather js

$(document).ready(function(){
  //top nav js
  $(".menu > li > ul").hide();
  $(".menu").hover(function(){
    $(".menu ul").stop().slideToggle();
  });    
  
  
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=37&lon=131&appid=4e406371c47d543546a019fee8fe058d&units=metric',function(result){
          let icon = `<img src="../img/weather/${result.weather[0].icon}.svg" alt="${result.weather[0].description}">`
          let temp = result.main.temp.toFixed(1)
          $('.weather').append(icon);
          $('.temp').append(`${temp}℃`);

          var iconSrc = $(icon).attr('src');
          var iconName = iconSrc.substr(iconSrc.length-7, 3);

          
          console.log(iconSrc);
          console.log(iconName);
          if(iconName == "01d"){
            $(".wrap").append("<span>현재 독도의 날씨는 맑음 입니다.</span>");
          }else if(iconName == "02d"){
            $(".wrap").append("<span>현재 독도의 날씨는 구름 많음 입니다.</span>");
          }else if(iconName == "03d", "04d"){
            $(".wrap").append("<span>현재 독도의 날씨는 흐림 입니다.</span>");
          }else if(iconName == "09d"){
            $(".wrap").append("<span>현재 독도의 날씨는 눈 입니다.</span>");
          }else if(iconName == "10d"){
            $(".wrap").append("<span>현재 독도의 비 입니다.</span>");
          }else if(iconName == "11d"){
            $(".wrap").append("<span>현재 독도의 날씨는 번개 입니다.</span>");
          }else if(iconName == "13d"){
            $(".wrap").append("<span>현재 독도의 날씨는 폭설 입니다.</span>");
          }else{
            $(".wrap").append("<span>현재 독도의 날씨는 안개 입니다.</span>");
          }
          
        });





});

$(".que").click(function(){
  $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass("on").siblings().removeClass("on");
  $(this).next(".anw").siblings(".anw").slideup(300);
});

//swiper 
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
        1200: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
       
      },

     
  });


 
 
