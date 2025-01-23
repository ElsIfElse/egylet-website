'use client'

import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Character } from "../../utils/interfaces";
import { Upload } from "lucide-react";
import { motion } from "motion/react";
import Hero from "../../components/Hero";
import { useParams, useRouter } from "next/navigation";
import sendUpdateDataToServer from "./sendUpdateDataToServer";
import { useUpdateRedirectState } from "@/app/zustandStores/updateRedirectState";

export const dynamicParams = true;


const CreateCharacterPage = () => {

    const params = useParams()
    const id:string = params.id as string

    useEffect( ()=>{
        const setAllInfo = async () => {
            const getCharacterInfo = async(_id:string):Promise<Character>=>{
                try {
                    if(!id || id === undefined){
                        console.log("no id")
                        return { characterName: "", characterImage: "", _id: "", characterClass: "", characterRace: "", characterAdditionInfo: "" } as Character 
                    }
                   const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}getNpcData/${_id}`)
                   console.log(res.data)
                   return res.data
                } catch (error) {
                    console.log(error)
                    return { characterName: "", characterImage: "", _id: "", characterClass: "", characterRace: "", characterAdditionInfo: "" } as Character 
    
                }
            }
            const characterInfo:Character = await getCharacterInfo(id)
    
            setCharacterName(characterInfo.characterName)
            setCharacterClass(characterInfo.characterClass)
            setCharacterRace(characterInfo.characterRace)
            setCharacterAdditionInfo(characterInfo.characterAdditionInfo)
            setCharacterImagePreview(characterInfo.characterImage)
            setCharacterImage(characterInfo.characterImage)
            setCharacterId(characterInfo._id)
        }
        setAllInfo()

    },[id])

    const [characterName, setCharacterName] = useState<string>("");
    const [characterClass, setCharacterClass] = useState<string>("");
    const [characterRace, setCharacterRace] = useState<string>("");
    const [characterAdditionInfo, setCharacterAdditionInfo] = useState<string>("");
    const [characterImage, setCharacterImage] = useState<string>("");
    const [characterImagePreview, setCharacterImagePreview] = useState<string>("");
    const [characterId, setCharacterId] = useState<string>("");

    const setPathId = useUpdateRedirectState((state) => state.setPathId);

    const fileInputRef = useRef<HTMLInputElement>(null);


    const clickingImageUpload = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
    };
    
    const payload:Character = {
        characterName: characterName,
        characterClass: characterClass,
        characterRace: characterRace,
        characterAdditionInfo: characterAdditionInfo,
        characterImage: characterImage,
        _id: characterId
    }
    const router = useRouter();
    const sendDataToServer = async function() {
        try {
            const res:string | unknown = await sendUpdateDataToServer(payload)
            console.log('res is: ' + res)
            if(typeof res === "string"){
                setPathId(res)
            }
            console.log("Character updated");
            router.push(`/updated`)
            
        } catch (error) {
            console.log(error)
        }
    }

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = reader.result as string;
            resolve(base64String);
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
      };

    const handleImageChange = async(e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {

          const objectUrl:string = URL.createObjectURL(file);
          setCharacterImagePreview(objectUrl);  

          const base64string:string = await convertToBase64(file);
          setCharacterImage(base64string);

          return () => URL.revokeObjectURL(objectUrl); 

            } catch (error) {
                console.log("Error while converting Image",error)
            }

        }
      };

    useEffect(() => {
        return () => { 
            if(characterImage){
                URL.revokeObjectURL(characterImage);
                console.log(typeof characterImage)
            }
        };
      }, [characterImage]);

    return ( 
        <div className="flex flex-col items-center py-12 max-w-[1920px] w-full  h-full overflow-hidden">
            <Hero text="Karakter Módosítása" />
            
            <div className="flex flex-row p-12 gap-[200px] w-[1120px]">
                <motion.div 
                animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
                transition={{ duration: 0.6,delay:0.1 }}
                className="w-1/2 flex flex-col gap-12">
                    <div className="flex flex-col gap-1 h-auto">
                        <label htmlFor="characterName">Karakter név</label>
                        <input value={characterName} onChange={(e)=>setCharacterName(e.target.value)} type="text" name="characterName" id="characterName" />
                    </div>
                    <div className="flex flex-col gap-1 h-auto">
                        <label htmlFor="characterClass">Karakter Kaszt</label>
                        <input value={characterClass} onChange={(e)=>setCharacterClass(e.target.value)} type="text" name="characterClass" id="characterClass" />
                    </div>
                    <div className="flex flex-col gap-1 h-auto">
                        <label htmlFor="characterRace">Karakter Faj</label>
                        <input value={characterRace} onChange={(e)=>setCharacterRace(e.target.value)} type="text" name="characterRace" id="characterRace" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="characterAdditionInfo">Karakter Leírás</label>
                        <textarea value={characterAdditionInfo} onChange={(e)=>setCharacterAdditionInfo(e.target.value)} name="characterAdditionInfo" id="characterAdditionInfo" className="h-[200px] resize-none"/>
                    </div>

                    <input ref={fileInputRef} accept="image/*" onChange={(e)=>handleImageChange(e)} type="file" className="hidden"/>
                    <motion.button 
                    onClick={clickingImageUpload}><Upload/>Képfeltöltés</motion.button>
                    <motion.button 
                    onClick={()=>{sendDataToServer()}} className="w-[300px]">Karakter mentése</motion.button>
                </motion.div>

                <motion.div 
                animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
                transition={{ duration: 0.6,delay:0.4 }}
                className="w-1/2 gap-8 flex flex-col">
                    <div className="flex flex-col gap-4 h-[auto] overflow-hidden">
                        <Image 
                        src={characterImagePreview} 
                        alt="https://pics.craiyon.com/2024-09-14/7JN82izCQ8KkGotJ9diblw.webp" 
                        width={600} 
                        height={400}
                        className="rounded-lg"
                        />
                        <h2>{characterName}</h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-1">
                            <h3>{characterClass}</h3>
                            <h3>{characterRace}</h3>
                        </div>
                        <p className="h-[250px] overflow-auto">{characterAdditionInfo}</p>
                    </div>               
                    
                    
                </motion.div>
            </div>
        </div>
     );
}
 
export default CreateCharacterPage;