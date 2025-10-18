// ...existing code for arteSubtemas definition...

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.arte-subtema-card').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', function() {
            card.classList.remove('hovered');
        });
        card.addEventListener('click', function() {
            const subtema = card.getAttribute('data-subtema');
            const contentDiv = document.getElementById('arte-subtema-content');
            if (window.arteSubtemas && arteSubtemas[subtema]) {
                contentDiv.innerHTML = arteSubtemas[subtema];
            }
            document.querySelectorAll('.arte-subtema-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            setTimeout(function() {
                if (contentDiv) {
                    contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 120);
        });
    });
});
