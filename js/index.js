$(".vsc").draggable({containment:'parent'})

$(document).ready(function(){

    //프로젝트 설명란
    $(".informs > .fileinform > .lushinform").hide();
    $(".lushfile").click(function(){
       $(".dokdoinform").hide();
        $(".lushinform").show();
    });

    $(".dokdofile").click(function(){
        $(".lushinform").hide();
        $(".dokdoinform").show();
    });
    
    
    //프로젝트 이미지
    $(".tabs > div").click(function(){
        $(this).addClass("on")
        .siblings().removeClass("on");
        $("#" + $(this).data("id")).addClass("on")
        .siblings().removeClass("on");
    });
})