var header = document.getElementsByTagName("header");

function scrolled(){
	header.className = (window.pageYOffset >= document.documentElement.clientHeight - header.offsetHeight) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);
