$(function() {
    
// 더보기 버튼
// 처음상태-이미지를 9번 이후 부터 숨기기 (8개만 보임)

	$(".images>li:nth-child(n+11)").hide();
	
	$(".plus>button").click(function(){
		number = $(".images>li:visible").length;
		number = Math.floor(number/5)*5;
		if(number>16)return;
		else {
			$(".images>li").hide();
			$(".images>li:nth-child(-n+"+(number+5)+")").show();
		}
		return false;
	});
	
});