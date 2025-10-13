// Contenidos para cada tema
const temas = {
    bienvenido: {
        title: "Bienvenido/a al Castillo",
        html: `<p>
            Aquí encontrarás una introducción y todo lo que podrás explorar en esta página: música, juegos, arte, reflexiones y más. 
            Este espacio está pensado para compartir intereses, ideas y un poco de "sin sentido" también. 
            <br><br>
            ¡Explora los temas desde el menú de la izquierda y disfruta tu visita!
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