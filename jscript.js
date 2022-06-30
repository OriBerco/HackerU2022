

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  // Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar

  if (document.body.scrollTop > 760 || document.documentElement.scrollTop > 760) {
    document.querySelector(".mainLogo").style.width = "6vw";
    document.querySelector(".mainLogo").style.height = "7vh";
    document.querySelector(".mainLogo").style.maxWidth = "7vw";
    document.querySelector(".mainLogo").style.position = "fixed";
    document.querySelector(".mainLogo").style.left = "0vw";
    
    
  } else {
    document.querySelector(".mainLogo").style.width = "30vw";
    document.querySelector(".mainLogo").style.height = "50vh";
    document.querySelector(".mainLogo").style.maxWidth = "30vw";
    document.querySelector(".mainLogo").style.position = "relative";
    document.querySelector(".mainLogo").style.left = "0vw";
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

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const card7 = document.getElementById('card7');
const card8 = document.getElementById('card8');
const wrapper1 = document.querySelector('.wrapper1');
const wrapper2 = document.querySelector('.wrapper2');
const wrapper3 = document.querySelector('.wrapper3');
const wrapper4 = document.querySelector('.wrapper4');
const wrapper5 = document.querySelector('.wrapper5');
const wrapper6 = document.querySelector('.wrapper6');
const wrapper7 = document.querySelector('.wrapper7');
const wrapper8 = document.querySelector('.wrapper8');

const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');
const close5 = document.querySelector('.close5');
const close6 = document.querySelector('.close6');
const close7 = document.querySelector('.close7');
const close8 = document.querySelector('.close8');
card1.addEventListener('click',()=>{
    wrapper1.style.display = 'block';
});
close1.addEventListener('click',()=>{
    wrapper1.style.display = 'none';
});
 
card2.addEventListener('click',()=>{
    wrapper2.style.display = 'block';
});
close2.addEventListener('click',()=>{
    wrapper2.style.display = 'none';
});
 
card3.addEventListener('click',()=>{
    wrapper3.style.display = 'block';
});
close3.addEventListener('click',()=>{
    wrapper3.style.display = 'none';
});
 
card4.addEventListener('click',()=>{
    wrapper4.style.display = 'block';
});
close4.addEventListener('click',()=>{
    wrapper4.style.display = 'none';
});
 
card5.addEventListener('click',()=>{
    wrapper5.style.display = 'block';
});
close5.addEventListener('click',()=>{
    wrapper5.style.display = 'none';
});
 
card6.addEventListener('click',()=>{
    wrapper6.style.display = 'block';
});
close6.addEventListener('click',()=>{
    wrapper6.style.display = 'none';
});
 
card7.addEventListener('click',()=>{
    wrapper7.style.display = 'block';
});
close7.addEventListener('click',()=>{
    wrapper7.style.display = 'none';
});
 
card8.addEventListener('click',()=>{
    wrapper8.style.display = 'block';
});
close8.addEventListener('click',()=>{
    wrapper8.style.display = 'none';
});
 