import axios from "axios"

const deleteCharacter = async function(id: string){
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}deleteCharacter/${id}`);
        if(res.status !== 200){
            throw new Error("Failed to delete character")
        }
        console.log(res.data)
        
    } catch (error) {
        console.log(error)
    }
}

export default deleteCharacter