const string = 'Esto es un texto'
const number = 1234
const array = ['Curso de react', 'Youtube', 4, 1000]
const boolean = true
const sum = () => 1+1
const car = {marca: 'Volkswagen', km: 12541, color: 'azul'}
const fecha = new Date()

import '../styles/PrimerComponente.css'

//Si todo lo de arriba lo ponemos dentro del export se va a re-renderizar cuando actualicemos el componente

export const PrimerComponente = () => {
  return (
    <>
        <h1>Variables en JSX</h1>
        <h1>Fecha: </h1><p>{JSON.stringify(fecha)}</p>
        <h4>Variable tipo string: </h4><p>{string}</p>
        <h4>Variable tipo numero: </h4><p>{number}</p> 
        <h4>Variable tipo array: </h4><p>{array}</p>
        <h4>Variable tipo boolean: </h4><p>{boolean}</p>
        <h4>Variable tipo Funcion: </h4><p>{sum()}</p>
    </>
  )
}

 