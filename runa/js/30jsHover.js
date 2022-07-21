//-----------------------------마우스 오버시 100%슬라이드
$(document).ready(function(){
    $(".hoverslide1 div, .hoverslide2 div").hover(function(){
        $(this).toggleClass("on").siblings().toggleClass('on off');
    });
});