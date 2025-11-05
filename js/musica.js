// JS para funcionalidades futuras de la sección Música
// ...puedes agregar aquí efectos, reproductores personalizados, etc...
document.addEventListener("DOMContentLoaded", function() {
    const tabRecomendada = document.getElementById("tab-recomendada");
    const tabPlaylists = document.getElementById("tab-playlists");
    const secRecomendada = document.getElementById("recomendada-section");
    const secPlaylists = document.getElementById("playlists-section");

    tabRecomendada.addEventListener("click", function() {
        tabRecomendada.classList.add("active-tab");
        tabPlaylists.classList.remove("active-tab");
        secRecomendada.style.display = "block";
        secPlaylists.style.display = "none";
    });
    tabPlaylists.addEventListener("click", function() {
        tabPlaylists.classList.add("active-tab");
        tabRecomendada.classList.remove("active-tab");
        secRecomendada.style.display = "none";
        secPlaylists.style.display = "block";
    });
});
