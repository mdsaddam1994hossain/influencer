import React from 'react'

import Image from 'next/image'

import { Button } from '@/components/ui/button'

const Banner = () => {
    return (
        <div className='hidden lg:block '>
            
            <div className='rounded-lg px-12 relative z-30 lg:-mb-44 items-center py-4 grid grid-cols-2 gap-6    mx-4 md:mx-20 lg:mx-24 xl:mx-36 2xl:mx-44 bg-cover bg-center' style={{ backgroundImage: "url('/images/in-bread-bg.jpg')"}}>
                <div className='col-span-1'>
                    <p className='text-lg text-blackDark leading-10'>What is Moalen?</p>
                    <p className='text-2xl lg:text-4xl font-roboto font-semibold text-blackDark leading-loose '>A Saudi platform that brings together the biggest influencers In All fields!</p>
                    {/* <Button className='mt-6 h-14 font-medium text-lg font-roboto px-8 bg-red-500 text-white  relative overflow-hidden   button-hover-effect'>Signup Now!</Button> */}
                    <Button className="group mt-6 overflow-hidden flex justify-center items-center relative h-14 px-8 hover:bg-red-500 bg-red-500 text-white cursor-pointer">
                    <span className="text-lg font-semibold">Signup Now!</span>
                    <span className="absolute top-0 -inset-full h-full w-full z-5 block transform -skew-x-0 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine group-focus-within:animate-shine2 " />
                </Button>
                </div>
                <div className='flex col-span-1 justify-center items-center  bg-transparent rounded-lg'>
                  <Image src="/images/in-footer-cta.png" height={300} width={450} objectFit='cover' className=" h-80 w-[80%]" alt='l'/> 
                </div>
            </div>

            

        </div>
    )
}

export default Banner
