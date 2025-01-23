'use client'

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
    text:string
}



const Hero:React.FC<HeroProps> = ({text}) => {

    return ( 
        <motion.div   
        className="flex justify-center items-center h-[80px] gap-6 hero">      
        <motion.div
        style={{borderRadius: 100}} 
        animate={{translateY:[-200,0] }}
        whileTap={{rotateY: 360}}
        transition={{ 
            duration: 3,
            mass: 2.2,
            stiffness: 200,
            damping: 20,
            type: "spring"         
        }}

        className="h-[100px] w-[100px] flex flex-row justify-center items-center overflow-hidden rounded-full">
            <Image 
            className="overflow-hidden h-full w-full object-cover rounded-full" 
            objectFit="cover" 
            src="/egyletLogo.jpg" 
            quality={100}
            alt="placeholder" 
            width={100}  
            height={100}
             
            /> 
        </motion.div>

          <motion.h1 
        animate={{translateY:[-200,0] }}
        exit={{translateY:-200 }}
        transition={{ 
            duration: 0.2,
            mass: 1,
            stiffness: 200,
            damping: 20,
            type: "spring",
            delay:0.1
        }}
          className="flex tracking-tight items-center justify-center">{text}</motion.h1>
      </motion.div>
     );
}
 
export default Hero;