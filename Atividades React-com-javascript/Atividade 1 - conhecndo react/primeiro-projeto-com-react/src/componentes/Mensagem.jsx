import React from "react";
import { Botao } from "./Botao.jsx";

export function Mensagem({ titulo, conteudo }) {
  return (
    <>
      <h1>{titulo}</h1>
      <p>{conteudo}</p>
    </>
  );
}
