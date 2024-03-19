"use client"
import React from 'react'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import SliderButton from '@/components/ui/slider-button'
import bannerImg from "../../../public/images/in-footer-cta.png"
import circle1 from "../../../public/images/circle1.png"
import circle2 from "../../../public/images/circle2.png"
import circle3 from "../../../public/images/circle3.png"
import circle4 from "../../../public/images/circle4.png"

const Banner = () => {
    const { t} = useTranslation()
    return (
        <div className='hidden lg:block relative overflow-hidden '>
            
            <div className='rounded-lg flex flex-grow-2 justify-between min-h-[350px] relative z-30  gap-6 lg:gap-20 bg-[#FAFAFD]  items-center    bg-cover bg-center px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44' >
                <Image src={circle1}   alt='c1' className=' absolute top-0 right-24 z-20' /> 
                <Image src={circle2}   alt='c2' className=' absolute top-0 right-[184px] z-20'/> 
                <Image src={circle3}   alt='c3' className=' absolute top-0 left-0 z-20'/> 
                <Image src={circle4}   alt='c4' className=' absolute top-0 left-0 z-20'/> 
                <div className='z-30 flex-1'>
                 <p className='text-2xl  lg:text-4xl font-montserrat font-semibold text-blackDark lg:leading-10 '>{t("common.moalen_description")}</p>
                 <p className='text-lg text-blackDark mt-2'>{t("common.what_moalen")}</p>
                
                </div>
                <div className={`bg-transparent rounded-lg z-30 flex-1 flex justify-end`}>
                  <Image src={bannerImg}   alt='l' /> 
                </div>
            </div>

            

        </div>
    )
}

export default Banner
