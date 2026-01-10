let botoes = document.querySelectorAll(".js-botao");
let body = document.body;

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    body.classList.toggle("popup--aberto");
  });
}
