// 클릭 시 하위메뉴 열기, close버튼으로 하위메뉴 닫기
// $(".menu").click(function(){
//     $(".gnb").addClass("dpFlex bg82979a");
//     $("header").addClass("bgbbd9dd");
// });
// $(".close").click(function(){
//     $(".gnb").removeClass("dpFlex bg82979a");
//     $("header").removeClass("bgbbd9dd");
// });



// 토글클래스 이용하여 메뉴버튼이 close버튼으로 변경되며 같은 기능구현, 소스 줄이기
// $(".menu").click(function(){
//     $(".gnb").toggleClass("dpFlex bg82979a");
//     $("header").toggleClass("bgbbd9dd");
//     $(".gnb .close").show();
//     if($(window).width() > 640){
//         $(".menu").toggleClass("close");
//         $(".gnb .close").hide();
//     };
// });
// $(".gnb .close").click(function(){
//     $(".gnb").toggleClass("dpFlex bg82979a");
//     $("header").toggleClass("bgbbd9dd");
// });




//.menu를 fixed로 고정하여 사용할때
// $(".menu").click(function(){
//     $(".gnb").toggleClass("dpFlex bg82979a");
//     $("header").toggleClass("bgbbd9dd");
//     $(this).toggleClass("close");
// });



//메뉴버튼을 아이콘폰트로 사용했을때, 아이콘폰트 두개를 토글
// $("i").click(function(){
//     $(".gnb").toggleClass("dpFlex bg82979a");
//     $("header").toggleClass("bgbbd9dd");
//     $("i").toggle();
// });




//메뉴버튼을 아이콘폰트로 사용했을때, 아이콘폰트 내용을 변경
$(".material-icons").click(function() {
    $(".gnb").toggleClass("on");
    // toggleClass는 addClass+removeClass 합쳐놓은 상태로 본다.
    // 상태확인했을때, 넣고하자는 class가 존재하면 빼고, 없으면 넣는다.
    // $("header").toggleClass("bgbbd9dd");
    $(this).text(function(e, text) {
        return text === 'close' ? 'menu_open' : 'close'
    });
    //선택자의 텍스트를 뽑아 'close'와 비교해서 true값이면 'menu_open'(왼쪽)으로 바꾸고, false값이면 'close'(오른쪽)로 바꾼다.
    //이는 클릭할때마다 반복된다.
});


//애니메이션 효과를 이용하여 하위메뉴 동작시키기
// $(".gnb").hide();
// $(".gnb").slideUp(300);
// $("i.open").click(function(){
//     $(".gnb").slideDown(300);
// });
// $("i.close").click(function(){
//     $(".gnb").slideUp(300);
// });
// $("i.material-icons").click(function(){
//     $(".gnb").slideToggle(300);
//     $(this).text(function(i, text){
//         return text === 'close' ? 'menu_open' : 'close'
//     });
// });