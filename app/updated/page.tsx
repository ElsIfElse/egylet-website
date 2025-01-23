'use client'

import { useEffect } from "react";
import revalidateMainPage from "../utils/revalidateMain";
import { useRouter } from "next/navigation";
import { useUpdateRedirectState } from "../zustandStores/updateRedirectState";



const Updated = () => {

    const router = useRouter();
    const pathId = useUpdateRedirectState((state) => state.pathId);
    

    useEffect(()=>{
        const update = async function(){
            await revalidateMainPage()
            setTimeout(() => {
                router.push("/"+pathId)
            },2000)
        }
        update()

    },[router,pathId])

    return ( 
        <div className="items-center justify-items-center h-screen p-8 pb-20 gap-8 sm:p-20 w-screen flex flex-col">
        <h2>Sikeres karakter módosítás</h2>
        <h3 className="animate-pulse">Átirányítás a karakter oldalra...</h3>
    </div>
     );
}
 
export default Updated;