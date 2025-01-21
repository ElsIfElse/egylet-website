
import { Suspense } from "react";
import getCharacterInfo from "../utils/getCharacterInfo";
import { Character } from "../utils/interfaces";
import SingleCharacterCard from "../components/SingleCharacterCard";

export const dynamicParams = true;

export interface ParamProps {
    params:Promise <{id:string}>
}

const loadingFallback = () => {
    return (
        <div className="animate-pulse">Loading...</div>
    )
}

const CharacterInfo:React.FC<ParamProps> =  async ({params}) => {

    const {id} = await params
    const character:Character = await getCharacterInfo(id);

    return ( 
        <div 
        
        className="items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-screen">
            <Suspense fallback ={loadingFallback()}> 
                <SingleCharacterCard characterName={character.characterName} characterImage={character.characterImage} characterClass={character.characterClass} characterRace={character.characterRace} characterAdditionInfo={character.characterAdditionInfo}/>
            </Suspense>
        </div>
     );
}
 
export default CharacterInfo;