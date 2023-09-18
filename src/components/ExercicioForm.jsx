import React, { useState } from 'react';

const ExercicioForm = ({ criarExercicio }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;
    criarExercicio(text, category);
    setText('');
    setCategory('');
  };

  return (
    <div className='exercicio-form'>
      <h4>Criar tarefa</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          placeholder='Digite o exercício'
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>Selecione uma categoria</option>
          <option value='Cardio'>Cardio</option>
          <option value='Peito'>Peito</option>
          <option value='Ombro'>Ombro</option>
          <option value='Biceps'>Biceps</option>
          <option value='Triceps'>Triceps</option>
          <option value='Costas'>Costas</option>
          <option value='Quadriceps'>Quadriceps</option>
          <option value='Posterior'>Posterior</option>
          <option value='Glúteos'>Glúteos</option>
          <option value='Panturrilha'>Panturrilha</option>
          <option value='Abdômen'>Abdômen</option>
        </select>
        <div className='criar-exercicio'>
          <button className='botao-exercicio'>Criar exercício</button>
        </div>
      </form>
    </div>
  );
};

export default ExercicioForm;
