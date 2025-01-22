'use server'

import { revalidatePath } from "next/cache";

const revalidateMainPage = async function(){
    revalidatePath("/");
    return {success:true}
}

export default revalidateMainPage