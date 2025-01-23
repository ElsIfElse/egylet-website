import { create } from 'zustand'

interface useUpdateRedirectStateProps{
    pathId:string

    setPathId:(pathId:string) => void
}

export const useUpdateRedirectState = create<useUpdateRedirectStateProps>((set) => ({
    pathId:"",

    setPathId:(pathId:string) => set({pathId})


}))
