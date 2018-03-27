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
	this.image = "Assets/sugarGlaze.jpg";
}

function doubleChocolate(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/doubleChocolate.jpg";
}


var storedBun = localStorage.getItem("buns");
var bunList = JSON.parse(storedBun);

function identifyBun(){         //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	if (bunList[i].glaze == "none") {
	    return new noGlaze(bunList[i].glaze, bunList[i].number);
	}
	if (bunList[i].glaze == "vanillaMilk") {
	   	return new vanillaMilk(bunList[i].glaze, bunList[i].number);
	}
    if (bunList[i].glaze == "sugarMilk") {
      	return new sugarMilk(bunList[i].glaze, bunList[i].number);
    }
    if (bunList[i].glaze == "doubleChocolate") {
        return new doubleChocolate(bunList[i].glaze, bunList[i].number);
    }
}

var newBuns = [];

function createBun(){
	for (i in bunList){
		newBuns.push(identifyBun(bunList[i]));
	}
}

$(document).ready(function(){
	
	createBun();
    
    $('#bun_Description1').text("You have selected " + newBuns[0].number + " bun(s) with " + newBuns[0].glaze + " style glaze.");
    $('#bun_Image1').attr("src", newBuns[0].image);
    $('#price1').text("Price: $" + (1.50 * newBuns[0].number));

    $('#bun_Description2').text("You have selected " + newBuns[1].number + " bun(s) with " + newBuns[1].glaze + " style glaze.");
    $('#bun_Image2').attr("src", newBuns[1].image);
    $('#price2').text("Price: $" + (1.50 * newBuns[1].number));

    $('#bun_Description3').text("You have selected " + newBuns[2].number + " bun(s) with " + newBuns[2].glaze + " style glaze.");
    $('#bun_Image3').attr("src", newBuns[2].image);
    $('#price3').text("Price: $" + (1.50 * newBuns[2].number));

    $('#bun_Description4').text("You have selected " + newBuns[3].number + " bun(s) with " + newBuns[3].glaze + " style glaze.");
    $('#bun_Image4').attr("src", newBuns[3].image);
    $('#price4').text("Price: $" + (1.50 * newBuns[3].number));

    
});