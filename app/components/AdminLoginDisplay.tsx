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
        <div className="w-full flex flex-col items-center justify-center">
            <Dialog sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} className="" open={true}>
                <DialogTitle style={{fontFamily:'SourcePro'}}>Admin felület</DialogTitle>
                <DialogContentText style={{fontFamily:'SourcePro'}} className="px-6 w-full">
                        Add meg a jelszót az admin jogokhoz.
                </DialogContentText>


                <DialogContent sx={{width:"90%",maxWidth:"400px",display:"flex",alignItems:"center",justifyContent:"center"}} className="flex w-full flex-row items-center gap-4 ">
                     <input onChange={(e)=>setPwInput(e.target.value)} className="min-w-0 w-full p-2 shadow-xl border-b border-b-slate-400 border-t border-t-slate-200 border-x border-x-slate-100" type="password" />
                     <button  style={{fontFamily:'SourcePro'}} onClick={()=>handleSubmit(pwInpout)}>Belépés</button>
                     <button className="scale-75 absolute top-0 right-0" onClick={toggleAdminLogin}><LucideX/></button>
                </DialogContent>

                <DialogContentText style={{color:"red",fontWeight:"bold",fontFamily:'SourcePro'}} className=" px-6 pb-6">
                        {message}
                </DialogContentText>
            </Dialog> 
        </div>
     );
}
 
export default AdminLoginDisplay;