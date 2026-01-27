import React from "react";
import "./style.css";
import "./global.css";
import { Botao } from "./componentes/Botao.jsx";

export function App() {
  return (
    <div className='container'>
      <h1>Bem vindo</h1>

      <Botao text='Clique Aqui' />
    </div>
  );
}
