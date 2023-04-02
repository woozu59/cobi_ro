$(function (){
    //nav animation
    $(window).scroll(function( ){  

        var scroll = $(this).scrollTop();

        if(scroll > 690) {
            $('header').addClass("on");

        } else{
            $('header').removeClass("on");
        }
        
       

       

        //section 이동 시 리모콘 클래스 추가 
        $('section').each(function() {
             
            if (scroll >= $(this).offset().top) {
                $("li[data-id=" + $(this).attr('id').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');

            } else if (scroll >= $('#page_3rd').offset().top + 700) {
                $("li[data-id=page_3rd]").removeClass('on');
                
            }
        });
    });

    // scroll 
    $("ul.gnb li").each(function() {
    
        var thisOffset = $("." + $(this).data('id')).offset().top;
    
        $(this).on('click',function(){

            $("html, body").animate({
                scrollTop : thisOffset
            },1000);
            $(this).addClass('on').siblings().removeClass('on');
        });
        
    });


    //도넛 chart 
    $('.chart').easyPieChart({
    
        barColor: '#8BB9DB',
        trackColor: '#F2F2F2',
        scaleColor: '#ffffff',
        lineCap: 'butt',
        lineWidth: 25,
        size: 150,
        animate: 3000,
        
    });
    

    //counting 
    $('.counting').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 3000,
            easing: 'linear',
            step: function(){
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });

        
    });
    /*guidenote modal*/

    //dokdo
    var ddguideBtn = $('#dd_btn');

    ddguideBtn.on('click',function(){

        var guideNote1 = $('#dokdo_guide');

        guideNote1.fadeIn(300);
    });


    var xBtn = $('.x_btn');
    xBtn.on('click',function(){

       $('#dokdo_guide').fadeOut(300);
    
    });

    //lush
    var lsguideBtn = $('#ls_btn');

    lsguideBtn.on('click',function(){
        var guideNote2 = $('#lush_guide');

        guideNote2.fadeIn(300);
    });

    xBtn.on('click',function(){
        $('#lush_guide').fadeOut(300);
    });


    //모바일 버전 햄버거 gnb

    var burger = $('.gnb_toggle');

    burger.on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');

        //햄버거 클릭 시 메뉴 슬라이드

        $('.gnb_menu').slideToggle(500);

    });



    //모바일 버전 모달창

    //독도 모달
    var dokdoBt = $('#dokdomb_bt');
    
    dokdoBt.on('click',function(){
        
        var dokdoMd = $('#dokdo_md');

        dokdoMd.fadeIn(300);
        document.body.style.overflow = "hidden";
    });

    //독도 닫기 btn js
    var closeBt = $('.close_bt');

    closeBt.on('click',function(){

       $('#dokdo_md').fadeOut(300);
        document.body.style.overflow = "unset";
    
    });

    //lush 모달
    var lushBt = $('#lushmb_bt');
    
    lushBt.on('click',function(){

        var lushMd = $('#lush_md');

        lushMd.fadeIn(300);
        document.body.style.overflow = "hidden";
    });

    //lush 닫기 btn js
    closeBt.on('click',function(){
       $('#lush_md').fadeOut(300);
        document.body.style.overflow = "unset";
    
    });

});







