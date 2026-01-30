import React from "react";
import { Botao } from "../Botao/Botao.jsx";
import styles from "./input.module.css";

export function Input(params) {
  return (
    <>
      <input
        className={styles.input}
        type={params.type}
        placeholder={params.placeholder}
        button={params.button}
        onClickButton={params.onClickButton}
        textButtom={params.textButtom}
        disabled={params.disabled}
        onChange={params.onChange}
      />
      {params.button === true ? (
        <Botao
          onClick={params.onClickButton}
          text={params.textButtom}
          type='button'
        />
      ) : (
        ""
      )}
    </>
  );
}
