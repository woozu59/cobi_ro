var swiper = new Swiper(".basic2",{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    //네비게이션 슬라이드를 만드려면 안쪽처럼 작성하면 됨
      //html 안에도 네비게이션 관련 div도 작성해야됨
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },//width: 640일 경우 슬라이드 2장씩 보임
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },//width: 768일 경우 슬라이드 4장 보임
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },

    }/*breakpoints는 역순으로 생각해야함 slidesPerView: 1, spaceBetween: 10,를 맨윗쪽에 작성하여 모바일일 경우 슬라이드 한장만 보이고 view의 크기가 클수록 한 칸에 몇장의 슬라이드가
        보일건지를 차례순으로 작성해야함*/
    //다른 효과도 추가하고 싶으면 안쪽에 계속해서 추가넣기



});
//슬라이드 넘어가게 만들기 위해서 위처럼 작성하면 끝
// new Swiper 작성시 앞글자 대문자로 꼭 작성

//좀 더 다양한 요구사항을 만들기 위해서는 swiper들어가서 api들어가서 공부해서 넣을수 있음
