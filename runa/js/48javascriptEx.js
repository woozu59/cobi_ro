// 주의: textContent 속성은 IE8 혹은 그 이전 버전에서는 동작하지 않음
//------------------------------------ 현재 시간에 따른 인사말 출력
var today = new Date(); // 신규시간생성
var hourNow = today.getHours(); // 현재시 추출
var greeting;

if (hourNow > 18) { //19~24
    greeting = '편안한 밤 되세요 :)';
} else if (hourNow > 12) { //13~18
    greeting = '나른한 오후입니다 :9';
} else if (hourNow > 8) { //9~12
    greeting = '좋은 아침입니다 :D';
} else {//0~8
    greeting = '안녕하세요';
}
// document.write(greeting); 
// 콘솔 출력용, 페이지에 콘텐츠를 바로 볼 수 있다.
// 페이지가 로드 된 후에만 동작하며, 이 메서드는 전체 페이지를 덮어쓰는 형식이라 기존 페이지에 콘텐츠를 추가하는 것이 아닌 새로운 페이지를 만드는 개념이다. 유효성을 검사하는 페이지에서는 문제를 발생시킬 수 있어서 요즘은 쓰지 않는다.

document.getElementById('greeting').textContent = greeting;
// 객체지정 텍스트출력

// document.getElementById('greeting').innerHTML  = '<b>'+ greeting +'</b>';
// 객체지정 태그포함 내용출력
// 사용자로부터 입력받은 값을 추가할 때 이 메서드를 사용하면 보안이슈가 생길 수 있으니, 사용시 주의 하자



//------------------------------------ 배열의 이해
// 변수를 선언한 후 해석기에게 이 변수가 배열임을 알려준다.
// 그런 후 괄호 안에 배열의 값을 나열한다 
// var colors = new Array('white', 'black','custom');
// // 배열의 첫 번째 아이템을 출력한다.
// var elColors = document.getElementById('colors');
// elColors.textContent = colors[2];



// 배열을 생성하고 값을 대입한다.
var colors = ['white', 'black', 'custom'];
// 배열의 세 번째 아이템을 수정한다.
colors[2] = 'beige';
// id 특성 값이 colors인 요소를 찾는다.
var elColors = document.getElementById('colors');
// 배열의 세 번째 아이템의 값을 출력한다.
elColors.textContent = colors[2];



//------------------------------------ 커스텀 명찰 금액계산
(function () {

    var name = '루나';
    var message = '님, 주문 내역을 확인해 주세요!';

    // 세 변수 값을 결합하여 환영 메시지를 만든다.
    var welcome = greeting + '<br/>' + name + message;

    // 명찰의 상세 정보를 저장할 변수를 선언한다.
    var sign = '컴퓨터그래픽스운용기능사';
    var tiles = sign.length; //글자수세기
    var subTotal = tiles * 3200;
    var shipping = 2500;
    var grandTotal = subTotal + shipping;

    // id 특성 값이 greeting2인 요소를 찾는다.
    var elWelcome = document.getElementById('greeting2');
    // 환영 메시지를 출력한다.
    elWelcome.innerHTML = welcome;

    // id 특성 값이 userSign인 요소를 찾아 내용을 수정한다.
    var elSign = document.getElementById('userSign');
    elSign.textContent = sign;

    // id 특성 값이 tiles인 요소를 찾아 내용을 수정한다.
    var elTiles = document.getElementById('tiles');
    elTiles.textContent = tiles + '개';

    // id 특성 값이 subTotal인 요소를 찾아 내용을 수정한다.
    var elSubTotal = document.getElementById('subTotal');
    elSubTotal.textContent = subTotal + '원';

    // id 특성 값이 shipping인 요소를 찾아 내용을 수정한다.
    var elShipping = document.getElementById('shipping');
    elShipping.textContent = shipping + '원';

    // id 특성 값이 grandTotal인 요소를 찾아 내용을 수정한다.
    var elGrandTotal = document.getElementById('grandTotal');
    elGrandTotal.textContent = grandTotal + '원';

})();

