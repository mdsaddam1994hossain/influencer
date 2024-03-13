"use client"
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"
import { useTranslation } from 'react-i18next'

import { Separator } from '@/components/ui/separator'
import Banner from './Banner'
import ScrollComponent from './ScrollComponent'

const Footer = () => {
  const { t} = useTranslation()
  return (
    <div >

      <Banner />


      <div className=' bg-black    text-white px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 pt-8 lg:pt-60'>
        <div className='grid grid-cols-10 gap-4 lg:gap-10 '>
          <div className='col-span-10 lg:col-span-3'>
            <Image src="/images/logo.png" height={15} width={100} className="" alt='l'  />
            <p className="font-roboto font-medium">{t("footer.about_moalen")}</p>
            <p className='font-medium mt-3 font-roboto text-lg'>{t("footer.get_touch")}</p>
            <p className='text-gray-300 font-roboto'>support@moalen.sa</p>
          </div>
          <div className='col-span-5 lg:col-span-2 flex flex-col gap-3'>
            <p className='text-xl mb-6 lg:text-2xl font-semibold font-roboto '>{t("footer.quick_links")}</p>
            <Link href={"/join-us"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("nav.join")}</Link>
            <Link href={"/blog"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("nav.blog")}</Link>
            <Link href={"/term-conditions"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("footer.terms_conditions")}</Link>
          </div>
          <div className='col-span-5 lg:col-span-2 flex flex-col gap-3'>
            <p className='text-xl mb-6 lg:text-2xl font-semibold font-roboto '>{t("footer.info")}</p>
            <Link href={"/"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("nav.home")}</Link>
            <Link href={"/who-we-are"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("nav.who_are")}</Link>
            <Link href={"/call-us"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("footer.call_us")}</Link>
            <Link href={"/my-request"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>{t("footer.my_request")}</Link>
          </div>
          <div className='col-span-10 lg:col-span-3'>
            <p className='text-xl mb-6 lg:text-2xl font-semibold font-roboto '>{t("footer.working_hour_label")}</p>
            <div className='flex items-center gap-3'>
              <div className='h-1 w-1 rounded-full bg-white'></div>
              <p>{t("footer.working_hour")}</p>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <div className='h-1 w-1 rounded-full bg-white'></div>
              <p>{t("footer.working_hour")}</p>
            </div>
            <div className='flex flex-col '>

              <p className='text-xl my-6 lg:text-2xl font-semibold font-roboto '>{t("footer.address_label")}</p>
              <p className='text-gray-300 font-roboto'>{t("footer.address")}</p>

            </div>
          </div>

          <Separator className='w-full col-span-10 mt-6 lg:mt-16 h-[1px] opacity-50' />


        </div>
        <div className='flex flex-col lg:flex-row gap-4 justify-center items-center lg:justify-between py-6 '>
          <p>{t("footer.copy_write")}</p>
          <div className='flex gap-6'>
            <Twitter fill="white" />
            <Linkedin />
            <Instagram />
            <Facebook fill="white" />
          </div>
        </div>
      </div>
      {/* <ScrollComponent /> */}
    </div>
  )
}

export default Footer
