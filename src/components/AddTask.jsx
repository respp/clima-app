import { useState } from "react"

export const AddTask = ({addTask}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange =(e)=>{
        setinputValue(e.target.value)
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        addTask(inputValue) 
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
