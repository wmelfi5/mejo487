
var slideIndex = 1;

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){

  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");

  if (n < 1){
    slideIndex = slides.length;
  }

  if (n > slides.length){
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


showSlides(slideIndex);
