$(function(){
    var navBtn = $('.view_btn');
    navBtn.click(function(){
        var allNav = $('li.all');
        allNav.toggleClass('on');
    });
    //pc일시 nav > li > a 클릭시 해당 메뉴창 뜨기 js
    //수정
    var nav_List = $('li.navi > a');
    nav_List.click(function(){
        var navDepth = $('ul.nav_depth');
        navDepth.addClass('on').siblings().removeClass('on');
    });


    
    //pc일 시 nav 클릭 시 버튼 변경 js
    //수정
    var arrowBtn = $('.navi button');
    arrowBtn.each(function(){
        arrowBtn.click(function(){
            arrowBtn.toggleClass('on');
        });
    });




    //모바일 nav js
    var navBtn = $('.mb_btn');
    navBtn.click(function(){
        var mbNav = $('.mb_nav');
        mbNav.toggleClass('on');
    });

    //모바일 nav li 클릭 시 창 slide 되도록 & 방향아이콘 바뀌는 js
    $('.gnb_mb > .depth1_mb > a').click(function(){
        $(this).toggleClass('on').next().slideToggle(300);
        $('.gnb_mb > .depth1_mb > a').not(this).removeClass('on').next().slideUp(300);
        return false;
    });


    
    
    

})