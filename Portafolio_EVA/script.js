// ===== MENÚ RESPONSIVO =====
let iconoMenu = document.querySelector('#icono-menu');
let barraNavegacion = document.querySelector('.barra-navegacion');

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle('bx-x');
    barraNavegacion.classList.toggle('activo');
};

// ===== SECCIONES ACTIVAS Y SCROLL =====
let secciones = document.querySelectorAll('section');
let enlacesNav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    secciones.forEach(seccion => {
        let top = window.scrollY;
        let offset = seccion.offsetTop - 150;
        let altura = seccion.offsetHeight;
        let id = seccion.getAttribute('id');

        if (top >= offset && top < offset + altura) {
            enlacesNav.forEach(enlace => {
                enlace.classList.remove('activo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activo');
            });
        }
    });

    let encabezado = document.querySelector('header');
    encabezado.classList.toggle('sticky', window.scrollY > 100);

    // Cierra el menú al hacer scroll
    iconoMenu.classList.remove('bx-x');
    barraNavegacion.classList.remove('activo');
};

// ===== ANIMACIONES CON SCROLLREVEAL =====
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.contenido-inicio, .titulo', { origin: 'top' });
ScrollReveal().reveal('.imagen-inicio, .contenedor-servicios, .caja-portafolio, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.contenido-inicio h1, .imagen-sobre-mi', { origin: 'left' });
ScrollReveal().reveal('.contenido-inicio p, .contenido-sobre-mi', { origin: 'right' });

// ===== TEXTO ESCRITO CON TYPED.JS =====
const typed = new Typed('.texto-multiple', {
    strings: ['Estudiante de Diseño Gráfico', 'Desarrolladora Frontend', 'Creativa Visual'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