//------------------------------------ 객체 선언하는 방법
// 객체표기법 축약식
var hotel = {
    name: 'suite',
    rooms: '20',
    booked: '15',
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};
var elName0 = document.getElementById('roomName0');
elName0.textContent = hotel.name;

var elRooms = document.getElementById('rooms0');
elRooms.textContent = hotel.checkAvailability();

// 생성자 표기법
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }
};
var standardHotel = new Hotel('standard', '120', '77');
var deluxeHotel = new Hotel('deluxe', '60', '42');
var suiteHotel = new Hotel('suite', '35', '24');
// 템플릿(생성자)을 지정하여 추가하는 경우가 아니라면, 객체 추가시 입력의 불편함이 있다.
// 객체표기법 축약식으로 입력시
// var hotel01 = {
//     name: 'standard',
//     rooms: '120',
//     booked: '77',
//     checkAvailability: function(){
//         return this.rooms - this.booked;
//     }
// };
// var hotel02 = {
//     name: 'deluxe',
//     rooms: '60',
//     booked: '42',
//     checkAvailability: function(){
//         return this.rooms - this.booked;
//     }
// };
// var hotel03 = {
//     name: 'suite',
//     rooms: '35',
//     booked: '24',
//     checkAvailability: function(){
//         return this.rooms - this.booked;
//     }
// };


var elName1 = document.getElementById('roomName1');
var elRooms1 = document.getElementById('rooms1');

var elName2 = document.getElementById('roomName2');
var elRooms2 = document.getElementById('rooms2');

var elName3 = document.getElementById('roomName3');
var elRooms3 = document.getElementById('rooms3');

elName1.textContent = standardHotel.name;
elRooms1.textContent = standardHotel.checkAvailability();

elName2.textContent = deluxeHotel.name;
elRooms2.textContent = deluxeHotel.checkAvailability();

elName3.textContent = suiteHotel.name;
elRooms3.textContent = suiteHotel.checkAvailability();


//------------------------------------ 배열을 이용하여 객체 선언하는 방법

// 배열내의 객체
var runaHotel = [
    {
        name: 'suite',
        rooms: 40,
        booked: 25,
        checkAvailability: function () {
            return this.rooms - this.booked;
        }
    },
    {
        name: 'premium',
        rooms: 10,
        booked: 5,
        checkAvailability: function () {
            return this.rooms - this.booked;
        }
    }
];
document.getElementById('objInArray').textContent = runaHotel[0].name;


// 속성으로서의 객체
var runaHotel = {
    suite: {
        rooms: 40,
        booked: 25,
        checkAvailability: function () {
            return this.rooms - this.booked;
        }
    },
    premium: {
        rooms: 10,
        booked: 5,
        checkAvailability: function () {
            return this.rooms - this.booked;
        }
    }
};
document.getElementById('arrayInObj').textContent = runaHotel.premium.checkAvailability();


//------------------------------------ 객체모델의 활용
//브라우저 객체모델(브라우저 관련정보 수집/출력)
window.onresize = function () {
    var msgSW = window.screen.width;
    var msgSH = window.screen.height;
    var msgWW = window.innerWidth;
    var msgWH = window.innerHeight;
    var msgWL = window.location;
    document.getElementById('screenWidth').textContent = msgSW;
    document.getElementById('screenHeight').textContent = msgSH;
    document.getElementById('winWidth').textContent = msgWW;
    document.getElementById('winHeight').textContent = msgWH;
    document.getElementById('winLocation').textContent = msgWL;
}();

//문서 객체모델(문서 관련정보 수집/출력)
(function () {
    document.getElementById('docTitle').textContent = document.title;
    document.getElementById('docURL').textContent = document.URL;
    document.getElementById('docUpdate').textContent = document.lastModified;
})();

