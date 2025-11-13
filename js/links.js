// JS para funcionalidades futuras de la sección Links
// ...puedes agregar aquí efectos, validaciones, etc...

// Animación extra para los enlaces al pasar el mouse
document.querySelectorAll('.animated-link').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        link.classList.add('pulse-anim');
        setTimeout(function() {
            link.classList.remove('pulse-anim');
        }, 220);
    });
});

// .pulse-anim ya está definido en CSS para un efecto visual extra
