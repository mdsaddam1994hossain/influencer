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
      // console.log("influencer",influencer)
      //   return influencer
    console.log(influencer,"influencer....")
      if (influencer) {
        // Step 2: Fetch the influencer data linked to the authenticated user
        const { data: influencerData, error: dataError } = await supabase
          .from('influencers')
          .select('*')
          .eq('user_id', influencer?.user?.id) // Use the user ID from the authentication step to filter
          .single(); // Assuming one entry per user, modify as needed
        if (dataError) {
          console.error('Error fetching influencer data:', dataError.message);
          return dataError;
        }
        // Combine user data and influencer data for easy access
        const combinedData = {
          ...influencer, // Authenticated user's data
          influencerInfo: influencerData, // Associated influencer data
        };
        console.log(combinedData,"combine Data...")
        return combinedData;
      } else {
       
        console.log('User not authenticated or user data not available.');
        return null;
      }
    }
  }
export async function signUpWithCradential(email:string,password:string) {
    const supabase =  serverClient()
    const { data:user,error }:{data:any,error:any} = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      console.log(error,user)
    if(error){
        return error
    }else{ 
      return user
    }

    // let tableToUpdate = userType === 'influencer' ? 'influencers' : 'users';
    //  console.log(userType,"userType","tabledata",tableToUpdate)
    // const { data:updateData, error:insertError } = await supabase.from(tableToUpdate).insert([
    //     {
    //       user_id: user?.user?.id,// Link to the Supabase Auth user's ID
    //       email:email,
    //       password:password
    //     },
    //   ]);
    //   console.log("tabledata===",updateData)
    //   if (insertError) {
    //     console.error('Error inserting additional data:', insertError.message);
    //     return insertError
    //   } else {
    //     console.log(user,'Additional data inserted successfully:', updateData);
    //     return updateData
    //   }
  }

  //testing api verity user as influencer or advertiser

  export async function insertDataAsInfluencerOrAdvertiser(user:any,userType?:string){
    console.log(user,"==============")
    const supabase =  serverClient()
      let tableToUpdate = userType === 'influencer' ? 'influencers' : 'users';
    
    const { data:updateData, error:insertError } = await supabase.from(tableToUpdate).insert([
        {
          user_id: user?.user?.id,// Link to the Supabase Auth user's ID
          email:user?.user?.email
        },
      ]).select("*")
 
      if (insertError) {
        console.error('Error inserting additional data:', insertError.message);
        return insertError
      } else {
        console.log(user,'Additional data inserted successfully:', updateData);
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