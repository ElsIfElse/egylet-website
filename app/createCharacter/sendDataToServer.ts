import axios from "axios"
import { Character } from "../utils/interfaces"

const sendCreateDataToServer = async function(payload:Character){
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}createCharacter`, payload)
        return res.data
        
    } catch (error) {
        console.log(error)
        return error
    }
} 

export default sendCreateDataToServer