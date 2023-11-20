import { useState } from "react"

export const AddTask = ({setArray}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange =(e)=>{
        setinputValue(e.target.value)
    }

    const onSubmit =(e)=>{
        const envio = {
            nombre : inputValue,
            visto : false
        }
        e.preventDefault()
        setArray(tasks => [...tasks, envio]) //Agrego tareas modificando el setArray
    }


    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Ingresar tarea nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
        
    )
}
