$(function() {
	
	$(".sub").hide();
	
	$(".main>li").mouseover(function() {
		$(".ad",this).addClass("add");
		$(".sub",this).stop().fadeIn();
	});
	$(".main>li").mouseout(function() {
		$(".ad",this).removeClass("add");
		$(".sub",this).stop().fadeOut();
	});
	
});