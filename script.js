let currentIndex = 0;

function changeSlide(n) {
  currentIndex += n;
  showSlide();
}

function showSlide() {
  const slides = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (currentIndex > totalSlides - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

// Auto cambiar las imágenes cada 5 segundos
setInterval(function() {
  changeSlide(1);
}, 10000); // Cambiado a 5000 milisegundos (5 segundos)
