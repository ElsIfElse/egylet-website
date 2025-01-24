'use client'

import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Character } from "../utils/interfaces";
import { Upload } from "lucide-react";
import { motion } from "motion/react";
import Hero from "../components/Hero";
import { useRouter } from "next/navigation";
import sendCreateDataToServer from "./sendDataToServer";


const CreateCharacterPage = () => {

    const [characterName, setCharacterName] = useState<string>("");
    const [characterClass, setCharacterClass] = useState<string>("");
    const [characterRace, setCharacterRace] = useState<string>("");
    const [characterAdditionInfo, setCharacterAdditionInfo] = useState<string>("");
    const [characterImage, setCharacterImage] = useState<string>("https://pics.craiyon.com/2024-09-14/7JN82izCQ8KkGotJ9diblw.webp");
    const [characterImagePreview, setCharacterImagePreview] = useState<string>("https://pics.craiyon.com/2024-09-14/7JN82izCQ8KkGotJ9diblw.webp");

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
        _id: "213das21e"
    }
    const router = useRouter();
    const sendDataToServer = async function(){
        
        try {
            const res = await sendCreateDataToServer(payload)
            console.log(res)
            router.push("/created")    
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
            const img: HTMLImageElement = document.createElement('img'); 
            img.src = reader.result as string;

            img.onload = () => {
              const canvas = document.createElement("canvas");
              const {width, height} = img;

              let maxWidth = width;
              let maxHeight = height;

              const MAX_FILE_SIZE = 2*1024*1024;
              let quality:number = 0.7;

              const compress = () => {
                canvas.width = maxWidth;
                canvas.height = maxHeight;

                const ctx = canvas.getContext("2d");
                if(!ctx){
                    reject(new Error("Could not get Canvas context"))
                    return
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img,0,0,maxWidth,maxHeight);

                const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
                const base64Size = Math.round(compressedBase64.length -22 )*3/4;

                if(base64Size > MAX_FILE_SIZE && quality > 0.1){
                    quality -= 0.1;
                    compress();
                }
                else if(base64Size > MAX_FILE_SIZE){
                    maxWidth *=0.9
                    maxHeight *=0.9
                    quality = 0.7;
                    compress();
                }
                else{
                    resolve(compressedBase64);
                }
              };
              compress();
            }
            img.onerror = () => reject(new Error("Failed to load image"));
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
        <div className="flex flex-col items-center justify-center
        py-6 lg:py-12 max-w-[1920px] 
        w-100vw lg:100vw  2xl:gap-12
        h-100vh overflow-hidden h-auto">
            <Hero text="Karakter Készítés" />
            
            <div className="flex 
            flex-col 2xl:flex-row
            items-center 2xl:items-center 2xl:justify-center
            px-4 2xl:p-12 2xl:h-[700px]
            gap-12 2xl:gap-[200px] 
            w-[100%] lg:w-[1100px]"> 

                <motion.div 
                animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
                transition={{ duration: 0.6,delay:0.1 }}
                className="
                w-full lg:w-[full] max-w-[900px] 2xl:w-[550px] flex flex-col items-center 2xl:justify-start
                gap-4 2xl:gap-8">
                    <div className="flex flex-col gap-1 w-[90%] items-center xl:items-start">
                        <label htmlFor="characterName">Karakter név</label>
                        <input className="" onChange={(e)=>setCharacterName(e.target.value)} type="text" name="characterName" id="characterName" />
                    </div>
                    <div className="flex flex-col gap-1 w-[90%] items-center xl:items-start">
                        <label htmlFor="characterClass">Karakter Kaszt</label>
                        <input className="" onChange={(e)=>setCharacterClass(e.target.value)} type="text" name="characterClass" id="characterClass" />
                    </div>
                    <div className="flex flex-col gap-1 w-[90%] items-center xl:items-start">
                        <label htmlFor="characterRace">Karakter Faj</label>
                        <input className="" onChange={(e)=>setCharacterRace(e.target.value)} type="text" name="characterRace" id="characterRace" />
                    </div>
                    <div className="flex flex-col gap-1 w-[90%] items-center xl:items-start">
                        <label htmlFor="characterAdditionInfo">Karakter Leírás</label>
                        <textarea onChange={(e)=>setCharacterAdditionInfo(e.target.value)} name="characterAdditionInfo" id="characterAdditionInfo" className="
                        h-[100px] lg:h-[200px] resize-none"/>
                    </div>

                    <input ref={fileInputRef} accept="image/*" onChange={(e)=>handleImageChange(e)} type="file" className="hidden"/>
                    <motion.button className="text-center" 
                    onClick={clickingImageUpload}><Upload/>Képfeltöltés</motion.button>
                    <motion.button 
                    onClick={()=>{sendDataToServer()}} className="
                    lg:w-[300px] text-center">Karakter mentése</motion.button>
                </motion.div>

                <motion.div 
                animate={{ opacity: [0, 0.3 ,1],translateY:[-10,0,0] }}
                transition={{ duration: 0.6,delay:0.4 }}
                style={{
                    backgroundImage:"url(../../cardBack2.jpg)",
                    backgroundRepeat: "no-repeat",
                }}
                className="
                pt-10 px-8
                max-w-[550px] lg:max-w-[800px] 
                lg:w-[550px]
                lg:gap-8 flex flex-col">
                    <div className="flex flex-col justify-start items-center
                    gap-4 lg:gap-4 
                    lg:h-[500px] overflow-hidden
                    
                    ">
                        <Image 
                         src={characterImagePreview} 
                        alt="https://pics.craiyon.com/2024-09-14/7JN82izCQ8KkGotJ9diblw.webp" 
                        width={600} 
                        height={400}
                        className="rounded-lg"
                        style={{ 
                            objectFit: "cover",
                            objectPosition: "top",
                            WebkitMaskImage: `radial-gradient(ellipse 70% 70% at 50% 50%, black 60%, transparent 100%)`,
                            maskImage: `radial-gradient(ellipse 50% 52% at 50% 50%, black 50%, transparent 100%)`
                        }}
                        />
                        <h2>{characterName}</h2>
                    </div>
                    <div className="flex flex-col 
                    gap-8 2xl:gap-8
                    
                    ">
                        <div className="flex flex-col 2xl:justify-center items-center
                        gap-1">
                            <h3>{characterClass}</h3>
                            <h3>{characterRace}</h3>
                        </div>
                        <p className="
                        h-[120px] 2xl:h-[250px] overflow-auto">{characterAdditionInfo}</p>
                    </div>                            
                </motion.div>
            </div>
        </div>
     );
}
 
export default CreateCharacterPage;