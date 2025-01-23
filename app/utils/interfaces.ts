export interface Character{
    characterName:string,
    characterImage:string,
    _id:string
    characterClass:string
    characterRace:string
    characterAdditionInfo:string
}

export interface UpdateReturn{
    data:UpdateCharacterRes
}

export interface UpdateCharacterRes{
    data:Character
    msg:string
}