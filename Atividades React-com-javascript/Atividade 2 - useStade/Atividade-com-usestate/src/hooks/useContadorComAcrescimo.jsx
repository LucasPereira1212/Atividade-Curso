import React, { useState } from "react";

export function useContadorComAcrescimo() {
  const [contador2, setContador] = useState(0);
  const [acrescimo, setAcrescimo] = useState(0);

  const aumentar1 = () => {
    setContador(contador2 + Number(acrescimo));
  };

  const diminuir1 = () => {
    setContador(contador2 - Number(acrescimo));
  };

  const acrescimoAtualizar = (e) => {
    setAcrescimo(e.target.value);
  };

  return { contador2, aumentar1, diminuir1, acrescimoAtualizar };
}
