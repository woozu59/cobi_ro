$(document).ready(function(){
    $(".nav > navIcon").click(function(){
        $(".menu1").show();
    });
    $(".closeBt").click(function(){
        $(".menu1").hide();
    });
    
    //nav 상단에 검색창 생성
    $(".menu1 > text").html("<input type='text'>");
    $(".menu1 > text").html("<img src='../img/icon/magnifying-glass-solid.png'>");
    $("input:text").css("border","1px solid #fff");


    //좌측 아코디언 nav
    // $(".menu > li > ul").hide();
    // $(".menu > li").hover(function(){
    //     $(this).find("ul").stop().slideToggle();
    // });

});