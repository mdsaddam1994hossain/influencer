import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import notFoundImg from "../../public/images/not-found.png"
import SliderButton from './ui/slider-button'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center my-12 flex-col'>
      <Image src={notFoundImg} alt='error'/>
      <p className='font-semibold text-4xl text-blackDark my-6 '>Oops! Page not Found.</p>
      <Link href={"/"} ><SliderButton label='Back Home Page' />  </Link>
    </div>
  )
}

export default NotFoundPage
