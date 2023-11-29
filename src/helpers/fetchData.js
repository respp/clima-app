export const fetchData = async(endPoint, data, isLoading)=>{
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            console.log(data)
            return {
                data,
                isLoading : false
            }
        }catch(err){
            console.error(err)
        }
    }