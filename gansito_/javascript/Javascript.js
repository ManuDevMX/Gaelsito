document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENSAJE DESTACADO DE LOS 2 MESES DE GAEL
    const mensajeGael = document.getElementById("mensajeGael");
    if (mensajeGael) {
        mensajeGael.textContent = "Hace exactamente 2 meses la vida nos cambió para siempre con la llegada de nuestro pequeño pugcito. ¡Gracias por hacernos los papás más felices!";
    }

    // 2. ANIMACIÓN DE APARICIÓN AL HACER SCROLL
    const tarjetas = document.querySelectorAll(".tarjeta-historia");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15 // Se activa apenas asoma el 15% de la tarjeta
    });

    tarjetas.forEach(tarjeta => observador.observe(tarjeta));


    // 3. VISOR DE FOTOS EN PANTALLA COMPLETA (LIGHTBOX)
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


    // 4. BOTÓN DE CORAZONES FLOTANTES AL FINAL
    const contenedorLinea = document.querySelector(".linea-tiempo");
    if (contenedorLinea) {
        const divAmor = document.createElement("div");
        divAmor.className = "contenedor-amor";
        divAmor.innerHTML = `<button class="btn-amor" id="btnCorazones">¡Enviar mucho amor a Gael! ❤️</button>`;
        contenedorLinea.appendChild(divAmor);

        document.getElementById("btnCorazones").addEventListener("click", lanzarCorazones);
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
