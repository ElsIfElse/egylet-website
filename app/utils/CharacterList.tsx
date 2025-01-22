'use client'

 import CharacterCard from "../components/CharacterCard";
import { Character } from "./interfaces";

interface CharacterListProps {
    characters:Character[] | string
}

const CharacterList:React.FC<CharacterListProps> =  ({characters}) => {

const delayNum:number = 0


    return ( 
       <>
            {characters && typeof characters === "object" && characters.map((character:Character,index:number) => (
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