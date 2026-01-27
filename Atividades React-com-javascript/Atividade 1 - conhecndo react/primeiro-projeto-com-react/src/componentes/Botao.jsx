import React from "react";
import styles from "./botao.module.css";

export function Botao({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.container}>
        {text}
      </button>
    </>
  );
}
