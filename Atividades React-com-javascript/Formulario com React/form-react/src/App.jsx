/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nomeCurso: yup
    .string()
    .required("O nome do curso é obrigatório")
    .min(3, "O nome do curso deve conter pelo menos 3 caracteres")
    .max(50, "O nome do curso deve conter no máximo 50 caracteres"),
  data: yup
    .date("Formato de data inválido")
    .required("A data de início é obrigatória")
    .typeError("Insira uma data válida"),
  categoria: yup
    .string()
    .required("escolha uma categoria")
    .oneOf(
      ["programacao", "design", "marketing", "outros"],
      "Categoria inválida",
    ),
  descricao: yup
    .string()
    .required("A descrição do curso é obrigatória")
    .min(10, "A descrição deve conter pelo menos 10 caracteres")
    .max(200, "A descrição deve conter no máximo 200 caracteres"),
});

function App() {
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nomeCurso: "",
      data: "",
      categoria: "",
      descricao: "",
    },
  });

  const onSubmit = async (data) => {
    // Simulando um envio para o servidor
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);

    reset();
  };
  return (
    <div className='form-container'>
      <h1>Cadastro de Curso</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo entrada de nome do curso */}
        <input
          type='text'
          placeholder='Nome do curso'
          {...register("nomeCurso")}
        />
        {errors.nomeCurso && (
          <span className='error'>{errors.nomeCurso.message}</span>
        )}

        {/* Campo de data de inicio */}
        <Controller
          control={control}
          name='data'
          render={({ field }) => (
            <input
              type='date'
              lang='pt-BR'
              placeholder='Data de inicio'
              {...field}
            />
          )}
        />

        {errors.data && <span className='error'>{errors.data.message}</span>}

        {/* Seleção de categoria */}
        <Controller
          control={control}
          name='categoria'
          render={({ field }) => (
            <select {...field}>
              <option value='' disabled>
                Escolha a categoria...
              </option>
              <option value='programacao'>Programação </option>
              <option value='design'>Design</option>
              <option value='marketing'>Marketing</option>
              <option value='outros'>outros</option>
            </select>
          )}
        />

        {errors.categoria && (
          <span className='error'>{errors.categoria.message}</span>
        )}

        {/* Campo de descrição */}
        <Controller
          control={control}
          name='descricao'
          render={({ field }) => (
            <textarea placeholder='Descrição do curso' rows={4} {...field} />
          )}
        />

        {errors.descricao && (
          <span className='error'>{errors.descricao.message}</span>
        )}
        {/* Botão  */}
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default App;