//전역객체: String객체
(function () {

    // 문자열을 저장할 saying 변수를 선언한다.
    var saying = 'Home sweet home ';

    // 페이지에 출력할 결과를 저장할 msgString 변수를 선언한다.
    // 문자열의 길이를 알아낸 후 이 결과를 msgString 변수에 저장한다.
    var msgString = '<table><tr><th>문자길이</th><td>' + saying.length + '</td>';
    // 문자열을 모두 대문자로 변경한 후 msgString 변수에 저장한다.
    msgString += '<th>대문자로 변경</th><td>' + saying.toUpperCase() + '</td></tr>';
    // 문자열을 모두 소문자로 변경한 후 msgString 변수에 저장한다.
    msgString += '<tr><th>소문자로 변경</th><td>' + saying.toLowerCase() + '</td>';
    // 12번째 인덱스에 해당하는 문자를 찾은 후 msgString 변수에 저장한다.
    msgString += '<th>문자 인덱스: 12</th><td>' + saying.charAt(12) + '</td></tr>';
    // ee가 처음으로 나타나는 위치의 인덱스 번호를 찾아 msgString 변수에 저장한다.
    msgString += '<tr><th>ee의 첫 번째 위치</th><td>' + saying.indexOf('ee') + '</td>';
    // e 문자가 마자막으로 사용된 위치의 인덱스 번호를 찾아 msgString 변수에 저장한다.
    msgString += '<th>e의 마지막 위치</th><td>' + saying.lastIndexOf('e') + '</td></tr>';
    // 인덱스 번호 8부터 14 사이의 문자들을 모두 찾아 msgString 변수에 저장한다.
    msgString += '<tr><th>인덱스 범위: 8-14 만 출력</th><td>' + saying.substring(8, 14) + '</td>';
    // 문자열 내에서 처음으로 me가 사용된 곳을 찾아 w로 대체한 후, 그 결과를 msgString 변수에 저장한다.
    msgString += '<th>내용 변경</th><td>' + saying.replace('me', 'w') + '</td></tr></table>';

    var Info = document.getElementById('stringInfo');
    Info.innerHTML = msgString;
})();




//------------------------------------ 숫자 다루기
// 숫자를 저장할 변수를 선언
var originalNumber = 10.23456;
document.getElementById('num').textContent = originalNumber;

var toFixed = originalNumber.toFixed(3);
document.getElementById('numFixed').textContent = toFixed;
var toPrecision = originalNumber.toPrecision(3);
document.getElementById('numPrecision').textContent = toPrecision;

document.getElementById('numRound').textContent = Math.round(originalNumber); // 반올림
document.getElementById('numFloor').textContent = Math.floor(originalNumber); // 버림
document.getElementById('numCeil').textContent = Math.ceil(originalNumber); // 올림
document.getElementById('numTrunc').textContent = Math.trunc(originalNumber); // 정수

document.getElementById('numRandom').textContent = Math.floor((Math.random() * 10) + 1); // 1~10 임의의 수





//------------------------------------ 날짜 다루기
// 현재 년도를 저장할 변수를 선언한다.
var year = today.getFullYear();
document.getElementById('nowYear').innerHTML = 'Copyright &copy;' + year;


// 회사의 설립일을 설정한다.
var est = new Date('Apr 16, 1996 15:45:55');
// 회사의 설립일과 현재 시간 사이의 차이를 계산한다.
var difference = today.getTime() - est.getTime();
// 밀리 초를 숫자로 나누어 햇수를 계산한다.
difference = (difference / 31556900000);
// id since인 요소를 저장할 since 변수를 선언한다.
var since = document.getElementById('since');
since.textContent = '루나호텔은 ' + Math.floor(difference) + '년 전통의 호텔입니다!';




