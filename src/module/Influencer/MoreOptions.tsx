import React from 'react'

import { useTranslation } from 'react-i18next'
import Image from "next/image"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import dotImg from "../../../public/images/dot.png"
import share from "../../../public/images/share.png"
import block from "../../../public/images/block.png"
import report from "../../../public/images/report.png"

const MoreOptions = () => {
    const {t} = useTranslation()
  return (
    <Popover >
      <PopoverTrigger asChild className='w-16'>
         <Button variant="outline" className='hover:bg-transparent  border border-blackDark h-[50px] px-3 text-blackDark text-sm rounded-lg'>
                    <Image src={dotImg} alt='D' className='h-8 w-8' />
          </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className="w-72 p-6 mt-6 border-0 shadow-custom rounded-xl flex flex-col gap-8 ">
         <div className="flex gap-3 items-center">
            <Image src={share} alt="S" className='h-8 w-8'/>
            <p>{t("profile.share")}</p>
            
         </div>
         <div className="flex  gap-3 items-center">
           <Image src={block} alt="S" className='h-8 w-8'/>
            <p>{t("profile.block")}</p>
            
         </div>
         <div className="flex  gap-3 items-center">
         <Image src={report} alt="S" className='h-8 w-8'/>
            <p>{t("profile.report")}</p>
           
         </div>
      </PopoverContent>
    </Popover>
  )
}

export default MoreOptions
