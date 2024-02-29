
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import Banner from './Banner'

const Footer = () => {
  return (
   <div >
   
     <Banner />
   

     <div className=' bg-black    text-white px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 pt-8 lg:pt-60'>
      <div className='grid grid-cols-10 gap-4 lg:gap-10 '>
        <div className='col-span-10 lg:col-span-3'>
        <Image src="/images/logo.png" height={15} width={100} className="" alt='l'/>   
        <p className="font-roboto font-medium"> Moalen helps you choose the most appropriate influencers for your advertising campaign through accurate analyzes that help you identify them and your target audience</p>
        <p className='font-medium mt-3 font-roboto text-lg'>Get in Touch..</p>
            <p className='text-gray-300 font-roboto'>support@moalen.sa</p>
        </div>
        <div className='col-span-5 lg:col-span-2 flex flex-col gap-3'>
           <p className='text-xl mb-6 lg:text-2xl font-semibold font-roboto '>Quick Links</p>
           <Link href={"/join-us"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>Join Us</Link>
           <Link href={"/blog"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>Blog</Link>
           <Link href={"/term-conditions"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>Terms and Conditions</Link>
        </div>
        <div className='col-span-5 lg:col-span-2 flex flex-col gap-3'>
           <p className='text-xl mb-6 lg:text-2xl font-semibold font-roboto '>Info</p>
           <Link href={"/"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>Home</Link>
           <Link href={"/who-we-are"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>Who We Are</Link>
           <Link href={"/call-us"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>Call Us</Link>
           <Link href={"/my-request"} className='hover:underline hover:text-red-500 transition duration-500 ease-in-out transform hover:translate-x-3'>My Requests</Link>
        </div>
        <div className='col-span-10 lg:col-span-3'>
          <p className='text-xl mb-6 lg:text-2xl font-semibold font-roboto '>Working Hour</p>
          <div className='flex items-center gap-3'>
            <div className='h-1 w-1 rounded-full bg-white'></div>
             <p>Mon-Fri: 7.00am-6.00pm</p>
          </div>
          <div className='flex items-center gap-3 mt-2'>
            <div className='h-1 w-1 rounded-full bg-white'></div>
             <p>Mon-Fri: 7.00am-6.00pm</p>
          </div>
          <div className='flex flex-col '>
           
            <p className='text-xl my-6 lg:text-2xl font-semibold font-roboto '>Our Address</p>
            <p className='text-gray-300 font-roboto'>Kingdom of Saudi Arabia</p>
           
          </div>
        </div>

        <Separator   className='w-full col-span-10 mt-6 lg:mt-16 h-[1px] opacity-50'/>
        
      
    </div>
    <div className='flex justify-between py-6 '>
              <p>Copyright @2023 All right reserved Moalen</p>
              <div className='flex gap-6'>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
              </div>
        </div>
    </div>
   </div>
  )
}

export default Footer
