import { Character } from "@/app/utils/interfaces"
import axios from "axios"

const sendUpdateDataToServer = async function(payload: Character){
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}updateCharacter`, payload)
        console.log(res.data)
        
    } catch (error) {
        console.log(error)
    }
}

export default  sendUpdateDataToServer