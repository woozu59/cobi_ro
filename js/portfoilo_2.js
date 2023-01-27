$(function (){
    //nav animation js
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

    // scroll js
    $("ul.gnb li").each(function() {
    
        var thisOffset = $("." + $(this).data('id')).offset().top;
    
        $(this).on('click',function(){

            $("html, body").animate({
                scrollTop : thisOffset
            },1000);
            $(this).addClass('on').siblings().removeClass('on');
        });
        
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
    var dokdoBt = $('#dokdo_bt');
    
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
    var lushBt = $('#lush_bt');
    
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







