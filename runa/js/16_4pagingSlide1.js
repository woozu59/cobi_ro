// pagingSlide(이동)
$(function(){
    $("ul.paging li").click(function(){
        var imgLeft = $(this).index() * -100 + '%';
        // 페이징의 인덱스 값을 받아와서 -100%씩 곱한값을 변수에 대입
        $("ul.images").animate({'margin-left':imgLeft},"fast");
        //absolute인 .images가 변수값을적용받아 left값이 변경되어 보여지는 이미지부분이 달라진다.
        $(this).addClass('on').siblings().removeClass('on');
    });
});
