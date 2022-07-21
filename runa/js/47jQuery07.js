// 비밀번호 정규식 모음
// // 최소 8 자, 최소 하나의 문자 및 하나의 숫자
// const re2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
// const re2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

// // 최소 8 자, 대문자 하나 이상, 소문자 하나 및 숫자 하나
// const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// // 최소 8 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
// const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

// // 최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
// const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;


var id = RegExp(/^[a-zA-Z0-9]{4,12}$/);
var pass = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
var email = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
var named = RegExp(/^[가-힣]+$/);
var fmt = RegExp(/^\d{6}[1234]\d{6}$/) // 주민번호 정규식




// 아이디 유효성 검사
$("#id").keyup(function () {
    // 아이디 공백 확인
    if ($("#id").val() == "") {
        $("#idlog").text("아이디를 입력해주세요");
        $("#id").focus();
        return false;
    }
    // 아이디를 정규식으로 테스트
    else if (!id.test($("#id").val())) {
        $("#idlog").text("형식에 맞게 입력해주세요");
        $("#id").focus();
        return false;
    } else { // 합당한 경우
        $("#idlog").text("");
    }
});

// 비밀번호 유효성 검사
$("#pw").keyup(function () {
    // 비밀번호 공백 확인
    if ($("#pw").val() == "") {
        $("#pwlog").text("비밀번호를 입력해주세요");
        $("#pw").focus();
        return false;
    }
    // 아이디와 비밀번호를 동일하게 쓴 경우
    else if ($("#id").val() == $("#pw").val()) {
        $("#pwlog").text("아이디와 비밀번호가 같습니다");
        $("#pw").val("");
        $("#pw").focus();
        return false;
    }
    // 비밀번호 정규식으로 테스트
    else if (!pass.test($("#pw").val())) {
        $("#pwlog").text("형식에 맞게 입력해주세요");
        $("#pw").focus();
        return false;
    } else { // 합당한 경우
        $("#pwlog").text("");
    }
});
// 비밀번호 확인란 유효성 검사
$("#checkpw").keyup(function () {
    // 비밀번호 확인란 공백 확인
    if ($("#checkpw").val() == "") {
        $("#checkpwlog").text("비밀번호 확인란을 입력해주세요");
        $("#checkpw").focus();
        return false;
    }
    // 비밀번호 서로확인
    else if ($("#pw").val() != $("#checkpw").val()) {
        $("#checkpwlog").text("비밀번호가 상이합니다");
        // $("#checkpw").val("");
        $("#checkpw").focus();
        return false;
    } else { // 서로 맞는경우
        $("#checkpwlog").text("");
    }
});

//이메일 유효성 검사
$("#email").keyup(function () {
    //이메일 공백 검사
    if ($("#email").val() == "") {
        $("#emaillog").text("이메일을 입력 해주세요");
        $("#email").focus();
        return false;
    }
    //이메일 유효성 검사
    else if (!email.test($("#email").val())) {
        $("#emaillog").text("이메일형식에 맞게 입력해주세요");
        // $("#email").val("");
        $("#email").focus();
        return false;
    } else { // 서로 맞는경우
        $("#emaillog").text("");
    }
});

//이름 유효성 검사
$("#name").keyup(function () {
    //이름 공백 검사
    if ($("#name").val() == "") {
        $("#namelog").text("이름을 입력해주세요");
        $("#name").focus();
        return false;
    }
    //이름 유효성 검사
    else if (!named.test($("#name").val())) {
        $("#namelog").text("이름형식에 맞게 입력해주세요");
        // $("#name").val("");
        $("#name").focus();
        return false;
    } else { // 서로 맞는경우
        $("#namelog").text("");
    }
});

//주민등록번호 유효성 검사
$("#num2").keyup(function () {
    // 주민등록번호 공백여부 체크
    if (($("#num1").val() == "") || ($("#num2").val() == "")) {
        $("#numlog").text("주민번호를 입력해주세요");
        return false;
    } else if (fmtCheck() == false) { // 주민등록번호 규칙이 맞는경우
        $("#numlog").text("");
        return false;
    }
    showPostBt();
});

// 주민등록번호 존재 검사 및 생년월일 추출 후 전달
//fmtCheck()의 값이 false가 나와야 조건에 맞는 경우로 제작되어 있음
function fmtCheck() {
    var jumin = $("#num1").val() + $("#num2").val(); // 주민등록번호 13자리 출력
    // 주민등록번호 유효성 검사
    if (!fmt.test(jumin)) {
        $("#numlog").text("주민등록번호 형식에 맞게 입력해주세요");
        return false;
    }

    var buf = new Array(13); // 주민번호 13자리 배열 생성
    for (var i = 0; i < buf.length; i++) {
        buf[i] = parseInt(jumin.charAt(i));
        // 주민등록번호를 한자리씩 추출해서 배열로 만들기
    }
    var sum = 0;
    var multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]; // 밑에 더해주는 12자리 숫자들 

    for (var i = 0; i < 12; i++) {
        sum += (buf[i] *= multipliers[i]);
    }
    // 개인정보상 buf의 13번째 숫자는 3이다
    if ((11 - (sum % 11)) % 10 != buf[12]) {
        $("#numlog").text("존재하지 않는 주민등록번호 입니다");
        $("#num1").focus();
        return false;
    }

    var birthYear = (jumin.charAt(6) <= "2") ? "19" : "20";
    //2000년대 생인지 1900년대 생인지 구분 삼항연산자
    birthYear += $("#num1").val().substr(0, 2);
    var birthMonth = $("#num1").val().substr(2, 2);
    var birthDate = $("#num1").val().substr(4, 2);
    // 주민번호에서 생년월일 추출하여 입력
    $("#years").val(birthYear);
    $("#month").val(birthMonth);
    $("#day").val(birthDate);

}

// 모든폼에 입력을 다하면(유효성검사 완료) 전송하기 버튼 출력
$('#postBt').hide();
function showPostBt(){
    var allLogClear = $('#join input');
    if(allLogClear.val() !== ""){
        $('#postBt').show();
    }
}

