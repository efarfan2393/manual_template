

var lastChildMenu = function(){
	$("div #menuListGroup a:first-child").addClass("active");
	$("div #menuListGroup a:last-child").removeClass("active");
}
var scrollDocument = function(){
	$(window).scroll(function() { 
		if ($(document).scrollTop() > 50) { 
			$(".headerBlue").css("height", "80px");
			$(".headerBlue").addClass("fixed-top")
			$(".headerBlue").css("padding-top", "17px");
			$(".imagen_logoMinsa").attr("src","img/logo_minsa_small.jpg");
			$(".contentInfo").css("margin", "120px auto")
			$(".tittleHeader").css("font-size", "20px")
			$(".subTittleHeader").css("font-size", "15px")
			$("#menuListGroup").addClass("positionFixed")
			$(".contentWhite").addClass("mt-100")

 		} else if ($(document).scrollTop() < 50) {
		    $(".headerBlue").css("height", "220px");
			$(".headerBlue").css("padding-top", "75px");
			$(".imagen_logoMinsa").attr("src","img/logo_minsa_big.jpg"); 
			$(".contentInfo").css("margin", "300px auto")
			$(".tittleHeader").css("font-size", "2.5rem")
			$(".subTittleHeader").css("font-size", "20px")
			$("#menuListGroup").removeClass("positionFixed")
			$(".contentWhite").removeClass("mt-100")
		}
		if ($(window).width() <= 770 ){
			if ($(document).scrollTop() > 50) { 
				$(".headerBlue").css("height", "80px");
				$(".headerBlue").addClass("fixed-top")
				$(".headerBlue").css("padding-top", "15px");
				$(".imagen_logoMinsa").attr("src","img/logo_minsa_small.jpg");
				$(".contentInfo").css("margin", "200px auto")
				$(".tittleHeader").css("font-size", "20px")
				$(".subTittleHeader").css("font-size", "15px")
				$("#menuListGroup").removeClass("positionFixed")
				$(".contentWhite").removeClass("mt-100")
	 		} else if ($(document).scrollTop() < 50) {
			   $(".headerBlue").css("height", "120px");
				$(".headerBlue").addClass("fixed-top")
				$(".headerBlue").css("padding-top", "35px");
				$(".imagen_logoMinsa").attr("src","img/logo_minsa_small.jpg");
				$(".contentInfo").css("margin", "150px auto")
				$(".tittleHeader").css("font-size", "20px")
				$(".subTittleHeader").css("font-size", "15px")
				$("#menuListGroup").removeClass("positionFixed")
				$(".contentWhite").removeClass("mt-100")
			} 
   		}
	});
}
var responsivePhoneLogo = function(){
	if ($(window).width() <= 770 ){
		$(".imagen_logoMinsa").attr("src","img/logo_minsa_small.jpg");
		$("#menuListGroup").removeClass("positionFixed");
   	}
}
var toggleFixed = function() {
   adjustWidth();
   $("#menuListGroup").toggleClass("positionFixed");
}
var adjustWidth = function(){
	var parentwidth = $("#contentMenu").width();      
    $("#menuListGroup").toggleClass("positionFixed").width(parentwidth);
}
var resize = function(){
	$(window).resize(
	    function() {
	    	adjustWidth();
	})
}
$(document).ready(function(){
	toggleFixed();
	adjustWidth();
	resize();
	lastChildMenu();
	responsivePhoneLogo();
    scrollDocument();
})