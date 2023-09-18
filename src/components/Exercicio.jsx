import React from "react"


const Exercicio = ( {exercicio, completeExercicio, removeExercicio} ) =>  {
    return (
        <div className="exercicio" 
        style={{textDecoration: exercicio.isCompleted ? "line-through" : ""}}>
            <div className='content'>
              <p>{exercicio.text}</p>
              <p className='category'>{exercicio.category}</p>
            </div>
            <div className="botoes">
              <button className="complete" onClick={() => completeExercicio(exercicio.id)}>Done</button>
              <button className="remove" onClick={() => removeExercicio(exercicio.id)}>x</button>
            </div>
          </div>
    )
}

export default Exercicio