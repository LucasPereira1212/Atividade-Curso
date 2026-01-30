import React from "react";
import styles from "./botao.module.css";

export function Botao(params) {
  return (
    <>
      <button
        className={styles.botao}
        type={params.type}
        onClick={params.onClick}
        disabled={params.disabled}
      >
        {params.text}
      </button>
    </>
  );
}
