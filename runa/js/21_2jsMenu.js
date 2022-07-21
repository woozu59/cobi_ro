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
    if($(window).width() > 640){
        $(".gnb > ul > li").hover(function(){
            $(this).children('.snb').slideToggle();    
        });
    }
    $(".gnb > ul > li > a").click(function(){
        $(this).addClass('on').next().slideToggle(300);
        $(".gnb > ul > li > a").not(this).removeClass('on').next().slideUp(300);
        return false;
    });
    $(".material-icons").click(function(){
        $(".material-icons").toggle();
        $(".gnb > ul").toggleClass('on');
    });
});
