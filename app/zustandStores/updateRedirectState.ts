import { create } from 'zustand'

interface useUpdateRedirectStateProps{
    pathId:string
    isAdmin:boolean

    setPathId:(pathId:string) => void
    setIsadmin:(isAdmin:boolean) => void
}

export const useUpdateRedirectState = create<useUpdateRedirectStateProps>((set) => ({
    pathId:"",
    isAdmin:false,

    setPathId:(pathId:string) => set({pathId}),
    setIsadmin:(isAdmin:boolean) => set({isAdmin})


}))
