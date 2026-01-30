import React, { useState } from "react";

export function useInvertePalavra() {
  const [text, setText] = useState("");
  const [showMensagem, setShowMensagem] = useState(false);

  const capturarTexto = (e) => {
    setText(e.target.value);
    setShowMensagem(false);
  };

  const inverterPalavra = () => {
    setText(text.split("").reverse().join(""));
    setShowMensagem(true);
  };

  return { text, inverterPalavra, capturarTexto, showMensagem };
}
