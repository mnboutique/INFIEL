let currentSlide = 0;


function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    const visibleSlides = window.innerWidth <= 480 ? 1 : 2; // Mostrar una o dos imágenes dependiendo del tamaño de pantalla


    // Actualiza la posición de la diapositiva actual
    currentSlide += direction;


    // Validación para evitar desbordamiento de índices
    if (currentSlide >= totalSlides - visibleSlides) {
        // Si se llega al final, volver a la primera diapositiva
        currentSlide = 0;
    } else if (currentSlide < 0) {
        // Si se retrocede antes de la primera diapositiva, ir a la última
        currentSlide = totalSlides - visibleSlides;
    }


    // Calcula el desplazamiento de las imágenes
    const offset = -currentSlide * (100 / visibleSlides);
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}


// Ajustar el carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    const visibleSlides = window.innerWidth <= 480 ? 1 : 2;
    const offset = -currentSlide * (100 / visibleSlides);
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
});


// Función para reiniciar el carrusel al inicio si hay un error en la posición
function resetCarousel() {
    currentSlide = 0;
    const visibleSlides = window.innerWidth <= 480 ? 1 : 2;
    const offset = -currentSlide * (100 / visibleSlides);
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}


// Llamar a la función reset si detecta un problema de posición en el móvil
document.querySelector('.carousel-images').addEventListener('transitionend', () => {
    if (currentSlide >= totalSlides - visibleSlides || currentSlide < 0) {
        resetCarousel();
    }
});


// Inicia el carrusel con la primera diapositiva visible
changeSlide(0);

