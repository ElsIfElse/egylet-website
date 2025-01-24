'use client'
import { motion } from "motion/react"
import Image from "next/image";
import Link from "next/link";
import {  useEffect, useState } from "react";
import AdminLoginDisplay from "./AdminLoginDisplay";
import revalidateMainPage from "../utils/revalidateMain";
import { useUpdateRedirectState } from "../zustandStores/updateRedirectState";
import { checkAdmin } from "../utils/CheckAdmin";
import SecondaryNavbar from "./SecondaryNavbar";


const Navbar = () => {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        if(typeof window !== "undefined"){ 
            setScreenWidth(window.innerWidth);
        }
      }; 
      handleResize();
      if(typeof window !== 'undefined'){
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []); 

    /* ---------------- ------------------ ---------------------- */
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
        screenWidth > 1024 ? (<div className="flex flex-row w-screen h-[65px] lg:w-100vw bg-blue-100 justify-center items-center" style={{backgroundImage:"url(../../cardBack2.jpg)"}}>
            <div className="flex flex-row justify-start items-center w-full max-w-[1920px]">
                <div className="lg:w-[90%] 2xl:w-[90%] flex flex-row justify-between 2xl:justify-start items-center lg:pl-6">

                    <motion.div 
                            animate={{ rotateY: [0, 360, 0] }}
                            transition={{ 
                                duration: 10,
                                repeatType: "loop",
                                ease: "linear",
                                repeat: Infinity, 
                            }}  
                    className="w-[60px] h-[60px] flex flex-row 2xl:justify-start items-center overflow-hidden 2xl:relative 2xl:-left-12 lg:mr-6">
                        <Image 
                        className="overflow-hidden h-[50px] w-[50px] object-cover rounded-full " 
                        objectFit="cover" 
                        src="/egyletLogo.jpg" 
                        quality={100}
                        alt="placeholder" 
                        width={50} 
                        height={50}
                        />
                    </motion.div>
                    <div className="w-full flex flex-row justify-start gap-4 items-center">
                        <p className="text-2xl">|</p>
                        <Link className="text-black 
                        text-sm 2xl:text-xl link" href="/"><h3 className="link">Főoldal</h3></Link> 
                        <p className="text-2xl">|</p>
                        <Link className="text-black 
                        text-sm 2xl:text-xl link" href="/players"><h3 className="link">Játékosok</h3></Link> 
                        <p className="text-2xl">|</p>
                        <Link className="text-black 
                        text-sm 2xl:text-xl link" href="/about"><h3 className="link">Rólunk</h3></Link> 
                        <p className="text-2xl">|</p>
                        { !isAdmin && <Link onClick={()=>{setShowAdminLogin(!showAdminLogin)}} className="text-black 
                        text-sm 2xl:text-xl link" href=""><h3 className="link">Admin Pass</h3></Link>}
                        { !isAdmin && <p className="text-2xl">|</p>}
                        {isAdmin && <Link className="text-black 
                        text-sm 2xl:text-xl link"  href="/createCharacter"><h3 className="link">Karakter Készítés</h3></Link>}
                        {isAdmin && <p className="text-2xl">|</p>}
                        {isAdmin && <Link className="link text-black text-sm 2xl:text-xl" href={""} onClick={()=>revalidateMainPage()}><h3 className="link">Refresh DB</h3></Link>}
                        {isAdmin && <p className="text-2xl">|</p>}
                    </div>
                </div>
                <div>
                {isAdmin ?  
                        <p className=" text-base font-bold tracking-tight transition-all duration-0 hover:shadow-none hover:bg-opacity-100 hover:-translate-y-0 hover:-rotate-0">ADMIN</p> : 
                        <p className=" text-base font-bold tracking-tight transition-all duration-0 hover:shadow-none hover:bg-opacity-100 hover:-translate-y-0 hover:-rotate-0">GUEST</p> }
                </div>
                </div>
                    <div className="absolute z-0 flex items-center justify-center s-screen h-screen">
                        {showAdminLogin && <AdminLoginDisplay toggleAdminLogin={toggleAdminLogin}/>}
                    </div>
                </div>) : (
                    <div className="pt-3 justify-center items-center flex-col">
                        <SecondaryNavbar toggleAdminLogin={()=>toggleAdminLogin()}/> 
                        {showAdminLogin && <AdminLoginDisplay toggleAdminLogin={toggleAdminLogin}/>}
                    </div>)
    );
}
 
export default Navbar;