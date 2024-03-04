"use client"
import React,{useEffect} from 'react'
import useUser from '@/app/hook/useUser'
import ProfileCard from '@/components/common/ProfileCard'
import { Button } from '@/components/ui/button'
import SliderButton from '@/components/ui/slider-button'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'


const Profile = () => {

  const queryClient = useQueryClient()

  const {data} = useUser()

  

   useEffect(()=>{
    queryClient.invalidateQueries({ queryKey: ['user'] })
   },[])

  return (
    <div className='mb-12'>
      
      

      <Image src="/images/in-bread-bg.jpg" objectFit="cover" alt="error" height={400} width={1500} className="w-full h-48 lg:h-72 absolute -z-10 "/>
      <div  className='  px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 pt-20 '>
       
       <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-3'>
            <ProfileCard />
          </div>

          <div className='col-span-12 lg:col-span-9 grid grid-cols-2'> 
            <div className='col-span-2 flex justify-between gap-4 mt-4 lg:mt-10'>
                <div className=''> 
                    <Button className=' bg-blue-600 h-8  font-roboto hover:bg-blue-600'> Photographer</Button>
                    <p className='font-roboto text-xl lg:text-4xl font-medium my-2'>{data?.name || "Sufankho Jhon"}</p>
                    <p className='font-roboto'>Member Since: 16 June 2023</p>
                    <Button className='font-normal bg-red-500 font-roboto h-8 mt-2 hover:bg-red-500'>* Review 91</Button>
                </div>
                <div className='flex flex-col gap-2'> 
                    {/* <Button className=' bg-blue-600 h-10 px-8 font-roboto text-lg'> Hire Me Now</Button> */}
                    <SliderButton label={" Hire Me Now"} btnStyle='bg-blue-600 h-10 px-8 font-roboto text-lg hover:bg-blue-600' />
                    <SliderButton variant="outline" label={" Follow Now"} labelStyle="text-blackDark group-hover:text-white" btnStyle='hover:border-none bg-white hover:text-white group h-10 px-8 font-roboto text-lg hover:bg-blue-600' />
                    {/* <Button className=' bg-white text-black h-9 px-8  font-roboto text-lg'> Follow Now</Button> */}
                    <div className='mt-6 flex gap-4'>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 grid gird-cols-1 lg:grid-cols-4 gap-4 mt-6'>
                <div className='bg-red-100 p-6 h-28 w-full rounded-lg'>
                    <p className='font-roboto font-medium text-lg'>Active Job</p>
                    <p className='font-roboto font-medium text-lg text-green-500'>40</p>
                </div>
                <div className='bg-yellow-100 p-6 h-28 w-full rounded-lg'>
                    <p className='font-roboto font-medium text-lg'>Pending Job</p>
                    <p className='font-roboto font-medium text-lg text-blue-600'>40</p>
                </div>
                <div className='bg-purple-100 p-6 h-28 w-full rounded-lg'>
                    <p className='font-roboto font-medium text-lg'>Cancel Job</p>
                    <p className='font-roboto font-medium text-lg text-red-500'>40</p>
                </div>
                <div className='bg-red-100 p-6 h-28 w-full rounded-lg'>
                    <p className='font-roboto font-medium text-lg'>Complete Job</p>
                    <p className='font-roboto font-medium text-lg text-green-500'>40</p>
                </div>
            </div>
          </div>

          {/* <div className='col-span-12 lg:col-span-3'>
            <p>second pard</p>
          </div>
          <div className='col-span-12 lg:col-span-9'>
          <p>second pard</p>
          </div> */}
       </div>

      </div>
    
    </div>
  )
}

export default Profile
