// Opacity Slide(fade)
$(function(){
    $('img:gt(0)').hide();
    // img:gt(index)는 index 값보다 더 큰 값을 가진 요소를 선택한다. index 0보다 큰 1, 2을 추출해 감춘다.
    setInterval(function(){
        $('img:first-child').fadeOut()
                            .next('img').fadeIn().end()
                            .appendTo('.imgs');
        // 첫번째 객체를 fadeOut하고, 다음객체를 fadeIn하며, 끝에 도달하면 선택자를 .imgs의 자식요소로 추가
    },2000);
    // 한 텀을 2초동안 반복진행
});