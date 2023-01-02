$(function (){
    var lastScroll = 0;
    $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if(scroll > 690) {
            $("header").addClass("on");
        }
        else{
            $("header").removeClass("on");
        }
        lastScroll = scroll;
    });
});


// $(function () {
// 	$('.gnb > li > a').click(function (){
//     	$('html, body').animate({scrollTop: $(this.hash).offset.top}, 700);
//     });
// });