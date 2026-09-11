document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CONFETI AUTOMÁTICO AL ABRIR LA PÁGINA
    if (typeof confetti === "function") {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // 2. MENSAJE DESTACADO EN LA TARJETA SUPERIOR
    const mensajeGael = document.getElementById("mensajeGael");
    if (mensajeGael) {
        mensajeGael.textContent = "Hace exactamente 2 meses la vida nos cambió para siempre con la llegada de nuestro pequeño pugcito. ¡Gracias por hacernos los papás más felices!";
    }

    // 3. ANIMACIÓN DE APARICIÓN AL HACER SCROLL
    const tarjetas = document.querySelectorAll(".tarjeta-historia");
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    tarjetas.forEach(tarjeta => observador.observe(tarjeta));

    // 4. VISOR DE FOTOS EN PANTALLA COMPLETA (LIGHTBOX)
    const modal = document.createElement("div");
    modal.className = "modal-visor";
    modal.innerHTML = `<img src="" alt="Vista previa"><p style="color:white; position:absolute; bottom:30px; font-size:0.9rem;">Toca en cualquier lugar para cerrar</p>`;
    document.body.appendChild(modal);

    const imgModal = modal.querySelector("img");

    document.querySelectorAll(".tarjeta-historia img").forEach(imagen => {
        imagen.addEventListener("click", () => {
            imgModal.src = imagen.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // 5. BOTÓN DE CORAZONES FLOTANTES (CONECTADO AL BOTÓN DEL HTML)
    const btnCorazones = document.getElementById("btnCorazones");
    if (btnCorazones) {
        btnCorazones.addEventListener("click", lanzarCorazones);
    }

    function lanzarCorazones() {
        const iconos = ["❤️", "💙", "✨", "👶", "💖"];
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const corazon = document.createElement("div");
                corazon.className = "corazon-flotante";
                corazon.innerText = iconos[Math.floor(Math.random() * iconos.length)];
                corazon.style.left = Math.random() * 90 + 5 + "vw";
                corazon.style.animationDuration = (Math.random() * 2 + 2) + "s";
                document.body.appendChild(corazon);

                setTimeout(() => corazon.remove(), 3000);
            }, i * 120);
        }
    }
});