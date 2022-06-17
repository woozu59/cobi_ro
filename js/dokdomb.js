$(document).ready(function(){
    $(".nav > .navIcon").click(function(){
        $(".menu1").addClass("on");
    });
    $(".closeBt").click(function(){
        $(".menu1").removeClass("on");
    });
    // $(".navIcon").click(function(){
    //     $(".menu1").addClass("on");
    // });
   
    


    //nav 상단에 검색창 생성
    // $(".menu1 > text").html("<input type='text'>");
    // $(".menu1 > text").html("<img src='../img/icon/magnifying-glass-solid.png'>");
    // $("input:text").css("border","1px solid #fff");


    //좌측 아코디언 nav
    $(".menu > li > ul").hide();
    $(".menu > li > a").click(function(){
        $(this).next("ul").stop().slideToggle();
        $(".menu > li > a").not(this).next("li").slideToggle();
        return false;
    });

});