import { useMutation, useQuery } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";

export  function useFields() {
    return useQuery({
        queryKey: ["fields"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("fields").select("name_ar, name_en").not("name_ar","is",null).not("name_en","is",null)
            if(error){
                return error
            }else{
                return data 
            }
        },
       
    });
}