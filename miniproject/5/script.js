document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        themeToggle.checked = currentTheme === 'dark';
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDarkMode);
        themeToggle.checked = prefersDarkMode;
        localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light');
    }

    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function updateCarousel() {
        const width = carouselSlides[0].clientWidth;
        carouselContainer.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselSlides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
