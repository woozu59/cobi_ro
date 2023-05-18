// $(function(){
//     $('img:gt(0)').hide();
//     setInterval(function(){
//         $('img:first-child').fadeOut().next('img').fadeIn().end().appendTo('.slide_inner');
//     },2000);
// });
$(function(){
    var navBtn = $('.view_btn');
    navBtn.click(function(){
        var allNav = $('li.all');
        allNav.toggleClass('on');
    });
    
    
})