// --- MODO OJO CENTRAL INTERACTIVO UNDERTALE ---
(function() {
    const ojo = document.getElementById("ojo-decorativo");
    const overlay = document.getElementById("ojo-overlay");

    const frases = [
        ["Creo conocerte, ¿Quién eres?"],
        ["Es curioso", "Te puedo ver pero eres irreconocible", "¿Eres?"],
        ["Te detesto", "¿Por qué me ves así?", "Al menos dime, ¿Quién eres?"],
        ["Esa mirada, no la reconozco", "Supongo que despues de todo sigues siendo tú", "Sé un poco cortés e identificate"]
    ];

    const codigos = {
        "luz": "¿Buscas luz en la oscuridad? Aquí no la encontrarás.",
        "oscuro": "El oscuro observa de vuelta.",
        "secreto": "Has encontrado un secreto. Pero no todos los secretos deben ser revelados.",
        "soy yo": "¿De verdad eres tú? No estoy convencido.",
        // Puedes agregar más códigos aquí
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
            mostrarTextoOjo([codigos[clave]]);
        } else if (clave === "adios" || clave === "salir" || clave === "cerrar") {
            mostrarTextoOjo(["Hasta luego."], false);
            setTimeout(() => desactivarModoOjo(false), 1200);
            return;
        } else {
            if (clave.includes("quien") || clave.includes("soy")) {
                mostrarTextoOjo(["Eso deberías saberlo tú."]);
            } else if (clave.length < 3) {
                mostrarTextoOjo(["¿Eso es todo?"]);
            } else if (clave.match(/hola|buenas|saludos/)) {
                mostrarTextoOjo(["Ya saludé primero."]);
            } else {
                mostrarTextoOjo(["Interesante. ¿Algo más?"]);
            }
        }
    }

    overlay.addEventListener("click", function() { desactivarModoOjo(true); });
    overlay.addEventListener("wheel", e => { if (modoOjoActivo) e.preventDefault(); }, { passive: false });
})();
