import { useQuery, useQueryClient } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";

export  function useCategories() {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data } = await supabase.from("categories").select("*").not('name', 'is', null).neq('icon', 'not null') 
            return data || null;
        },
       
    });
}

export  function useTags() {
   

    return useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("tags").select("*").not('name_en', 'is', null).not("name_ar","is",null)
            return data || null;
        },
       
    });
}

export  function useCountry() {
   
    return useQuery({
        queryKey: ["countries"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("countries").select("*").not('name', 'is', null)
            return data || null;
        },
       
    });
}

export  function useRegions() {
   
    return useQuery({
        queryKey: ["regions"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data,error } = await supabase.from("regions").select("*").not('name_ar', 'is', null).not("name_ar","is",null)
            return data || null;
        },
       
    });
}
