import { Character } from "./interfaces";

const url:string = process.env.NEXT_BASE_URL+"/getNpcData/"

export const getCharacterInfo = async (id:string): Promise<Character> => {
    try {
        const res = await fetch(url+id);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data:Character = await res.json();
        console.log(id)
        return data
    } catch (error) {
        console.log(error)
        return {characterName:"error", characterImage:"error", _id:"error", characterClass:"error", characterRace:"error",characterAdditionInfo:"error"}
    }
}

export default getCharacterInfo