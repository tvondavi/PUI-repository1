$(document).ready(function(){
//I created an empty object that will be manipulated later 
    var bun = [];

    $('#noGlaze').change(function(){
        //I declared a new variable to organize the information
        var noGlaze = { glaze: "none", number: $(this).val() };
        //Add the new variable to the empty object
        bun.push(noGlaze);
        //Some console logging and testing to make sure I don't screw up
        console.log(bun);
        //Save the now filled object in local storage for page manipulation
        localStorage.setItem("buns", JSON.stringify(bun));
        //This updates the website's description of the detail page.
        $('#text').append("You have selected " + $(this).val() + " buns without any glaze.");
        //I did the above things for all of the drop down bars
    });
    $('#sugarMilk').change(function(){
    	var sugarMilk = { glaze: "sugarMilk", number: $(this).val() };
        bun.push(sugarMilk);
        console.log(bun);
        localStorage.setItem("buns", JSON.stringify(bun));
        $('#text').append("You have selected " + $(this).val() + " buns with sugar milk glaze.");
    });
    $('#vanillaMilk').change(function(){
    	var vanillaMilk = { glaze: "vanillaMilk", number: $(this).val() };
        bun.push(vanillaMilk);
        console.log(bun);
        localStorage.setItem("buns", JSON.stringify(bun));
        $('#text').append("You have selected " + $(this).val() + " buns with vanilla milk glaze.");
    });
    $('#doubleChocoloate').change(function(){
    	var doubleChocoloate = { glaze: "doubleChocoloate", number: $(this).val() };
        bun.push(doubleChocoloate);
        console.log(bun);
        localStorage.setItem("buns", JSON.stringify(bun));
        $('#text').append("You have selected " + $(this).val() + " buns with double chocolate glaze.");
    });
    
    $('#checkout').click(function() {
        //check to see if there is something stored in localStorage
        if (localStorage.getItem("buns") !== null){
        	//Updates the basket list item when the user clicks on the add to basket button
            var dummy = localStorage.length;
         	$('#notification').append("(" + dummy + ")");
        }
    });
});
