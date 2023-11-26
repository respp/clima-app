import { useState } from "react"
import { AddTask } from "./AddTask"

const Item =({nombre, visto})=>{
    return(
        <li className="red">
        {nombre}
        {visto ? '✔' : '❌'}
         </li>
    )
}

export const ListApp = () => {
    const addTask = ()=>{
        setArray([...array,{nombre:'Nuevo nombre', visto:false}])
    }
    let sectionList = [
        {id: 1,nombre:'Instalaciones necesarias', visto: true},
        {id: 2,nombre:"Uso de vite", visto:true},
        {id: 3,nombre:"Componentes", visto:true}, 
        {id: 4,nombre:"Variables en JSX", visto:true},
        {id: 5,nombre:"Props", visto:true}, 
        {id: 6,nombre:"Eventos", visto:true}, 
        {id: 7,nombre:"useState", visto:true},
        {id: 8,nombre:"Redux", visto:false}, 
        {id: 9,nombre:"CustomHooks", visto:false}
    ]

    const [array, setArray] = useState(sectionList)
 
    const onAddTask = (val)=>{
        let value = val.trim()
        if (value < 1) return alert('Tiene que ingresar un valor')
        const envio = {
            id: array.length + 1,
            nombre : value,
            visto : false
        }
        setArray([...array, envio])
    } 

    

   return (
    <>
        <h1>Listado de temas del curso</h1>
        <AddTask addTask={onAddTask} />
        <ol>
            {array.map(item => 
            <Item key={item.key} nombre={item.nombre} visto={item.visto} />
            )}
        </ol>
    </>
  )
}
