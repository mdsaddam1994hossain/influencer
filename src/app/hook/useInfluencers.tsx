import { useQuery, useQueryClient } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";

export default function useInfluencers(genderFilter:string) {
    return useQuery({
        queryKey: ["influencers",genderFilter],
        queryFn: async () => {
            const supabase = browserClient();
            let query = supabase.from("influencers").select("*");
            if (genderFilter !== 'all') {
                query = query.eq("gender", genderFilter);
            }
            const { data: influencers } = await query;
            
            return influencers || [];
        },
        enabled: !!genderFilter,
    });
}



export function useInfluencer(id: number) {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ["influencer", id],
        enabled:id? true:false,
        initialData: () => {
          // Attempt to find the influencer from the cached list of influencers
          const influencers = queryClient.getQueryData<any[]>(["influencers"]);
          const influencer = influencers?.find(influencer => influencer.id === id);
          return influencer ? { data: influencer } : undefined;
      },
        queryFn: async () => {
            const supabase = browserClient();
            const { data: influencer } = await supabase.from("influencers").select("*").eq("id", id).single();
            return influencer || null;
        },
       
    });
}

