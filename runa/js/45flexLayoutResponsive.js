$(function () {
    // 리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    // nav여닫기
    $('.btMenu').click(function () {
        $('nav').toggleClass('on');
        $('main section').toggleClass('on');
    });
    $('.cancel').click(function () {
        $('nav').removeClass('on');
        $('main section').removeClass('on');
    });
    // 하위메뉴 여닫기
    $(".sub_menu").hide();
    $("ul.menu > li > div").click(function (e) {
        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드토글
        $("ul.menu > li > div").not(this).next().slideUp(300);
        //this가 아니라면 다음 요소는 슬라이드업
        e.preventDefault();
    });

    // Ajax로 각 자료 콘텐츠 가져오기
    $('.ajax a').click(function (e) {
        e.preventDefault();
        var url = this.href; // 각 페이지 주소가져오기
        $('section').children().remove(); // 이전 페이지의 콘텐츠를 제거
        $('section').load(url + ' section > *').hide().fadeIn('slow');
    });

    //----------------------------- 47jQuery04 제이쿼리 기초용
    $(".gnb").click(function () {
        $(".gnb").addClass("on");
        //alert("버튼을 클릭했습니다");
        //console.log("버튼 눌림!!");
    });

    // $(window).resize(function(){
    //     var calc = $("p").width();
    //     console.log("현재 p태그의 가로사이즈는"+calc+"px입니다");
    // });
    $("#on").click(function () {
        var calc2 = $("p").height();
        console.log("버튼을 클릭하니 P태그의 높이가" + calc2 + "px로 나옵니다");
    });

    //----------------------------- 47jQuery04 탭메뉴
    // 탭메뉴 가로형
    $(".tab ul li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    // 탭메뉴 세로형
    $(".tabV ul li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    //----------------------------- 47jQuery04 Buttonslide구현
    $(".btnSlide_next").click(function () {//next버튼을 눌렀을때
        if (!$(".btSlide li").last().is(":visible")) {
            //!는 부정연산자로써, li 마지막 객체가 :visible이 flase일때를 뜻한다
            $(".btSlide li:visible").hide().next("li").fadeIn(400);
            //보이던 객체를 숨기고 다음객체를 0.4초안에 보여줌
            //fadeIn(400) 1000분의 1초*400이며 기본값이다
            $(".btnSlide_prev").removeClass("off");
        }
        if ($(".btSlide li").last().is(":visible")) {
            //li 마지막 객체가 :visible이 true일때
            $(".btnSlide_next").addClass("off");
        }
        return false;
    });

    $(".btnSlide_prev").click(function () {//prev버튼을 눌렀을때
        if (!$(".btSlide li").first().is(":visible")) {
            //!는 부정연산자로써, li 첫번째 객체가 :visible이 flase일때를 뜻한다
            $(".btSlide li:visible").hide().prev("li").fadeIn(400);
            //보이던 객체를 숨기고 이전객체를 0.4초안에 보여줌
            //fadeIn(400) 1000분의 1초*400이며 기본값이다
            $(".btnSlide_next").removeClass("off");
        }
        if ($(".btSlide li").first().is(":visible")) {
            //li 첫번째 객체가 :visible이 true일때
            $(".btnSlide_prev").addClass("off");
        }
        return false;
    });

    //----------------------------- 47jQuery04 pagingSlide구현
    $("ul.paging li").click(function () {
        var imgLeft = $(this).index() * -2000;
        $("ul.pageSlide").animate({ left: imgLeft }, "fast");
        $(this).addClass('on').siblings().removeClass('on');
    });

    //----------------------------- 47jQuery04 아코디언구현
    $(".acc .content").hide();
    $("ul.acc > li > .title").click(function () {
        $(this).next().slideToggle(300);
        $("ul.acc > li > .title").not(this).next().slideUp(300);
        $(this).parent().toggleClass('on').siblings().removeClass('on');
    });

    //----------------------------- 47jQuery04 task list 구현

    // 차례로 나타내기
    var taskList = $('.task > ul > li');

    taskList.hide().each(function (index) {
        $(this).delay(700 * index).fadeIn(1700);
    });

    // 할 일 갯수 표시
    function updateCount() {
        var taskNum = $('.task > ul > li[class!=complete]').length; // 완료된 할 일 제외 갯수세기
        $('#counter').text(taskNum);
    }
    updateCount(); // 함수를 호출한다

    // // 할 일 추가
    var newTaskForm = $('#newTaskForm');
    var textInput = $('input:text');

    newTaskForm.on('submit', function (e) {
        e.preventDefault();
        // a나 submit 태그가 링크 이동하거나, 새로고침되는 것을 막는다. 폼전송 중단.
        var newText = $('input:text').val();
        $('li:last').after('<li class="cool">' + newText + '</li>');
        // input에 입력된 값을 li의 텍스트로 추가
        textInput.val(''); // 다시 input 비우기
        updateCount(); // 할 일 갯수 업데이트
    });

    // // 클릭 이벤트
    var item = ''; // 빈 문자열을 선언
    var task = $('.task ul'); // 할 일 목록 선언
    task.on('click', 'li', function () {
        var $this = $(this); // 클릭한 요소를 변수에 저장
        var complete = $this.hasClass('complete'); // 할 일 완료상태

        if (complete === true) { //할 일 완료상태인지 확인
            $this.animate({
                opacity: 0
            }, 500, function () { // 애니메이션이 완료되면 함수실행
                $this.remove(); // 할 일 삭제
            });
        } else { //아직 해야 할 일이면
            item = $this.text();             // 목록 아이템의 텍스트를 가져온다
            $this.remove();                  // 목록 아이템을 제거한다

            // 완료된 할 일을 목록의 끝에 다시 추가
            task.append('<li class="complete">' + item + '</li>')
                .hide().fadeIn(300); // 숨긴 후 페이드 인 효과
            updateCount(); // 할 일 갯수 업데이트
        }
    });


    


    
    //셀렉트안에 옵션 채우기
    for (var i = 49; i >= 1; i--) {
        $('#montly').append(new Option('No.'+i+'호', '../files/no'+i+'_newsletter.jpg'));
    }
    //옵션선택시 웹페이지 이동
    $('#montly').on('change', function () {
        var url = $(this).val();
        if (url) {
            // window.location = url; //target_self
            window.open(url); //target_blank
        }
        return false;
    });

});


