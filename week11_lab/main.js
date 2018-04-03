// TODO (Step 2): fill in code creating products objects here
var products = {
    "cinnamonBuns": [
        {
        	"name" : "Birthday Cake", "Walnut", "Lavender",
        	"price" : "$2.00", "$2.50", "$3.00",
        	"img" : "img/birthday-cake.jpg", "img/mape-walnut.jpg", "img/lavender.jpg",
        	"id" : 0, 1, 2
        }
        {
            "name" : "Walnut", 
            "price" : "$2.00",
        	"img" : "img/mape-walnut.jpg",
        	"id" : 1
        }
        {
        	"name" : "Lavender",
        	"price" : "$2.00",
        	"img" : "img/lavender.jpg",
        	"id" : 2
        }
    ]
}

$(document).ready(function(){
    // TODO (Step 4): fill in code for changing selection-template here
    var source = $("#selection-template").html();

    var template = Handlebars.compile(source);

    var newHTML = template(products);
    
    $("#product-selection-container").append(newHTML);

    // TODO (Step 7): add function call for 1st update to detail-template

    updateProductDetail(0);
    // TODO: (Step 8): add code below for changing product details on click
    $(".product-selection").click(function() {
        var id = $(this).attr("id");
        updateProductDetail(id);
    });
});

// TODO (Step 6): fill in function for updating detail-template based on id
function updateProductDetail(id) {
    var source = $("#detail-template").html();
   
    var template = Handlebars.compile(source);
   
    var newHTML = template(products.cinnamonBuns[id]);
    
    $("#product-detail-container").html(newHTML);

}
