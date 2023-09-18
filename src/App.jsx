import { useState } from 'react'
import './App.css'
import Exercicio from './components/exercicio'
import ExercicioForm from './components/exercicioForm'

function App() {

const [exercicios, setExercicios] = useState([
  {
    id: 1,
    text: "Esteira - 30 minutos",
    category: "Cardio",
    isCompleted: false,
  },
  { 
    id: 2,
    text: "Prancha - 3 x 1 min",
    category: "Abdômen",
    isCompleted: false,
  }
])

const criarExercicio = (text, category) => {
  const newExercicios = [...exercicios,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];

  setExercicios(newExercicios);
};

const completeExercicio = (id) => {
  const newExercicios = [...exercicios];
  newExercicios.map((exercicio) => 
    exercicio.id === id ? (exercicio.isCompleted = !exercicio.isCompleted) : exercicio);

  setExercicios(newExercicios);
}

const removeExercicio = (id) => {
  const newExercicios = [...exercicios];
  const filterExercicios = newExercicios.filter((exercicio) => exercicio.id !== id ? exercicio : null);

  setExercicios(filterExercicios);
}

return (
  <div className='app'>
    <h2>Lista de exercícios</h2>
    <div className='treino1'>
    {
      exercicios
      .map((exercicio) => (
        <Exercicio key={exercicio.id} exercicio={exercicio} completeExercicio={completeExercicio} removeExercicio = {removeExercicio}/>
      ))
    }
    </div>
    <ExercicioForm criarExercicio={criarExercicio} />
  </div>
)
}

export default App
