"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation'
import star from "../../../public/images/Star.png"
import user from "../../../public/images/userhart.png"
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
    <div className=' bg-white border border-grayBorder transition duration-500 ease-in-out transform hover:-translate-y-3 group ' >
        <div className={`rounded-lg w-full `}>
          <Image src={influencer?.imageUrl} objectFit="cover" height={276} width={276} alt='e' className=' w-full  duration-300   transition-transform transform ' />
            {/* <div className='flex justify-center items-center flex-col' > 
              <div className='bg-white  h-[154px] w-[154px] rounded-lg '>
                <Image src={influencer?.imageUrl} objectFit="cover" height={140} width={140} alt='e' className='rounded-lg  duration-300 h-[144px] w-[154px]  transition-transform transform ' />
              </div>
             <p className='font-medioum font-montserrat text-lg lg:text-xl mt-3 group-hover:text-red-500'>{influencer?.item.name}</p>
             <p className='text-gray-500 font-montserrat '>Life Style</p>
            </div> */}

        </div>

        <div className='p-4'>
          <p className='font-semibold text-blackMedium'>{influencer?.item.name}</p>
          <p className='font-normal text-grayLight text-sm mt-[2px]'>{t("home.fitness")}</p>
        <div className='flex justify-between items-center  mt-3'>
            <div className='flex gap-2 items-center'>
               
               <Image src={star} alt='error'  />
                <p className='font-medium font-montserrat text-sm '>(450) 4.2</p>
            </div>
            <div>
           
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={user} alt='error'  />
                <p className='font-medium font-montserrat text-sm text-blackMedium '> 145 {t("home.followers")} </p>
            </div>
        </div>
     
       
         <Button onClick={()=> onViewProfile(influencer?.item?.id)} className='w-full transition-bg transition-color duration-200 ease-in-out bg-blackDark text-white hover:text-white font-norlam rounded-lg text-sm font-montserrat h-[45px] hover:bg-black mt-4'>{t("home.view_profile")}</Button>
        </div>
    </div>
  )
}

export default InfluencerMemberCard
