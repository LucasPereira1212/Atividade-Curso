import React from "react";

export function Dados() {
  const tecnologia = "React";

  function soma(a, b) {
    return a + b;
  }
  return (
    <>
      <h1>{tecnologia}</h1>
      <h2>2 + 3 é {soma(2, 3)}</h2>
    </>
  );
}
