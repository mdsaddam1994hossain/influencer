import {useQuery,useMutation } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";

export  function useContact() {
    return useQuery({
        queryKey: ["contacts"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("contacts").select("*")
            if(error){
                return error
            }else{
                return data
            }
        },
       
    });
}

export async function UseMutationContact(contactData:any) {

            const supabase = browserClient();
            const { data, error } = await supabase
                .from('contacts')
                .insert([
                    { name: contactData?.name, mobile: contactData.phone,email: contactData.email,message: contactData.message, },
                ])
                .select()
       
        if(error){
            return error
        }else{
            return data
        }
   
}



