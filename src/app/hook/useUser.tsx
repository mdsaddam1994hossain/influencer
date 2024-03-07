import { useQuery } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";


export default function useInfluencers(){
    return useQuery({
        queryKey:["influencers"],
        queryFn : async ()=>{
             const supabase =  browserClient()
             const  {data:influencers} = await supabase.from("influencers").select("*")
             console.log({influencers})
             if(influencers){
                return influencers
             }else{
                return null
             }
            //  const {data} = await supabase.auth.getSession()
            //  console.log(data,"data",data?.session?.user)
            //  if(data?.session?.user){
            //   const  {data:influencers} = await supabase.from("influencers").select("*")
            //   console.log({influencers})
            //     return influencers;
            //  }else{
            //     return null
            //  }
        }
    })
}

