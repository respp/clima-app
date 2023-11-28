import { useState, useEffect } from "react"
import { fetchData } from "../../helpers/fetchData"

export const useFetchData =(endPoint)=>{

    const [data, setData] = useState([])
    const [isLoading, setisLoading ] = useState(true)

    const getData = async () => {
        const { data, isLoading } = await fetchData(endPoint)
        setData(data)
        setisLoading(isLoading)
    }
    
    useEffect(() => {
        getData()
    }, [endPoint])

    return{
        data,
        isLoading
    }
}

