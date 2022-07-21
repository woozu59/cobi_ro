$(document).scroll(function() {
  // 스크롤에 따라 헤더가 숨기 - 변경가능
  var scroll = $(window).scrollTop();
    if (scroll > 300){
      $( "header" ).addClass( "hideBar" );
    }
    else if (scroll < 299){
      $( "header" ).removeClass( "hideBar" );
    }
});

  // 메뉴버튼모양변경
$(document).ready(function() {
  var $menu = $('#menu'),
    $menulink = $('.menuBt');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
  });

  //리사이징 할때마다 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function(){
      if($(window).width()!=lastWidth){
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
});