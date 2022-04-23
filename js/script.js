$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else {
			$('.navbar').removeClass("sticky");

		}
	})
	//togglemenu
	$('.menu-btn').click(function(){
		$('.navbar .menu_items').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	})
})