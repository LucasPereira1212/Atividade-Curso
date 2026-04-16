import React from "react";
import "./App.css";
import { Controller, useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      nomeCurso: "",
      data: "",
      categoria: "",
      descricao: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className='form-container'>
      <h1>Cadastro de Curso</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo entrada de nome do curso */}
        <Controller
          control={control}
          name='nomeCurso'
          render={({ field }) => (
            <input type='text' placeholder='Nome do curso' {...field} />
          )}
        />

        <span className='error'> O nome do curso é obrigatório</span>

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

        {/* Seleção de categoria */}
        <Controller
          control={control}
          name='categoria'
          render={({ field }) => (
            <select {...field}>
              <option value='' disabled selected>
                Escolha a categoria...
              </option>
              <option value='programacao'>Programação </option>
              <option value='design'>Design</option>
              <option value='marketing'>Marketing</option>
              <option value='outros'>outros</option>
            </select>
          )}
        />
        {/* Campo de descrição */}
        <Controller
          control={control}
          name='descricao'
          render={({ field }) => (
            <textarea placeholder='Descrição do curso' rows={4} {...field} />
          )}
        />

        {/* Botão  */}
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
