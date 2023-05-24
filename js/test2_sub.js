$(function(){
    var navBtn = $('.view_btn');
    navBtn.click(function(){
        var allNav = $('li.all');
        allNav.toggleClass('on');
    });

    //pc일시 nav > li > a 클릭시 해당 메뉴창 뜨기 js
    //수정
    var nav_List = $('li.navi');
    nav_List.click(function(){
        $(this).toggleClass('on').not(this).removeClass('on');
        $(this).children('.nav_depth').slideToggle();
    });




    //모바일 nav js
    var navBtn = $('.mb_btn');
    navBtn.click(function(){
        var mbNav = $('.mb_nav');
        mbNav.toggleClass('on');
        var navBg = $('.mb_gnb_bg');
        navBg.toggleClass('on')
      
    });

    //모바일 nav li 클릭 시 창 slide 되도록 & 방향아이콘 바뀌는 js
    $('.gnb_mb > .depth1_mb > a').click(function(){
        $(this).toggleClass('on').next().slideToggle(300);
        $('.gnb_mb > .depth1_mb > a').not(this).removeClass('on').next().slideUp(300);
        return false;
    });

    //scroll js
    $(".scroll").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 1000);
        return false;
    });
    
    
    

})