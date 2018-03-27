function noGlaze(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/noGlaze.jpg";
}

function vanillaMilk(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/vanillaMilk.jpg";
}

function sugarMilk(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/sugarMilk.jpg";
}

function doubleChocolate(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/doubleChocolate.jpg";
}


var storedBun = localStorage.getItem("buns");
var bunList = JSON.parse(storedBun);

function identifyBun (){
    for (i in bunList) {
	    if (bunList[i].glaze == "none") {
		    return new noGlaze(bunList[i].glaze, bunList[i].number);
		    i += 1;
	    }
	    if (bunList[i].glaze == "vanillaMilk") {
	    	return new vanillaMilk(bunList[i].glaze, bunList[i].number);
	    	i += 1;
	    }
        if (bunList[i].glaze == "sugarMilk") {
        	return new sugarMilk(bunList[i].glaze, bunList[i].number);
        	i += 1;
        }
        if (bunList[i].glaze == "doubleChocolate") {
    	    return new doubleChocolate(bunList[i].glaze, bunList[i].number);
    	    i += 1;
        }
    }
}


$(document).ready(function(){
    
    var selectedBun = identifyBun();

	$('#bun_Description').text("You have selected " + selectedBun.number + " bun(s) with " + selectedBun.glaze + " style glaze.");
	$('#bun_Image').attr("src", selectedBun.image);
	$('#price').text("Price: $" + (1.50 * selectedBun.number));
});