'use client'

import CharacterCard from "../components/CharacterCard";
import { Character } from "./interfaces";
// export const dynamicParams = true;

interface CharacterListProps {
    characters: Character[]
}

// const fetchCharacterList = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}getAllNpc`);
//     const data = await res.json();
//     console.log(data);
//     return data
// }



const CharacterList:React.FC<CharacterListProps> = ({characters}) => {

const delayNum:number = 0


    return ( 
       <>
            {characters.map((character:Character,index) => (
                <div key={character._id}>
                    {delayNum+0.2}
                    <CharacterCard 
                    characterName={character.characterName} 
                    characterImage={character.characterImage} 
                    characterClass={character.characterClass} 
                    characterRace={character.characterRace} 
                    delayNumber={index}/>
                </div>
            ))}
       </>
     );
}

export default CharacterList;