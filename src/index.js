
// Sidebar toggle for mobile
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", function() {
  sidebar.classList.toggle("-translate-x-full");
});

// Navigation Links Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Slideshow functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slides');
const totalSlides = slides.length;
let interval = setInterval(showNextSlide, 2500);

function showNextSlide() {
  slides[currentIndex].classList.remove('opacity-100');
  slides[currentIndex].classList.add('opacity-0');
  slides[currentIndex].classList.add('hidden');
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.remove('hidden');
  slides[currentIndex].classList.add('opacity-100');
  slides[currentIndex].classList.remove('opacity-0');
}

document.querySelector('.prev-slide').addEventListener('click', () => {
  clearInterval(interval);  // Pause auto-slide
  slides[currentIndex].classList.remove('opacity-100');
  slides[currentIndex].classList.add('opacity-0');
  slides[currentIndex].classList.add('hidden');
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slides[currentIndex].classList.remove('hidden');
  slides[currentIndex].classList.add('opacity-100');
  slides[currentIndex].classList.remove('opacity-0');
  interval = setInterval(showNextSlide, 5000); // Resume auto-slide
});

document.querySelector('.next-slide').addEventListener('click', () => {
  clearInterval(interval);  // Pause auto-slide
  showNextSlide();  // Manually show next slide
  interval = setInterval(showNextSlide, 2500);  // Resume auto-slide
});
