function search() {
    const query = document.querySelector('.search-bar input').value;
    alert('You searched for: ' + query);
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("slide").length;
  }
  if (slideIndex > document.getElementsByClassName("slide").length) {
    slideIndex = 1;
  }
  showSlides();
}

function handleClick(slideNumber) {
  alert('Slide $ {slideNumber} clicked');
  
  // Sesuaikan dengan URL halaman yang diinginkan
  window.location.href = `halaman${slideNumber}.html`; // Sesuaikan dengan URL halaman yang diinginkan
  window.location.href = `halaman${slideNumber}.html`;
  window.location.href = `halaman${slideNumber}.html`;
  window.location.href = `halaman${slideNumber}.html`;
}

function readMore(slideNumber) {
  alert('Read more on slide ${slideNumber} ');
  event.stopPropagation();
}

const eventDate = new Date("2024-01-15T06:00:00").getTime();
const countdownElement = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