//------------------------------------ 구문
// switch구문
var msgLevel; // 각 레벨 별 출력메시지
var level = 3;  // 지정레벨
// 레벨에 따라 메시지를 결정한다.
switch (level) {
    case 1:
        msgLevel = '첫 번째 단계입니다. 행운을 빕니다!';
        break;
    case 2:
        msgLevel = '3단계 중 두 번째 단계를 완료했습니다. 힘내세요!';
        break;
    case 3:
        msgLevel = '마지막 단계입니다. 이제 막바지에요!';
        break;
    default:
        msgLevel = '행운을 빕니다!';
        break;
}
document.getElementById('switch').textContent = msgLevel;



// while구문
(function () {
    var i = 1; // 카운터 변수의 값을 1로 설정
    var msgMultiplication = ''; // 메시지 공란으로 추가

    // 구구단의 5단을 변수에 저장한다.
    while (i < 10) {
        msgMultiplication += i + ' x 9 = ' + (i * 9) + '<br />';
        i++;
    }
    document.getElementById('while').innerHTML = msgMultiplication;
})();



// do...while구문
(function () {
    var n = 1; // 카운터 변수의 값을 1로 설정
    var msgMultiplication2 = ''; // 메시지 공란으로 추가

    do {
        msgMultiplication2 += n + ' x 9 = ' + (n * 9) + '<br />';
        n++;
    } while (n < 1); // n 변수에 이미 1을 대입하고 do부분의 코드가 실행되었다. 1회이상은 진행됨.
    document.getElementById('doWhile').innerHTML = msgMultiplication2;
})();



// for구문
(function () {
    var scores = [24, 32, 17]; // 점수의 배열
    var arrayLength = scores.length; // 배열 내의 아이템의 갯수
    var roundNumber = 0; // 현재 응시 회차
    var msgFor = ''; // 메시지

    // 배열의 아이템 갯수만큼 루프를 실행한다.
    for (var i = 0; i < arrayLength; i++) {
        // 배열의 인덱스는 0부터 시작한다 (따라서 0이 1회차를 의미한다.)
        // 현재 회차에 1을 더한다.
        roundNumber = (i + 1);
        // 현재 회차를 메시지에 추가한다.
        msgFor += '응시회차 ' + roundNumber + '회: ';
        // 점수 배열에서 점수를 얻어온다.
        msgFor += scores[i] + '점<br />';
    }
    document.getElementById('for').innerHTML = msgFor;
})();





//------------------------------------ tasklist javascript로 접근하기
var list = document.getElementsByTagName('ul')[0];
// <ul>태그를 변수로 가져온다

// 목록의 끝에 아이템을 추가
var newTaskLast = document.createElement('li');
// 끝에 붙일 <li>요소를 신규 생성하여 변수에 선언
var newTextLast = document.createTextNode('퇴근하기');
// 텍스트 노드를 신규생성한다
// 자바스크립트에서 DOM개념은 맨 하위요소에 텍스트가 있다면 그 또한 텍스트노드로 취급한다
newTaskLast.appendChild(newTextLast);
// 신규 생성한 <li>에 텍스트를 노드로 추가한다
list.appendChild(newTaskLast);
// <ul>에 자식인 텍스트를 노드로 추가한 <li>를 마지막 항목으로 추가한다

// 목록의 시작에 아이템을 추가
var newTaskFirst = document.createElement('li');
// 시작에 붙일 <li>요소를 신규 생성하여 변수에 선언
var newTextFirst = document.createTextNode('기상 후 씻기');
// 텍스트 노드를 신규생성한다
newTaskFirst.appendChild(newTextFirst);
// 신규 생성한 <li>에 텍스트를 노드로 추가한다
list.insertBefore(newTaskFirst, list.firstChild);
// <ul>에 자식인 텍스트를 노드로 추가한 <li>를 첫번째 항목으로 추가한다 
// list.firstChild는 '출근하기'이며, 그 전에 삽입하라는 명령이다



var taskLists = document.querySelectorAll('li');
// 모든 <li>를 변수로 가져온다

