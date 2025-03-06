# Currículum Vitae y Portafolio Digital

Este proyecto constituye un currículum vitae y portafolio digital de alta calidad profesional, desarrollado en tecnologías web (**HTML**, **CSS** y **JavaScript**). Se ha diseñado como una aplicación de una sola página, donde la información se organiza en secciones bien delimitadas, facilitando la navegación y el acceso a datos personales, habilidades, experiencia laboral, formación y proyectos.

---

## Contenido

- [Descripción General](#descripción-general)
- [Estructura del Proyecto](#estructura-del-proyecto)
  - [Documento HTML (index.html)](#documento-html-indexhtml)
  - [Estilos y Diseño (style.css)](#estilos-y-diseño-stylecss)
  - [Interactividad y Funcionalidades (scripts.js)](#interactividad-y-funcionalidades-scriptsjs)
  - [Fondo Animado (particles-config.js)](#fondo-animado-particles-configjs)
  - [Recursos](#recursos)
- [Conclusión](#conclusión)

---

## Descripción General

El proyecto muestra de manera dinámica y profesional la trayectoria de Jesús Manuel Vázquez Herrera, desarrollador de aplicaciones web, resaltando:

- **Perfil profesional y datos personales:** Descripción del “Sobre mí”, enfatizando la formación y experiencia.
- **Habilidades técnicas:** Lenguajes, frameworks, herramientas y metodologías (incluyendo Agile y Scrum).
- **Experiencia laboral:** Trayectoria profesional detallada en bloques, con responsabilidades y logros.
- **Formación y Educación:** Información sobre estudios de FP, cursos y otros estudios relevantes.
- **Proyectos destacados:** Ejemplos prácticos de desarrollos frontend, backend y fullstack, con enlaces a repositorios de GitHub.
- **Contacto:** Formulario de contacto validado y datos de redes sociales.

---

## Estructura del Proyecto

### Documento HTML (index.html)

El archivo **index.html** se estructura en varias secciones clave utilizando etiquetas semánticas, lo que favorece la accesibilidad y el SEO. Entre las secciones destacan:

- **Head:**  
  - Definición de la codificación (UTF-8) y configuración del viewport para responsividad.  
  - Inclusión de recursos externos: Google Fonts, favicon, Font Awesome y la librería Particles.js para el fondo animado.

- **Sidebar:**  
  - Presenta la imagen de perfil (ubicada en la carpeta `Recursos/Jesus.png`), información profesional y un menú de navegación lateral que enlaza con todas las secciones del currículum.

- **Contenido Principal (Main):**  
  - **Sobre mí:** Presenta un párrafo introductorio y una lista con datos relevantes (fecha de nacimiento, carnet, disponibilidad, etc.).  
  - **Habilidades:** Desglose de competencias divididas en categorías (lenguajes, frameworks, herramientas, etc.).  
  - **Experiencia:** Bloques detallados por cada experiencia laboral, describiendo roles, periodos y responsabilidades.  
  - **Educación:** Muestra la formación académica en diferentes niveles y cursos, también distribuida en bloques.  
  - **Proyectos:** Tarjetas con la descripción de cada proyecto y enlaces a GitHub para ver el código o documentación.  
  - **Contacto:** Datos de contacto e integración de un formulario validado mediante Formspree.

- **Footer:**  
  - Información de derechos de autor y enlaces a redes sociales como LinkedIn, GitHub y Twitter.

### Estilos y Diseño (style.css)

La hoja de estilos **style.css** define:

- **Variables CSS:** Permiten una gestión centralizada de colores y otros estilos.
- **Reset y configuración básica:** Para establecer normas generales en todos los elementos.
- **Diseño responsivo:** Uso de media queries para adaptar la página a distintos dispositivos.  
- **Sidebar y navegación:** Diseñado para un acceso rápido a cada sección, con efectos hover y animaciones.  
- **Animaciones y transiciones:** Efectos "fade-in" para la aparición progresiva de secciones y transiciones suaves para enlaces y botones.  
- **Estilos para secciones específicas:** Detalle en la presentación de los bloques de experiencia, educación, proyectos y contacto.

### Interactividad y Funcionalidades (scripts.js)

El archivo **scripts.js** añade interactividad mediante:

- **Detección de visibilidad (viewport):** La función `isInViewport()` y `handleScroll()` revelan secciones al hacer scroll y actualizan la navegación para resaltar la sección activa.
- **Validación del Formulario de Contacto:** Se valida el formato de email y la longitud del mensaje, mostrando alertas y reiniciando el formulario en caso de envío correcto.
- **Menú Toggle (Sidebar):** Gestión de la apertura y cierre dinámico del menú lateral a través de eventos de clic en el botón toggle y en el overlay. Se utilizan atributos ARIA para mejorar la accesibilidad.

### Fondo Animado (particles-config.js)

El archivo **particles-config.js** configura el fondo animado utilizado en la página mediante la librería **particles.js**. Entre sus características se encuentran:

- **Número y densidad:** Define 80 partículas distribuidas en función del área del canvas.
- **Apariencia:** Las partículas son de color blanco, de forma circular, con opacidad y tamaño configurables (con variación aleatoria en el tamaño).
- **Conectividad:** Se habilitan líneas de conexión entre partículas con configuración de distancia, opacidad y grosor definidos.
- **Movimiento:** Las partículas se mueven con una velocidad definida sin dirección fija y salen del canvas al alcanzar el borde.
- **Interacción del usuario:**  
  - **onhover:** Modo "repulse" que aleja las partículas del cursor.  
  - **onclick:** Modo "push" que añade nuevas partículas.
- **Soporte Retina:** Se habilita para mejorar la visualización en pantallas de alta resolución.

### Recursos

La carpeta **Recursos** contiene los archivos multimedia utilizados en el proyecto. En este caso, se incluye:

- `Jesus.png` – Imagen de perfil utilizada en la sidebar.

---

## Conclusión

Este currículum digital y portafolio es una solución integral que refleja profesionalismo y las capacidades técnicas de desarrollo web. Se destaca por:

- Una **arquitectura limpia y semántica** que favorece la accesibilidad y la optimización SEO.
- Un **diseño moderno y responsivo** que garantiza una experiencia óptima en cualquier dispositivo.
- Funcionalidades interactivas y animaciones que **mejoran la usabilidad** y resaltan cada sección conforme el usuario se desplaza.
- **Buenas prácticas de desarrollo** reflejadas en la validación de formularios, el uso de variables CSS y una estructuración modular del código.

Explora cada una de las secciones para conocer en detalle mi trayectoria y proyectos. ¡Te invito a descubrir más sobre mi perfil profesional!

---
