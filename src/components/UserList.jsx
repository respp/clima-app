import { useState, useEffect } from "react"

export const UserList = ({ endPoint }) => {
    const [data, setData] = useState([])

    const fetchdata = async()=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            setData(data)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [endPoint])
    

  return (
    <>
    <ul>
        {endPoint == 'users' ? data.map(item => <li key={item.id}>Nombre de usuario: {item.name} <br />Email: {item.email}</li>)
                             : data.map(item => <li key={item.id}>Comentario: {item.body}</li>)}
    </ul>
    </>
  )
}