// 모든 <li>에 class값을 cool로 변경한다
var i;
for (i = 0; i < taskLists.length; i++) {
    taskLists[i].className = 'cool';
}

// 제목에 아이템의 갯수를 추가한다.
var heading = document.querySelector('h4.txtCenter');
// txtCenter라는 클래스값을 가진 h4 요소를 변수로 가져온다
var headingText = heading.firstChild.nodeValue;
// 할 일 목록이 heading의 첫번째 자식은 텍스트 노드이다. 이를 변수로 가져온다
var totalItems = taskLists.length;
// 모든 <li> 갯수를 변수에 저장한다
var newHeading = headingText + '<span>' + totalItems + '</span>';
// 제목 내용을 수정하여 변수에 저장한다
heading.innerHTML = newHeading;
// h4 요소의 콘텐츠를 수정한다





//------------------------------------ 화살표 함수 사용하기
// 함수선언 기본형
// function 함수이름(파라미터){
//     //파라미터를 활용한 실행문;
// }
// 함수이름(); //콜링

// (파라미터) => { 처리내용 }
// 화살표 함수 기본형

const calcSum = (a, b, c) => {
    const result = a + b + c;
    return result;
};
document.querySelector('#calcSum').textContent = calcSum(1, 2, 3);
// querySelector는 셀렉터명, ID명, 클래스명 등의 지정을 통해 HTML 요소를 읽어 올 수 있다.

// 생략형
// 파라미터가 하나인 경우는 ( )의 생략이 가능하나, 파라미터가 없거나 2개 이상인 경우는 생략할 수 없다
const myFunction1 = (a) => {
    return a + 2;
};
// 이러한 형태를 아래로 형태로 변경가능
const myFunction2 = a => {
    return a + 2;
};
document.querySelector('#myFunction').textContent = myFunction2(10);
// 화살표 함수의 정의가 한 줄인 경우 { }와 return을 생략 할 수 있다
const myFunction3 = (a) => a + 2; // 파라미터가 1개면 ()도 생략가능
document.querySelector('#myFunction3').textContent = myFunction3(30);




//------------------------------------ 함수의 파라미터 초깃값 설정하기
// 세금이 포함된 가격을 반환하는 함수

const calcFunction = (price, tax = 0.08) => {
    const result = price + price * tax;
    return result;
};
// tax의 인수를 생략하면 초깃값 0.08이 사용됨
const result1 = calcFunction(100);
document.querySelector('#calcPrice1').textContent = result1;
// tax의 전달 값을 지정하면 해당 값이 사용됨
const result2 = calcFunction(100, 0.1);
document.querySelector('#calcPrice2').textContent = result2;



//------------------------------------ 배열에서 반복작업하기
// 여러 데이터를 다루는 배열은 루프 처리, 반복 처리 등 각 요소를 일괄적으로 처리하는 경우가 많다.
// forEach( )는 주어진 콜백Callback 함수를 사용해 배열의 요소를 순서대로 처리한다.
// 배열.forEach((콜백함수) => {실행문}); 형태로 작성한다.
// 콜백 함수는 해당 요소 데이터, 인덱스, 기존 배열 정보를 가져온다.
// 콜백 함수에서 인덱스와 기존 배열 정보는 생략할 수 있다.


const userList = [
    { id: 1, name: '곰', address: '청주' },
    { id: 2, name: '여우', address: '대전' },
    { id: 3, name: '사자', address: '세종' }
];
const container = document.querySelector('#userList');

// userList 배열의 각 요소별 루프 처리
userList.forEach((userData) => {
    // 각 요소 데이터를 쓰기
    container.innerHTML += `
        <div class="w30">
            <h4>${userData.name}</h4>
            <p>지역：${userData.address}</p>
        </div>
    `;
});
// 결과를 출력하기 위해서 문자열과 변수를 합쳐주는 부분이 문자와 변수가 많이질수록 가독성을 해칠 위험이 있다.
// 따라서 `(GRAVE ACCENT) 와 $, {}를 사용(변수 직접출력방식 사용)하게 되는데, `` 로 묶인 부분은 string 으로 인식되고 ${ } 안은 변수로서 인식한다.




