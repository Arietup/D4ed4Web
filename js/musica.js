// --- Carga dinámica de canciones y álbumes ---
function loadSongs() {
    fetch('js/songs.json')
        .then(res => res.json())
        .then(songs => {
            const list = document.getElementById('songs-list');
            list.innerHTML = '';
            songs.forEach(song => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${song.url}" target="_blank" class="music-link">${song.title}</a>`;
                list.appendChild(li);
            });
        });
}

function loadAlbums() {
    fetch('js/albums.json')
        .then(res => res.json())
        .then(albums => {
            const list = document.getElementById('albums-list');
            list.innerHTML = '';
            albums.forEach(album => {
                const div = document.createElement('div');
                div.className = 'album-item';
                div.innerHTML = `
                    <div class="album-cover-wrap">
                        <img src="${album.cover}" alt="Album cover" class="album-cover">
                    </div>
                    <div class="album-info">
                        <span class="album-title">${album.title}</span>
                        <a href="${album.link}" class="album-link" target="_blank">Listen</a>
                    </div>
                `;
                list.appendChild(div);
            });
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadSongs();
    loadAlbums();
    // JS para funcionalidades futuras de la sección Música
    // ...puedes agregar aquí efectos, reproductores personalizados, etc...
    const tabRecomendada = document.getElementById("tab-recomendada");
    const tabAlbums = document.getElementById("tab-albums");
    const secRecomendada = document.getElementById("recomendada-section");
    const secAlbums = document.getElementById("albums-section");

    tabRecomendada.addEventListener("click", function() {
        tabRecomendada.classList.add("active-tab");
        tabAlbums.classList.remove("active-tab");
        secRecomendada.style.display = "block";
        secAlbums.style.display = "none";
    });
    tabAlbums.addEventListener("click", function() {
        tabAlbums.classList.add("active-tab");
        tabRecomendada.classList.remove("active-tab");
        secRecomendada.style.display = "none";
        secAlbums.style.display = "block";
    });
});
