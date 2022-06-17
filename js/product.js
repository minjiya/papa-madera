$(function() {
	
// 팝업창

	// 쿠폰
	$(".popup_cover").hide();
	
	$("tr>td>input").click(function(){
		$(".popup_cover").show();
	});
	
	$(".coupon>input").click(function(){
		$(".popup_cover").hide();
		alert("발급이 완료되었습니다.");
	});
	
	// 구매하기
	$(".product_btn_cover>div>input:nth-child(1)").click(function() {
		alert("로그인이 필요한 페이지입니다.");
		location= "login.html";
	});
	
	//장바구니
	$(".product_btn_cover>div>input:nth-child(2)").click(function() {
		var y=confirm("장바구니에 성공적으로 담겼습니다. 장바구니로 이동하시겠습니까?");
		if(y) {
			location="cart.html";
		}
	});
	
	// 위시리스트
	$(".product_btn_cover>div>input:nth-child(3)").click(function() {
		alert("로그인이 필요한 페이지입니다.");
		location= "login.html";
	});
	
	
// 작은 그림 클릭시 큰그림으로 보이기
   $(".vertical_img>li").click(function() {
      $(".product_img_cover>div>img").attr("src","images/pb-"+($(this).index()+1)+".png");
   });
	
//상세페이지 메뉴 고정
	$(window).scroll(function(){
        var height = 0;
        height=$(window).scrollTop();
        if (height >= 1000) {
            $('.product_contents_menu').addClass('scroll-fixed');
        }else{
            $('.product_contents_menu').removeClass('scroll-fixed');
        }
    });
	
// 상세페이지 메뉴 호버
   $(".product_contents_menu>li").hover(function() {
		$(".product_contents_menu>li").removeClass("default");
		$(this).toggleClass("default");
   });


// 노티스 배송/환불안내 슬라이드 토글
	$(".notice>div>h4").click(function() {
		$(this).next().slideToggle();
	});

});