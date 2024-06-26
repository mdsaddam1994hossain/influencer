"use client"
import React, { FC, useEffect, useState } from 'react'

import { useInfluencer } from '@/app/hook/useInfluencers'
import Image from 'next/image'
import profilebg from "../../../public/images/profile_bg.png"
import userImg from "../../../public/images/p4.png"
import dotImg from "../../../public/images/dot.png"
import { useTranslation } from 'react-i18next'
import { activitiesData } from '@/utils/Data'
import { Button } from '@/components/ui/button'
import MoreOptions from './MoreOptions'
import LoginModal from '@/components/modal/LoginModal'
import PageLoadingPage from '@/components/common/PageLoading'


type Props ={ 
    id:number,
    data:any
}
const InfluencerProfile:FC<Props> = ({id,data}) => {
    const { t ,i18n} = useTranslation();
    const {language} = i18n;
    const {data:influencer,isLoading} = useInfluencer(id)
    const [isOpen,setIsOpen] = useState(false)
    let totalFollowers = influencer?.platforms?.reduce((acc: number, item: any) => {
        return acc + item?.followers_count;
      }, 0);
     
   console.log({influencer})

    useEffect(()=>{
      if(data?.session){
        setIsOpen(false)
      }else{
        setIsOpen(true)
      }
    },[data?.session])
 

  return (
    <div className='mb-6 lg:mb-12' >
       <Image src={profilebg} alt='B'/>
       <div className=' px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 '>
        <div className='flex flex-col flex-3 lg:flex-row gap-4 lg:justify-between '>
            <div className='flex gap-6 mt-6 flex-1'>
                
                <div>
                    <p className='text-xs text-grayLight'>{t("filter.followers")}</p>
                    <p className="text-[26px] font-semibold text-blackMedium mt-1">{((totalFollowers / 1000000).toFixed(1))}m</p>
                </div>
                <div>
                    <p className='text-xs text-grayLight'>{t("profile.follow")}</p>
                    <p className="text-[26px] font-semibold text-blackMedium mt-1">981</p>
                </div>
                
                <div>
                    <p className='text-xs text-grayLight'>{t("profile.consulting")}</p>
                    <p className="text-[26px] font-semibold text-blackMedium mt-1">187</p>
                </div>
                <div>
                    <p className='text-xs text-grayLight'>{t("profile.ratings")}</p>
                    <p className="text-[26px] font-semibold text-blackMedium mt-1">164</p>
                </div>
            </div>
            <div className='lg:-mt-[77px] lg:flex lg:flex-col  lg:items-center flex-1'>
                <Image  src={influencer?.media?.avatar ||  "https://www.shutterstock.com/shutterstock/photos/548848999/display_1500/stock-vector-man-in-the-shirt-and-tie-businessman-avatar-or-male-face-icon-vector-illustration-548848999.jpg"} alt='B' width={154} height={154} className='h-[154px] w-[154px] rounded-full border-4 border-white shadow-custom ' />
                <p className="mt-4 text-lg font-semibold text-blackMedium ">{language === "en" ?  influencer?.name_en || influencer?.name :influencer?.name_ar || influencer?.name}</p>
                <p className=" text-sm font-normal text-grayLight mt-2 ">{language === "en" ?  influencer?.specialization_en || influencer?.specialization :influencer?.specialization_ar || influencer?.specialization}</p>
            </div>
            <div className='flex-1 mt-6 flex gap-6 justify-end'>
                
                <MoreOptions />
                <Button variant="outline" className='hover:bg-blackDark border border-blackDark h-[50px] px-3 rounded-lg' >{t("profile.follow_up")}</Button>
                <Button className="bg-blackDark h-[50px]  px-4 text-sm rounded-lg">{t("profile.consulting_request")}</Button>
            </div>
           
        </div>

    

       

        <div className=" mt-6 lg:mt-12">
            <p>{t("profile.activities")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4  mt-6">
               { activitiesData.map((item,index)=>{
                    return(
                        <Image key={index} src={item?.img} className="w-full rounded-xl " objectFit="cover" alt='E' />
                    )
                })}
            </div>
        </div>
         
       </div>

       <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default InfluencerProfile
