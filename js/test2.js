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
    
    new Swiper('.swiper', {
        // 다양한 옵션 설정, 
        // 아래에서 설명하는 옵션들은 해당 위치에 들어갑니다!!
        slidesPerView : 'auto',
        spaceBetween : 2, 
        autoplay: {
            // 자동재생 여부
            delay: 3000, // 시작시간 설정
          },
        loop: true, // 반복재생 여부
        slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
        spaceBetween: 3, // 슬라이드 사이 여백
        centeredSlides: false, // 1번 슬라이드가 가운데 보이기
    })
})