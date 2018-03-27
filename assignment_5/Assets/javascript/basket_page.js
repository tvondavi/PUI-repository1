//create and object for each glaze type
function noGlaze(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/noGlaze.jpg";
}

//create and object for each glaze type
function vanillaMilk(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/vanillaMilk.jpg";
}

//create and object for each glaze type
function sugarMilk(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/sugarGlaze.jpg";
}

//create and object for each glaze type
function doubleChocolate(glaze, number){
	this.glaze = glaze;
	this.number = number;
	this.image = "Assets/doubleChocolate.jpg";
}

//Declare some public variables that will allow me to manipulate the objects in local storage easily
var storedBun = localStorage.getItem("buns");
var bunList = JSON.parse(storedBun);

//take the information from the parsed list and assign the objects
function identifyBun(){
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

//another global variable list that will be used for the actual displayed items.
var newBuns = [];

//call the identifyBun function for every item stored in local storage to allow users to have multiple items in the cart
function createBun(){
	for (i in bunList){
		newBuns.push(identifyBun(bunList[i]));
	}
}

//Primary function of the page
$(document).ready(function(){
	
	//call the function and the global list
	createBun();
    
    //check the length of the list to see which divs will need to be displayed
    if (newBuns.length == 0){
    	$('#bun1').hide();
    	$('#bun2').hide();
    	$('#bun3').hide();
        $('#bun4').hide();
    }
    
    if (newBuns.length <= 1){
    	$('bun2').hide();
    	$('#bun3').hide();
        $('#bun4').hide();
    }

    if (newBuns.length <= 2){
        $('#bun3').hide();
        $('#bun4').hide();
    
    }
  
    if (newBuns.length <= 3){
    	$('#bun4').hide();
    }


    //Add functionality to the remove buttons
    $('#remove1').click(function(){
    	//hide the content first
    	$('#remove1').parent().hide();
    	//update the list
    	newBuns.shift();
    	//then update localStorage with the list
    	localStorage.setItem("buns", JSON.stringify(newBuns));
    });
//Repeated the above actions for all the "remove" buttons
    $('#remove2').click(function(){
    	$('#remove2').parent().hide();
    	newBuns.splice(1, 1);
    	localStorage.setItem("buns", JSON.stringify(newBuns));
    });

    $('#remove3').click(function(){
    	$('#remove3').parent().hide();
    	newBuns.splice(2,1);
    	localStorage.setItem("buns", JSON.stringify(newBuns));
    });

    $('#remove4').click(function(){
    	$('#remove4').parent().hide();
    	newBuns.pop();
    	localStorage.setItem("buns", JSON.stringify(newBuns));
    });
  
//Display the different types of glazes in the different divs. Any glaze can go into any div, but only 4 types of glazes exist  
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