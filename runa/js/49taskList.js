$(function() {
    
    // 차례로 나타내기
    var taskList = $('li');

    taskList.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(1700);
    });

    // // 할 일 갯수 표시
    function updateCount() {
        var taskNum = $('li[class!=complete]').length; // 완료된 할 일 제외 갯수세기
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
    task.on('click', 'li', function() {
        var $this = $(this); // 클릭한 요소를 변수에 저장
        var complete = $this.hasClass('complete'); // 할 일 완료상태

        if (complete === true) { //할 일 완료상태인지 확인
            $this.animate({
                opacity: 0
            }, 500, function() { // 애니메이션이 완료되면 함수실행
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

});