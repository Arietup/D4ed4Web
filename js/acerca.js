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
        <img src="img/sources/prayer.jpg" alt="Imagen de bienvenida" style="max-width:100%;margin-top:1em;">
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

            <img src="img/sources/ready4talking.jpg" alt="Imagen de bienvenida" style="max-width:100%;margin-top:1em;">

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
            ¿Consideras que alguna experiencia te ha impactado lo suficiente como para que siempre tengas en cuenta los escenerios a los que te dejaste adentrar?
            <br><br>
            Creo que este tipo de conexión es considerablemente más complicada de conseguir, esto debido al cambio de formato que ha sufrido el entretenimiento,
            pasando de ser algo un poco más lento, inmersivo y pausado, a algo mucho más rápido, inmediato y efímero.
            <br><br>
            No soy el primero en tocar este tema, pero me parece importante recarcarlo. En lo personal, tengo tres titulos concretos que pueden ir más allá de esta
            evolución del entretenimiento, saltandose la norma de lo inmediato e incluso dandole un descanso a esa constante sensación de necesitar que todo avance
            rápidamente.
            <br><br>
            Te invito a interactuar y leer un poco sobre estos tres titulos detallados a continuación.
            
        </p>`
    },
    arte: {
        title: "Arte",
        html: `<p>
            Dentro de este apartado me gustaría profundizar princpilamente en el arte visual, como la pintura y la fotografía.
            Puedo comprender que existen muchisimas formas de expresión, incluyendo las menos convencionales como el arte digital, el pixel art, el arte generativo, entre otros, pero
            Al menos en este espacio trataré de enfocarme en las formas más tradicionales y alguna otra que no lo sea tanto.
            <br><br>
            Entrando en detalle, Este apartado se podría llegar a tornar un tanto extenso, sin embargo, trataré de llevarlo de la manera más ordenada, amena y disfrutable posible, presentandote
            lo que personalmente más capta mi antención y más interesante me parece.
            <br><br>
            Espero disfrutes de los distintos subtemas que se encuentran aquí y puedas encontrar al menos algo que te llame mínimamente la atención.
            <br>
            No agregaré expresiones de arte como el cine, libros o música, ya que considero estas deben de tener un espacio exclusivo para las mismas. Sin embargo, considero
            importante al menos mencionarlas en este apartado.
        </p>
        <div class="arte-subtemas-container">
            <div class="arte-subtema-card" data-subtema="pintura">
                <span class="arte-subtema-label">?</span>
                <span class="arte-subtema-title">Pintura</span>
            </div>
            <div class="arte-subtema-card" data-subtema="liminales">
                <span class="arte-subtema-label">?</span>
                <span class="arte-subtema-title">Espacios Liminales</span>
            </div>
            <div class="arte-subtema-card" data-subtema="fotografia">
                <span class="arte-subtema-label">?</span>
                <span class="arte-subtema-title">Fotografía</span>
            </div>
        </div>
        <div id="arte-subtema-content" class="arte-subtema-content"></div>
        `
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
           
            <button id="flipnote-desplegar-btn" class="btn-link" style="margin-bottom:1em;">Desplegar</button>
            <div id="flipnote-extra" style="display:none;">
                <div class="flipnote-grid">
                    <iframe src="https://www.sudomemo.net/watch/embed/EBB528_1487A71CE1DC9_002" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/68FD7F_17C93454F5C65_001" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/CD64B8_14F3092F21731_036" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/E463D3_0E8B2D914CF8D_002" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/F02A2C_1469506BB756F_000" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/7BEAB3_14122802BEA8B_002" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/A0A1B3_1742485661DC7_117" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/192B37_00C79D489D9C0_028" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/DC65E9_17797FFC0F9F1_002" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/5188D5_117922ECD8EDB_009" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/FDE511_16CBC603D87AE_033" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/56EB5E_1818AA8A3422D_001" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/B4F8FE_17741FC18E2DF_008" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/FE3A14_157D64C147013_037" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://archive.sudomemo.net/watch/embed/mnk4mnxgyfwkdrwq12wwryq5cven" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://archive.sudomemo.net/watch/embed/mfkieugancm54cloe4zwtegsqvac" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/4B0ED0_15ADF07A76C51_004" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://archive.sudomemo.net/watch/embed/mtgggoi4rmnnddoo2zzwlb5rkvbc" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://archive.sudomemo.net/watch/embed/mm2bhmgtnmlhcj4t2hhtlysjyybc" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/5372C9_105C11F3D9959_000" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/D7231C_17ECF9FCCD9CA_003" scrolling="no" frameborder="0" height="429" width="512"></iframe>
                    <iframe src="https://www.sudomemo.net/watch/embed/5372C9_0EDDE7805A2D1_033" scrolling="no" frameborder="0" width="470" height="390"></iframe>
                    <iframe src="https://archive.sudomemo.net/watch/embed/mtgggoi4rmnndddoq2fts53uc2bn" scrolling="no" frameborder="0" height="429" width="512"></iframe>
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

// Subtemas de arte
const arteSubtemas = {
    pintura: `
        <h3>Pintura</h3>
        <p>
            La pintura es una de las formas más antiguas y universales de expresión artística. Desde las cuevas prehistóricas hasta el arte contemporáneo, la pintura ha sido un medio para plasmar emociones, ideas y visiones del mundo.
            <br><br>
            Aquí compartiré algunas obras, estilos y curiosidades sobre la pintura que me resultan fascinantes.
        </p>
    `,
    liminales: `
        <h3>Espacios Liminales</h3>
        <p>
            Los espacios liminales son lugares de transición, escenarios que evocan sensaciones de nostalgia, misterio o inquietud. Son imágenes de pasillos vacíos, parques desiertos al atardecer, habitaciones iluminadas por luces artificiales...
            <br><br>
            Este subtema explora la estética y el sentimiento detrás de estos espacios.
        </p>
    `,
    fotografia: `
        <h3>Fotografía</h3>
        <p>
            La fotografía captura instantes irrepetibles y nos permite ver el mundo desde nuevas perspectivas. Desde retratos hasta paisajes urbanos, la fotografía es tanto documento como arte.
            <br><br>
            Aquí encontrarás ejemplos, reflexiones y recomendaciones sobre fotografía.
        </p>
    `
};

// Subtemas de juegos
const juegosSubtemas = {
    minecraft: `
        <h3>Minecraft</h3>
        <p>
            <strong>Minecraft</strong> es mucho más que un simple juego de bloques. Es un espacio de creatividad infinita, donde cada mundo es único y cada aventura depende de ti. 
            <br><br>
            Lo que más me marcó de Minecraft es la sensación de libertad absoluta, la posibilidad de construir, explorar y perderme en paisajes generados al azar. 
            <br><br>
            La música ambiental, los atardeceres cúbicos y la tranquilidad de una cueva iluminada por antorchas son recuerdos que siempre llevo conmigo.
        </p>
    `,
    undertale: `
        <h3>Undertale</h3>
        <p>
            <strong>Undertale</strong> es una experiencia narrativa única, donde cada decisión importa y los personajes parecen tener vida propia. 
            <br><br>
            Lo que más admiro es cómo logra transmitir emociones profundas con recursos simples, y cómo juega con las expectativas del jugador. 
            <br><br>
            La música, el humor y los momentos de reflexión hacen de Undertale un juego inolvidable.
        </p>
    `,
    blasphemous: `
        <h3>Blasphemous</h3>
        <p>
            <strong>Blasphemous</strong> destaca por su atmósfera oscura, su arte inspirado en el folclore y la religión, y su desafiante jugabilidad. 
            <br><br>
            Es un viaje intenso a través de un mundo lleno de simbolismo, penitencia y belleza inquietante. 
            <br><br>
            Cada rincón de Cvstodia cuenta una historia, y cada enemigo vencido deja una marca en el jugador.
        </p>
    `
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