$(document).ready(function() {
	if ($(window).width() / parseFloat($("body").css("font-size")) > 64) {
		$(window).scroll(function() {
			$('#header-box').css({
				'bottom': -($(this).scrollTop()/1.7) + 'px'
			});
		});
	}
});

$('#next-button').click(function() {
	$('html, body').animate({
		scrollTop: $("#stroke-1").offset().top
	}, 1500);
});

$('.nW').click(function() {
	var nW = window.open($(this).prop('href'),'','scrollbars=1,height=500,width=600');
	if (window.focus) {
		nW.focus();
	}
	return false;
});