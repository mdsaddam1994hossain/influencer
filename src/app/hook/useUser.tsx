import { useQuery } from "@tanstack/react-query";

import { supabaseBrowser } from "@/lib/supabase/brower";


export default function useUser(){

    return useQuery({
        queryKey:["user"],
        queryFn : async ()=>{
             const supabase =  supabaseBrowser()
             const {data} = await supabase.auth.getSession()

             console.log(data,"data...")

             if(data?.session?.user){
              const  {data:user} = await supabase.from("profile").select("*").eq("id",1).single()
                return user;
             }else{
                return null
             }
        }
    })
}