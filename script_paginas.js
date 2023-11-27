/** @format */

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


var searchbar = document.getElementById("searchbar");
var prefix = "Digite: ";
var placeholderLines = ["ANO ou ÁLBUM"];
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
