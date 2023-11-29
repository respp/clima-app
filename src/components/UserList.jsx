//Bienvendio a la rama renzoF compañero 😎

import { useFetchData } from "./hooks/useFetchData"

export const UserList = ({ endPoint }) => {
    const { data, isLoading } = useFetchData(endPoint)
  return (
    <>
    <ul>
        {isLoading ? <p>Loading...</p> : endPoint == 'users' 
            ? data.map(item => <li key={item.id}>Nombre de usuario: {item.name} <br />Email: {item.email}</li>)                     
            : data.map(item => <li key={item.id}>Comentario: {item.body}</li>)}
    </ul>
    </>
  )
}