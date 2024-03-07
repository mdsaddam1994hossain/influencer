import React from 'react'

import Image from 'next/image'
import {Check} from "lucide-react"

import ServiceCard from '@/components/common/ServiceCard'
import { serviceData } from '@/utils/Data'
import SliderButton from '@/components/ui/slider-button'
import { Separator } from '@/components/ui/separator'
import aboutImg from "../../../public/images/about.jpeg"

const About = () => {
  return (
    <div className="my-8 lg:my-14" >
      <div className=' flex justify-center items-center flex-col gap-2 px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44'>
        <p className=" text-xl text-blackDark  ">Best Feature</p>
        <p className=" text-2xl lg:text-[42px] text-blackDark font-semibold ">Our Latest Features</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-12 items-center px-4 md:px-20 lg:px-36 xl:px-48 2xl:px-60 '>

        {serviceData.map((item, index) => {
          return (
            <ServiceCard key={index} item={item} />
          )
        })}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mt-12 lg:mt-20 py-12 lg:py-24 px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44' style={{backgroundImage: "url('/images/in-section-shape12.svg')",objectFit:"cover" }}>
        <div className=' '>
          <Image src={aboutImg} alt='error' className="rounded-xl " />
        </div>
        <div className='my-8'>
          <p className=' text-xl text-blackDark '>About Moalen</p>
          <p className="text-2xl lg:text-4xl text-blackDark font-medium mt-2 mb-6">Creative and First Problems Solving</p>
          <p className='text-blackLight'>A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields! “Moalan platform helps you choose the most appropriate influencers and social media platforms for your advertising campaign through accurate analytics.</p>
          {/* business promotion part */}
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
            <div className="flex gap-2 items-center">
               <div className='w-5 h-5 rounded-full bg-blue-600 flex justify-center items-center'>
                <Check  color="white" size={14}/> 
               </div>
               <p className=" text-blackDark italic ">Promote your business product</p>
            </div>

            <div className="flex gap-2 items-center mt-4 lg:mt-0">
               <div className='w-5 h-5 rounded-full bg-blue-600 flex justify-center items-center'>
                <Check  color="white" size={14}/> 
               </div>
               <p className=" text-blackDark italic ">Promote your business product</p>
            </div>
            
            <div className="flex gap-2 items-center mt-4">
               <div className='w-5 h-5 rounded-full bg-blue-600 flex justify-center items-center'>
                <Check  color="white" size={14}/> 
               </div>
               <p className=" text-blackDark italic ">Promote your business product</p>
            </div>
          </div>
          {/* contact btn  */}
          <SliderButton label='Contact Us' btnStyle="mt-8"/>
          <Separator color="red"  className="my-6 bg-[#F8CEDD]" />
          {/* ceo part */}
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 items-center'>
          <div className="flex gap-6 items-center">
               <div className='w-20 h-20 rounded-full bg-blue-600 flex justify-center items-center'>
                 
               </div>
               <div>
               <p className=" text-blackDark text-xl font-medium">
                 Sufankho Jhon
               </p>
               <p className=" text-blackLight ">
                 CEO of Moalen
               </p>
               </div>
            </div>

            <div className="mt-4 lg:mt-0">
                <p>Signature</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
