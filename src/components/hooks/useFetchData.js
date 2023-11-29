import { useState, useEffect } from "react"
import { fetchData } from "../../helpers/fetchData"

export const useFetchData =(endPoint)=>{

    const [data, setData] = useState([])
    const [isLoading, setisLoading ] = useState(true)
    
    useEffect(() => {
        fetchData(endPoint)
        .then(res => {
            setData(res.data)
            setisLoading(res.isLoading)
        })
    }, [endPoint])

    return{
        data,
        isLoading
    }
}

