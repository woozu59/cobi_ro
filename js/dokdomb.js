$(document).ready(function(){
    $(".nav > navIcon").click(function(){
        $(".menu1").show();
    });
    $(".closeBt").click(function(){
        $(".menu1").hide();
    });
    
    
    
    $(".menu > li > ul").hide();
    $(".gnb > li").click(function(){
        $(this).find("ul").stop().slideToggle();
    });


});