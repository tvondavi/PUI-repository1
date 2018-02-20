function addNewList(){
	alert('hello world alert!');
	console.log('hello world console');
}

// $(document).ready(function(){
//     $("#add-item").click(function() { // bind handler for click event
//         var list = $("#grocery-list"); // get the ol list by id
//         var itemInput = $("#new-list-item"); // get the new item input
// 	  // append the input value within an li element
//         list.append("<li>" + itemInput.val() + "</li>"); 
//     });
//     $(".delete-item").click(function() {
//         console.log("test");
//         $(this).parent().remove();
//     });
// });

// function completeListItem(item) {
//     if (item.checked) { // true if the input checkbox is checked
//         item.parentNode.style.textDecoration = "line-through";
//         // in css, this would be: "text-decoration: line-through"
//     } else {
//         item.parentNode.style.textDecoration = "none";
//         // in css, this would be: "text-decoration: none"
//     }
// }

$(document).on("click", ".complete-item", function(){
	if ($(this).is(':checked')){
	    $(this).parent().css('text-decoration', 'line-through');
	    console.log("test1");
	}
	else{
		$(this).parent().css('text-decoration', 'none');
		console.log("test2");
	}
});

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li><input type='checkbox' class='complete-item'>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});