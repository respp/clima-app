export const fetchData = async()=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            return {
                data,
                isLoading
            }
        }catch(err){
            console.error(err)
        }
    }