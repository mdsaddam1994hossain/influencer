"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import logo from "../../../public/images/logo2.png"
import facebook from "../../../public/images/facebook.png"
import twitter from "../../../public/images/twitter.png"
import instagram from "../../../public/images/instagram.png"
import snap from "../../../public/images/snap.png"
import { Separator } from '@/components/ui/separator'
import Banner from './Banner'
import ScrollComponent from './ScrollComponent'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const { t} = useTranslation()
  const pathname = usePathname()
  const path = pathname.startsWith("/en") ? pathname.slice(0, 1) + pathname.substring(4) : pathname;

  console.log(path,"p")

  return (
    <div >

      <div className=' bg-white  text-blackThree px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 py-8 lg:py-12  border-t border-grayBorder grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
        <div className='col-span-1'>
         <Image src={logo}  height={40} width={100} className="" alt='l'   />
         <p className='text-grayDark mt-4 text-sm leading-6 '>{t("footer.about_moalen")}</p>
        </div>
        <div className='col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
          <div className='col-span-1'>
            <p className='text-sm font-medium text-blackDark_2 mb-4'>{t("filter.catagories")}</p>
             <ul className='text-sm text-grayDark'> 
               <li className={`text-sm ${path === "/" && "text-blackDark font-semibold"}`}>  
                <Link href={"/"}>{t("nav.home")}</Link>
              </li>
              <li className={`text-sm mt-2 ${path === "/packages" && "text-blackDark font-semibold"}`}>
                <Link href={"/packages"}>{t("nav.package")}</Link>
              </li>
              <li className={`text-sm mt-2 ${path === "/icons" && "text-blackDark font-semibold"}`}>
                <Link href={"/icons"}>{t("nav.icons")}</Link>
              </li>
             </ul>
          </div>
          <div className='col-span-1'>
            <p className='text-sm font-medium text-blackDark_2 mb-4'>{t("footer.improtant_link")}</p>
            <ul className='text-sm text-grayDark'> 
               <li className={`text-sm ${path === "/about" && "text-blackDark font-semibold"}`}>  
                <Link href={"/about"}>{t("nav.who_are")}</Link>
              </li>
              <li className={`text-sm mt-2 ${path === "/privacy-policy" && "text-blackDark font-semibold"}`}>
                <Link href={"/privacy-policy"}>{t("nav.privacy_policy")}</Link>
              </li>
              <li className={`text-sm mt-2 ${path === "/term-conditions" && "text-blackDark font-semibold"}`}>
                <Link href={"/term-conditions"}>{t("footer.terms_conditions")}</Link>
              </li>
              <li className={`text-sm mt-2 ${path === "/support" && "text-blackDark font-semibold"}`}>
                <Link href={"/support"}>{t("footer.tech_support")}</Link>
              </li>
             </ul>
          </div>
          <div className='col-span-1'>
            <p className='text-sm font-medium text-blackDark_2 mb-4'>{t("footer.follow_us")}</p>
            <ul className='flex gap-4'> 
               <li className={`text-sm ${path === "/about" && "text-blackDark font-semibold"}`}>  
                <Link href={"https://facebook.com"} target='_blank'>
                  <Image src={facebook} alt='f' />  
                </Link>
              </li>
               <li className={`text-sm ${path === "/about" && "text-blackDark font-semibold"}`}>  
                <Link href={"https://twitter.com"} target='_blank'>
                <Image src={twitter} alt='f' /> 
                </Link>
              </li>
               <li className={`text-sm ${path === "/about" && "text-blackDark font-semibold"}`}>  
                <Link href={"https://instagram.com"} target='_blank'>
                <Image src={instagram} alt='f' /> 
                </Link>
              </li>
               <li className={`text-sm ${path === "/about" && "text-blackDark font-semibold"}`}>  
                <Link href={"https://accounts.snapchat.com/"} target='_blank'>
                <Image src={snap} alt='f'  /> 
                </Link>
              </li>
             
             </ul>
          </div>
        </div>

        
      </div>



      <div className='bg-blackDark h-[41px] flex   justify-center items-center text-white '>
          <p> {t("footer.copy_write")} </p>
          <a target="_blank" href="https://www.moalen.sa/" >&nbsp; moalen.com</a>
          
        </div>
    
    </div>
  )
}

export default Footer


  {/* <ScrollComponent /> */}