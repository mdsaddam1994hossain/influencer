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

export async function signInWithCradential(email:string,password:string) {
    const supabase =  serverClient()
    const { data:influencer,error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

    if(error){
        return error
    }else{
        return influencer
    }
  }
export async function signUpWithCradential(email:string,password:string) {
    const supabase =  serverClient()
    const { data:user,error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
    if(error){
        return error
    }else{
        return user
    }
  }

  export async function handleInfluencerSignup(user:any) {
    
    if (!user) return;
    const supabase =  serverClient()
    const { data, error } = await supabase.from('influencers').upsert({
        user_id: user.id,
        role:user.userType,
        phone:user.phone,
        email:user.email

    })
     
    if(error){
        return error
    }else{
        return data
    }
    
  }