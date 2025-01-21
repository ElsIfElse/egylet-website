"use server";

import { revalidatePath } from "next/cache";

export async function deleteCharacterServer(name: string) {
    // Make the delete request
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}deleteCharacter/${name}`, {
        method: "DELETE",
    });

    // Optionally handle the response
    if (!res.ok) {
        throw new Error("Failed to delete character");
    }

    // Revalidate the home page
    revalidatePath("/");
}