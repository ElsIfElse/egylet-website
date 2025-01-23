import { Character, UpdateReturn } from "@/app/utils/interfaces"
import axios from "axios"

const sendUpdateDataToServer = async function(payload: Character):Promise<string | unknown> {
    try {
        const res:UpdateReturn = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}updateCharacter`, payload)
        // console.log('Function return is: ',res.data.data._id)
        return res.data.data.characterName
        
    } catch (error) {
        console.log(error)
        return error
    }
}

export default  sendUpdateDataToServer  