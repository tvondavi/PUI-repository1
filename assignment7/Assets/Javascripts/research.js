$(document).ready(function(){
	$("#listItem1").mouseover(function(){
		// More Mouseover interactions!!!! The mouse moves and the image changes
		$("#researchImage").attr("src", "Assets/images/social_psyc_poster.jpg");
	});
	$("#listItem2").mouseover(function(){
		$("#researchImage").attr("src", "Assets/images/barriers.jpg");
	});
	$("#listItem3").mouseover(function(){
		$("#researchImage").attr("src", "Assets/images/conferences.jpg");
	});
// Initialize and call the AOS library
	AOS.init();
	window.addEventListener('load', AOS.refresh);
});