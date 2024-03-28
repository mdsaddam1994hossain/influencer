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