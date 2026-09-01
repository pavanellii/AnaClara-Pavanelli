function nextScreen(screenId) {
  const current = document.querySelector(".screen.active");
  const next = document.getElementById(screenId);

  if (!next) return;

  if (current) current.classList.remove("active");

  setTimeout(() => {
    next.classList.add("active");
    next.scrollTop = 0;
  }, 150);
}

const particles = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const symbols = ["♡", "♥", "✦", "·"];
  particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left = Math.random() * 100 + "%";
  particle.style.fontSize = (8 + Math.random() * 12) + "px";
  particle.style.animationDuration = (6 + Math.random() * 8) + "s";

  particles.appendChild(particle);

  setTimeout(() => particle.remove(), 15000);
}

setInterval(createParticle, 700);

for (let i = 0; i < 12; i++) {
  setTimeout(createParticle, i * 300);
}

const messages = {
  work: {
    icon: "💻",
    text: "Queria muito colocar uma foto sua no meu computador do trabalho, só para ter você por perto mesmo nos dias mais corridos."
  },
  phone: {
    icon: "📱",
    text: "Queria colocar você na minha tela de bloqueio, para ser a primeira pessoa que eu vejo toda vez que pegar o celular."
  },
  wallet: {
    icon: "👛",
    text: "Queria ter uma foto sua na minha carteira, para carregar um pedacinho de você comigo por onde eu fosse."
  },
  car: {
    icon: "🚗",
    text: "Queria uma foto sua ao lado do meu carro. Mas calma... você não vai precisar disputar com ele. 😂❤️"
  },
  dog: {
    icon: "🐶",
    text: "E claro que eu queria uma foto sua ao lado do meu cachorro. Meus dois amores juntos. Acho que ele vai gostar de você mais rápido do que eu tive coragem de admitir que gosto. ❤️"
  }
};

function showMessage(type) {
  const message = messages[type];
  if (!message) return;

  const box = document.getElementById("photoMessage");
  const icon = document.getElementById("messageIcon");
  const text = document.getElementById("messageText");

  icon.innerHTML = message.icon;
  text.innerHTML = message.text;

  box.classList.remove("show");

  setTimeout(() => box.classList.add("show"), 50);
}

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
let musicPlaying = false;

function toggleMusic() {
  if (!music.src) {
    alert("Coloque primeiro o arquivo musica.mp3 na pasta do site e descomente a linha <source> no index.html.");
    return;
  }

  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    musicButton.innerHTML = "♪";
  } else {
    music.play();
    musicPlaying = true;
    musicButton.innerHTML = "❚❚";
  }
}

function finalYes() {
  nextScreen("finalYes");
  createFallingHearts();
}

function finalNo() {
  nextScreen("finalNo");
}

function createFallingHearts() {
  const container = document.getElementById("fallingHearts");
  container.innerHTML = "";

  for (let i = 0; i < 45; i++) {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = ["❤️", "♡", "✨"][Math.floor(Math.random() * 3)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 7) + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(heart);
  }
}