//------------------------------------ 전통적인 DOM 이벤트 핸들러
function checkUsername() {
    const elMsg = document.querySelector('#feedback');
    if (elUsername.value.length < 5) { // 사용자 이름이 짧으면
        elMsg.textContent = 'ID는 5글자 이상이어야 합니다.'; // 메시지를 출력한다.
    } else {
        elMsg.textContent = ''; // 메시지를 제거한다.
    }
}
const elUsername = document.querySelector('#username'); // username 입력 상자를 가져온다.
elUsername.onblur = checkUsername;  // 요소가 포커스를 잃을 때 checkUsername() 함수를 실행한다.




//------------------------------------ DOM 레벨 2 이벤트리스너
// 기본형
function checkUsername2() {
    const elMsg2 = document.querySelector('#feedback2');
    if (elUsername2.value.length < 5) { // 이름이 짧으면
        elMsg2.textContent = 'ID는 5글자 이상이어야 합니다.'; // 메시지를 표시한다.
    } else {
        elMsg2.textContent = ''; // 메시지를 제거한다. 
    }
}
const elUsername2 = document.querySelector('#username2'); // username2 입력 상자를 가져온다.
elUsername2.addEventListener('blur', checkUsername2, false);
// 요소가 포커스를 잃을 때 checkUsername2() 함수를 호출한다.



// 매개변수를 가진 이벤트 핸들러와 리스너
const elUsername3 = document.querySelector('#username3');
const elMsg3 = document.querySelector('#feedback3');

function checkUsername3(minLength) {
    if (elUsername3.value.length < minLength) { // 사용자의 이름이 minLength보다 짧으면
        // 에러 메시지를 생성한다.
        elMsg3.innerHTML = `이름은 ${minLength}글자 이상이어야 합니다.`; // 메시지를 표시한다.
    } else {
        elMsg3.innerHTML = ''; // 메시지를 제거한다.
    }
}
elUsername3.addEventListener('blur', function () {// 요소가 포커스를 잃을 때 익명함수 실행
    checkUsername3(15); // 파라미터 전달
}, false);



//------------------------------------ 이벤트 무효화
// 체크박스를 활성화하면 스크롤이 안되게 만들기

let enableMouseWheel = true; // 마우스 휠 기능이 될때를 변수에 선언
const mwhCheck = document.querySelector('#mwhToggle');
const scrollBox = document.querySelector('.scroll');

// 체크박스 클릭 시 이벤트 처리
// 요소.addEventListener('이벤트', 익명함수(){
//     함수(파라미터);
// }, boolean);
// (파라미터) => { 처리내용 }의 화살표 함수로 축소화
mwhCheck.addEventListener('click', (e) => {
    enableMouseWheel = e.target.checked === false;
    // 체크박스에 값이 들어오면(클릭에 대한 이벤트가 실행)(true) === false이면
    // false를 도출해서 enableMouseWheel = fales가 되게 한다.
    // 휠이 불가능하게 만든다.
}, false);

// 스크롤 요소에서 스크롤 시 이벤트 처리
scrollBox.addEventListener('wheel', (e) => {
    if (enableMouseWheel === true) {
        // enableMouseWheel = true일시 스크롤 무효화를 스킵
        return;
    }
    e.preventDefault();
    // scrollBox에 스크롤 이벤트가 들어오면 e.preventDefault( ) 무효화 실행
}, false);



//------------------------------------ 폼 컨트롤(addEventListener의 boolean생략)
// input[type='text'] 요소 참조 출력
const mytxt = document.querySelector('#mytxt');
// 입력 이벤트 발생 확인
mytxt.addEventListener('input', (e) => {
    const value = e.target.value;
    document.querySelector('#mytxtlog').textContent = value;
});



