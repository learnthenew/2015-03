$(function() {
	$('.icon-menu').click(function(){
		$('.page').toggleClass('open');
	});

	$('.mobileNav a').click(function(){
		$('.page').toggleClass('open');
	})
});