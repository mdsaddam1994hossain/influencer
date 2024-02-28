"use client"
import React from 'react'
import Image from 'next/image'
import LanguageChanger from './LanguageChanger';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResultFilter from '../../components/common/Filter'
import Categories from '@/components/common/Categories';
import {AlignJustify} from "lucide-react"

const ResponsiveHeader = () => {

    const {t,i18n} = useTranslation()
    const {language} = i18n

  return (
    <div>
        <div className='hidden lg:block'>
         <div className={`flex justify-between items-center h-28 `}>
                   <Image src="/images/logo.png" height={15} width={100} className="" alt='l'/> 
                <div className={`flex gap-6 items-center `}>
                    <div className='relative'>
                        <div className={`h-2.5 w-2.5 rounded-full bg-sky-100 absolute bottom-5 ${language=== "ar" ? "mr-6" : "ml-6"} }`}></div>
                        <Input type="email" placeholder={t("home:search")} className={`rounded-full w-60 h-[54px] ${language=== "ar" ? "pr-10" : "pl-10"} "}`} />
                    </div>
                    <LanguageChanger />
                </div> 
           </div>
        </div>
        <div className='block lg:hidden'>
          <div className="h-16 flex justify-between items-center ">
             <Image src="/images/logo.png" height={15} width={100} className="" alt='l'/>   
             <Button><AlignJustify /></Button>
          </div>
          <Separator className='w-full mb-3' />
          <div className='flex justify-between gap-2 pb-3'>   
            <div className='flex-1 overflow-y-auto'><Categories categories='nav:categories_mobile' /></div>
            <div className='flex-1 overflow-y-auto'> <ResultFilter language={language}/></div>      
            <div className='relative flex-1 overflow-y-auto w-full '>
                  <div className={`h-2 lg:h-2.5 w-2 lg:w-2.5 rounded-full bg-sky-100 absolute bottom-3 lg:bottom-5 ${language=== "ar" ? "mr-1.5 lg:mr-6" : "ml-1.5 lg:ml-6"} }`}></div>
                 <Input type="email" placeholder={t("home:searchmobile")} className={`rounded-full w-full h-8 lg:h-[54px] ${language=== "ar" ? "pr-4 lg:pr-10" : "pl-4 lg:pl-10"} "}`} />
            </div>
            <div className='flex-1 overflow-y-auto '><LanguageChanger /></div>
          </div>
        </div>
      
    </div>
  )
}

export default ResponsiveHeader
