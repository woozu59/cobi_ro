$(function () {
    AOS.init();

    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    //-----------------------------모바일메뉴
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function () {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });

    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function () {
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }

    //-----------------------------탭메뉴
    $(".tab ul li").click(function () {
        $(".tab ul li").removeClass('on');
        $(".tab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });

    //-----------------------------탭메뉴 세로형
    $(".tab2 ul li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    //-----------------------------링크 특정탭오픈 정리소스
    // 기본 탭 오픈
    $("ul.pageTabs li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("." + $(this).attr('id')).addClass('on').siblings().removeClass('on');
    });

    // 타 페이지에서 해시를 찾아 이동, 29anotherTab
    if (location.hash == "#spot1") {
        $('#spot1, .spot1').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#spot2") {
        $('#spot2, .spot2').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#spot3") {
        $('#spot3, .spot3').addClass('on').siblings().removeClass('on');
    }

    // 타페이지 nav에서 본페이지 이동 후, 본 페이지에서 오픈된 탭 이외에 이동이 안되는 부분 보완, 직접쓰는 번거로움, each를적용하시오
    // const spot = $("#spot1").offset().top;
    // $(".spot1_on").click(function() {
    //     $("html, body").animate({
    //         scrollTop: spot
    //     }, 500);
    //     $('.pageTabs').find('li').eq(0).addClass('on').siblings().removeClass('on');
    //     $('.section7').find('.spot1').addClass('on').siblings().removeClass('on');
    // });
    // $(".spot2_on").click(function() {
    //     $("html, body").animate({
    //         scrollTop: spot
    //     }, 500);
    //     $('.pageTabs').find('li').eq(1).addClass('on').siblings().removeClass('on');
    //     $('.section7').find('.spot2').addClass('on').siblings().removeClass('on');
    // });
    // $(".spot3_on").click(function() {
    //     $("html, body").animate({
    //         scrollTop: spot
    //     }, 500);
    //     $('.pageTabs').find('li').eq(2).addClass('on').siblings().removeClass('on');
    //     $('.section7').find('.spot3').addClass('on').siblings().removeClass('on');
    // });
    $("ul.mSnb a, li.snb a").each(function () {
        // pc/m의 nav에 들어있는 링크에게 각각 적용
        $(this).click(function () {
            const thisHref = $(this).attr('href');
            const thisHash = thisHref.slice(-6); // 목적지에서 #추출
            const thisClass = thisHash.slice(-5); // 목적지에서 #이후 문자열만 추출
            const thisHashOffset = $(thisHash).offset().top; // 해시의 위치값 추출
            $("html, body").animate({
                scrollTop: thisHashOffset
            }, 1000);
            $(thisHash).addClass('on').siblings().removeClass('on');
            $('.' + thisClass).addClass('on').siblings().removeClass('on');
        });
    });




    //-----------------------------스크롤버튼, 직접쓰는 번거로움, each를적용하시오 23_1scrollOn참조
    $(".goTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    var sectiontop3 = $(".section3").offset().top;
    $(".goSection3").click(function () {
        $("html, body").animate({
            scrollTop: sectiontop3
        }, 500);
    });

    var sectiontop5 = $(".section5").offset().top;
    $(".goSection5").click(function () {
        $("html, body").animate({
            scrollTop: sectiontop5
        }, 500);
    });

    var footer = $("footer").offset().top;
    $(".goFooter").click(function () {
        $("html, body").animate({
            scrollTop: footer
        }, 500);
    });
});

//----------------------------섹션이동 시 리모콘에 하이라이트, 직접쓰는 번거로움, each를적용하시오 23_1scrollOn 참조
$(document).scroll(function () {
    var scroll = $(window).scrollTop();
    var sectiontop3 = $(".section3").offset().top;
    var sectiontop5 = $(".section5").offset().top;
    var footer = $("footer").offset().top;
    if (scroll < sectiontop3) {
        $('.goTop').addClass('on').siblings().removeClass('on');
    } else if (scroll < sectiontop5) {
        $('.goSection3').addClass('on').siblings().removeClass('on');

    } else if (scroll < footer) {
        $('.goSection5').addClass('on').siblings().removeClass('on');

    }
});

//-----------------------------opacity 캐러셀
$(document).ready(function () {
    //페이드배너를 감싸고 있는 오브젝트의 이름, 이 오브젝트의 넓이가 페이드배너의 넓이가 됨.
    var obj_wrap = $(".section1");
    //페이드배너 전체를 묶어주는 요소
    var obj_name = $(".section1 ul");
    //보여질 실제 페이드배너를 감싸고 있는 영역
    var obj_child = $(".section1 ul li");
    var obj_child_acitve = "active";
    var obj_child_animate = "ani";

    //페이드배너 드래그 이동, 사용여부 (true, false)
    var touch_draging = true; //스마트폰 터치 인식

    //페이드배너 컨트롤버튼
    var ctrl_btn = true; //사용여부 (true, false)
    var ctrl_next = $(".section1 .next");
    var ctrl_prev = $(".section1 .prev");
    var ctrl_stop = $(".section1 .stop");
    var ctrl_play = $(".section1 .play");

    //현재페이드배너 번호 / 전체 페이드배너번호
    var numbering = true; //사용여부 (true, false)
    var curr_num = $(".section1 .curr_num");
    var total_num = $(".section1 .total_num");

    //페이드배너 리스트
    var paging = true; //사용여부 (true, false)
    var paging_obj = $(".section1 .paging button");
    var paging_curr_class = "active"; //현재 선택된 페이드배너를 표시할 class명
    var paging_index;

    //자동플레이 여부(true, false)
    var auto_play = true;
    var auto_time = 4000;
    var refreshInvervalId;
    var auto_status;

    //이 아래 변수는 수정 금지
    var obj_drag = false;
    var obj_index = 0;
    var next_index = obj_index + 1;
    //페이드배너의 갯수 계산
    var obj_length = obj_child.length;
    //페이드배너의 넓이 계산
    var obj_width = obj_wrap.width();
    var startX = null;
    var prevX = null;
    var currX = null;
    var moveX = null;
    var afterX = null;
    var e = null;


    if (touch_draging == true) {
        //모바일에서 터치를 인식
        obj_name.on("touchstart", function (a) {
            obj_drag = true;
            e = a.originalEvent;
            currX = e.touches[0].pageX
            startX = e.touches[0].pageX;
            obj_name.on("touchmove", function (b) {
                if (obj_drag == true) {
                    e = b.originalEvent;
                    prevX = currX;
                    currX = e.touches[0].pageX;
                    moveX = prevX - currX;
                    //drag_move(moveX);
                }
            });

        });
        $(document).on("touchend", function () {
            if ((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))) {
                drag_end();
            }
            obj_drag = false;
            obj_name.off("touchmove");
        });
    }

    ///drag 혹은 touch가 종료되었을때 실행하는 함수
    function drag_end() {
        //console.log(moveX);
        if (moveX > 0) {
            next_index = obj_index + 1;
        } else {
            next_index = obj_index - 1;
        }

        if (next_index > obj_length - 1) {
            next_index = 0;
        } else if (next_index < 0) {
            next_index = obj_length - 1;
        }
        popup_change(next_index);
        time_reset();
    }

    function popup_change(next_index) {
        //console.log(obj_index+", "+next_index);
        if (obj_index != next_index) {
            obj_child.eq(next_index).show();
            obj_child.eq(obj_index).fadeOut(500, function () {
                obj_child.eq(next_index).addClass(obj_child_acitve);
                obj_child.eq(obj_index).removeClass(obj_child_acitve);
                obj_child.eq(next_index).addClass(obj_child_animate);
                obj_child.eq(obj_index).removeClass(obj_child_animate);
                obj_index = next_index;
                index_change(obj_index);
            });
        }

    } //popup_change

    //index 변경 시 변경해야 할 것들 (paging, numbering)
    function index_change(index) {
        if (numbering == true) {
            curr_num.html(index + 1);
        }
        if (paging == true) {
            paging_obj.removeClass(paging_curr_class);
            paging_obj.eq(index).addClass(paging_curr_class);
        }
    }

    function auto_next() {
        if (obj_index >= obj_length - 1) {
            next_index = 0;
        } else {
            next_index = obj_index + 1;
        }
        popup_change(next_index);
    }

    function time_reset() {
        if (auto_status == "play") {
            clearInterval(refreshInvervalId);
            refreshInvervalId = setInterval(auto_next, auto_time);
        }
    }

    if (ctrl_btn == true) {
        ctrl_prev.on("click", function () {
            if (obj_index < 1) {
                next_index = obj_length - 1;
            } else {
                next_index = obj_index - 1;
            }
            popup_change(next_index);
            time_reset();
        });
        ctrl_next.on("click", function () {
            auto_next();
            time_reset();
        });
        ctrl_stop.on("click", function () {
            auto_status = "stop";
            clearInterval(refreshInvervalId);
        });
        ctrl_play.on("click", function () {
            auto_status = "play";
            refreshInvervalId = setInterval(auto_next, auto_time);
        });
    }

    if (auto_play == true) {
        //페이드배너의 수가 1개이하면 실행하지 않음
        if (obj_length > 1) {
            obj_child.eq(obj_index).addClass(obj_child_acitve);
            refreshInvervalId = setInterval(auto_next, auto_time);
            auto_status = "play";
        }
    } else {
        obj_child.eq(obj_index).addClass(obj_child_acitve);
    }
    $(function () {
        obj_child.eq(obj_index).addClass(obj_child_animate);
    });

    //페이지번호를 사용할 경우
    if (numbering == true) {
        curr_num.html(obj_index + 1);
        total_num.html(obj_length);
    }

    //paging을 사용할 경우
    if (paging == true) {
        paging_obj.removeClass(paging_curr_class);
        paging_obj.eq(obj_index).addClass(paging_curr_class);
        paging_obj.on("click", function () {
            paging_index = $(this).index();
            //console.log(paging_index);
            popup_change(paging_index);
            time_reset();
        });
    }

    //높이 재설정
    obj_wrap.height(obj_child.height());
    $(function () {
        obj_wrap.height(obj_child.height());
    });
    $(window).resize(function () {
        obj_wrap.height(obj_child.height());
    });
});

//-----------------------------fullsize 이미지캐러셀
$(document).ready(function () {
    //슬라이드배너을 감싸고 있는 오브젝트의 이름, 이 오브젝트의 넓이가 슬라이드배너의 넓이가 됨.
    var obj_wrap = $(".section3");
    //움직일 오브젝트의 이름
    var obj_name = $(".section3 ul");
    //보여질 실제 슬라이드배너을 감싸고 있는 영역
    var obj_child = $(".section3 ul li");

    //슬라이드배너 드래그 이동, 사용여부 (true, false)
    var mouse_draging = false; //컴퓨터 마우스 드래그 인식
    var touch_draging = true; //스마트폰 터치 인식

    //슬라이드배너 컨트롤버튼
    var ctrl_btn = true; //사용여부 (true, false)
    var ctrl_next = $(".section3 .next");
    var ctrl_prev = $(".section3 .prev");
    var ctrl_stop = $(".section3 .stop");
    var ctrl_play = $(".section3 .play");

    //현재슬라이드배너 번호 / 전체 슬라이드배너번호
    var numbering = true; //사용여부 (true, false)
    var curr_num = $(".section3 .curr_num");
    var total_num = $(".section3 .total_num");

    //슬라이드배너 리스트
    var paging = true; //사용여부 (true, false)
    var paging_obj = $(".section3 .paging button");
    var paging_curr_class = "active"; //현재 선택된 슬라이드배너을 표시할 class명
    var paging_index; //클릭한 오브젝트

    //자동플레이 여부(true, false)
    var auto_play = true;
    var auto_time = 4000;
    var auto_status;

    //이 아래 변수는 수정 금지
    var obj_position_reset;
    var refreshInvervalId;
    var obj_drag = false;
    var obj_index = 1;
    //슬라이드배너의 갯수 계산
    var obj_length = obj_child.length;
    if (obj_length <= 1) {
        mouse_draging = false;
        touch_draging = false;
    }
    //슬라이드배너의 넓이 계산
    var obj_width = obj_wrap.width();
    obj_child.width(obj_width);
    var startX = null;
    var prevX = null;
    var currX = null;
    var moveX = null;
    var afterX = null;
    var e = null;
    default_set();

    if (touch_draging == true) {
        //모바일에서 터치를 인식
        obj_name.on("touchstart", function (a) {
            obj_drag = true;
            e = a.originalEvent;
            currX = e.touches[0].pageX
            startX = e.touches[0].pageX;
            obj_name.on("touchmove", function (b) {
                if (obj_drag == true) {
                    e = b.originalEvent;
                    prevX = currX;
                    currX = e.touches[0].pageX;
                    moveX = prevX - currX;
                    drag_move(moveX);
                }
            });
        });
        $(document).on("touchend", function () {
            if ((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))) {
                drag_end();
            }
            obj_drag = false;
            obj_name.off("touchmove");
        });
    }

    if (mouse_draging == true) {
        //마우스 드래그를 인식
        obj_name.on("mousedown", function (a) {
            obj_drag = true;
            currX = a.pageX;
            startX = a.pageX;
            obj_name.on("mousemove", function (b) {
                if (obj_drag == true) {
                    prevX = currX;
                    currX = b.pageX;
                    moveX = prevX - currX;
                    drag_move(moveX);
                }
            });
        });
        $(document).on("mouseup", function () {
            if ((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))) {
                drag_end();
            }
            obj_drag = false;
            obj_name.off("mousemove");
        });
    }

    //drag 혹은 touch 시 오브젝트를 움직이는 함수
    function drag_move(moveX) {
        $(obj_name).offset({
            left: $(obj_name).offset().left - moveX
        });
        obj_index = parseInt(-($(obj_name).position().left) / obj_width);
        index_change(obj_index);
    }

    ///drag 혹은 touch가 종료되었을때 실행하는 함수
    function drag_end() {
        if ($(obj_name).position().left > 0) {
            afterX = 0;
        } else if ($(obj_name).position().left < -((obj_length + 1) * obj_width)) {
            afterX = (obj_length) * obj_width;
        } else {
            if (moveX > 0) {
                afterX = (obj_index + 1) * obj_width;
            } else {
                afterX = (obj_index) * obj_width;
            }
        }
        $(obj_name).animate({
            left: -afterX
        }, 500, function () {
            obj_index = parseInt(-($(obj_name).position().left) / obj_width);
            if (obj_index <= 0) {
                obj_index = obj_length;
                $(obj_name).css("left", -(obj_length * obj_width));
            } else if (obj_index > obj_length) {
                obj_index = 1;
                $(obj_name).css("left", -obj_width);
            }
            index_change(obj_index);
            time_reset();
        });
    }

    //animate로 오브젝트를 움직이는 함수
    function animate_move(go_index) {
        if (go_index < 1) {
            obj_index = obj_length;
            obj_position_reset = -(obj_width * obj_length);
        } else if (go_index > obj_length) {
            obj_index = 1;
            obj_position_reset = -obj_width;
        } else {
            obj_position_reset = "";
            obj_index = go_index;
        }

        $(obj_name).animate({
            left: -((go_index) * obj_width)
        }, 500, function () {
            if (obj_position_reset != "") {
                $(obj_name).css("left", obj_position_reset);
            }
        });
        index_change(obj_index);
    }

    //auto play로 다음 슬라이드배너로 이동하는 함수
    function auto_next() {
        obj_index++;
        animate_move(obj_index);
    }

    //index 변경 시 변경해야 할 것들 (paging, numbering)
    function index_change(index) {
        if (numbering == true) {
            curr_num.html(index);
        }
        if (paging == true) {
            paging_obj.removeClass(paging_curr_class);
            paging_obj.eq(index - 1).addClass(paging_curr_class);
        }
    }

    function time_reset() {
        if (auto_status == "play") {
            clearInterval(refreshInvervalId);
            refreshInvervalId = setInterval(auto_next, auto_time);
        }
    }

    function default_set() {
        if (obj_length > 1) {
            obj_child.eq(0).clone().appendTo(obj_name);
            obj_child.eq(obj_length - 1).clone().prependTo(obj_name);
            obj_name.css("left", -obj_width);
            obj_name.width((obj_length + 2) * obj_width);
        }
        index_change(obj_index);
    }

    if (ctrl_btn == true) {
        ctrl_prev.on("click", function () {
            obj_index--;
            animate_move(obj_index);
            time_reset();
        });
        ctrl_next.on("click", function () {
            auto_next();
            time_reset();
        });
        ctrl_stop.on("click", function () {
            clearInterval(refreshInvervalId);
            auto_status = "stop";
        });
        ctrl_play.on("click", function () {
            refreshInvervalId = setInterval(auto_next, auto_time);
            auto_status = "play";
        });
    }

    //자동실행을 설정하였을 경우
    if (auto_play == true) {
        //슬라이드배너의 수가 1개이하면 실행하지 않음
        if (obj_length > 1) {
            refreshInvervalId = setInterval(auto_next, auto_time);
            auto_status = "play";
        }
    }

    //페이지번호를 사용할 경우
    if (numbering == true) {
        curr_num.html(obj_index);
        total_num.html(obj_length);
    }

    //paging을 사용할 경우
    if (paging == true) {
        paging_obj.removeClass(paging_curr_class);
        paging_obj.eq(obj_index - 1).addClass(paging_curr_class);

        paging_obj.on("click", function () {
            //클릭한 paging의 번호 (1번째 paging은 값이 0)
            paging_index = $(this).index();
            //console.log(paging_index);
            //해당 번호 슬라이드배너로 이동..
            animate_move(paging_index + 1);
            time_reset();
        });
    }

    //윈도우가 리사이즈되면 슬라이드배너 사이즈 다시 계산
    $(window).resize(function () {
        obj_width = obj_wrap.width();
        obj_child.parent().children().width(obj_width);
        $(obj_name).css("left", -((obj_index) * obj_width));
        obj_wrap.height(obj_child.height());
        obj_name.width((obj_length + 2) * obj_width);
    });

    $(function () {
        obj_wrap.height(obj_child.height());
    });
});

