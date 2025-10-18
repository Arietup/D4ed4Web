document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("flipnote-desplegar-btn");
    const extra = document.getElementById("flipnote-extra");
    if (btn && extra) {
        btn.addEventListener("click", function() {
            if (extra.style.display === "none" || extra.style.display === "") {
                extra.style.display = "block";
                btn.textContent = "Ocultar";
                setTimeout(function() {
                    extra.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 120);
            } else {
                extra.style.display = "none";
                btn.textContent = "Desplegar";
            }
        });
    }
});
