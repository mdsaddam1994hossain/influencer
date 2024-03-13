"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation'
import { TInfluencer } from '@/types/influencer'

type Props ={
    // influencer : TInfluencer;
    influencer : any;
}

const InfluencerMemberCard:FC<Props> = ({influencer}) => {

    const router = useRouter()
    const { t} = useTranslation()

    const onViewProfile =(id:any)=>{
        router.push(`/influencer/${id}`);
    }

    console.log(influencer,"influencer list...")

  
  return (
    <div className='p-4 bg-white rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 group shadow-custom' >
        <div className={`${influencer?.colorClass}  rounded-lg w-full px-16 py-8`}>
            <div className='flex justify-center items-center flex-col' > 
              <div className='bg-white  h-[154px] w-[154px] rounded-lg '>
                <Image src={influencer?.imageUrl} objectFit="cover" height={140} width={140} alt='e' className='rounded-lg  duration-300 h-[144px] w-[154px]  transition-transform transform ' />
              </div>
             <p className='font-medioum font-roboto text-lg lg:text-xl mt-3 group-hover:text-red-500'>{influencer?.item.name}</p>
             <p className='text-gray-500 font-roboto '>Life Style</p>
            </div>

        </div>

        <div className='flex justify-between mt-4'>
            <div>
                <p className='font-medium font-roboto '>1250K</p>
                <p className='text-sm font-roboto text-gray-500'>{t("home.followers")}</p>
            </div>
            <div>
            <Separator orientation="vertical" />
            </div>
            <div>
                <p className='font-medium font-roboto '>60K</p>
                <p className='text-sm font-roboto text-gray-500'>{t("home.following")}</p>
            </div>
        </div>
        <Separator className="my-4" />
       
       <Button onClick={()=> onViewProfile(influencer?.item?.id)} className='w-full transition-bg transition-color duration-200 ease-in-out bg-gray-200 text-blackDark hover:text-white font-medium text-lg font-roboto h-11 hover:bg-black mb-3'>{t("home.view_profile")}</Button>
    </div>
  )
}

export default InfluencerMemberCard
