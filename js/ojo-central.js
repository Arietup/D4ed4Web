// --- MODO OJO CENTRAL INTERACTIVO UNDERTALE ---
(function() {
    const ojo = document.getElementById("ojo-decorativo");
    const overlay = document.getElementById("ojo-overlay");

    const frases = [
        ["Hello, I suppose curiosity brought you here.", "Feel free to tell me your name or anything you wish."],
        ["It's curious.", "I can see you but you are unrecognizable.", "Did you feel so forced to change?"],
        ["It's impossible to know exactly who you are.", "Feel free to comment something, even if it's just your name."],
        ["Your gaze, I don't recognize it.", "Without saying anything, I hear you scream."],
        ["Can you recall something?", "I'm sure you still don't care."]
    ];

    const codigos = {
        "light": [
            "Nietzsche: 'The higher we soar, the smaller we appear to those who cannot fly.' (Thus Spoke Zarathustra)",
            "Rilke: 'Let your breath create more space around you. Let this darkness be a bell tower and you the bell.' (Letters to a Young Poet)",
            "Kafka: 'In a light that is fierce and strong, one can see the world dissolve.' (Diaries)",
            "Camus: 'Truth, like light, blinds. Falsehood, on the contrary, is a beautiful twilight that enhances every object.' (The Myth of Sisyphus)",
            "Borges: 'Endlessly I went toward the light... Life had a body, hope set its sails.' (Poems)",
            "Benedetti: 'May you fill with your light.' (The Truce)",
            "Sartre: 'O light! This is the cry of all the characters in ancient drama before their destiny.' (Being and Nothingness)",
            "Kierkegaard: 'The light of eternity shines upon the grave.' (Three Discourses)",
            "Hesse: 'There is nothing more difficult than to speak of certain things whose existence cannot be proven or probable.' (The Glass Bead Game)",
            "Pessoa: 'Writings of light assault the darkness, more prodigious than meteors.' (The Book of Disquiet)",
            "Dostoevsky: 'O light! This is the cry of all the characters in ancient drama before their destiny.' (The Brothers Karamazov)"
        ],
        "dark": [
            "Nietzsche: 'Whoever fights monsters should see to it that he does not become a monster. When you gaze long into the abyss, the abyss also gazes into you.' (Beyond Good and Evil)",
            "Rilke: 'To you, darkness from which I come, I love you more than the flame that limits the world.' (Book of Hours)",
            "Kafka: 'In your struggle against the rest of the world, I advise you to side with the rest of the world.' (Diaries)",
            "Camus: 'We are the light at the end of the tunnel, we are the star in space.' (Essays)",
            "Borges: 'In this dark and wide world.' (Blindness)",
            "Benedetti: 'It is evident that God granted me a dark destiny.' (Inventory)",
            "Sartre: 'I distrust the incommunicable; it is the source of all violence.' (What is Literature?)",
            "Kierkegaard: 'The tyrant dies and his rule ends, the martyr dies and his rule begins.' (Diaries)",
            "Hesse: 'The air of lonely men surrounded him now, a quiet atmosphere in which the world slipped away.' (Steppenwolf)",
            "Pessoa: 'The night should not be so dark.' (The Book of Disquiet)",
            "Dostoevsky: 'The universe is a cruel and indifferent void.' (Notes from Underground)"
        ],
        "secret": [
            "Nietzsche: 'The secret for harvesting the greatest fruitfulness and the greatest enjoyment from existence is to live dangerously.' (The Gay Science)",
            "Rilke: 'May humans perceive this secret that fills the world even in the smallest things.' (Letters to a Young Poet)",
            "Kafka: 'Do not let evil confuse you and think you can have secrets from it.' (Aphorisms)",
            "Camus: 'The secret of my universe is only to imagine God without the immortality of man.' (The Myth of Sisyphus)",
            "Borges: 'God worked for him a secret miracle.' (The Secret Miracle)",
            "Benedetti: 'Something secret in memory.' (The Truce)",
            "Sartre: 'Do not judge the gods, young man, they have painful secrets.' (Reflections)",
            "Kierkegaard: 'The painful secret of gods and kings; is that men are free.' (Diaries)",
            "Hesse: 'For people of light mind, nonexistent things can be represented more easily.' (The Glass Bead Game)",
            "Pessoa: 'Here is the deepest secret nobody knows.' (The Book of Disquiet)",
            "Dostoevsky: 'The secret of man lies in his capacity for suffering.' (The Brothers Karamazov)"
        ],
        "empty": [
            "Nietzsche: 'When you gaze long into an abyss, the abyss also gazes into you.' (Beyond Good and Evil)",
            "Rilke: 'That is why it is so important to be alone and attentive when you are sad; because the apparently perplexed and empty moment of events.' (Letters to a Young Poet)",
            "Kafka: 'The bachelor apparently resigns by his own will and in full life to an empty space, ever smaller.' (Metamorphosis and Diaries)",
            "Camus: 'The absurd is born when the human being seeks meaning in an indifferent universe.' (The Myth of Sisyphus)",
            "Borges: 'How many places have become vain and meaningless, like lights in the day.' (Absence)",
            "Benedetti: 'What I need from you reflects a feeling of emptiness due to the absence of your love.' (What I Need from You)",
            "Sartre: 'I am the emptiness that opens in my soul when I look ahead.' (Nausea)",
            "Kierkegaard: 'If beneath everything lay an insatiable emptiness, what would life be but despair?' (Either/Or)",
            "Hesse: 'Now my past is nothing but a huge emptiness.' (Steppenwolf)",
            "Pessoa: 'I am the periphery of a nonexistent city.' (The Book of Disquiet)",
            "Dostoevsky: 'The universe is a cruel and indifferent void.' (Notes from Underground)"
        ],
        "lost": [
            "Nietzsche: 'We should consider every day lost on which we have not danced at least once.' (Human, All Too Human)",
            "Rilke: 'Do not believe that the great love given to you as a child has been lost.' (Letters to a Young Poet)",
            "Kafka: 'I am free and that is why I am lost.' (Letters to Felice)",
            "Camus: 'The loss of people who illustrate an ideal like freedom.' (Political Essays)",
            "Borges: 'I know I have lost so many things that I could not count them, and those losses, now, are what is mine.' (Lost)",
            "Benedetti: 'I am a lost case.' (Inventory)",
            "Sartre: 'Every existing thing is born without reason, prolongs itself out of weakness and dies by chance.' (Being and Nothingness)",
            "Kierkegaard: 'The self that was not aware of itself is ipso facto accidental.' (Three Discourses)",
            "Hesse: 'He lost his self a thousand times and for days on end dwelled in non-being.' (Siddhartha)",
            "Pessoa: 'I am free and that is why I am lost.' (The Book of Disquiet)",
            "Dostoevsky: 'Man only learns in his own flesh.' (Crime and Punishment)"
        ],
        "guide": [
            "Nietzsche: 'He who needs to be guided by a shepherd can only have the intelligence of a sheep.' (The Antichrist)",
            "Rilke: 'God is the inner voice that guides us where we must go.' (Book of Hours)",
            "Kafka: 'A book must be the axe for the frozen sea within us.' (Diaries)",
            "Camus: 'Do not walk in front of me, I may not follow. Do not walk behind me, I may not lead.' (Reflections on Friendship)",
            "Borges: 'History is just another form of fiction.' (Narrative Guide)",
            "Benedetti: 'If I love you, it's because you are my love, my accomplice, and everything.' (Guide in Love)",
            "Sartre: 'Man is what he makes of what was made of him.' (Self-Guidance)",
            "Kierkegaard: 'Life must be lived forward.' (Existential Guide)",
            "Hesse: 'The purpose that guided him was not impossible, though supernatural.' (The Dream)",
            "Pessoa: 'Everything interests me, but nothing holds me.' (Lack of Guide)",
            "Dostoevsky: 'Man is the architect of his own destiny.' (Self-Guidance)"
        ],
        "destiny": [
            "Nietzsche: 'I know my fate. One day my name will be associated with something tremendous.' (Ecce Homo)",
            "Rilke: 'What we call fate does not come to us from outside, but emerges from within us.' (Letters to a Young Poet)",
            "Kafka: 'Written kisses do not reach their destination, the ghosts drink them along the way.' (Letters to Milena)",
            "Camus: 'There is no fate that cannot be surmounted by scorn.' (The Myth of Sisyphus)",
            "Borges: 'Any fate, no matter how long and complicated, is actually just a single moment.' (The Garden of Forking Paths)",
            "Benedetti: 'I love you but I do not wish to fight against fate.' (Poems)",
            "Sartre: 'Freedom is what you do with what's been done to you.' (Self-Created Destiny)",
            "Kierkegaard: 'Fate, then, is the nothingness of anxiety.' (Diaries)",
            "Hesse: 'What matters in a person's existence is to consciously accept the inevitable.' (Demian)",
            "Pessoa: 'Destiny is like a vast, wonderful tapestry in which every thread is guided by a tender hand.' (The Book of Disquiet)",
            "Dostoevsky: 'There is no fate that cannot be overcome by scorn.' (Notes from Underground)"
        ]
    };
    

    let modoOjoActivo = false;
    let textoDiv = null;
    let inputDiv = null;
    let closeBtn = null;

    if (!ojo || !overlay) return;

    ojo.addEventListener("click", function(e) {
        if (modoOjoActivo) return;
        modoOjoActivo = true;
        ojo.classList.add("ojo-central");
        overlay.style.display = "block";
        overlay.style.opacity = "1";
        document.body.style.overflow = "hidden";
        requestAnimationFrame(() => {
            mostrarTextoOjo(["Hello"].concat(frases[Math.floor(Math.random() * frases.length)]));
        });
    });

    function desactivarModoOjo(despedir = false) {
        if (despedir) {
            // If there's already a goodbye message, don't repeat it
            if (textoDiv && textoDiv.textContent.trim() === "Goodbye.") {
                finalizarCierre();
                return;
            }
            if (textoDiv) textoDiv.remove();
            if (inputDiv) inputDiv.remove();
            if (closeBtn) closeBtn.remove();
            // Show goodbye message before closing
            textoDiv = document.createElement("div");
            textoDiv.id = "ojo-texto-undertale";
            textoDiv.textContent = "Goodbye.";
            document.body.appendChild(textoDiv);
            setTimeout(finalizarCierre, 1200);
        } else {
            finalizarCierre();
        }
    }

    function finalizarCierre() {
        overlay.style.opacity = "0";
        setTimeout(() => { overlay.style.display = "none"; }, 400);
        ojo.classList.remove("ojo-central");
        if (textoDiv) textoDiv.remove();
        if (inputDiv) inputDiv.remove();
        if (closeBtn) closeBtn.remove();
        document.body.style.overflow = "";
        modoOjoActivo = false;
    }

    // Cambia el botón cerrar para que despida
    function mostrarTextoOjo(lineas, cbInput) {
        if (textoDiv) textoDiv.remove();
        if (inputDiv) inputDiv.remove();
        if (closeBtn) closeBtn.remove();

        closeBtn = document.createElement("button");
        closeBtn.id = "ojo-close-undertale";
        closeBtn.innerHTML = "&times;";
        closeBtn.title = "Close";
        closeBtn.onclick = function() {
            desactivarModoOjo(true);
        };
        document.body.appendChild(closeBtn);

        textoDiv = document.createElement("div");
        textoDiv.id = "ojo-texto-undertale";
        document.body.appendChild(textoDiv);

        let textoCompleto = lineas.join("\n");
        let idx = 0;
        textoDiv.textContent = "";
        let writing = true;

        function escribir() {
            if (idx <= textoCompleto.length) {
                textoDiv.textContent = textoCompleto.slice(0, idx);
                idx++;
                setTimeout(escribir, textoCompleto[idx-1] === "\n" ? 250 : 22);
            } else {
                writing = false;
                if (cbInput !== false) mostrarInputOjo();
            }
        }
        escribir();
    }

    function mostrarInputOjo() {
        inputDiv = document.createElement("div");
        inputDiv.id = "ojo-input-undertale";
        inputDiv.innerHTML = `
            <input type="text" placeholder="Type your answer..." autofocus />
            <button>Send</button>
        `;
        document.body.appendChild(inputDiv);

        const input = inputDiv.querySelector("input");
        const btn = inputDiv.querySelector("button");

        btn.onclick = () => procesarRespuesta(input.value.trim());
        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") btn.click();
        });
        setTimeout(() => input.focus(), 50);
    }

    function procesarRespuesta(respuesta) {
        if (!respuesta) return;
        if (inputDiv) inputDiv.remove();

        const clave = respuesta.toLowerCase();
        if (codigos[clave]) {
            if (Array.isArray(codigos[clave])) {
                const frases = codigos[clave];
                const frase = frases[Math.floor(Math.random() * frases.length)];
                mostrarTextoOjo([frase]);
            } else {
                mostrarTextoOjo([codigos[clave]]);
            }
        } else if (clave === "goodbye" || clave === "exit" || clave === "close") {
            mostrarTextoOjo(["Goodbye."], false);
            setTimeout(() => desactivarModoOjo(false), 1200);
            return;
        } else {
            if (clave.includes("who") || clave.includes("am")) {
                mostrarTextoOjo(["At least you should be aware of your name."]);
            } else if (clave.length < 3) {
                mostrarTextoOjo(["Is that all?"]);
            } else if (clave.match(/hello|hi|greetings/)) {
                mostrarTextoOjo(["I just greeted you, don't you have another answer?"]);
            } else {
                mostrarTextoOjo(["Interesting. I see you're not trying very hard.","Keep searching for an answer you can give me.", "I won't leave."]);
            }
        }
    }

    overlay.addEventListener("click", function() { desactivarModoOjo(true); });
    overlay.addEventListener("wheel", e => { if (modoOjoActivo) e.preventDefault(); }, { passive: false });
})();
