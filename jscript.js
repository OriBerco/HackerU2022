

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  // Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar

  if (document.body.scrollTop > 510 || document.documentElement.scrollTop > 510) {
    document.querySelector(".mainLogo").style.width = "13vw";
    document.querySelector(".mainLogo").style.height = "18vh";
    document.querySelector(".mainLogo").style.position = "fixed";
    document.querySelector(".mainLogo").style.left = "0vw";
    document.querySelector('navbar').style.position = 'fixed';
    navbar.classList.add("sticky")
  } else {
    document.querySelector(".mainLogo").style.width = "36vw";
    document.querySelector(".mainLogo").style.height = "50vh";
    document.querySelector(".mainLogo").style.position = "relative";
    document.querySelector(".mainLogo").style.left = "0vw";navbar.classList.remove("sticky")
  }
}

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
   for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000)
}

/* let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
 */