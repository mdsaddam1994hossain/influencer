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
    const { data:user,error }:{data:any,error:any} = await supabase.auth.signUp({
        email: email,
        password: password,
      });
    if(error){
        return error
    }else{ 
      return user
    }

  }

  //testing api verity user as influencer or advertiser

  export async function insertDataAsInfluencerOrAdvertiser(user:any,userType?:string,data?:any){
    const supabase =  serverClient()
      let tableToUpdate = userType === 'influencer' ? 'influencers' : 'users';
     
    const { data:updateData, error:insertError } = await supabase.from(tableToUpdate).insert([
        {
          user_id: user?.user?.id,// Link to the Supabase Auth user's ID
          email:user?.user?.email,
          name:data.name,
          password:data.password,
          mobile:data.phone,
          company_name:data.comName,
          company_type:data.accountType,
          company_field:data.company_field,
          website:data.website
        },
      ]).select("*")
 
      if (insertError) { 
        return insertError
      } else {
        return updateData
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

  export async function verifyUser(uuid:string){
    const supabase =  serverClient()

      const { data: userData, error: dataError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', uuid) // Use the user ID from the authentication step to filter
        .single(); // Assuming one entry per user, modify as needed
        if(dataError){
          const { data: influencerData, error: influencerError } = await supabase
          .from('influencers')
          .select('*')
          .eq('user_id', uuid) // Use the user ID from the authentication step to filter
          .single();
          if(influencerError){
            return influencerError
          }else{ 
            return influencerData
          }
           
        }else{ 
          return userData
        }

  }


