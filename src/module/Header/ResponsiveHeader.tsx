"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import LanguageChanger from './LanguageChanger';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResultFilter from '../../components/common/Filter'
import Categories from '@/components/common/Categories';
import { AlignJustify, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import logo from "../../../public/images/logo.png"
import { navData } from '@/utils/Data'
import Link from 'next/link';
import { userSignOut } from '@/lib/actions';
import useAppStore from '@/store';
import { usePathname, useRouter } from 'next/navigation';


const ResponsiveHeader = ({ data }: any) => {
  
  
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { t, i18n } = useTranslation()
  const setIsLogin = useAppStore((state) => state.setIsLogin)
  const { language } = i18n

  const handleOpenDrawer = () => {
    setVisible(true)
  }
  const handleCloseDrawer = () => {
    setVisible(false)
    
  }

  const handleLogOut = async () => {
    await userSignOut()
    setIsLogin(false)
    setVisible(false)
  }
  const handleItemClick =  () => {
    setVisible(false)
  }

  const handleJoinClick =(value : "influencer" | "advertiser" )=>{
    if(value === "advertiser"){
      router.push("/signup")
    }else{
      router.push("/login")
    }   
    setVisible(false)
  }





  return (
    <div>
      <div className='hidden lg:block'>
        <div className={`flex justify-between items-center h-28 `}>
          <Image src={logo} height={15} width={100} className="" alt='l' />
          <div className={`flex gap-6 items-center `}>
            <div className='relative'>
              <div className={`h-2.5 w-2.5 rounded-full bg-sky-100 absolute bottom-5 ${language === "ar" ? "mr-6" : "ml-6"} }`}></div>
              <Input type="email" placeholder={t("home.search")} className={`rounded-full w-60 h-[54px] ${language === "ar" ? "pr-10" : "pl-10"} "}`} />
            </div>
            <LanguageChanger />
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className="h-16 flex justify-between items-center ">
          <Image src={logo} objectFit='cover'  alt='l' />
          {/* drawer navbar start hare */}
          <Drawer open={visible} direction={language === "en" ? "left":"right"} >
          
           <DrawerTrigger asChild className="float-right">
              <Button 
                
                onClick={handleOpenDrawer} className='px-2 hover:bg-red-500 transition-all ease-in-out duration-500 '>
                {visible ? <X className="transition-all ease-in-out duration-500" /> : <AlignJustify />}
              </Button>
            </DrawerTrigger>
         
            
            <DrawerContent className="bg-white h-screen w-[70%] p-6">
              <div className='flex justify-between items-center mt-6'>
                <Image src={logo}  className="w-36 h-24" alt='l' />
                <Button onClick={handleCloseDrawer} className='px-2 hover:bg-red-500'><X /></Button>
              </div>
              <div className="flex ">
              <ul className="mt-6 px-6 flex-grow  ">
                {navData.map((item, index) => {
                  return (
                    <Link href={item.path} onClick={handleItemClick} key={index}>
                      <li className={`text-sm mt-2 h-8 text-blackDark  border-b border-blackLight border-opacity-50`}>{`${t(`${item.label}`)}`}</li>
                    </Link>
                  )
                })}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline" >
                      <li className=" hover:no-underline text-sm text-blackDark">{`${t(`nav.join`)}`}</li>
                    </AccordionTrigger>
                    <AccordionContent>
                    <p onClick={()=>{handleJoinClick("advertiser")}}  className='hover:text-red-500 cursor-pointer '  >{`${t(`nav.join_an_adviser`)}`} </p>
                    <p onClick={()=>{handleJoinClick("influencer")}}  className='mt-2 hover:text-red-500 cursor-pointer ' >{`${t(`nav.join_an_influencer`)}`} </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {data?.session ? <li className='cursor-pointer text-sm h-8 text-blackDark mt-2' onClick={handleLogOut}>{`${t(`nav.logout`)}`}</li> :
                  <li onClick={handleItemClick}  className={`${pathname === "/login" || pathname === "/login/en" ? "underline decoration-[3px] underline-offset-[15px] text-yellow-400 mt-2 text-sm " : "mt-2 text-sm text-blackDark"} `} ><Link href={"/login"} >{`${t(`nav.login`)}`} </Link></li>
                }
                

              </ul>
              <div className='h-full bg-gray-100 w-3 flex-shrink border-x my-4 border-gray-200'></div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <Separator className='w-full mb-3' />
        <div className='flex justify-between gap-2 pb-3'>
          <div className='flex-1 overflow-y-auto'><Categories categories='nav.categories_mobile' /></div>
          <div className='flex-1 overflow-y-auto'> <ResultFilter  /></div>
          <div className='relative flex-1 overflow-y-auto w-full '>
            <div className={`h-2 lg:h-2.5 w-2 lg:w-2.5 rounded-full bg-sky-100 absolute bottom-3 lg:bottom-5 ${language === "ar" ? "mr-1.5 lg:mr-6" : "ml-1.5 lg:ml-6"} }`}></div>
            <Input type="email" placeholder={t("home.searchmobile")} className={`rounded-full w-full h-8 lg:h-[54px] ${language === "ar" ? "pr-4 lg:pr-10" : "pl-4 lg:pl-10"} "}`} />
          </div>
          <div className='flex-1 overflow-y-auto '><LanguageChanger /></div>
        </div>
      </div>

    </div>
  )
}

export default ResponsiveHeader
