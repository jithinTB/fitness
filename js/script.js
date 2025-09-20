	//Toggle menu
$(document).ready(function(){
	$(".toggle_icon").click(function(){
		$(".toggle_menu").animate({left:'0'},"slow");
		});
	$(".toggle_menuClose").click(function(){
		$(".toggle_menu").animate({left:'-768px'},"slow");
	});
});


