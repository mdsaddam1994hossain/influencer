import { useQuery, useQueryClient } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";

export default function useInfluencers() {
    return useQuery({
        queryKey: ["influencers"],
        queryFn: async () => {
            const supabase = browserClient();
            const { data: influencers } = await supabase.from("influencers").select("*");
            return influencers || [];
        }
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

