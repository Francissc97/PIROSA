document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que la página salte si el href es '#'

            const card = this.closest('.card'); // Encuentra el contenedor de la tarjeta
            if (!card) return; // Salir si no se encuentra la tarjeta

            const shortDesc = card.querySelector('.card-short-desc');
            const fullDesc = card.querySelector('.card-full-desc');

            if (fullDesc && shortDesc) { // Asegurarse que ambos elementos existen
                if (fullDesc.style.display === 'none' || fullDesc.style.display === '') {
                    shortDesc.style.display = 'none';
                    fullDesc.style.display = 'block';
                    this.textContent = 'Leer Menos';
                } else {
                    shortDesc.style.display = 'block';
                    fullDesc.style.display = 'none';
                    this.textContent = 'Leer Más';
                }
            }
        });
    });

    // Actualizar el año en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Opcional: Smooth scroll para los enlaces del menú (si quieres añadirlo)
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Solo aplicar smooth scroll a los enlaces internos (que empiezan con #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});