$(document).ready(function(){
    // Once the doc is ready, the user can mousover the sections of the site and see the image change
    $("#paper").mouseover(function(){
        // As you mousover this div, the image changes
    	$("#processImage").attr("src", "Assets/images/paper_proto.jpg");
    });

    $("#hi-fi").mouseover(function(){
        // This div also has an associated image as you mouseover it
    	$("#processImage").attr("src", "Assets/images/Slide1.png");
    });

    $("#full").mouseover(function(){
        // Same for this div
    	$("#processImage").attr("src", "Assets/images/bun_bun_home_image.jpg");
    });

// Initalize the AOS library and its functions and then call it once the document is ready
    AOS.init();
	window.addEventListener('load', AOS.refresh);
});