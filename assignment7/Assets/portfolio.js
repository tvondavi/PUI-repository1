$(document).ready(function(){
    $("#topLeft").mouseover(function(){
    	// creating responsive animation by hand with jQuery
    	$("#design").attr("src", "Assets/images/bun_bun_home_image_dark.jpg");
    	//only one image is dark the rest remain the same
    	$("#research").attr("src", "Assets/images/social_psyc_poster.jpg");
    	$("#games").attr("src", "Assets/images/butterfly.jpg");
    	$("#photos").attr("src", "Assets/images/koln.jpg");
    	//text appears as the image goes dark, providing a clear label for the content
    	$("#designLabel").text("DESIGN");
    	//no other text should be visible as the user mouses over the interested area.
    	$("#researchLabel").text("");
    	$("#gamesLabel").text("");
    	$("#photosLabel").text("");
    	//This is the same code for each of the respective sections
    });
    $("#topRight").mouseover(function(){
    	$("#research").attr("src", "Assets/images/social_psyc_poster_dark.jpg");
    	$("#games").attr("src", "Assets/images/butterfly.jpg");
    	$("#photos").attr("src", "Assets/images/koln.jpg");
    	$("#design").attr("src", "Assets/images/bun_bun_home_image.jpg");
    	$("#researchLabel").text("RESEARCH");
    	$("#designLabel").text("");
    	$("#gamesLabel").text("");
    	$("#photosLabel").text("");
    });
    $("#bottomLeft").mouseover(function(){
    	$("#games").attr("src", "Assets/images/butterfly_dark.jpg");
    	$("#design").attr("src", "Assets/images/bun_bun_home_image.jpg");
    	$("#photos").attr("src", "Assets/images/koln.jpg");
    	$("#research").attr("src", "Assets/images/social_psyc_poster.jpg");
    	$("#gamesLabel").text("GAMES");
    	$("#photosLabel").text("");
    	$("#researchLabel").text("");
    	$("#designLabel").text("");
    });
    $("#bottomRight").mouseover(function(){
    	$("#photos").attr("src", "Assets/images/koln_dark.jpg");
    	$("#design").attr("src", "Assets/images/bun_bun_home_image.jpg");
    	$("#research").attr("src", "Assets/images/social_psyc_poster.jpg");
    	$("#games").attr("src", "Assets/images/butterfly.jpg");
    	$("#photosLabel").text("PHOTOGRAPHY");
    	$("#designLabel").text("");
    	$("#researchLabel").text("");
    	$("#gamesLabel").text("");
    });
    $(".container").mouseover(function(){
    	//This code is to ensure that the page returns to its normal display.
    	$("#design").attr("src", "Assets/images/bun_bun_home_image.jpg");
    	$("#research").attr("src", "Assets/images/social_psyc_poster.jpg");
    	$("#games").attr("src", "Assets/images/butterfly.jpg");
    	$("#photos").attr("src", "Assets/images/koln.jpg");
    	//all the text also needs to be gone when the user goes back up to the header
    	$("#designLabel").text("");
    	$("#researchLabel").text("");
    	$("#gamesLabel").text("");
    	$("#photosLabel").text("");
    });
});