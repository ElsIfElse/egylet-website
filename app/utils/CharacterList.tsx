'use client'

import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Character } from "./interfaces";

const CharacterList = () => {
    const [list, setList] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacterList = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}getAllNpc`);
                const data = await res.json();
                setList(data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchCharacterList();
    }, []);

    return ( 
        <>
            {list.map((character: Character, index) => (
                <div key={character._id}>
                    <CharacterCard 
                        characterName={character.characterName} 
                        characterImage={character.characterImage} 
                        characterClass={character.characterClass} 
                        characterRace={character.characterRace} 
                        delayNumber={index}
                    />
                </div>
            ))}
        </>
    );
}
 
export default CharacterList;