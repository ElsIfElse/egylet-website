'use client'

 import CharacterCard from "../components/CharacterCard";
import { Character } from "./interfaces";

interface CharacterListProps {
    characters:Character[] | string
}

const CharacterList:React.FC<CharacterListProps> =  ({characters}) => {




    return ( 
       <>
            {characters && typeof characters === "object" && characters.length > 0 ?  characters.map((character:Character,index:number) => (
                <div
                className="" 
                key={character._id}>
                    
                    <CharacterCard 
                    characterName={character.characterName}  
                    characterImage={character.characterImage} 
                    characterClass={character.characterClass} 
                    characterRace={character.characterRace} 
                    delayNumber={index}/>
                </div>
            )):
            <div className="flex flex-col justify-start items-start w-full mt-12 gap-4">
                <h1 className="text-2xl w-auto">Az adatbázis üres. </h1>
                <h2>Hozz létre egy karaktert!</h2>
            </div>
            }
       </>
     );
}

export default CharacterList;