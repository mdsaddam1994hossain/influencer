"use client"
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import notFoundImg from "../../public/images/not-found.png"
import SliderButton from './ui/slider-button'
import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const {t} = useTranslation()
  return (
    <div className='flex justify-center items-center my-12 flex-col'>
      <Image src={notFoundImg} alt='error'/>
      <p className='font-semibold text-4xl text-blackDark my-6 '>{t("notfound.message")}</p>
      <Link href={"/"} ><SliderButton label="notfound.button_label" />  </Link>
    </div>
  )
}

export default NotFoundPage
