function racoon(name, age){
	this.name = name;
	this.age = age;
	this.type = racoon;
	this.image = "Assets/racoon.jpg";
}

function gecko(name, age){
	this.name = name;
	this.age = age;
	this.type = gecko;
	this.image = "Assets/gecko.jpg";
}

function wombat(name, age){
	this.name = name;
	this.age = age;
	this.type = wombat;
	this.image = "Assets/wombat.jpg";
}

var animals = [new racoon(), new gecko(), new wombat()];

var names = ["Jim", "Bob", "Gayle", "East", "Lendall", "Chad", "Randy"];

function generateRandomIndex (maxIndex){
	return Math.floor(Math.random() * maxIndex);
	console.log();
}

function generateRandomname(){
	var randomIndex = generateRandomIndex(names.length);
	return names[randomIndex];
	console.log();
}

function generateRandomage(){
	var randomIdx = generateRandomIndex(10);
	return randomIdx;
	console.log();
}

function generateRandomAnimal(){
	var randomId = generateRandomIndex(animals.length);
	var randomAnimal = animals[randomId];

	if (randomAnimal instanceof racoon) {
		return new racoon(generateRandomname(), generateRandomage());
	}

	else if (randomAnimal instanceof gecko) {
		return new gecko(generateRandomname(), generateRandomage());
	}

	else if (randomAnimal instanceof wombat) {
		return new wombat(generateRandomname(), generateRandomage());
	}
}

$(document).ready(function() {
    
    var ourAnimal = JSON.parse(localStorage.getItem ("savedAnimal"));
    var animalSaved = false;

    if(ourAnimal == null) {
        $("#button").text("Save Me!");
        ourAnimal = generateRandomAnimal();
    }
    else {
    	$("#button").text("Clear!");
        animalSaved = true;  
    }

	$("#info").text(ourAnimal.name + "  " + ourAnimal.age + " years old");
    $("#image").attr("src", ourAnimal.image);

    $("#button").click(function(){
    	if (animalSaved) {
    		localStorage.removeItem("savedAnimal");

    		$("#button").hide();
    		$("#message").text("Cleared!");
    	}
    	else {
    	    localStorage.setItem("savedAnimal", JSON.stringify(animal));

    	    $("#button").hide();
    	    $("#message").text("Saved!");
    	}
    });
});