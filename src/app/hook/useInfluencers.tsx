import { useQuery, useQueryClient } from "@tanstack/react-query";

import { browserClient } from "@/lib/supabase/brower";


export default function useInfluencers(category_id?: any) {
    return useQuery({
        queryKey: ["influencers", category_id],
        queryFn: async () => {
            const supabase = browserClient();

            const { data , error } = await supabase.rpc(
                "fetch_influencer_details",
                {
                  category_id_param: category_id || null, // Pass null to fetch all categories
                //   limit_param:  ,
                //   offset_param: null,
                }
              );
            // let query =  supabase
            //   .from("influencers")
            //   .select(`
            //     name,
            //     specialization,
            //     specialization_en,
            //     specialization_ar,
            //     name_en,
            //     name_ar,
            //     id,
            //     gender,
            //     country,
            //     nickname,
            //     categories: category_influencer!inner(category_id(id,name)),
            //     influencer_tag!inner(tags(*)),
            //     influencer_platform(*,platforms(*))
            //   `)
            //   .not("specialization", "eq", null)
            //   .not("specialization_ar", "eq", null)
            //   .not("specialization_en", "eq", null)
            
            //     if (category_id) {
               
            //     query =  query.filter("category_influencer.category_id", "eq", category_id);
            // }
            

            // const { data,error } = await query;
          
            
            return data 
        },
    });
}

 // enabled: !!genderFilter,

export function useInfluencer(id: number) {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ["influencer", id],
        enabled: id ? true :false,
        initialData: () => {
          // Attempt to find the influencer from the cached list of influencers
          const influencers = queryClient.getQueryData<any[]>(["influencers"]);
          const influencer = influencers?.find(influencer => influencer.id === id);
          return influencer ? { data: influencer } : undefined;
      },
        queryFn: async () => {
            const supabase = browserClient();
            const { data: influencer,error } =  await supabase
            .rpc('fetch_single_influencer_details', {
              influencer_id_param: id
            });
            
            if(error){
                return error
            }else{ 
                return influencer
            }
        },
       
    });
}

