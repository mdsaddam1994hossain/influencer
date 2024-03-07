"use server"

import { redirect } from "next/navigation"
import { serverClient } from "../supabase/server"


export default async function readUserSession(){

    const supabase = await serverClient()
    return supabase.auth.getSession()
}

export  async function userSignOut(){

    const supabase = await serverClient()
    await supabase.auth.signOut();
     redirect("/")
}