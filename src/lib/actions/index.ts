"use server"

import { redirect } from "next/navigation"
import { supabaseServer } from "../supabase/server"


export default async function readUserSession(){

    const supabase = await supabaseServer()
    return supabase.auth.getSession()
}

export  async function userSignOut(){

    const supabase = await supabaseServer()
    await supabase.auth.signOut();
     redirect("/")
}