$(function() {

	// 쇼룸 안내 부분
	
// 아코디언효과
	$(".answer").hide();
	$(".showroom>div>h3").click(function(){
		$(this).next().slideToggle(300);
		$(".showroom>div>h3").not(this).next().slideUp(300);
		return false;
	});


// 지도 바꾸기
	$(".map>div").hide();
	
	$(".showroom>div>h3").eq(0).click(function(){
		$(".map>div").eq(0).show();
		$(".map>div").not(":eq(0)").hide();
	});
	$(".showroom>div>h3").eq(1).click(function(){
		$(".map>div").eq(1).show();
		$(".map>div").not(":eq(1)").hide();
	});
	$(".showroom>div>h3").eq(2).click(function(){
		$(".map>div").eq(2).show();
		$(".map>div").not(":eq(2)").hide();
	});

	$(".showroom>div>h3").eq(0).trigger("click");


	




});
