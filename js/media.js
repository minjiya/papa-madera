$(function() {


//호버시 미디어 제목 슬라이드업 효과
	$(".title_cover").hide();
	
	$(".images>li",this).hover(function() {
		$(".title_cover",this).slideToggle(200);
	});


// 체크박스
	$(".menu>ul>li>input").click(function() {
		
	$(".images>li").hide();
		
	// input체크하면
	if(this.checked){
		for(i=0; i<=1; i++) {
			if($(".menu>ul>li:eq("+i+")>input").is(":checked")==true){
				input_value = $(".menu>ul>li:eq("+i+")>input:checked").val();
				$(".images>li[title="+input_value+"]").show();
				}
			}
		}
	// input해제하면
	else {
		empty_number = 0
		for(i=0; i<=2; i++) {
			input_value = $(".menu>ul>li:eq("+i+")>input:checked").val();
			if($(".menu>ul>li:eq("+i+")>input").is(":checked")==false){
				$(".images>li[title="+input_value+"]").hide();
				empty_number++;
			}
			else {
				$(".images>li[title="+input_value+"]").show();
			}
		}
		if(empty_number == 2)
			$(".images>li:nth-child(-n+8)").show();
		}
	});

// 숏컷네비 변화

	$(".spon, .news").hide();

	$(".menu>ul>li>input").click(function() {
		
		$(".plus>button").hide();
		
		if($(".menu>ul>li:nth-child(1)>input").is(":checked")==true ) {
			$(".spon").show();
			$(".basic, .news").hide();
		};
		if($(".menu>ul>li:nth-child(2)>input").is(":checked")==true ) {
			$(".news").show();
			$(".basic, .spon").hide();
		};
		
	});
	
	
// 더보기 버튼
// 처음상태-이미지를 7번 이후 부터 숨기기 (6개만 보임)

	$(".images>li:nth-child(n+7)").hide();
	
	$(".plus>button").click(function(){
		number = $(".images>li:visible").length;
		number = Math.floor(number/3)*3;
		if(number>10)return;
		else {
			$(".images>li").hide();
			$(".images>li:nth-child(-n+"+(number+3)+")").show();
		}
		return false;
	});
	

});


	
	
	
	
