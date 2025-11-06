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
            Sí, la imagen cambió, Supongo que tú también.<br>
            Existe la idea de pensar que estoy realmente hablando contigo, y si es así. <br>
            ¿En verdad eres tú? De todas maneras no lo quiero saber.<br> <br>
            
            Te vuelvo a hacer la misma pregunta, ¿Por qué ya no sonríes en las fotos? <br>
            ¿Qué te trajo aquí? Contesta, De tantas veces que lo repetiste, ¿Ya moriste?. ¿Tu búsqueda insaciable
            y deseo de autodestrucción ya te consumió? <br>
            ¿Ya notaste que es todo tu culpa? ¿Sigues sin entender que mucho ha sido porque lo permitiste? <br> <br>
            ¿Te da asco verte al espejo? Crees que algo va a cambiar porque la vida te lo debe. No fue una pregunta.
            <br>

            Siempre lo supiste, o así dices que es. ¿Qué hay del resto de cosas que siempre supiste y directamente
            no te importa? <br> <br>
            Te resulta chisotoso y cuando no te lo parece aparentas vergüenza o incomodidad pero nisiquiera eso
            es verdad. <br>
            Tu falsa fachada, tu máscara, tu escudo. <br>
            La evolución de tu egoísmo escudado en las contadas buenas acciones que en algún momento
            hiciste. <br> 
            <br><br>
            
            Al final ¿Conseguiste lo que querías?<br><br>
            Nadie te va a salvar.
            Te odio, pero no puedo evitar sentir lástima por ti.
            Espero que encuentres paz algún día.
        </p>
        <img src="img/sources/what-now.gif" alt="Imagen de bienvenida" style="max-width:100%;margin-top:1em;">`
        
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
        </p>
        <div class="juegos-subtemas-container">
            <div class="juego-card juego-minecraft" data-juego="minecraft">
                <span class="juego-title">Minecraft</span>
            </div>
            <div class="juego-card juego-undertale" data-juego="undertale">
                <span class="juego-title">Undertale</span>
            </div>
            <div class="juego-card juego-blasphemous" data-juego="blasphemous">
                <span class="juego-title">Blasphemous</span>
            </div>
        </div>
        <div id="juego-subtema-content" class="juego-subtema-content"></div>
        `
    },
    arte: {
        title: "Arte",
        html: `<p>
            Dentro de este apartado me gustaría profundizar principalmente en el arte visual, como la pintura y 
            la fotografía. Puedo comprender que existen muchísimas formas de expresión, incluyendo las menos 
            convencionales como el arte digital, el pixel art, el arte generativo, entre otros, pero al menos 
            en este espacio trataré de enfocarme en las formas más tradicionales y alguna otra que no lo sea 
            tanto. No agregaré expresiones de arte como el cine, libros o música, ya que considero estas deben 
            de tener un espacio exclusivo para las mismas, aunque es importante al menos mencionarlas aquí.
            <br><br>
            Entrando en detalle, este apartado se podría llegar a tornar un tanto extenso, sin embargo, trataré 
            de llevarlo de la manera más ordenada, amena y disfrutable posible, presentándote lo que 
            personalmente más capta mi atención y más interesante me parece. Espero disfrutes de los distintos 
            subtemas que se encuentran aquí y puedas encontrar al menos algo que te llame mínimamente la
            atención.
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

    // Inicializar subtemas si ya están en la página inicial
    inicializarSubtemas();
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

    // Inicializar subtemas y botones interactivos después de renderizar el contenido
    inicializarSubtemas();

    // Hacer scroll arriba en el contenedor de contenido principal
    setTimeout(function() {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            if (typeof mainContent.scrollTo === "function") {
                mainContent.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                mainContent.scrollTop = 0;
            }
        }
    }, 10);
}

function inicializarSubtemas() {
    // Flipnote: botón desplegar
    const btn = document.getElementById("flipnote-desplegar-btn");
    const extra = document.getElementById("flipnote-extra");
    if (btn && extra) {
        btn.onclick = function() {
            if (extra.style.display === "none" || extra.style.display === "") {
                extra.style.display = "block";
                btn.textContent = "Ocultar";
                setTimeout(function() {
                    // Animación de scroll down más pronunciada y notable (400px)
                    const mainContent = document.getElementById('main-content');
                    if (mainContent && typeof mainContent.scrollBy === "function") {
                        mainContent.scrollBy({ top: 250, behavior: "smooth" });
                    }
                }, 120);
            } else {
                extra.style.display = "none";
                btn.textContent = "Desplegar";
            }
        };
    }

    // Arte: tarjetas interactivas
    if (typeof window.arteSubtemas !== "undefined") {
        document.querySelectorAll('.arte-subtema-card').forEach(function(card) {
            // Elimina listeners previos para evitar duplicados
            card.replaceWith(card.cloneNode(true));
        });
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
                    setTimeout(function() {
                        // Animación de scroll down más pronunciada y notable (400px)
                        const mainContent = document.getElementById('main-content');
                        if (mainContent && typeof mainContent.scrollBy === "function") {
                            mainContent.scrollBy({ top: 400, behavior: "smooth" });
                        }
                    }, 120);
                }
                document.querySelectorAll('.arte-subtema-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
    }

    // Juegos: tarjetas interactivas
    if (typeof window.juegosSubtemas !== "undefined") {
        document.querySelectorAll('.juego-card').forEach(function(card) {
            // Elimina listeners previos para evitar duplicados
            card.replaceWith(card.cloneNode(true));
        });
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
                    setTimeout(function() {
                        // Animación de scroll down más pronunciada y notable (400px)
                        const mainContent = document.getElementById('main-content');
                        if (mainContent && typeof mainContent.scrollBy === "function") {
                            mainContent.scrollBy({ top: 400, behavior: "smooth" });
                        }
                    }, 120);
                }
                document.querySelectorAll('.juego-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
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