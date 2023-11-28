import { useState } from "react"

export const useFetchData =({endPoint})=>{

    const [data, setData] = useState([])
    const [isLoading, setisLoading ] = useState(true)

    
    const fetchdata = async()=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            setData(data)
            setisLoading(false)
        }catch(err){
            console.error(err)
        }
    }
    
    useEffect(() => {
        fetchdata()
    }, [endPoint])

    return{
        data,
        isLoading
    }
}

