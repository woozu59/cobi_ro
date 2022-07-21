$(document).scroll(function () {
	$('.revealedBox').each(function (i) {
		if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
			$(this).toggleClass('revealedBox-in');
		}
	});

});