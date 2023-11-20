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
        {nombre:'Instalaciones necesarias', visto: true},
        {nombre:"Uso de vite", visto:true},
        {nombre:"Componentes", visto:true}, 
        {nombre:"Variables en JSX", visto:true},
        {nombre:"Props", visto:true}, 
        {nombre:"Eventos", visto:true}, 
        {nombre:"useState", visto:true},
        {nombre:"Redux", visto:false}, 
        {nombre:"CustomHooks", visto:false}
    ]

    const [array, setArray] = useState(sectionList)

   return (
    <>
        <h1>Listado de temas del curso</h1>
        <AddTask setArray={setArray} />
        <ol>
            {array.map(item => 
            <Item key={item.nombre} nombre={item.nombre} visto={item.visto} />
            )}
        </ol>
    </>
  )
}
