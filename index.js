/* ----- Art & Craft Carousel Functionality ----- */
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentSlideIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

// Set up the slide positions
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (index) => {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
};

// Auto-slide every 2 seconds
const autoSlide = setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  moveToSlide(currentSlideIndex);
}, 2000);

// Manual controls
nextButton.addEventListener('click', () => {
  clearInterval(autoSlide); // Stop auto-slide on manual interaction
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  moveToSlide(currentSlideIndex);
});

prevButton.addEventListener('click', () => {
  clearInterval(autoSlide); // Stop auto-slide on manual interaction
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentSlideIndex);
});

// Back to Top Button Logic
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  // Show the button when the user scrolls more than 300px from the top
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Smooth scrolling when the button is clicked
backToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to top
  });
});
