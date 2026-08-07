const playlist = [
  {
    nome: "JerryTerry - ReDoin.mp3",
    arquivo: "ReDoin.mp3",
    capa: "redoin.jpg"
  },
  {
    nome: "Seatbelts - Cats on Mars.mp3",
    arquivo: "catsonmars.mp3",
    capa: "catsonmars.jpg"
  },
  {
    nome: "Kingsley Scanlon - Nostalgia.mp3",
    arquivo: "nostalgia.mp3",
    capa: "nostalgia.jpg"
  }
];

let index = 0;
let tocando = false;

const audio = document.getElementById("musica");
const nome = document.getElementById("nomeMusica");
const capa = document.getElementById("capa");
const playBtn = document.getElementById("play");
const togglePlayer = document.getElementById("togglePlayer");
const playerContainer = document.getElementById("playerContainer");

function atualizarPlayer() {
  audio.src = playlist[index].arquivo;
  nome.innerHTML = playlist[index].nome;
  capa.src = playlist[index].capa;
}

function proximaMusica() {
  index = (index + 1) % playlist.length;
  atualizarPlayer();
  audio.play();
  tocando = true;
  playBtn.innerHTML = "❚❚";
}

function musicaAnterior() {
  index = (index - 1 + playlist.length) % playlist.length;
  atualizarPlayer();
  audio.play();
  tocando = true;
  playBtn.innerHTML = "❚❚";
}

function alternarPlay() {
  if (tocando) {
    audio.pause();
    tocando = false;
    playBtn.innerHTML = "▶";
  } else {
    audio.play();
    tocando = true;
    playBtn.innerHTML = "❚❚";
  }
}

let playerAberto = false;

function alternarPlayer() {
  playerAberto = !playerAberto;
  playerContainer.classList.toggle("aberto", playerAberto);
  togglePlayer.innerHTML = playerAberto ? "▶" : "◀";
}

// ---------- Event listeners ----------

document.getElementById("proxima").addEventListener("click", proximaMusica);
document.getElementById("anterior").addEventListener("click", musicaAnterior);
playBtn.addEventListener("click", alternarPlay);
togglePlayer.addEventListener("click", alternarPlayer);
audio.addEventListener("ended", proximaMusica);

// ---------- Init ----------

atualizarPlayer();
