import { useState } from "react"

// Class Components
/*
CICLO DE VIDA DE UN COMPONENTE:

1) Componente se MONTA en el virtual DOM, componentDidMount. ---> Nace
2) Componente se ACTUALIZA en el virtual DOM, componentDidUpdate. --> Desarrolla
3) Componente se DESMONTA del virtual DOM, componentDidUnmount. --> Muere
*/

// Functional Components

// const handleSomething = (initialValue) => {
//   const value = initialValue

//   const updateValue = (newValue) => {
//     value = newValue
//   }

//   return [value, updateValue]
// }

export const Counter = () => {
  //   const banana = useState(1)
  //   const updateBanana = banana[1]
  //   return (
  //     <div>
  //       Counter {banana[0]}
  //       <button onClick={() => updateBanana(45)}>Update Banana</button>
  //     </div>
  //   )

  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <div>
      Counter {counter}
      <button onClick={increaseCounter}>Increase Banana</button>
      <button onClick={decreaseCounter}>Decrease Banana</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

// HOOKS
// They are functions that have a unique rule:
// MUST START WITH "use" and they are camel case
// useState, useEffect, useMemo, useRef
