$(document).ready(function(){
	// more mousover interactions!!!!!!!
	$("#listItem1").mouseover(function(){
		// The image changes as you mousover
		$("#designImage").attr("src", "Assets/images/bun_bun_home_image.jpg");
	});
	$("#listItem2").mouseover(function(){
		// A new image appears as you mousover
		$("#designImage").attr("src", "Assets/images/CMCube.jpg");
	});
// Initialize the AOS library and call it 
	AOS.init();
	window.addEventListener('load', AOS.refresh);
});