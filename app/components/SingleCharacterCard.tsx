'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import {motion} from "motion/react"
import deleteCharacter from "./deleteCharacter";

interface CharacterCardProps {
    characterName:string,
    characterImage:string,

    characterClass:string
    characterRace:string
    characterAdditionInfo:string
    characterId:string
}

const SingleCharacterCard:React.FC<CharacterCardProps> = ({characterId,characterName, characterImage, characterClass, characterRace,characterAdditionInfo}) => {
    const router = useRouter();

    const deleteTheCharacter = async(id:string) => {
        try {
            const isAdmin = localStorage.getItem('isAdmin')
            if(!isAdmin){
                alert("You are not admin")
                return
            }

            const res = await deleteCharacter(id)
            console.log(res)
            router.push("/deleted")
        } catch (error) {
            console.log(error)
        }
    }
    const updateCharacter = async (name:string) => {
        const isAdmin = localStorage.getItem('isAdmin')
        if(!isAdmin){
            alert("You are not admin")
            return
        }
        router.push("/updateCharacter/"+name)
    } 

    return ( 
        <motion.div 
        animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
        transition={{ duration: 0.6,delay:0}}
        style={{
            backgroundImage:"url(../../cardBack2.jpg)",
            backgroundRepeat: "no-repeat",
            WebkitMaskImage: `radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%)`,
            maskImage: `radial-gradient(ellipse 90% 90% at 50% 50%, black 60%, transparent 100%)`,
        }} 
            className="border-slate-400 border w-[30%] p-6 h-[90%] flex items-center flex-1 flex-col gap-12 outline-none bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl
            ">

            <motion.div 
            style={{
                WebkitMaskImage: `radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)`,
                maskImage: `radial-gradient(ellipse 50% 52% at 50% 50%, black 50%, transparent 100%)`
            }}
            animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
            transition={{ duration: 0.6,delay:0.2 }}
            className="flex justify-center w-[495px] h-[415px] flex-row shadow-2xl
            transition-all duration-300                          
            ">
                <Image className="rounded-lg"
                style={{ objectPosition: "top",
                    objectFit: "cover" ,
                    }} 
                    src={characterImage} alt="placeholder" 
                    width={495} 
                    height={315}
                    />
            </motion.div>
            <motion.div 
                        animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
                        transition={{ duration: 0.6,delay:0.8 }}
            className="flex flex-col gap-4 justify-center items-start w-[600px]">
                <h2 className="text-3xl hover:bg-blend-lighten">{characterName}</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col w-[400px]"> 
                            <h3 className="">Character Faj: {characterRace}</h3>
                            <h3 className="">Character Kaszt: {characterClass}</h3>
                        </div>
                        <div className="flex flex-col gap-2 h-[200px] w-[600px] overflow-auto">
                            <p>{characterAdditionInfo}</p>
                        </div>                        
                    </div>
            </motion.div>
                    <div className="flex flex-col gap-4">

            <motion.button 
                animate={{ opacity: [0, 0.3 ,1] }}
                transition={{ duration: 0.6,delay:1 }}
                onClick={() => updateCharacter(characterName)}>Karakter Módosítasa
            </motion.button>
            <motion.button 
                animate={{ opacity: [0, 0.3 ,1] }}
                transition={{ duration: 0.6,delay:1 }}
                onClick={() => deleteTheCharacter(characterId)}>Karakter Törlése
            </motion.button>                        
                    </div>
        </motion.div>
     );
}
 
export default SingleCharacterCard;  