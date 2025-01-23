'use client'
import { motion } from "motion/react"
import Image from "next/image";
import Link from "next/link";
import {  useEffect, useState } from "react";
import AdminLoginDisplay from "./AdminLoginDisplay";
import revalidateMainPage from "../utils/revalidateMain";
import { useUpdateRedirectState } from "../zustandStores/updateRedirectState";
import { checkAdmin } from "../utils/CheckAdmin";

const Navbar = () => {

    const [showAdminLogin,setShowAdminLogin] = useState(false)
    const isAdmin = useUpdateRedirectState((state) => state.isAdmin);
    const setIsAdmin = useUpdateRedirectState((state) => state.setIsadmin);

    const toggleAdminLogin = () => {
        setShowAdminLogin(!showAdminLogin)
    }

    useEffect(()=>{console.log(showAdminLogin)},[showAdminLogin])
    useEffect(()=>{
        if(checkAdmin()){
            setIsAdmin(true)
        }
        
    },[setIsAdmin])


    return ( 
        <div className=" flex flex-row w-screen h-[60px] bg-blue-100 justify-center items-center" style={{backgroundImage:"url(../../cardBack2.jpg)"}}>
            <div className="flex flex-row justify-start items-center w-full max-w-[1920px]">
                <div className="w-[auto] flex flex-row justify-start items-center">

                    <motion.div 
                            animate={{ rotateY: [0, 360, 0] }}
        
                            transition={{ 
                                duration: 10,
                                repeatType: "loop",
                                ease: "linear",
                                repeat: Infinity, 
                            }}  
                    className="w-[60px] h-[60px] flex flex-row justify-center items-center overflow-hidden">
                        <Image 
                        className="overflow-hidden h-[50px] w-[50px] object-cover rounded-full" 
                        objectFit="cover" 
                        src="/egyletLogo.jpg" 
                        quality={100}
                        alt="placeholder" 
                        width={50} 
                        height={50}
                        />
                    </motion.div>
                    <div className="w-full flex flex-row justify-center gap-4  items-center">
                        <p className="text-2xl">|</p>
                        <Link className="text-black text-xl link" href="/"><h3 className="link">Főoldal</h3></Link> 
                        <p className="text-2xl">|</p>
                        <Link className="text-black text-xl link" href="/createCharacter"><h3 className="link">Karakter Készítés</h3></Link>
                        <p className="text-2xl">|</p>
                        <Link onClick={()=>{setShowAdminLogin(!showAdminLogin)}} className="text-black text-xl link" href=""><h3 className="link">Admin Pass</h3></Link>
                        <p className="text-2xl">|</p>
                        <Link className="link text-black text-xl" href={""} onClick={()=>revalidateMainPage()}><h3 className="link">Refresh DB</h3></Link>
                        <p className="text-2xl">|</p>
                        {isAdmin ? <p className=" text-sm link bg-green-500 bg-opacity-10 rounded-md">Admin</p> : <p className="text-sm link bg-green-500 bg-opacity-10 rounded-md ">Guest</p> }

                    </div>

                </div>
                </div>
                    <div className="absolute z-0 flex items-center justify-center s-screen h-screen">
                        {showAdminLogin && <AdminLoginDisplay toggleAdminLogin={toggleAdminLogin}/>}
                        
                    </div>
                    
                </div>
    );
}
 
export default Navbar;