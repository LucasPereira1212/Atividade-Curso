//Variaveis Globais
const elemHeader = document.querySelector("header");

const elemMenu = document.querySelector(".js-menu");

const elemImgCarteira = document.querySelector(".js-img-carteira");
const elemPictureCarteira = elemImgCarteira.parentElement;

const elemPictureSource = elemPictureCarteira.querySelector("source");

const elemTextoPersonalizacao = document.querySelector(".js-texto-cor");
const elemsBolinha = document.querySelectorAll(".js-bolinha");

// Menu
elemMenu.addEventListener("click", () => {
  const Barras = elemMenu.querySelectorAll("div");
  const barraCima = Barras[0];
  const barraBaixo = Barras[1];

  elemHeader.classList.toggle("h-screen");

  //Rotação do menu Hamburgue para o X
  barraCima.classList.toggle("rotate-45");
  barraCima.classList.toggle("translate-y-[0.28125rem]");
  barraBaixo.classList.toggle("-rotate-45");
  barraBaixo.classList.toggle("-translate-y-[0.28125rem]");

  // Abrir e fechar menu
  if (elemHeader.classList.contains("grid-rows-[3.75rem_0fr]")) {
    elemHeader.classList.remove("grid-rows-[3.75rem_0fr]");
    elemHeader.classList.add("grid-rows-[3.75rem_1fr]");
  } else {
    elemHeader.classList.add("grid-rows-[3.75rem_0fr]");
    elemHeader.classList.remove("grid-rows-[3.75rem_1fr]");
  }
});

// Carteira
elemsBolinha.forEach((elem) => {
  elem.addEventListener("click", () => {
    const novaCor = elem.getAttribute("data-cor");
    const corAtual = elemImgCarteira.getAttribute("data-cor-atual");

    if (elem.classList.contains("border-gray-300")) {
      elemsBolinha.forEach((elem) => {
        elem.classList.remove("border-black");
        elem.classList.add("border-gray-300");
      });
      elem.classList.add("border-black");
      elem.classList.remove("border-gray-300");
      elemTextoPersonalizacao.innerText = elem.getAttribute("data-texto-cor");
      elemImgCarteira.src = elemImgCarteira.src.replace(corAtual, novaCor);
      elemPictureSource.srcset = elemPictureSource.srcset.replaceAll(
        corAtual,
        novaCor,
      );

      elemImgCarteira.setAttribute("data-cor-atual", novaCor);
    }
  });
});
