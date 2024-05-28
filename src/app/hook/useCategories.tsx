import { useQuery } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";

export  function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("categories").select("*").not('name', 'is', null).neq('icon', 'not null') 
            if(data){
                return data
            }else{
                return error
            }
        },
       
    });
}

export  function useTags() {
   

    return useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("tags").select("*").not('name_en', 'is', null).not("name_ar","is",null)
            if(data){
                return data
            }else{
                return error
            }
        },
       
    });
}

export  function useCountry() {
   
    return useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("countries").select("*").not('name', 'is', null)
            if(data){
                return data
            }else{
                return error
            }
        },
       
    });
}

export  function useRegions() {
   
    return useQuery({
        queryKey: ["regions"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("regions").select("*").not('name_ar', 'is', null).not("name_ar","is",null)
            if(data){
                return data
            }else{
                return error
            }
        },
       
    });
}
