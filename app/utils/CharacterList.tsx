
import CharacterCard from "../components/CharacterCard";
import { Character } from "./interfaces";

const fetchCharacterList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}getAllNpc`);
    const data = await res.json();
    console.log(data);
    return data
}



const CharacterList = async() => {

const delayNum:number = 0
    
    const list:Character[] = await fetchCharacterList();

    return ( 
       <>
            {list.map((character:Character,index) => (
                <div key={character._id}>
                    {delayNum+0.2}
                    <CharacterCard characterName={character.characterName} characterImage={character.characterImage} characterClass={character.characterClass} characterRace={character.characterRace} delayNumber={index}/>
                </div>
            ))}
       </>
     );
}

export default CharacterList;