// ========================================================================
// Función que verifica si un elemento está visible en el viewport
// ========================================================================
// Se utiliza getBoundingClientRect() para obtener las coordenadas del elemento en relación al viewport.
// Se considera que el elemento está en el viewport si su top es menor o igual que el alto
// de la ventana menos un margen de 150 píxeles.
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 150
    );
}

// ========================================================================
// Función para mostrar las secciones cuando entran en el viewport
// ========================================================================
// Se seleccionan todas las secciones con la clase 'fade-in'
// y se les agrega la clase 'visible' cuando son detectadas en el viewport.
// Además, se actualiza el enlace de navegación activo según la sección visible.
function handleScroll() {
    // Selecciona todas las secciones que deben animarse al aparecer
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });

    // Determina cuál es la sección actualmente visible para resaltar el enlace de navegación correspondiente
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Se considera la sección actual si el desplazamiento vertical es mayor o igual a su top menos 60px
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    // Actualiza los enlaces del menú: remueve la clase 'active' a todos y la añade al que
    // su href coincide con el id de la sección actual
    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Se ejecuta handleScroll cada vez que el usuario hace scroll
window.addEventListener('scroll', handleScroll);

// También se ejecuta una vez que el contenido del documento está completamente cargado,
// para asegurar que todos los elementos se procesen correctamente
document.addEventListener('DOMContentLoaded', handleScroll);

// ========================================================================
// Validación del formulario de contacto
// ========================================================================
// Se selecciona el formulario de contacto y se le añade listener para la validación
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Recupera el valor del campo email y mensaje
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Valida que el email cumple con el formato mediante la función validateEmail()
        if (!validateEmail(email)) {
            alert('Por favor, introduce un email válido.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        // Verifica que el mensaje tenga al menos 10 caracteres
        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres.');
            event.preventDefault(); // Evita el envío
            return;
        }

        // Si todo es correcto, se muestra un mensaje de confirmación y se reinicia el formulario
        alert('¡Mensaje enviado correctamente!');
        contactForm.reset();
    });
}

// Función para validar el formato del email utilizando una expresión regular
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// ========================================================================
// Menú Toggle: Manejo del menú lateral (sidebar)
// ========================================================================

// Selección de los elementos que intervienen en el menú toggle
const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
const sidebar = document.querySelector('.sidebar');
// Seleccionamos todos los enlaces del menú de navegación contenidos en el sidebar
const navLinksElements = document.querySelectorAll('.sidebar-nav a');

// Verifica que los elementos existen antes de asignar los event listeners
if (menuToggle && overlay && sidebar && navLinksElements.length > 0) {
    // Listener para el clic en el botón del menú toggle
    menuToggle.addEventListener('click', () => {
        // Alterna la visibilidad del sidebar y del overlay mediante la clase 'active'
        const isActive = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Actualiza atributos ARIA para mejorar la accesibilidad
        menuToggle.setAttribute('aria-expanded', isActive);
        sidebar.setAttribute('aria-hidden', !isActive);
    });

    // Listener para cerrar el menú cuando se hace clic en el overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        
        // Actualiza atributos ARIA para indicar que el menú está cerrado
        menuToggle.setAttribute('aria-expanded', false);
        sidebar.setAttribute('aria-hidden', true);
    });

    // Cada enlace del menú cierra el sidebar al ser clicado
    navLinksElements.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            
            menuToggle.setAttribute('aria-expanded', false);
            sidebar.setAttribute('aria-hidden', true);
        });
    });
}
// Fin del bloque del menú toggle