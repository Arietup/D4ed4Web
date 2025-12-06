// --- Carga dinámica de canciones, playlists y álbumes ---
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

function loadPlaylists() {
    fetch('js/playlists.json')
        .then(res => res.json())
        .then(playlists => {
            const list = document.getElementById('playlists-list');
            list.innerHTML = '';
            playlists.forEach(pl => {
                const div = document.createElement('div');
                div.className = 'playlist-item';
                div.innerHTML = `
                    <div class="playlist-header">
                        <span class="playlist-icon">${pl.icon}</span>
                        <span class="playlist-title">${pl.title}</span>
                    </div>
                    <div class="playlist-frame-wrap">
                        <iframe src="${pl.embed}" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
                    </div>
                `;
                list.appendChild(div);
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
    loadPlaylists();
    loadAlbums();
    // JS para funcionalidades futuras de la sección Música
    // ...puedes agregar aquí efectos, reproductores personalizados, etc...
    const tabRecomendada = document.getElementById("tab-recomendada");
    const tabPlaylists = document.getElementById("tab-playlists");
    const tabAlbums = document.getElementById("tab-albums");
    const secRecomendada = document.getElementById("recomendada-section");
    const secPlaylists = document.getElementById("playlists-section");
    const secAlbums = document.getElementById("albums-section");

    tabRecomendada.addEventListener("click", function() {
        tabRecomendada.classList.add("active-tab");
        tabPlaylists.classList.remove("active-tab");
        tabAlbums.classList.remove("active-tab");
        secRecomendada.style.display = "block";
        secPlaylists.style.display = "none";
        secAlbums.style.display = "none";
    });
    tabPlaylists.addEventListener("click", function() {
        tabPlaylists.classList.add("active-tab");
        tabRecomendada.classList.remove("active-tab");
        tabAlbums.classList.remove("active-tab");
        secRecomendada.style.display = "none";
        secPlaylists.style.display = "block";
        secAlbums.style.display = "none";
    });
    tabAlbums.addEventListener("click", function() {
        tabAlbums.classList.add("active-tab");
        tabRecomendada.classList.remove("active-tab");
        tabPlaylists.classList.remove("active-tab");
        secRecomendada.style.display = "none";
        secPlaylists.style.display = "none";
        secAlbums.style.display = "block";
    });
});
