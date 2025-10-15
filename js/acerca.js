// Contenidos para cada tema
const temas = {
    bienvenido: {
        title: "Bienvenido/a",
        html: `<p>
            El objetivo de este espacio es representar y compartir varias cosas, te invito a explorar
            alrededor de la página. <br>
            Mi principal objetivo es crear un espacio interactivo e interesante donde puedas
            perderte al menos un rato explorando.
            <br>
            En esta página encontrarás detalles que he tratado que no estén a simple vista,
            por lo que te invito a brindarle atención a cada rincón. Inlcuso lo no tan visible.
            <br><br>
            ¡Explora los temas desde el menú de la izquierda y disfruta tu visita!
            <br>
        </p>
        <img src="../img/sources/prayer.jpg" alt="Imagen de bienvenida" style="max-width:100%;margin-top:1em;">
        <p>
            Esta es una pequeña prueba de navegación oculta.
        </p>`
    },
    yo: {
        title: "¿Yo?",
        html: `<p>
            Este proyecto es pequeño, quizás no reciba toda mi atención. Pero existe, y eso basta. 
            Acá es donde intento materializar una idea, darle forma a una idea que tengo presente.

            <br><br>

            Al morir, solemos pensar que todo se desvanece y nos marchamos hacia el olvido. 
            ¿Alguna vez te has preguntado qué queda de ti cuando ya no estás? 
            Algunos dirán que son los hijos, los logros, los bienes, los recuerdos. Pero, ¿qué 
            hay de aquello que realmente eres?

            <br><br>

            Me refiero a lo invisible: tus pensamientos, tus ideas, tus sentimientos, tus gustos, 
            tus miedos, tus sueños, tus deseos, tus metas. 
            ¿Todo eso desaparece sin dejar rastro?

            <img src="../img/sources/ready4talking.jpg" alt="Imagen de bienvenida" style="max-width:100%;margin-top:1em;">

            <br><br>

            Creo que hay formas de dejar una huella, aunque sea pequeña. Para mí, este espacio es una de 
            ellas. 
            Aquí, entre líneas y sonidos, dejo fragmentos de lo que soy. Sin buscar nada en especifico.

            <br><br>
 
            Si llegaste hasta aquí, quizás encuentres algo que resuene contigo. O quizás no. 
            Pero al menos, por un momento, existimos juntos en este mismo pensamiento.
        </p>`
    },
    juegos: {
        title: "Juegos",
        html: `<p>
            Los juegos son una puerta a otros mundos. Desde clásicos retro hasta nuevas experiencias indie, aquí encontrarás recomendaciones, recuerdos y curiosidades sobre el arte de jugar.<br><br>
            ¿Cuál es tu juego favorito y por qué?
        </p>`
    },
    arte: {
        title: "Arte",
        html: `<p>
            El arte es la expresión más pura del ser. Pintura, fotografía, escritura y más: este espacio está dedicado a la creatividad y la inspiración visual.<br><br>
            Comparte tus obras o déjate inspirar por las que aquí aparecen.
        </p>`
    },
    flipnote: {
        title: "Flipnote",
        html: `<p>
            <strong>Flipnote Studio</strong> fue una aplicación icónica para la Nintendo DSi que permitió a miles de personas crear animaciones sencillas, creativas y, muchas veces, sorprendentes. 
            <br><br>
            Lo que más me fascina de las animaciones Flipnote es cómo, con recursos tan limitados, la comunidad logró expresar ideas, contar historias y transmitir emociones de una forma única y nostálgica. 
            <br><br>
            Aquí quiero compartirte algunas de mis Flipnotes favoritas, no solo por su calidad técnica, sino por la creatividad y el sentimiento que transmiten. Si alguna vez usaste una Nintendo DS, seguro recordarás la magia de ver estas pequeñas animaciones cobrar vida en la pantalla.
            <br><br>
            <hr style="border:0;border-top:1.5px solid #7a1a1a;margin:2em 0 1em 0;">
            <button id="flipnote-desplegar-btn" class="btn-link" style="margin-bottom:1em;">Desplegar</button>
            <div id="flipnote-extra" style="display:none;">
                <div class="flipnote-grid">
                    <iframe src="https://www.sudomemo.net/watch/embed/5372C9_0EDDE7805A2D1_033" scrolling="no" frameborder="0" width="470" height="390"></iframe>
                </div>
            </div>
        </p>`
    },
    sinsentido: {
        title: "Sin sentido",
        html: `<p>
            A veces, lo mejor es dejarse llevar por el absurdo. Aquí caben pensamientos aleatorios, frases sin lógica y todo aquello que no encaja en ningún otro lado.<br><br>
            Porque el castillo también tiene habitaciones secretas.
        </p>`
    }
};

// Asignar eventos a los enlaces de temas
document.addEventListener("DOMContentLoaded", function() {
    const temaIds = [
        "bienvenido",
        "yo",
        "juegos",
        "arte",
        "flipnote",
        "sinsentido"
    ];
    temaIds.forEach(function(tema) {
        const el = document.getElementById("tema-" + tema);
        if (el) {
            el.addEventListener("click", function(e) {
                e.preventDefault();
                setTema(tema);
            });
        }
    });
});

function setTema(tema) {
    document.getElementById("main-title").textContent = temas[tema].title;
    document.getElementById("main-content").innerHTML = temas[tema].html;
    // Quitar clase activa de todos los temas
    document.querySelectorAll('.temas-list a').forEach(function(a) {
        a.classList.remove('active-tema');
    });
    // Agregar clase activa al tema seleccionado
    document.getElementById("tema-" + tema).classList.add('active-tema');

    // Lógica para el botón "Desplegar" en Flipnote
    if (tema === "flipnote") {
        const btn = document.getElementById("flipnote-desplegar-btn");
        const extra = document.getElementById("flipnote-extra");
        if (btn && extra) {
            btn.addEventListener("click", function() {
                if (extra.style.display === "none") {
                    extra.style.display = "block";
                    btn.textContent = "Ocultar";
                } else {
                    extra.style.display = "none";
                    btn.textContent = "Desplegar";
                }
            });
        }
    }
}

// Efecto del ojo decorativo: solo vibración/temblor
(function() {
    const ojo = document.getElementById("ojo-decorativo");
    if (!ojo) return;

    document.addEventListener("mousemove", function(e) {
        const rect = ojo.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < 90) {
            ojo.classList.add("temblor");
        } else {
            ojo.classList.remove("temblor");
        }
    });
})();