//-----------------------------다중 이미지캐러셀
$(document).ready(function () {
    /*
        배너 이미지가 모두 로딩된 후에 높이를 계산해야 하므로 $로 한다.
    */

    var window_w = $(window).width();
    var obj_wrap = $(".section4 .banner_wrap"); //높이 제어
    var obj_name = $(".section4 .banner_wrap ul"); // 실제 움직일놈
    var obj_child = $(".section4 .banner_wrap ul li"); // 하나의 배너

    //배너 컨트롤버튼
    var ctrl_btn = true; //사용여부 (true, false)
    var ctrl_next = $(".section4 .next");
    var ctrl_prev = $(".section4 .prev");
    var ctrl_stop = $(".section4 .stop");
    var ctrl_play = $(".section4 .play");

    var mobile_size = 640;
    var obj_width = obj_wrap.width();
    var obj_move; //li 하나의 넓이값(margin포함넓이)
    var mobile_view = 1; //스마트폰에서 터치로 넘길경우 반드시 모바일은 1개이어야 함.(여러개해도 하나씩 넘어감)
    var pc_view = 4;
    var obj_oneview;
    var obj_length = obj_child.length;
    var obj_index = 1;
    var obj_moveX;
    var obj_left; //기본 왼쪽으로 이동해야하는 값
    var copy_count;

    //자동플레이 여부(true, false)
    var refreshInvervalId;
    var auto_play = true;
    var auto_time = 4000;
    var obj_drag = false;

    //배너 드래그 이동, 사용여부 (true, false)
    var touch_draging = true; //스마트폰 터치 인식


    if (touch_draging == true) {
        //모바일에서 터치를 인식
        obj_name.on("touchstart", function (a) {
            obj_drag = true;
            e = a.originalEvent;
            currX = e.touches[0].pageX
            startX = e.touches[0].pageX;
            obj_name.on("touchmove", function (b) {
                if (obj_drag == true) {
                    e = b.originalEvent;
                    prevX = currX;
                    currX = e.touches[0].pageX;
                    moveX = prevX - currX;
                    drag_move(moveX);
                }
            });
        });
        $(document).on("touchend", function () {
            if ((obj_drag == true) && (Math.abs(startX) != (Math.abs(currX)))) {
                drag_end();
            }
            obj_drag = false;
            obj_name.off("touchmove");
        });
    }
    //drag 혹은 touch 시 오브젝트를 움직이는 함수
    function drag_move(moveX) {
        obj_name.offset({
            left: obj_name.offset().left - moveX
        });
    }

    ///drag 혹은 touch가 종료되었을때 실행하는 함수
    function drag_end() {

        if (moveX > 0) { //next
            obj_index++;
        } else { //prev
            obj_index--;
        }

        if (obj_index > obj_length) {
            obj_index = obj_length;
        } else if (obj_index < 1) {
            obj_index = 1;
        }

        obj_moveX = (-(obj_index - 1) * obj_move) - obj_left;
        //obj_index로 위치값을 계속 다시 계산하는 이유는 한번 잘못 이동하더라도 다음에 제대로 이동하기 위해서 
        obj_name.animate({
            left: obj_moveX
        }, 300)

    }

    //앞에서 li를 복사해서 뒤로 붙여넣기
    if (pc_view > mobile_view) {
        copy_count = pc_view;
    } else {
        copy_count = mobile_view;
    }
    for (var i = 0; i < copy_count; i++) {
        obj_child.eq(i).clone().appendTo(obj_name);
        obj_child.eq(obj_length - (i + 1)).clone().prependTo(obj_name);
    }

    view_count();

    if (ctrl_btn == true) {
        ctrl_next.click(function () {
            auto_next();
            time_reset();
        });

        ctrl_prev.click(function () {
            obj_index = --obj_index;
            if (obj_index < 0) {
                obj_index = (obj_length - 1);
                obj_name.css("left", -obj_left - ((obj_length - 1) * obj_move));
            }
            obj_moveX = (-(obj_index - 1) * obj_move) - obj_left;
            obj_name.animate({
                left: obj_moveX
            }, 300);
            time_reset();
        });
        ctrl_stop.click(function () {
            auto_status = "stop";
            clearInterval(refreshInvervalId);
        });
        ctrl_play.click(function () {
            auto_status = "play";
            refreshInvervalId = setInterval(auto_next, auto_time);
        });
    }

    //자동실행을 설정하였을 경우
    if (auto_play == true) {
        //배너의 수가 1개이하면 실행하지 않음
        if (obj_length > 1) {
            refreshInvervalId = setInterval(auto_next, auto_time);
        }
    }

    //윈도우가 리사이즈되면 배너 사이즈 다시 계산
    $(window).resize(function () {
        window_w = $(window).width();
        obj_width = obj_wrap.width();
        view_count();
    });

    $(function () {
        obj_wrap.height(obj_child.height());
    });


    function view_count() {
        if (window_w > mobile_size) { //pc
            obj_oneview = pc_view;
        } else { //mobile
            obj_oneview = mobile_view;
        }

        obj_child.parent().children().width(obj_width / obj_oneview); //복제가 된 li도 넓이를 제어하기 위해서 이렇게 씀
        obj_move = obj_width / obj_oneview;
        obj_left = obj_move * copy_count;
        obj_wrap.height(obj_child.height()); // 배너의 높이값도 제어 (모바일에서 넓이가 줄면 높이도 줄이기 위해서)
        obj_name.width(((obj_oneview * 2) * obj_length) * obj_move + 100); //ul의 넓이 제어 (li가 아래로 안떨어지게)
        obj_name.css("left", (-(obj_index - 1) * obj_move) - obj_left);
    }

    function auto_next() {
        obj_index = ++obj_index;
        //console.log(obj_index);
        if (obj_index > obj_length) { //더이상 복제한 배너이 없을때 
            obj_index = 1;
            obj_name.css("left", -obj_left + obj_move);
        }

        obj_moveX = (-(obj_index - 1) * obj_move) - obj_left;
        //obj_index로 위치값을 계속 다시 계산하는 이유는 한번 잘못 이동하더라도 다음에 제대로 이동하기 위해서 
        obj_name.animate({
            left: obj_moveX
        }, 300);
    }

    function time_reset() {
        if (auto_status == "play") {
            clearInterval(refreshInvervalId);
            refreshInvervalId = setInterval(auto_next, auto_time);
        }
    }
});
