// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 150
    );
}

// Función para agregar clase 'visible' a las secciones en el viewport
function handleScroll() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });

    // Actualizar enlace activo en scroll
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Evento de scroll
window.addEventListener('scroll', handleScroll);

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', handleScroll);

// Theme Toggle
const toggleButton = document.getElementById('toggle-button');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Cambiar icono
        toggleButton.innerHTML = document.body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
}

// Portfolio Filters
document.querySelectorAll('.portfolio-filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project').forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!validateEmail(email)) {
            alert('Por favor, introduce un email válido.');
            event.preventDefault();
            return;
        }

        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres.');
            event.preventDefault();
            return;
        }

        // Mostrar mensaje de confirmación
        alert('¡Mensaje enviado correctamente!');
        contactForm.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registrado con alcance:', registration.scope);
        }, err => {
            console.log('Fallo el registro del ServiceWorker:', err);
        });
    });
}

// *** Menú Toggle (Remplaza al Hamburger Menu Toggle anterior) ***
// Seleccionar elementos
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
const sidebar = document.querySelector('.sidebar');
const navLinksElements = document.querySelectorAll('.sidebar-nav a');

// Asegurarse de que los elementos existen antes de añadir event listeners
if (menuToggle && overlay && sidebar && navLinksElements.length > 0) {
    // Función para abrir/cerrar la sidebar
    menuToggle.addEventListener('click', () => {
        const isActive = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Actualizar atributos ARIA
        menuToggle.setAttribute('aria-expanded', isActive);
        sidebar.setAttribute('aria-hidden', !isActive);
    });

    // Cerrar la sidebar al hacer clic en el overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        
        // Actualizar atributos ARIA
        menuToggle.setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
    });

    // Cerrar la sidebar al hacer clic en cualquier enlace de navegación
    navLinksElements.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            
            // Actualizar atributos ARIA
            menuToggle.setAttribute('aria-expanded', false);
            sidebar.setAttribute('aria-hidden', true);
        });
    });
}
// *** Fin del Menú Toggle ***

// Nota: Se ha eliminado el código relacionado con '.hamburger' y '.nav-links' para evitar conflictos.