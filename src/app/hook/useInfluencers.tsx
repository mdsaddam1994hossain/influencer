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

export async function UseMutationInfluencer(data:any,userId:number) {

    const supabase = browserClient();
    
    const { data:influncer, error } = await supabase
    .from('influencers')
    .update([
      {
        // Add the influencer properties here
        name: data.name,
        specialization: data.specialization,
        gender:data.gender,
        country:data.country
        // other fields as necessary
      },
    ]).eq("id",userId).select("*");

    if(error){
        return error
    }else{
        return influncer
    }
  };
        


export async function UseMutationInfluencerCategories(influencerId:number,categoryIds:number[]) {

    const supabase = browserClient();
    const records = categoryIds?.map(categoryId => ({
        influencer_id: influencerId,
        category_id: categoryId,
      }));
      const { error,data } = await supabase.from('category_influencer').insert(records).select()
        if(error){
            return error
        }else{
            return data
        }

}

export async function UseMutationInfluencerTags(influencerId:number,tagIds:number[]) {

    const supabase = browserClient();
    const records = tagIds?.map(tagId => ({
        influencer_id: influencerId,
        tag_id: tagId,
      }));
      const { error,data } = await supabase.from('influencer_tag').insert(records).select()
        if(error){
            return error
        }else{
            return data
        }

}

export async function UseMutationInfluencerRegions(influencerId:number,regionsId:number[]) {

    const supabase = browserClient();
    const records = regionsId?.map(regionId => ({
        influencer_id: influencerId,
        region_id: regionId,
      }));
      const { error,data } = await supabase.from('influencer_region').insert(records).select()
        if(error){
            return error
        }else{
            return data
        }

}

export function useSingleInfluencer(influencerId: number) {
    
    return useQuery({
        queryKey: ["influencerCategory", influencerId],
        queryFn: async () => {
            const supabase = browserClient();

            const { data,error } = await supabase
            .from("influencers")
            .select(`
            *,
            category_influencer !inner(categories(*)),
            influencer_tag !inner(tags(*)),
            influencer_region !inner(regions(*))
            `).eq("id",influencerId)
            console.log(data)
           return data || null;
        },
    });
}



