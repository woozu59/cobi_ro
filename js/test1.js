$(function(){
    //이미지 호버, 클릭 시 큰 이미지로 변경되기 js
    let bigImg = document.querySelector('.finder_mug');
    let smallImg = document.querySelectorAll('.mini');

    for(let i = 0; i < smallImg.length; i++) {
        smallImg[i].onclick = changepic;
    };

    function changepic() {
        let smallImgAttribute = this.getAttribute('src');
        bigImg.setAttribute('src', smallImgAttribute);
    };


    //색상옵션 클릭 시 방향키 & 옵션리스트 나타나기 js
    var select = $('.select');
    
    select.click(function(){
        var color = $('.color');
        color.toggleClass('on');

        var selectList = $('ul.select_list');
        selectList.toggleClass('on');
    });

    //옵션리스트 클릭 시 해당 컬러장바구니영역 나타나기 js
    //data-id 이용해서 특정 id에 addClass넣기

    /*$("ul.select_list .selectbox").each(function(){
        $(this).click(function(){
           var check = $('#check');
           $('li[data-id=' + $('.quanti_area').attr('id').split('')[0] + ']')
        });
    });*/
    var selectBox = $('li.selectbox');
    selectBox.each(function(){
        $(this).click(function(){
            var quantiArea = $('.quanti_area');
            if (quantiArea.attr('id') == $('li[data-id=' + quantiArea.attr('id').split(' ')[0] + ']')) {
                quantiArea.addClass('on').siblings().removeClass('on');
            };
        });
    });    
});



    //수량 btn 클릭 시 수량 변경하기  js
    /*let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let result = document.querySelector('.price1');
    let total = document.querySelector('.total');
    let i = 1;

    plus.addEventListener("click",() => {
        i++
        result.textContent = i;
        let totalconstNum = i*17800;
        total.textContent = totalconstNum.toLocaleString();
    })
    minus.addEventListener("click",() => {
        if(i > 0){
            i--
            result.textContent = i;
            let totalconstNum = i*17800;
            total.textContent = totalconstNum.toLocaleString();
        }else{
            total.textContent = 0
        }
    })*/


    //장바구니영역의 xbtn클릭 시 삭제되기 js

    var xBtn = $('.xmark');
    xBtn.click(function(){
        $('.quanti_area').css('display','none');
    });

    //총 수량 및 금액 변경되기 js(증감버튼 클릭 시 동시에 적용할 수 있음)
    
