let elemItens = document.querySelector(".itens");

let itensFilhos = Array.from(elemItens.children);

itensFilhos.forEach((item) => {
  let itemDuplicado = item.cloneNode(true);

  itemDuplicado.setAttribute("arial-hidden", "true");
  elemItens.appendChild(itemDuplicado);
});
