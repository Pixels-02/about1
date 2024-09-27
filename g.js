let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatically change slides every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 2000);
