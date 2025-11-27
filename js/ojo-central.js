// --- MODO OJO CENTRAL INTERACTIVO UNDERTALE ---
(function() {
    const ojo = document.getElementById("ojo-decorativo");
    const overlay = document.getElementById("ojo-overlay");

    const frases = [
        ["Hola, supongo que la curiosidad te ha traido hasta aquí", "Sientete libre comentarme tu nombre o lo que desees"],
        ["Es curioso", "Te puedo ver pero eres irreconocible", "¿Tan obligado te sentiste a cambiar?"],
        ["Es imposible saber quien eresexactamente", "Sientete bienvedio de comentar algo, así sea tu nomrbe"],
        ["Tu mirada, no la reconozco", "Sin que digas nada, te escucho gritar"],
        ["¿Puedes recapitular algo?" , "Estoy seguro que te sigue dando igual"]
    ];

    const codigos = {
        "luz": [
            "Nietzsche: \"Cuanto más busca elevarse a la altura y a la luz, con más fuerza luchan sus raíces hacia la tierra, hacia abajo, hacia lo oscuro.\" (De Así habló Zaratustra).",
            "Rilke: \"Siente cómo tu respiración crea más espacio a tu alrededor. Deja que esta oscuridad sea un campanario y tú la campana.\" (De Cartas a un joven poeta, sobre encontrar luz en la oscuridad).",
            "Kafka: \"En una luz que es feroz y fuerte uno puede ver el mundo disolverse.\" (De reflexiones en sus diarios).",
            "Camus: \"La verdad, como la luz, ciega. La falsedad, por el contrario, es un crepúsculo precioso que realza cada objeto.\" (De El mito de Sísifo).",
            "Borges: \"Iba sin fin hacia la luz... La vida tenía un cuerpo, la esperanza tendía sus velas.\" (De poemas como El otro, el mismo).",
            "Benedetti: \"Llenes con tu luz.\" (De poemas románticos como La tregua).",
            "Sartre: \"O luz! Este es el grito de todos los personajes del drama antiguo frente a su destino.\" (De reflexiones existenciales en El ser y la nada).",
            "Kierkegaard: \"La luz de la eternidad brilla sobre la tumba.\" (De Tres discursos en ocasiones imaginadas).",
            "Hesse: \"No hay nada más difícil que hablar de ciertas cosas cuya existencia no es demostrable ni probable.\" (De El juego de los abalorios, sobre luz en lo invisible).",
            "Pessoa: \"Escrituras de luz asaltan la oscuridad, más prodigiosas que meteoros.\" (De Libro del desasosiego).",
            "Dostoevsky: \"O luz! Este es el grito de todos los personajes del drama antiguo frente a su destino.\" (De reflexiones en Los hermanos Karamazov)."
        ],
        "oscuro": [
            "Nietzsche: \"Quien con monstruos lucha, cuide de convertirse a su vez en monstruo. Cuando miras largo tiempo a un abismo, también el abismo mira dentro de ti.\" (De Más allá del bien y del mal).",
            "Rilke: \"A ti, oscuridad de la que vengo, te amo más que a la llama que limita el mundo.\" (De Libro de horas).",
            "Kafka: \"En tu lucha contra el resto del mundo te aconsejo que te pongas del lado del resto del mundo.\" (Refiriéndose a un oscuro sentimiento de derrota).",
            "Camus: \"Somos la luz al final del túnel, somos la estrella en el espacio.\" (De ensayos sobre el absurdo y la oscuridad).",
            "Borges: \"En este mundo oscuro y ancho.\" (De reflexiones sobre la ceguera en La ceguera).",
            "Benedetti: \"Es evidente que Dios me concedió un destino oscuro.\" (De poemas como Inventario).",
            "Sartre: \"Yo desconfío de lo incomunicable; es la fuente de toda violencia.\" (De ¿Qué es la literatura?, sobre lo oscuro en lo inefable).",
            "Kierkegaard: \"El tirano muere y su gobierno termina, el mártir muere y el suyo comienza.\" (Sobre oscuridad en la opresión).",
            "Hesse: \"El aire de hombres solitarios lo rodeaba ahora, una atmósfera quieta en la que el mundo se deslizaba lejos.\" (De El lobo estepario).",
            "Pessoa: \"La noche no debería ser tan oscura.\" (De reflexiones en Libro del desasosiego).",
            "Dostoevsky: \"El universo es un vacío cruel e indiferente.\" (De Notas del subsuelo)."
        ],
        "secreto": [
            "Nietzsche: \"El secreto para cosechar los mayores frutos y el mayor goce de la vida es vivir peligrosamente.\" (De La gaya ciencia).",
            "Rilke: \"Ojalá que el ser humano perciba este secreto que llena el mundo hasta en lo más pequeño.\" (De Cartas a un joven poeta).",
            "Kafka: \"No dejes que el mal te confunda y creas que puedes tener secretos para él.\" (De Aforismos).",
            "Camus: \"El secreto de mi universo es sólo imaginar a Dios sin la inmortalidad del hombre.\" (De El mito de Sísifo).",
            "Borges: \"Dios operaba para él un milagro secreto.\" (De El milagro secreto).",
            "Benedetti: \"Algo de secreto en la memoria.\" (De poemas como La tregua).",
            "Sartre: \"No juzgues a los dioses, joven, tienen secretos dolorosos.\" (De reflexiones en obras).",
            "Kierkegaard: \"El secreto doloroso de dioses y reyes; es que los hombres son libres.\" (De diarios).",
            "Hesse: \"Para personas de mente ligera, las cosas inexistentes pueden representarse más fácilmente.\" (De El juego de los abalorios).",
            "Pessoa: \"Aquí está el secreto más profundo que nadie sabe.\" (De Libro del desasosiego).",
            "Dostoevsky: \"El secreto del hombre reside en su capacidad de sufrimiento.\" (De Los hermanos Karamazov)."
        ],
        "soy yo": [
            "Nietzsche: \"Cuerpo soy yo enteramente, y nada más; y alma es solo el nombre de algo en el cuerpo.\" (De Así habló Zaratustra).",
            "Rilke: \"Estoy demasiado solo en el mundo, y aún así no lo suficientemente solo.\" (De Libro de horas).",
            "Kafka: \"Soy libre y por eso estoy perdido.\" (De Cartas a Felice).",
            "Camus: \"No hay amor eterno si no es contrariado.\" (Relacionado al yo en El mito de Sísifo).",
            "Borges: \"No estoy seguro de que yo exista, en realidad. Soy todos los autores que he leído.\" (De ensayos).",
            "Benedetti: \"Yo quisiera ser yo, pero un poco mejor.\" (De La tregua).",
            "Sartre: \"Soy porque pienso... y no puedo dejar de pensar.\" (De La náusea).",
            "Kierkegaard: \"La vida solo puede entenderse hacia atrás; pero debe vivirse hacia adelante.\" (Sobre el yo en reflexión).",
            "Hesse: \"He perdido mi Yo mil veces y por días enteros he morado en el no-ser.\" (De Siddhartha).",
            "Pessoa: \"No soy nadie, nadie. Soy un personaje en una novela que queda por escribir.\" (De Libro del desasosiego).",
            "Dostoevsky: \"El hombre es un misterio. Debo resolverlo.\" (De Los hermanos Karamazov, sobre el yo)."
        ],
        "perdido": [
            "Nietzsche: \"Debemos considerar perdidos todos los días en los que no hemos bailado al menos una vez.\" (De Humano, demasiado humano).",
            "Rilke: \"No crea usted que aquel gran amor que de niño le fue entregado, se haya perdido.\" (De Cartas a un joven poeta).",
            "Kafka: \"Soy libre y por eso estoy perdido.\" (De Cartas a Felice).",
            "Camus: \"La pérdida de personas que ilustran un ideal como la libertad.\" (De ensayos políticos).",
            "Borges: \"Sé que he perdido tantas cosas que no podría contarlas y que esas perdiciones, ahora, son lo que es mío.\" (De Lo perdido).",
            "Benedetti: \"Soy un caso perdido.\" (De poemas como Inventario).",
            "Sartre: \"Cada cosa existente nace sin razón, se prolonga por debilidad y muere por casualidad.\" (De El ser y la nada).",
            "Kierkegaard: \"El yo que no era consciente de sí mismo es ipso facto lo accidental.\" (De Tres discursos).",
            "Hesse: \"Se perdió su Yo mil veces y por días enteros habitó en el no-ser.\" (De Siddhartha).",
            "Pessoa: \"Soy libre y por eso estoy perdido.\" (Similar a Kafka, en Libro del desasosiego).",
            "Dostoevsky: \"El hombre solo aprende en su propia carne.\" (Sobre pérdida en Crimen y castigo)."
        ],
        "perdida": [
            "Nietzsche: \"Todo lo que amas probablemente se perderá, pero al final, el amor volverá de otra manera.\" (De La gaya ciencia).",
            "Rilke: \"Sí, todo arte es el resultado de haber estado en peligro, de haber vivido una experiencia hasta el final.\" (Relacionado a la pérdida en Cartas a un joven poeta).",
            "Kafka: \"Soy libre y es por eso que estoy perdido.\" (Extensible a 'perdida').",
            "Camus: \"La pérdida de personas que ilustran un ideal como la libertad.\" (Similar a 'perdido').",
            "Borges: \"Solo es nuestro lo que perdimos.\" (De Otras inquisiciones).",
            "Benedetti: \"Lo perdido es también un par o dos de labios que probaron el sabor de los míos.\" (De poemas románticos).",
            "Sartre: \"La vida es un viaje experimental emprendido involuntariamente.\" (Sobre pérdida existencial).",
            "Kierkegaard: \"La vida es no un problema a resolver, sino una realidad a experimentar.\" (Sobre pérdida en la experiencia).",
            "Hesse: \"Mi resolución de morir no fue un capricho de una hora.\" (De El lobo estepario).",
            "Pessoa: \"Todo me interesa, pero nada me retiene.\" (Sobre pérdida de interés).",
            "Dostoevsky: \"Sin esperanza, es cesar de vivir.\" (Sobre pérdida de esperanza)."
        ],
        "guia": [
            "Nietzsche: \"Quien necesite ser guiado por un pastor, solo puede tener la inteligencia de un borrego.\" (De El anticristo).",
            "Rilke: \"Dios es la voz interna que nos guía hacia donde debemos ir.\" (De Libro de horas).",
            "Kafka: \"Un libro debe ser el hacha que rompa el mar helado que llevamos dentro.\" (Como guía interior).",
            "Camus: \"No camines delante de mí, puede que no te siga. No camines detrás de mí, puede que no te guíe.\" (De reflexiones sobre amistad).",
            "Borges: \"La historia es una forma más de ficción.\" (Como guía narrativa).",
            "Benedetti: \"Si te quiero es porque sos mi amor, mi cómplice y todo.\" (Guía en el amor).",
            "Sartre: \"El hombre es lo que hace con lo que hicieron de él.\" (Sobre guía propia).",
            "Kierkegaard: \"La vida debe vivirse hacia adelante.\" (Como guía existencial).",
            "Hesse: \"El propósito que lo guiaba no era imposible, aunque sobrenatural.\" (De El sueño).",
            "Pessoa: \"Todo interés me, pero nada me retiene.\" (Sobre falta de guía).",
            "Dostoevsky: \"El hombre es el arquitecto de su propio destino.\" (Sobre guía propia)."
        ],
        "destino": [
            "Nietzsche: \"Ya sé cuál es mi destino. Un día mi nombre estará ligado al recuerdo de algo tremendo.\" (De Ecce Homo).",
            "Rilke: \"Lo que llamamos destino no nos llega del exterior, sino que emerge de nosotros.\" (De Cartas a un joven poeta).",
            "Kafka: \"Los besos por escrito no llegan a su destino, se los beben por el camino los fantasmas.\" (De Cartas a Milena).",
            "Camus: \"No hay destino que no se supere por el desprecio.\" (De El mito de Sísifo).",
            "Borges: \"Cualquier destino, por largo y complicado que sea, consta en realidad de un solo momento.\" (De El jardín de senderos que se bifurcan).",
            "Benedetti: \"Te quiero pero no deseo luchar contra el destino.\" (De poemas románticos).",
            "Sartre: \"La libertad es lo que haces con lo que te han hecho.\" (Sobre destino auto-creado).",
            "Kierkegaard: \"El destino, entonces, es la nada de la ansiedad.\" (De diarios).",
            "Hesse: \"Si lo que importa en la existencia de una persona es aceptar lo inevitable conscientemente.\" (De reflexiones en Demian).",
            "Pessoa: \"El destino es como un vasto tapiz maravilloso en el que cada hilo es guiado por una mano tierna.\" (De Libro del desasosiego).",
            "Dostoevsky: \"No hay destino que no pueda ser superado por el desprecio.\" (Similar a Camus, en Notas del subsuelo)."
        ],
        "vacio": [
            "Nietzsche: \"Cuando miras largo tiempo a un abismo, el abismo también mira dentro de ti.\" (De Más allá del bien y del mal).",
            "Rilke: \"Por eso es tan importante estar solo y atento cuando se está triste; porque el instante aparentemente perplejo y vacío de acontecimientos.\" (De Cartas a un joven poeta).",
            "Kafka: \"El soltero se resigna aparentemente por su propia voluntad y en plena vida a un espacio vacío, cada vez más pequeño.\" (De La metamorfosis y diarios).",
            "Camus: \"El absurdo nace cuando el ser humano busca sentido en un universo indiferente.\" (De El mito de Sísifo, sobre el vacío existencial).",
            "Borges: \"Cuántos lugares se han tornado vanos y sin sentido, iguales a luces en el día.\" (De Ausencia).",
            "Benedetti: \"Lo que necesito de ti refleja una sensación de vacío por la ausencia de su amor.\" (De poemas como Lo que necesito de ti).",
            "Sartre: \"Soy el vacío que se abre en mi alma cuando miro hacia adelante.\" (De La náusea).",
            "Kierkegaard: \"Si debajo de todo yaciera un vacío insaciable, ¿qué sería la vida sino desesperación?\" (De O lo uno o lo otro).",
            "Hesse: \"Ahora mi pasado no es más que un enorme vacío.\" (De El lobo estepario).",
            "Pessoa: \"Soy la periferia de una ciudad inexistente.\" (De Libro del desasosiego, sobre vacío).",
            "Dostoevsky: \"El universo es un vacío cruel e indiferente.\" (De Notas del subsuelo)."
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
            mostrarTextoOjo(["Hola"].concat(frases[Math.floor(Math.random() * frases.length)]));
        });
    });

    function desactivarModoOjo(despedir = false) {
        if (despedir) {
            // Si ya hay un mensaje de despedida, no lo repitas
            if (textoDiv && textoDiv.textContent.trim() === "Hasta luego.") {
                finalizarCierre();
                return;
            }
            if (textoDiv) textoDiv.remove();
            if (inputDiv) inputDiv.remove();
            if (closeBtn) closeBtn.remove();
            // Mostrar mensaje de despedida antes de cerrar
            textoDiv = document.createElement("div");
            textoDiv.id = "ojo-texto-undertale";
            textoDiv.textContent = "Hasta luego.";
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
        closeBtn.title = "Cerrar";
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
            <input type="text" placeholder="Escribe tu respuesta..." autofocus />
            <button>Enviar</button>
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
        } else if (clave === "adios" || clave === "salir" || clave === "cerrar") {
            mostrarTextoOjo(["Hasta luego."], false);
            setTimeout(() => desactivarModoOjo(false), 1200);
            return;
        } else {
            if (clave.includes("quien") || clave.includes("soy")) {
                mostrarTextoOjo(["Minimo deberías ser consciente de tu nombre."]);
            } else if (clave.length < 3) {
                mostrarTextoOjo(["¿Eso es todo?"]);
            } else if (clave.match(/hola|buenas|saludos/)) {
                mostrarTextoOjo(["Acabo de saludarte, ¿No tienes otra respuesta?."]);
            } else {
                mostrarTextoOjo(["Interesante. veo que no te estás esforzando mucho.","sigue en búsqueda de alguna respuesta que me puedas brindar", "No me iré"]);
            }
        }
    }

    overlay.addEventListener("click", function() { desactivarModoOjo(true); });
    overlay.addEventListener("wheel", e => { if (modoOjoActivo) e.preventDefault(); }, { passive: false });
})();
