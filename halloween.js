document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. CRIA A CORDINHA E INJETA NO SITE ---
  const cordinha = document.createElement('div');
  cordinha.className = 'cordinha';
  document.body.appendChild(cordinha); // Adiciona no fim do <body>

  // --- 2. CRIA O FANTASMA BOO E INJETA NO SITE ---
  const fantasma = document.createElement('img');
  fantasma.id = 'Boo';
  fantasma.src = 'boo.gif'; // ATENÇÃO: Coloque o nome exato do seu gif aqui!
  document.body.appendChild(fantasma); // Adiciona no fim do <body>

  // --- 3. LÓGICA DE ANIMAÇÃO DO FANTASMA ---
  let posX = 50;
  let posY = 50;
  let velocidadeX = 2.5;
  let velocidadeY = 2.5;

  function animarFantasma() {
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const larguraFantasma = fantasma.offsetWidth;
    const alturaFantasma = fantasma.offsetHeight;

    posX += velocidadeX;
    posY += velocidadeY;

    if (posX + larguraFantasma >= larguraTela) {
      posX = larguraTela - larguraFantasma;
      velocidadeX = -Math.abs(velocidadeX); 
      fantasma.style.transform = "scaleX(-1)"; 
    } else if (posX <= 0) {
      posX = 0;
      velocidadeX = Math.abs(velocidadeX); 
      fantasma.style.transform = "scaleX(1)"; 
    }

    if (posY + alturaFantasma >= alturaTela) {
      posY = alturaTela - alturaFantasma;
      velocidadeY = -Math.abs(velocidadeY); 
    } else if (posY <= 0) {
      posY = 0;
      velocidadeY = Math.abs(velocidadeY); 
    }

    fantasma.style.left = posX + 'px';
    fantasma.style.top = posY + 'px';

    requestAnimationFrame(animarFantasma);
  }

  // Só inicia a animação se a imagem tiver carregado um tamanho
  setTimeout(animarFantasma, 100); 
});
