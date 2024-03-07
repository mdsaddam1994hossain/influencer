"use client"
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props ={
    influencer : any;
}

const InfluencerMemberCard:FC<Props> = ({influencer}) => {

    const router = useRouter()

    const onViewProfile =()=>{
       router.push("/profile")
    }

  
  return (
    <div className='p-4 bg-white rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 group shadow-custom' >
        <div className='bg-red-100 h-72 rounded-lg w-full p-8'>
            <div className='flex justify-center items-center flex-col' > 
            <Image src={"/images/person2.avif"} objectFit="cover" height={70} width={70} alt='e' className='rounded-lg h-36 w-36 duration-300  transition-transform transform ' />
             <p className='font-medioum font-roboto text-lg lg:text-xl mt-3 group-hover:text-red-500'>{influencer?.name}</p>
             <p className='text-gray-500 font-roboto '>Life Style</p>
            </div>

        </div>

        <div className='flex justify-between mt-4'>
            <div>
                <p className='font-medium font-roboto '>1250K</p>
                <p className='text-sm font-roboto text-gray-500'>Followers</p>
            </div>
            <div>
            <Separator orientation="vertical" />
            </div>
            <div>
                <p className='font-medium font-roboto '>60K</p>
                <p className='text-sm font-roboto text-gray-500'>Following</p>
            </div>
        </div>
        <Separator className="my-4" />
       
       <Button onClick={onViewProfile} className='w-full transition-bg transition-color duration-200 ease-in-out bg-gray-200 text-blackDark hover:text-white font-medium text-lg font-roboto h-11 hover:bg-black mb-4'>View Profile</Button>
    </div>
  )
}

export default InfluencerMemberCard