// input[type='password'] 요소 참조 출력
const mypw = document.querySelector('#mypw');
// 입력 이벤트 발생 확인
mypw.addEventListener('input', (e) => {
    const value = e.target.value;
    document.querySelector('#mypwlog').textContent = value;
});


// input[type='color'] 요소 참조 출력
const myColor = document.querySelector('#myColor');
// 변경 이벤트 발생 확인
myColor.addEventListener('change', (e) => {
    const colorvalue = e.target.value; //값 가져오기
    // 화면에 표시
    const log = `${colorvalue} 색상이 선택되었습니다.`;
    const myColorlog = document.querySelector('#myColorlog');
    myColorlog.textContent = log;
    myColorlog.style.backgroundColor = colorvalue;
});


// select 요소 참조 출력
const mySelect = document.querySelector('#mySelect');
// 변경 이벤트 발생 확인
mySelect.addEventListener('change', () => {
    const selectvalue = mySelect.value; // 값 가져오기
    // 화면에 표시
    const mySelectlog = `선택된 값은 ${selectvalue}입니다.`;
    document.querySelector('#mySelectlog').textContent = mySelectlog;
});


// select(배열참조) 요소 참조 출력
// 행정표준코드에 따른 지역별 코드 배열
const PREF_LIST = [
    { value: 1100, name: '서울' },
    { value: 3611, name: '세종' },
    { value: 2600, name: '부산' },
    { value: 2700, name: '대구' },
    { value: 2800, name: '인천' },
    { value: 2900, name: '광주' },
    { value: 3000, name: '대전' },
    { value: 3100, name: '울산' },
    { value: 5011, name: '제주' },
    { value: 5013, name: '서귀포' },
    { value: 4111, name: '수원' },
    { value: 4128, name: '고양' },
    { value: 4113, name: '성남' },
    { value: 4146, name: '용인' },
    { value: 4119, name: '부천' },
    { value: 4127, name: '안산' },
    { value: 4122, name: '평택' },
    { value: 4115, name: '의정부' },
    { value: 4157, name: '김포' },
    { value: 4121, name: '광명' },
    { value: 4145, name: '하남' },
    { value: 4129, name: '과천' },
    { value: 4211, name: '춘천' },
    { value: 4213, name: '원주' },
    { value: 4215, name: '강릉' },
    { value: 4221, name: '속초' },
    { value: 4313, name: '충주' },
    { value: 4420, name: '아산' },
    { value: 4511, name: '전주' },
    { value: 4513, name: '군산' },
    { value: 4519, name: '남원' },
    { value: 4611, name: '목포' },
    { value: 4613, name: '여수' },
    { value: 4615, name: '순천' },
    { value: 4623, name: '광양' },
    { value: 4711, name: '포항' },
    { value: 4713, name: '경주' },
    { value: 4715, name: '김천' },
    { value: 4717, name: '안동' },
    { value: 4719, name: '구미' },
    { value: 4725, name: '상주' },
    { value: 4812, name: '창원' },
    { value: 4817, name: '진주' },
    { value: 4822, name: '통영' },
    { value: 4824, name: '사천' },
    { value: 4825, name: '김해' },
    { value: 4831, name: '거제' }

];

const myPref = document.querySelector('#myPref');
// option 요소 초기 표시 작성
let optionString = '<option value ="">선택하세요</option>';
// option 요소를 배열에서 가져오기
PREF_LIST.forEach((item) => {
    // 시도별 value와 name 반영
    optionString +=
        `<option value="${item.value}">${item.name}</option>`;
});
myPref.innerHTML = optionString; // option 요소를 select 요소에 추가

// 변경 이벤트 발생 확인
myPref.addEventListener('change', (e) => {
    let prefvalue = e.target.value; // 값 가져오기
    const myPreflog = prefvalue === '' ?
        `지역이 선택되지 않았습니다.` : `행정표준코드는 ${prefvalue}입니다.`;
    // 화면에 표시
    document.querySelector('#myPreflog').textContent = myPreflog;
});


