import { useState } from "react"

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  const handleClick = ()=>{
    setCounter(counter + 12)
    console.log(counter)
  }

  return (
    <>
      <h1>Contador: </h1>
      <p>{counter}</p>

      <button onClick={()=> handleClick(value)}>
        Contador
      </button>
 
    </>
  )
}

