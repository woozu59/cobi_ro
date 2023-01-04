$(function (){
    //nav animation js
    $(window).scroll(function( ){  

        var scroll = $(this).scrollTop();

        if(scroll > 690) {
            $("header").addClass("on");

        } else{
            $("header").removeClass("on");
        }
        

        //section 이동 시 리모콘 클래스 추가 
        $("section").each(function() {
             
            if (scroll >= $(this).offset().top - 100) {
                $("li[data-id=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');

            } else if (scroll >= $('.page_3rd').offset().top + 700) {
                $("li[data-id=page_3rd]").removeClass('on');
                
            }
        });
    });

    // scroll js
    $("ul.gnb li").each(function() {
    
        var thisOffset = $("." + $(this).data('id')).offset().top;
    
        $(this).click(function() {
            $("html, body").animate({
                scrollTop : thisOffset
            },1000);
            $(this).addClass('on').siblings().removeClass('on');
        });
    });
});
