document.addEventListener('DOMContentLoaded', () => {
  const slideTrack = document.querySelector('.slide-track');
  const slides = Array.from(slideTrack.children);
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slideWidth = slides[0].clientWidth; // Largeur fixe de chaque slide

  let currentIndex = 0;
  let isTransitioning = false;
  let autoSlideInterval;

  // Cloner les premières et dernières slides pour le défilement en boucle
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  slideTrack.appendChild(firstClone);
  slideTrack.insertBefore(lastClone, slides[0]);

  // Réinitialiser la position initiale du slider
  slideTrack.style.transform = `translateX(-${slideWidth}px)`;

  const slidesTotalWidth = slides.length * slideWidth;
  let currentPosition = -slideWidth;

  const moveToSlide = (index) => {
      if (!isTransitioning) {
          isTransitioning = true;
          currentIndex = index;
          slideTrack.style.transition = 'transform 0.5s ease';
          slideTrack.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;

          setTimeout(() => {
              isTransitioning = false;
              // Gérer le défilement en boucle sans espace vide
              if (currentIndex === slides.length) {
                  currentIndex = 0;
                  slideTrack.style.transition = 'none';
                  slideTrack.style.transform = `translateX(-${slideWidth}px)`;
              } else if (currentIndex === -1) {
                  currentIndex = slides.length - 1;
                  slideTrack.style.transition = 'none';
                  slideTrack.style.transform = `translateX(-${slides.length * slideWidth}px)`;
              }
          }, 500);
      }
  };

  const nextSlide = () => {
      moveToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
      moveToSlide(currentIndex - 1);
  };

  const startAutoSlide = () => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
          nextSlide();
      }, 3000);
  };

  const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
  };

  prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
  });

  nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
  });

  slideTrack.addEventListener('mouseenter', stopAutoSlide);
  slideTrack.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
});
