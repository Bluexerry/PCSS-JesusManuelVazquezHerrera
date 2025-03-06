// Inicialización de Particles.js en el elemento con id "particles-js"
particlesJS("particles-js", {
    "particles": {
        // Configuración del número de partículas
        "number": {
            "value": 80, // Número total de partículas
            "density": {
                "enable": true, // Habilita la distribución en función del área
                "value_area": 800 // Área en la que se distribuyen las partículas, afecta su densidad
            }
        },
        // Configuración del color de las partículas
        "color": {
            "value": "#ffffff" // Color blanco para las partículas
        },
        // Configuración de la forma que adoptan las partículas
        "shape": {
            "type": "circle", // Forma de las partículas: círculo
            "stroke": {
                "width": 0, // Ancho del trazo del contorno (0 sin trazo)
                "color": "#000000" // Color del trazo (no se verá al estar en 0)
            }
        },
        // Configuración de la opacidad de las partículas
        "opacity": {
            "value": 0.5, // Opacidad fija (50%)
            "random": false // No se varía la opacidad aleatoriamente
        },
        // Configuración del tamaño de las partículas
        "size": {
            "value": 3, // Tamaño base de las partículas
            "random": true // Se aplica variación aleatoria al tamaño
        },
        // Conectividad entre partículas
        "line_linked": {
            "enable": true, // Se habilita la línea de conexión entre partículas
            "distance": 150, // Distancia máxima para que se conecten las partículas
            "color": "#ffffff", // Color blanco para las líneas
            "opacity": 0.4, // Opacidad de las líneas
            "width": 1 // Ancho de las líneas
        },
        // Movimiento de las partículas
        "move": {
            "enable": true, // Se habilita el movimiento
            "speed": 6, // Velocidad de movimiento
            "direction": "none", // Dirección del movimiento (ninguna dirección fija)
            "random": false, // No se aplica movimiento aleatorio
            "straight": false, // No se mueve en línea recta, produce efecto de "curvas"
            "out_mode": "out" // Al alcanzar el borde, las partículas salen del área en lugar de rebotar
        }
    },
    // Configuración de interactividad del usuario
    "interactivity": {
        "detect_on": "canvas", // Se detecta la interacción sobre el canvas
        "events": {
            // Configuración del evento onhover (al pasar el ratón)
            "onhover": {
                "enable": true, // Habilita la interacción al pasar el cursor
                "mode": "repulse" // Modo "repulse": las partículas se alejan del cursor
            },
            // Configuración del evento onclick (al hacer clic)
            "onclick": {
                "enable": true, // Habilita la interacción al hacer clic
                "mode": "push" // Modo "push": se agregan nuevas partículas al hacer clic
            }
        },
        // Configuración de los modos de interacción
        "modes": {
            "repulse": {
                "distance": 100, // Distancia a la que las partículas se repelen del cursor
                "duration": 0.4 // Duración de la animación de repulsión
            },
            "push": {
                "particles_nb": 4 // Número de partículas que se agregan al hacer clic
            }
        }
    },
    // Habilita soporte para pantallas de alta resolución
    "retina_detect": true
});