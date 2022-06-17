$(function() {
	
// slide_cover
	// 메인이미지 슬라이드
	var ww = $(".slide_cover").width();
	
	$(".slide, .slide>div").css("width", ww+"px"); 
	$(".slide>div").not(":eq(0)").css("left", ww+"px");
	
	// 우-좌 슬라이드
	var now = 0;
	var imgs = 2;
	
	// 슬라이드 0-1-2
	function slide() {
		$(".slide>div").not(":eq("+now+")").css("left",ww+"px");
		now = now == imgs ? 0 : now+=1;
		$(".slide>div").eq(now-1).animate({left:-ww+"px"},1000);
		$(".slide>div").eq(now).animate({left:"0px"},1000,function(){$(".slide>div").not(":eq("+now+")").css("left",ww+"px");});
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}
	
	var clear = setInterval(slide,3000);
	
	// 일단 누르면 멈추게 되는 
	$(".prev, .next, .bullet>li").click(function(){
		clearInterval(clear);
	});
	
	// 슬라이드 2-1-0
	function slide_left() {
		var imgs = 0;
		$(".slide>div").not(":eq("+now+")").css("left",-ww+"px");
		now = now == imgs ? 2 : now-=1;
		if( now == 2){
			$(".slide>div").eq(0).animate({left:ww+"px"},1000);
		}
		else {
			$(".slide>div").eq(now+1).animate({left:ww+"px"},1000);
		}
		$(".slide>div").eq(now).animate({left:"0px"},1000,function(){$(".slide>div").not(":eq("+now+")").css("left",-ww+"px");});
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}
	
		// 버튼클릭시 함수호출
	$(".prev").click(function() {
		slide_left();
	});
	$(".next").click(function() {
		slide();
	});
	
	// 불릿기호
	$(".bullet>li").click(function(){
		var bulletNumber = $(this).index();
		if( now == bulletNumber ) return;
		else {
			$(".slide>div").not(":eq("+now+")").css("left",ww+"px");
			$(".slide>div").eq(now).animate({left:-ww+"px"},1000);
			$(".slide>div").eq(bulletNumber).animate({left:"0"},1000,function(){$(".slide>div").not(":eq("+bulletNumber+")").css("left",ww+"px");});
			$(".bullet>li").removeClass("hover");
			$(".bullet>li").eq(bulletNumber).addClass("hover");
			now = bulletNumber;
		}
	});
	
	

	
// 신제품항목 new_product

	$(".new_slide>div").not(':eq(0)').hide();
	
		var newimages=2;
		var newnow=0;
	
		function fade() {
			newnow = newnow == newimages ? 0 : newnow+=1;
			$(".new_slide>div").eq(newnow-1).fadeOut(1000);
			$(".new_slide>div").eq(newnow).fadeIn(1000);
		}
		
		setInterval(fade,3000);
	
	
//작은이미지 상품 슬라이드 8장
	
	//0-1-2-3-...6-7-6....3-2-1-0
	function product_next() {
		$(".new_product>ul").animate({left:"-307.5px"},1000,function(){
			$(".new_product>ul>li:first").appendTo(".new_product>ul");
			$(".new_product>ul").css("left","0px");
		})
	}
	
	var clear1 = setInterval(product_next, 3000);
	
	$(".product_next").click(function(){
		clearInterval(clear1);
		product_next()
		return false;
	});
	
	// prev 7-6-5...
	function product_prev() {
		$(".new_product>ul>li:last").prependTo(".new_product>ul");
		$(".new_product>ul").css("left", "-307.5px");
		$(".new_product>ul").animate({left:"0px"},800);
	}
	
	$(".product_pre").click(function(){
		clearInterval(clear1);
		product_prev()
		return false;
	});
	
	
//구역별 이미지 호버시 제품명 나타나는 효과	
	
	$(".detail").hide();
	
	$(".living>div").mouseover(function() {
		$(".living>.detail").stop().fadeIn();
	});
	$(".living>div").mouseout(function() {
		$(".living>.detail").stop().fadeOut();
	});
	
	$(".bedroom>div").mouseover(function() {
		$(".bedroom>.detail").stop().fadeIn();
	});
	$(".bedroom>div").mouseout(function() {
		$(".bedroom>.detail").stop().fadeOut();
	});
	
	$(".study>div").mouseover(function() {
		$(".study>.detail").stop().fadeIn();
	});
	$(".study>div").mouseout(function() {
		$(".study>.detail").stop().fadeOut();
	});
	
	$(".kitchen>div").mouseover(function() {
		$(".kitchen>.detail").stop().fadeIn();
	});
	$(".kitchen>div").mouseout(function() {
		$(".kitchen>.detail").stop().fadeOut();
	});
	


	
// 미디어 프레스 호버효과

	$(".media>li>div").hide();

	$(".media>li",this).mouseover(function() {
		$(".program",this).show();
	});
	$(".media>li",this).mouseout(function() {
		$(".program",this).hide();
	});

});