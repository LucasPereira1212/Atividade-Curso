import React, { useState } from "react";

export function useContador() {
  const [contador, setContador] = useState(5);

  const dobrarValor = () => {
    setContador(contador * 2);
  };

  return { contador, dobrarValor };
}
