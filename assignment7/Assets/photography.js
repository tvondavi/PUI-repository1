var feed = new Instafeed ({
    get: 'user',
    userId: 258539209,
    accessToken: "258539209.f556f19.643f4786fce4433a9f7648634e0f36a1",
});

feed.run();

$(document).ready(function() {
	AOS.init();
	window.addEventListener('load', AOS.refresh);
});