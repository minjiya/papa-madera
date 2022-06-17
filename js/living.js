$(function() {
	
	
// 체크박스
	$(".menu>ul>li>input").click(function() {
		
	$(".images>li").hide();
		
	// input체크하면
	if(this.checked){
		for(i=0; i<=3; i++) {
			if($(".menu>ul>li:eq("+i+")>input").is(":checked")==true){
				input_value = $(".menu>ul>li:eq("+i+")>input:checked").val();
				$(".images>li[title="+input_value+"]").show();
				}
			}
		}
	// input해제하면
	else {
		empty_number = 0
		for(i=0; i<=3; i++) {
			input_value = $(".menu>ul>li:eq("+i+")>input:checked").val();
			if($(".menu>ul>li:eq("+i+")>input").is(":checked")==false){
				$(".images>li[title="+input_value+"]").hide();
				empty_number++;
			}
			else {
				$(".images>li[title="+input_value+"]").show();
			}
		}
		if(empty_number == 4)
			$(".images>li:nth-child(-n+8)").show();
		}
	});
	
	
	
	
	
// 정렬버튼 호버효과
	$(".classify_btn>li>label>i").hide();
   
	$(".classify_btn>li").click(function(){
		$(".classify_btn>li>label>i").hide();
		$(".fas",this).show();
	});


//가격순
	$(".classify_btn>li:nth-child(1)>input").click(function(){
		
		$(".images>li").sort(sort_li).appendTo('.images');
		function sort_li(a, b) {
		return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
		}	
	});
	
	$(".classify_btn>li:nth-child(2)>input").click(function(){
		
		$(".images>li").sort(sort_li).appendTo('.images');
		function sort_li(a, b) {
		return ($(b).data('position')) < ($(a).data('position')) ? -1 : 1;
		}	
	});
	
	

// 더보기 버튼
// 처음상태-이미지를 9번 이후 부터 숨기기 (8개만 보임)

	$(".images>li:nth-child(n+9)").hide();
	
	$(".plus>button").click(function(){
		number = $(".images>li:visible").length;
		number = Math.floor(number/4)*4;
		if(number>15)return;
		else {
			$(".images>li").hide();
			$(".images>li:nth-child(-n+"+(number+4)+")").show();
		}
		return false;
	});
	
});