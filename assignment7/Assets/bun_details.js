$(document).ready(function(){
    $("#paper").mouseover(function(){
    	$("#processImage").attr("src", "Assets/images/paper_proto.jpg");
    });

    $("#hi-fi").mouseover(function(){
    	$("#processImage").attr("src", "Assets/images/Slide1.png");
    });

    $("#full").mouseover(function(){
    	$("#processImage").attr("src", "Assets/images/bun_bun_home_image.jpg");
    });

    AOS.init();
	window.addEventListener('load', AOS.refresh);
});