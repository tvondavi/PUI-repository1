$(document).ready(function(){
	$("#listItem1").mouseover(function(){
		$("#designImage").attr("src", "Assets/images/bun_bun_home_image.jpg");
	});
	$("#listItem2").mouseover(function(){
		$("#designImage").attr("src", "Assets/images/CMCube.jpg");
	});

	AOS.init();
	window.addEventListener('load', AOS.refresh);
});