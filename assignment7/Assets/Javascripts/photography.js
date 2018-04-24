// Set up the information need for the instragram API
var feed = new Instafeed ({
    get: 'user',
    // This info is my Instagram ID
    userId: 258539209,
    // This token has already changed for security reasons
    accessToken: "258539209.f556f19.643f4786fce4433a9f7648634e0f36a1",
    // This adjusts the sizes of the images
    resolution: "low_resolution",
});
// Call and run the Instagram API
feed.run();
// When the document is ready call and initialize the AOS library
$(document).ready(function() {
	AOS.init();
	window.addEventListener('load', AOS.refresh);
});