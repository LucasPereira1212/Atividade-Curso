import React, { useState } from "react";

export function useContador2() {
  const [contador1, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador1 + 1);
  };

  const diminuir = () => {
    contador1 <= 0 ? "" : setContador(contador1 - 1);
  };

  return { contador1, aumentar, diminuir };
}
