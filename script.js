// Crie uma nova tag <link> para o novo ícone
var newLink = document.createElement("link");
newLink.rel = "icon";
newLink.type = "image/x-icon";
newLink.href = "img/logo/Sem título-2.webp"; // Use o mesmo caminho do seu HTML

// Adicione a nova tag <link> ao cabeçalho do documento
document.head.appendChild(newLink);

///=================================================================

// Botão ⬆️ de voltar

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#23135d ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

///=================================================================

// Obter o botão pelo ID
const fullscreenButton = document.getElementById("fullscreen-button");

// Função para alternar entre ativar e desativar o modo de tela cheia
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
// Adicionar um ouvinte de evento de clique ao botão de tela cheia
fullscreenButton.addEventListener("click", toggleFullscreen);

///=================================================================

// Adicionar um ouvinte de evento de rolagem à janela
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Exibir o botão quando o usuário rolar a página para baixo
  if (scrollTop > 100) {
    fullscreenButton.style.display = "block";
  } else {
    fullscreenButton.style.display = "none";
  }
});

///=================================================================

//Pesquisa feita pelo Input

function search(event) {
  const input = document.getElementById("searchbar").value.toLowerCase();
  const items = document.getElementsByClassName("artista-todos");
  const isSearchEmpty = input.trim() === "";

  const matchingItems = [];

  for (let i = 0; i < items.length; i++) {
    const title = items[i].getAttribute("data-title").toLowerCase();
    if (title.includes(input) || isSearchEmpty) {
      matchingItems.push(items[i]);
    }
  }

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  const letraDiv = document.querySelector(".letra");
  letraDiv.style.display = isSearchEmpty ? "block" : "none";

  // Crie um contêiner grid para os elementos correspondentes à pesquisa
  const searchResultsContainer = document.createElement("div");
  searchResultsContainer.classList.add("search-results-container");
  searchResultsContainer.style.display = "grid";
  searchResultsContainer.style.gap = "20px";
  searchResultsContainer.style.alignItems = "center";
  searchResultsContainer.style.textAlign = "center";
  searchResultsContainer.style.justifyItems = "center";

  // Adicione os elementos correspondentes à pesquisa no contêiner grid
  matchingItems.forEach((item) => {
    item.style.display = "inline-block";
    searchResultsContainer.appendChild(item);
  });

  // Insira o contêiner grid no DOM logo após o elemento letraDiv
  letraDiv.parentNode.insertBefore(
    searchResultsContainer,
    letraDiv.nextSibling
  );

  // Verifique se o campo de pesquisa está vazio e atualize a página se estiver
  if (isSearchEmpty) {
    window.location.reload();
  }
}

///=================================================================

//CLICANDO NA LOGOMARCA = ATUALIZARÁ A PÁGINA
const logoImage = document.getElementById("logoImage");

if (logoImage) {
  logoImage.addEventListener("click", function () {
    window.location.reload();
  });
}

///======================== SEARCHBAR =====================================

var searchbar = document.getElementById("searchbar");
var prefix = "Digite Nome: ";
var placeholderLines = ["ARTISTA", "BANDA", "ÁLBUM", "ESTILO"];
var currentIndex = 0;
var animationSpeed = 2500; // Ajuste a velocidade da animação em milissegundos

function animatePlaceholder() {
  searchbar.placeholder = prefix + placeholderLines[currentIndex];
  currentIndex = (currentIndex + 1) % placeholderLines.length;
}

// Iniciar a animação
setInterval(animatePlaceholder, animationSpeed);

///=============================================================

// CÓDIGO PARA EXECUTAR O DOWNLOAD DO APLICATIVO //
document.getElementById("downloadLink").addEventListener("click", function (e) {
  e.preventDefault();
  var downloadLink = document.getElementById("downloadLink");
  var fileURL = downloadLink.getAttribute("href");
  var fileName = downloadLink.getAttribute("download");
  var a = document.createElement("a");
  a.style.display = "none";
  a.href = fileURL;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// slide

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 8,
    dots: false,
    arrows: true,
    swipeToSlide: true,
    autoplay: true, // Adiciona a opção autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

//OPÇÃO DE AVANÇAR AS PÁGINA ENTRE OS CANTORES
var letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  /*    "U", */
  "V",
  "W",
  /*    "X",
   "Y", */
  "Z",
];
var indiceAtual = 0;
var botaoVoltar = document.getElementById("botaoVoltar");
var botaoAvancar = document.getElementById("botaoAvancar");

function avançar() {
  document.getElementById(letras[indiceAtual]).style.display = "none";
  indiceAtual = (indiceAtual + 1) % letras.length;
  document.getElementById(letras[indiceAtual]).style.display = "block";

  // Garante que o botão Voltar esteja visível
  botaoVoltar.style.display = "block";

  // Verifica se a letra atual é a última (Z) e desativa o botão Avançar
  if (indiceAtual === letras.length - 1) {
    botaoAvancar.disabled = true;
  } else {
    botaoAvancar.disabled = false;
  }
}

function voltar() {
  document.getElementById(letras[indiceAtual]).style.display = "none";
  indiceAtual = (indiceAtual - 1 + letras.length) % letras.length;
  document.getElementById(letras[indiceAtual]).style.display = "block";

  // Oculta o botão Voltar se atingir a primeira letra (A)
  if (indiceAtual === 0) {
    botaoVoltar.style.display = "none";
  }

  // Ativa o botão Avançar
  botaoAvancar.disabled = false;
}

// Função para criar um cookie
function criarCookie(nome, valor, dias) {
  var dataExpiracao = new Date();
  dataExpiracao.setDate(dataExpiracao.getDate() + dias);
  var cookie =
    nome +
    "=" +
    valor +
    "; expires=" +
    dataExpiracao.toUTCString() +
    "; path=/";
  document.cookie = cookie;
}

// Função para ler um cookie
function lerCookie(nome) {
  var nomeEQ = nome + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nomeEQ) === 0) {
      return cookie.substring(nomeEQ.length, cookie.length);
    }
  }
  return null;
}

// Função para fechar a mensagem
function fecharMensagem() {
  document.getElementById("mensagem").style.display = "none";
}

// Verifica se a mensagem já foi exibida
if (!lerCookie("mensagemExibida")) {
  // Se não foi exibida, exibe a mensagem e marca como exibida
  document.getElementById("mensagem").style.display = "block";
  criarCookie("mensagemExibida", "true", 30); // O cookie expira em 30 dias
}
