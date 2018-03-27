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
    
    for (var i = 0; i < newBuns.length; i ++){
        $('.bun_Description').text("You have selected " + newBuns[i].number + " bun(s) with " + newBuns[i].glaze + " style glaze.");
        $('.bun_Image').attr("src", newBuns[i].image);
        $('.price').text("Price: $" + (1.50 * newBuns[i].number));
    }
});