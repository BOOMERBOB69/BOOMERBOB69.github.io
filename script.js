let balance = 0.01;
let titleAnimation = ["C", "O", "O", "K", "I", "E", " ", "C", "L", "I", "C", "K", "E", "R"]
let title = ""
let startingIndex = -1;
let time = 3;
let timer = setInterval(animateTitleTimer, 300);
let restart = false;

setTimeout(restartAnimation, 7200);;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function restartAnimation() {
	time = 3;
	timer = setInterval(animateTitleTimer, 300);
	restart = false;
}

function animateTitleTimer(){
	time--;
	if (!restart) {
		restart = true;
		animateTitle();
	}
	if(time === 0 && startingIndex != 13) {
		time = 1;
		animateTitle();
	}
	else {
		startingIndex = -1;
		title = "";
	}
}

function animateTitle() {
	/*
	if (startingIndex++ >= 13) {
		startingIndex = -1;
		title = ""
	}
	else {
	*/
		startingIndex += 1;
		title += titleAnimation[startingIndex];
		document.getElementById("title").innerHTML = title;
	//}
}

function clickedMain() {
	balance += 1;
	restartAnimation();
	clicked();
}


function clicked() {
	document.getElementById("balance").innerHTML = "Balance: $" + balance;
}

var $el = $("#very-specific-design");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {
  
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / elWidth,    
    ui.size.height / elHeight
  );
  
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}

doResize(null, starterData);


