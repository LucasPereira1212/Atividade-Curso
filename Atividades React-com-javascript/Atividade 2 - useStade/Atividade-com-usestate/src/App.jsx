import React from "react";
import { Botao } from "./components/Botao/Botao.jsx";
import { useContador } from "./hooks/useContador.jsx";
import { Input } from "./components/input/Input.jsx";
import { useInvertePalavra } from "./hooks/useInvertePalavra.jsx";
import { useContador2 } from "./hooks/useContador2.jsx";
import { useContadorComAcrescimo } from "./hooks/useContadorComAcrescimo.jsx";

export function App() {
  const { contador, dobrarValor } = useContador();
  const { text, inverterPalavra, capturarTexto, showMensagem } =
    useInvertePalavra();
  const { contador1, aumentar, diminuir } = useContador2();
  const { contador2, aumentar1, diminuir1, acrescimoAtualizar } =
    useContadorComAcrescimo();

  return (
    <>
      <Botao text='Dobrar valor' onClick={dobrarValor} />
      <p>Numero esta em: {contador}</p>

      <br />
      <Input
        type='text'
        placeholder='Digite a palavra'
        button={true}
        textButtom='Inverter texto'
        onClickButton={inverterPalavra}
        onChange={capturarTexto}
      />
      <p>{showMensagem ? text : ""}</p>

      <br />
      <p>Numero atual é {contador1}</p>
      <Botao text='aumenta o valor' onClick={aumentar} />
      <Botao text='Diminui o valor' onClick={diminuir} />

      <br />
      <br />
      <br />

      <Input
        type='number'
        placeholder='Escolha seu acrescimo'
        button={false}
        textButtom='Acrescimo'
        onChange={acrescimoAtualizar}
      />

      <br />
      <br />

      <Botao text='aumenta o valor' onClick={aumentar1} />
      <Botao text='Diminui o valor' onClick={diminuir1} />
      <p>Seu numero atual é {contador2}</p>
    </>
  );
}
