'use client'
import { LucideX } from "lucide-react";
import {  Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useUpdateRedirectState } from "../zustandStores/updateRedirectState";

interface AdminLoginDisplayProps {
    toggleAdminLogin:()=>void
}

const AdminLoginDisplay:React.FC<AdminLoginDisplayProps> = ({toggleAdminLogin}) => {



    const [pwInpout,setPwInput] = useState("")
    const [message,setMessage] = useState("")
    const setIsAdmin = useUpdateRedirectState((state) => state.setIsadmin);

    const handleSubmit = function(input:string){
        if(input === process.env.NEXT_PUBLIC_ADMIN_PW){
            console.log("Admin login success")
            setMessage("Sikeres belepés")
            localStorage.setItem('isAdmin', 'true')
            setTimeout(() => {
                setIsAdmin(true)
                toggleAdminLogin()
            },1000)

        }
        else{
            console.log("Admin login failed")
            setMessage("Helytelen jelszó.")
        }
    }

    return ( 
        <>
            <Dialog className="flex flex-col" open={true}>
                <DialogTitle>Admin felület</DialogTitle>
                <DialogContentText className="px-6">
                        Add meg a jelszót az admin jogokhoz.
                </DialogContentText>


                <DialogContent className="flex flex-row gap-4">
                     <input onChange={(e)=>setPwInput(e.target.value)} className="p-2 shadow-xl border-b border-b-slate-400 border-t border-t-slate-200 border-x border-x-slate-100" type="password" />
                     <button onClick={()=>handleSubmit(pwInpout)}>Belépés</button>
                     <button className="scale-75 absolute top-0 right-0" onClick={toggleAdminLogin}><LucideX/></button>
                </DialogContent>
                <DialogContentText style={{color:"red",fontWeight:"bold"}} className=" px-6 pb-6">
                        {message}
                </DialogContentText>
            </Dialog> 
        </>
     );
}
 
export default AdminLoginDisplay;