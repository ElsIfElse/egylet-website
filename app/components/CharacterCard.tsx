'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"

interface CharacterCardProps {
    characterName:string,
    characterImage:string,

    characterClass:string
    characterRace:string

    delayNumber:number
}

const CharacterCard:React.FC<CharacterCardProps> = ({characterName, characterImage, characterClass, characterRace,delayNumber}) => {
    
    const delayNum:number = delayNumber*0.04

    return ( 
        <motion.div
        animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
        transition={{ duration: 0.6,delay:delayNum }}
        whileHover={{ rotateZ: 1,transition:{duration:0.2,delay:0}}}
        className=""  
        >

            <Link 
        style={{
            backgroundImage:"url(../../cardBack2.jpg)",
            backgroundRepeat: "no-repeat" }}
            href={`/${characterName}`} 
            className="
            border-slate-400 border w-full p-6 h-[200px] flex items-center flex-1 flex-row gap-12 outline-none bg-cover bg-center bg-no-repeat rounded-lg shadow-xl hover:shadow-2xl
            hover:-translate-y-1 hover:scale-[101%] hover:opacity-90
            transition-all duration-200"
            >

            <div className="flex justify-start w-[150px] h-[150px] flex-row">
                <Image className="rounded-3xl" style={{ objectFit: "cover",objectPosition: "top" }} src={characterImage} alt="placeholder" width={300} height={200}/>
            </div>
            <div className="flex flex-col gap-3 justify-center items-start">
                <h2 className="font-semibold">{characterName}</h2>
                <div className="flex flex-col">
                    <h3>{characterClass}</h3>
                    <h3>{characterRace}</h3>
                </div>
            </div>
        </Link>
        </motion.div>
     );
}
 
export default CharacterCard;  