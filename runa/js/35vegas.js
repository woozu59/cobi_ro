// ---------------------------vegas
//vegas페이지에서 원본소스 다운로드
//연습페이지에서 div영역 잡아놓기
//css는 개인적으로 컨트롤하기
//vegas 파일 연결- 제이쿼리+베가스 js+베가스css
//본인js에 아래 입력

// $(function () {
//   $('.s02').vegas({
//     slides: [
//       { src: "../images/banner/space01.jpg", delay: 3500 },
//       { src: "../images/banner/space02.jpg", delay: 3500 },
//       { src: "../images/banner/space03.jpg", delay: 3500 },
//       //동영상 삽입 가능, 대체이미지 삽입할 것
// //       { src: "../images/banner/space03.jpg",
// //         video: {
// //           src: [ '../images/banner/view-main.mp4' ],
// //           loop: false,
// //           mute: true,
// //         },
// //         delay: 5000
// //       }
//     ],//슬라이드는 배열로, 각자 객체로 입력
//     overlay: '../lib/vegas/overlays/05.png', //망점효과
//     animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
//     //효과 배열로 매칭
//     // animation: 'random', //효과랜덤
//   });
// });


// 모바일에서는 베가스 삭제
$(function () {
  //리사이징 할때마다 새로고침
  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });

  if (window.innerWidth <= 640) {
    // $('.s02').vegas('destroy');
    $('.slide vertical-slide').removeClass('s02');
  } else {
    $('.s02').vegas({
      slides: [
        { src: "../images/banner/space01.jpg", delay: 3500 },
        { src: "../images/banner/space02.jpg", delay: 3500 },
        { src: "../images/banner/space03.jpg", delay: 3500 },
      ],//슬라이드는 배열로, 각자 객체로 입력
      overlay: '../lib/vegas/overlays/05.png', //망점효과
      animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
      //효과 배열로 매칭
      // animation: 'random', //효과랜덤
    });
  }
});

//모바일에서 베가스는 동영상을 지원하지 않음
$.vegas.isVideoCompatible = function () {
  var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
  return !devices.test(navigator.userAgent);
}
