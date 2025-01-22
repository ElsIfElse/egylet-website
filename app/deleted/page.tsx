'use client'

import { useRouter } from "next/navigation"
import revalidateMainPage from "../utils/revalidateMain";
import { useEffect } from "react";

const DeletedPage = () => {

    const router = useRouter();

    useEffect(()=>{
    const update = async function(){
        await revalidateMainPage()
        setTimeout(() => {
            router.push("/")
        },2000)
    }
        update()
    },[router])

    return ( 
        <div className="items-center justify-items-center h-screen p-8 pb-20 gap-8 sm:p-20 w-screen flex flex-col">
            <h2>Sikeres karakter törlés</h2>

            <h3 className="animate-pulse">Átirányítás a főoldalra...</h3>
        </div>
     );
}
 
export default DeletedPage;