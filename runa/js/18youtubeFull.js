$(function() {
    var $allVideos = $("iframe[src^='//www.youtube.com'], object, embed, video, iframe[src^='https://www.youtube.com']"),
        $fluidEl = $(".allSize2");
    $allVideos.each(function() {
        $(this)
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
    });
    $(window).resize(function() {
        var newWidth = $fluidEl.width();
        $allVideos.each(function() {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));
        });
    }).resize();
});