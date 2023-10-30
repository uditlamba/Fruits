let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 310; /* Width of each slide + margin */
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}
showSlide(currentIndex);
