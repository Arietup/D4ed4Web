// ...existing code for juegosSubtemas definition...

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.juego-card').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', function() {
            card.classList.remove('hovered');
        });
        card.addEventListener('click', function() {
            const juego = card.getAttribute('data-juego');
            const contentDiv = document.getElementById('juego-subtema-content');
            if (window.juegosSubtemas && juegosSubtemas[juego]) {
                contentDiv.innerHTML = juegosSubtemas[juego];
            }
            document.querySelectorAll('.juego-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            setTimeout(function() {
                if (contentDiv) {
                    contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 120);
        });
    });
});
