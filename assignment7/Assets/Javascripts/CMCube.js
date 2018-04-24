$(document).ready(function(){
	// Once the document is ready initialize and call the AOS library
    AOS.init();
	window.addEventListener('load', AOS.refresh);
});