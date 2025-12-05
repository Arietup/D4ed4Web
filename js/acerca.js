// Contenidos para cada tema
const temas = {
    bienvenido: {
        title: "Welcome",
        html: `<p>
            The purpose of this space is to represent and share several things. I invite you to explore around the page.<br>
            My main goal is to create an interactive and interesting space where you can lose yourself for a while exploring.
            <br>
            On this page, you'll find details I've tried to keep out of plain sight, so I invite you to pay attention to every corner. Even the not-so-visible ones.
            <br><br>
            Explore the themes from the menu on the left and enjoy your visit!
            <br>
        </p>
        <img src="img/sources/prayer.jpg" alt="Welcome image" style="max-width:100%;margin-top:1em;">
        <p>
            Yes, the image changed. I suppose you did too.<br>
            There's the idea that I'm really talking to you, and if so—are you really you? Either way, I don't want to know.<br><br>
            I'll ask you again: Why don't you smile in photos anymore?<br>
            What brought you here? Answer me. After repeating it so many times, have you already died? Has your insatiable search and desire for self-destruction already consumed you?<br>
            Have you noticed it's all your fault? Do you still not understand that much of it happened because you allowed it?<br><br>
            Do you feel disgusted looking in the mirror? Do you think something will change because life owes you? That wasn't a question.<br>

            You always knew, or so you say. What about the rest of the things you always knew and simply don't care about?<br><br>
            You find it funny, and when you don't, you pretend embarrassment or discomfort, but not even that's true.<br>
            Your false facade, your mask, your shield.<br>
            The evolution of your selfishness shielded by the few good deeds you once did.<br>
            <br><br>

            In the end, did you get what you wanted?<br><br>
            No one is going to save you.
            I hate you, but I can't help but feel sorry for you.
            I hope you find peace someday.
        </p>
        <img src="img/sources/what-now.gif" alt="Welcome image" style="max-width:100%;margin-top:1em;">`
        
    },
    yo: {
        title: "Me?",
        html: `<p>
            This project is small, maybe it won't get all my attention. But it exists, and that's enough.
            Here is where I try to materialize an idea, to give shape to something that's been on my mind.

            <br><br>

            When we die, we tend to think everything fades and we leave for oblivion.
            Have you ever wondered what remains of you when you're no longer here?
            Some will say it's children, achievements, possessions, memories. But what about what you truly are?

            <br><br>

            I mean the invisible: your thoughts, your ideas, your feelings, your tastes, your fears, your dreams, your desires, your goals.
            Does all that disappear without a trace?

            <img src="img/sources/ready4talking.jpg" alt="Welcome image" style="max-width:100%;margin-top:1em;">

            <br><br>

            I think there are ways to leave a mark, even a small one. For me, this space is one of them.
            Here, between lines and sounds, I leave fragments of what I am. Without looking for anything specific.

            <br><br>

            If you made it this far, maybe you'll find something that resonates with you. Or maybe not.
            But at least, for a moment, we exist together in this same thought.
        </p>`
    },
    juegos: {
        title: "Games",
        html: `<p>
            Have you ever considered if any experience has impacted you enough that you always keep in mind the scenarios you allowed yourself to enter?
            <br><br>
            I think this kind of connection is considerably harder to achieve, due to the change in the format of entertainment, which has gone from being something a bit slower, immersive, and paused, to something much faster, immediate, and fleeting.
            <br><br>
            I'm not the first to touch on this topic, but I think it's important to highlight. Personally, I have three specific titles that go beyond this evolution of entertainment, breaking the norm of immediacy and even giving a break to that constant feeling of needing everything to move quickly.
            <br><br>
            For narrative purposes, please listen to the attached audio.
          
            <br><br>
            <media-theme-tailwind-audio
                style="--media-primary-color: #811818; --media-secondary-color: #000000; --media-accent-color: #930101; width:100%;max-width:400px;display:block;margin:0 auto 1.2em auto;">
                <audio
                    slot="media"
                    src="audio/minecraft.mp3"
                    playsinline
                    crossorigin="anonymous"
                ></audio>
            </media-theme-tailwind-audio>
            I invite you to interact and read a bit about these three titles detailed below.
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
        title: "Art",
        html: `<p>
            In this section, I'd like to focus mainly on visual art, such as painting and photography. I understand there are many forms of expression, including less conventional ones like digital art, pixel art, generative art, among others, but at least here I'll try to focus on the more traditional forms and maybe a few that aren't so traditional. I won't add art forms like cinema, books, or music, as I believe these deserve their own exclusive space, though it's important to at least mention them here.
            <br><br>
            Going into detail, this section could become somewhat extensive, however, I'll try to keep it as organized, pleasant, and enjoyable as possible, presenting what personally captures my attention and seems most interesting. I hope you enjoy the different subtopics here and can find at least something that catches your attention, even if just a little.
        </p>
        <div class="arte-subtemas-container">
            <div class="arte-subtema-card" data-subtema="pintura">
                <span class="arte-subtema-label">?</span>
                <span class="arte-subtema-title">Painting</span>
            </div>
            <div class="arte-subtema-card" data-subtema="liminales">
                <span class="arte-subtema-label">?</span>
                <span class="arte-subtema-title">Liminal Spaces</span>
            </div>
            <div class="arte-subtema-card" data-subtema="fotografia">
                <span class="arte-subtema-label">?</span>
                <span class="arte-subtema-title">Photography</span>
            </div>
        </div>
        <div id="arte-subtema-content" class="arte-subtema-content"></div>
        `
    },
    flipnote: {
        title: "Flipnote",
        html: `<p>
            <strong>Flipnote Studio</strong> was an iconic application for the Nintendo DSi that allowed thousands of people to create simple, creative, and often surprising animations.
            <br><br>
            What fascinates me most about Flipnote animations is how, with such limited resources, the community managed to express ideas, tell stories, and convey emotions in a unique and nostalgic way.
            <br><br>
            Here I want to share some of my favorite Flipnotes, not just for their technical quality, but for the creativity and feeling they transmit. If you ever used a Nintendo DS, you'll surely remember the magic of seeing these little animations come to life on the screen.
            <br><br>
            <button id="flipnote-desplegar-btn" class="btn-link" style="margin-bottom:1em;">Show more</button>
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
        title: "Nonsense",
        html: `<p>
            I think at some point we can all experience that feeling that everything is completely meaningless, moments in which you can disconnect from those things that make us beings who live in society.
            <br><br>
            It becomes a problem when this stops being a moment and becomes a reality. So I ask you: What really makes you who you are?
            What is it that shapes and gives life to your personality? Are you simply part of something or are you really you?<br><br>

            When I refer to "you" I mean what by concept can be defined as the answer to "Who are you?", that is, your actions, your thoughts, your experiences.
            <br><br>
            Are you able to describe and put this on paper and put it in a theoretical format?
            <br>
            It's an interesting exercise to do and can help in many extreme cases one may go through as a human being. Even just to give some meaning to the lack of meaning in everything.
            <br><br>
            I invite you to make an effort and allow yourself to have value. No matter if what you consider yourself to be is what others think of you.<br><br>

            What stops you from ending it all?
            <br><br>
            Isn't it all nonsense?
            <br><br>
            Internalize the answer. If that's the case, is it really worth basing your personality on thinking that life owes you something?<br><br>
            <br><br>
        <img src="img/sources/importancia.jpg" alt="Give a shit" style="max-width:100%;margin-top:1em;">
            No one is going to save you.
            <br><br>

            I invite you to converse with the following keywords:<br>
            - light <br>
            - dark <br>
            - secret <br>
            - empty <br>
            - lost <br>
            - guide <br>
            - destiny <br>
        <img src="img/sources/ojoref.jpg" alt="Eye reference" style="max-width:100%;margin-top:1em;">
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