$(document).ready(function(){
	$("#listItem1").mouseover(function(){
		// Mousover the div and image changes
		$("#gameImage").attr("src", "Assets/images/butterfly.jpg");
	});
	$("#listItem2").mouseover(function(){
		// Mouseover the div and the image changes
		$("#gameImage").attr("src", "Assets/images/rolling_ball.jpg");
	});
// Initialize and call the AOS library
	AOS.init();
	window.addEventListener('load', AOS.refresh);
});