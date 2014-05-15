// JavaScript Document

window.onload = init;

var fonts;  //array holding fonts
var sizes;	//array holding sizes

function init() {
	
	fonts = document.querySelectorAll("#fontList li");
	sizes = document.querySelectorAll("#sizes li");
	
	for(var i=0;i<fonts.length;i++) {		//assign event handlers to font and size buttons
		fonts[i].onclick = changeFont;
		fonts[i].setAttribute("data-number", i);
		sizes[i].onclick = changeSize;
		sizes[i].setAttribute("data-number", i);
	}
}

function changeFont() {		//change font/description/menu
	
	for(var i=0;i<fonts.length;i++) {		//reset everything when button is pressed
			fonts[i].style.backgroundColor = "#1D1D1D";		//make all the backgrounds dark grey
			document.querySelector("#velocette").style.display = "none";	//make all descriptions go away
			document.querySelector("#harlow").style.display = "none";
			document.querySelector("#hamburger").style.display = "none";
			document.querySelector("#budmo").style.display = "none";
	}
	
	if(this.getAttribute("data-number") == 0) {		//Velocette
		document.querySelector("#sample").style.fontFamily = "'Velocette'";		//change font
		document.querySelector("#velocette").style.display = "block";		//show description
		this.style.backgroundColor = "#373837";		//highlight colour
	}
	
	if(this.getAttribute("data-number") == 1) {		//Harlow Solid
		document.querySelector("#sample").style.fontFamily = "'HARLOWSI'";
		document.querySelector("#harlow").style.display = "block";
		this.style.backgroundColor = "#373837";
	}
	
	if(this.getAttribute("data-number") == 2) {		//Hamburger Heaven
		document.querySelector("#sample").style.fontFamily = "'HAMBH___'";
		document.querySelector("#hamburger").style.display = "block";
		this.style.backgroundColor = "#373837";
	}
	
	if(this.getAttribute("data-number") == 3) {		//Budmo
		document.querySelector("#sample").style.fontFamily = "'budmo%20jiggler'";
		document.querySelector("#budmo").style.display = "block";
		this.style.backgroundColor = "#373837";
	}
}

function changeSize() {
	
	for(var i=0;i<sizes.length;i++) {		//reset colour
			sizes[i].style.backgroundColor = "#1D1D1D";
	}
	
	if(this.getAttribute("data-number") == 0) {		
		document.querySelector("#sample").style.fontSize = "96px";		//change font size
		this.style.backgroundColor = "#373837";		//highlight colour
	}
	
	if(this.getAttribute("data-number") == 1) {
		document.querySelector("#sample").style.fontSize = "48px";
		this.style.backgroundColor = "#373837";
	}
	
	if(this.getAttribute("data-number") == 2) {
		document.querySelector("#sample").style.fontSize = "32px";
		this.style.backgroundColor = "#373837";
	}
	
	if(this.getAttribute("data-number") == 3) {
		document.querySelector("#sample").style.fontSize = "16px";
		this.style.backgroundColor = "#373837";
	}	
}