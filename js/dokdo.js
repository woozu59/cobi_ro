
$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=37&lon=131&appid=4e406371c47d543546a019fee8fe058d&units=metric', function(result){
  let icon = `<img src="../img/weather/${result.weather[0].icon}.svg" alt="${result.weather[0].description}">`
  let temp = result.main.temp.toFixed(1)
  $('.weather').append(icon);
  $('.temp').append(`${temp}℃`);
});


var sunny = $("div[src='../img/weather/01d.svg']");

console.log(sunny);

$(document).ready(function(){
  if($(".weather").children().is(sunny)){
    console.log("오늘 독도의 날씨는 맑음 입니다.");
  } else{
    console.log("뭔가 잘못됐다...");
  }
});
//날씨 이미지 가져와서 날씨 이미지에 따른 날씨상황 띄울수 있도록 하고 입도희망자는 좌측메뉴 이용할수 있는 문구 띄우기
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
          spaceBetween: 50,
        },
       
      }
  });

 
