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

type Props = {
  // influencer : TInfluencer;
  influencer: any;
}

const InfluencerMemberCard: FC<Props> = ({ influencer }) => {

  const router = useRouter()
  const { t } = useTranslation()

  const onViewProfile = (id: any) => {
    router.push(`/influencer/${id}`);
  }


  return (
    <div className=' bg-white  transition duration-500 ease-in-out transform hover:-translate-y-3 group ' >
      <div className={`rounded-lg w-full `}>
        <Image src={influencer?.imageUrl} objectFit="cover" height={276} width={276} alt='e' className=' w-full  duration-300   transition-transform transform ' />


      </div>

      <div className='p-4 border-x border-b border-grayBorder'>
        <p className='font-semibold text-blackMedium'>{influencer?.item.name}</p>
        {/* <p className='font-normal text-grayLight text-sm mt-[2px]'>{t("home.fitness")}</p> */}
        <p className='font-normal text-grayLight text-sm mt-[2px]'>{influencer?.item.specialization}</p>
        <div className='flex justify-between items-center  mt-3'>
          <div className='flex gap-2 items-center'>

            <Image src={star} alt='error' />
            <p className='font-medium  text-sm '>(450) 4.2</p>
          </div>
          <div>

          </div>
          <div className='flex gap-2 items-center'>
            <Image src={user} alt='error' />
            <p className='font-medium  text-sm text-blackMedium '> 145 {t("home.followers")} </p>
          </div>
        </div>


        <Button onClick={() => onViewProfile(influencer?.item?.id)} className='w-full transition-bg transition-color duration-200 ease-in-out bg-blackDark text-white hover:text-white font-norlam rounded-lg text-sm font-normal h-[45px] hover:bg-black mt-4'>{t("home.view_profile")}</Button>
      </div>
    </div>
  )
}

export default InfluencerMemberCard
