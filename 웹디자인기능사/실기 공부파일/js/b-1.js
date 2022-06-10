$(document).ready(function(){
  $(".gnb > li > ul").hide();
  $(".gnb").hover(function(){
      $(".gnb ul").stop().slideToggle();
  });

  setInterval(function(){
      $(".contents1 .imgs").delay(2000).animate({
          marginLeft: -1200
      }).delay(2000).animate({
          marginLeft: -2400
      }).delay(2000).animate({
          marginLeft: 0
      }).delay(2000).end();
  });


  $(".notice1").click(function(){
      $(".modalbg").show();
  });
  $(".bt").click(function(){
      $(".modalbg").hide();
  });

  $(".tab > ul > li").click(function(){
    $(this).addClass("on")
      .siblings().removeClass("on");
    $("#" + $(this).data("id")).addClass("on")
      .siblings().removeClass("on");
});
})