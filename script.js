/* ============================== */
/* NAVEGAÇÃO */
/* ============================== */

function nextScreen(screenId) {

    const current = document.querySelector(".screen.active");

    const next = document.getElementById(screenId);

    if (!next) return;

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

    }, 200);

}


/* ============================== */
/* PARTÍCULAS */
/* ============================== */

const particleContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML = "♡";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.fontSize =
        (8 + Math.random() * 10) + "px";

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 15000);
}

setInterval(createParticle, 700);


/* ============================== */
/* MÚSICA */
/* ============================== */

const music = document.getElementById("music");

let musicPlaying = false;

function toggleMusic() {

    if (!music.src) {

        alert(
            "Primeiro coloque um arquivo de música no código."
        );

        return;
    }

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        document.getElementById("musicButton").innerHTML = "♪";

    } else {

        music.play();

        musicPlaying = true;

        document.getElementById("musicButton").innerHTML = "❚❚";

    }
}


/* ============================== */
/* FINAL SIM */
/* ============================== */

function finalYes() {

    nextScreen("finalYes");

    createFallingRoses();

}


/* ============================== */
/* FINAL NÃO */
/* ============================== */

function finalNo() {

    nextScreen("finalNo");

}


/* ============================== */
/* ROSAS CAINDO */
/* ============================== */

function createFallingRoses() {

    const container =
        document.getElementById("roses");

    container.innerHTML = "";

    for (let i = 0; i < 35; i++) {

        const rose =
            document.createElement("div");

        rose.classList.add("falling-rose");

        rose.innerHTML = "🌹";

        rose.style.left =
            Math.random() * 100 + "%";

        rose.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        rose.style.animationDelay =
            Math.random() * 5 + "s";

        rose.style.fontSize =
            (15 + Math.random() * 25) + "px";

        container.appendChild(rose);
    }

}


/* ============================== */
/* INICIAR PARTÍCULAS */
/* ============================== */

for (let i = 0; i < 10; i++) {

    setTimeout(createParticle, i * 300);

}