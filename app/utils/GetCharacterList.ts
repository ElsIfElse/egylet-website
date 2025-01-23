

const fetchCharacterList = async () => {
    try {
        if(!process.env.NEXT_PUBLIC_BASE_URL){
            throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}getAllNpc`,{
        // const res = await fetch(`https://egylet-server.fly.dev/api/getAllNpc`,{
        // next: { revalidate: 300 }
        cache: "force-cache"
        });  

        if(!res.ok){
            const error = await res.json()
            throw new Error(error.message || "Failed to fetch data")
        }
        
        const data = await res.json()
        // console.log(data)
        return await data
        
    } catch (error) {
     console.log(error)   
    }
} 

export default fetchCharacterList