// input[type=file] 요소 참조 출력
const myFile = document.querySelector('#myFile');
// 변경 이벤트 발생 확인
myFile.addEventListener('change', (e) => {
    const target = e.target;
    const files = target.files; // 값 가져오기
    // 배열 타입이므로 0번째 파일 참조
    const file = files[0];
});


// input[type=file] 요소 참조 출력 + photo 
const myPhoto = document.querySelector('#myPhoto');
const myPhotoImg = document.querySelector('.myPhotolog img');
// 입력 이벤트 발생 확인
myPhoto.addEventListener('input', (e) => {
    const target = e.target;
    const files = target.files; // 값 가져오기
    const file = files[0];
    // 배열 타입이므로 0번째 파일 참조

    // FileReader 인스턴스 생성
    const reader = new FileReader();
    // 로드 이벤트 발생 확인
    reader.addEventListener('load', () => {
        myPhotoImg.src = reader.result; // 이미지 표시
    }); //이벤트 리스너

    reader.readAsDataURL(file);
    // 텍스트 파일 형식으로 읽어오기
    // 이벤트 핸들러
});



//------------------------------------ 정렬하기
//오름차순/내림차순
const userDataList = [
    { id: 2, name: '곰', age: 18 },
    { id: 10, name: '여우', age: 27 },
    { id: 4, name: '사자', age: 32 },
    { id: 29, name: '기린', age: 56 },
    { id: 101, name: '호랑이', age: 41 },
    { id: 207, name: '거북이', age: 300 }
];

(function () {
    // 데이터 표시 업데이트
    function updateList() {
        let listHtml = '';
        for (const data of userDataList) { // userDataList의 data(값)들이 선언되면(true) for구문 실행
            listHtml += `<li>계정: ${data.id}, 이름: ${data.name}</li>`;
        }
        document.querySelector('.userList').innerHTML = listHtml; // 배열에 맞춰 li출력
    }

    // 오름차순 정렬
    function sortByAscending() {
        userDataList.sort((a, b) => a.id - b.id);
        updateList();
    }

    // 내림차순 정렬
    function sortByDescending() {
        userDataList.sort((a, b) => b.id - a.id);
        updateList();
    }

    // 오름차순 버튼 클릭 시 처리 작업
    const ascending = document.querySelector('.ascending')
    ascending.addEventListener('click', () => sortByAscending());

    // 내림차순 버튼 클릭 시 처리 작업
    const descending = document.querySelector('.descending')
    descending.addEventListener('click', () => sortByDescending());

    // 오름차순으로 초기 정렬
    sortByAscending();
})();




//데이터 조건별 정렬하기
// button 요소의 이벤트 설정
(function () {
    const sortButton = document.querySelectorAll('.optionSort button');
    sortButton.forEach(
        (element) => {
            element.addEventListener('click', //sortButton이 각각 클릭됐을때
                (e) => onClickButton(e)
            );
        }
    );
    //축약형
    // sortButton.forEach((element) => {
    //     element.addEventListener('click', (e) => onClickButton(e));
    // });
    function onClickButton(e) {
        const button = e.target;
        const targetAge = button.dataset.age;
        // 클릭한 버튼 요소에서 data-age가져오기
        const filterdList = userDataList.filter(
            (data) => data.age >= targetAge
        ); // targetAge 이상의 유저 배열 생성
        updateList(filterdList); // 배열을 출력
    }
    function updateList(filterdList) {
        let listHtml = '';

        for (const data of filterdList) { // filterdList data(값)들이 선언되면(true) for구문 실행
            listHtml += `<li>${data.name} : ${data.age}세</li>`;
        }
        document.querySelector('.user_list2').innerHTML = listHtml; // 배열에 맞춰 li출력
    }
})();
