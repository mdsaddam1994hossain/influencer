 import React from 'react'

 import Image from 'next/image'

 import { Separator } from "@/components/ui/separator"
 
 const ProfileCard = () => {
   return (
    <div className='p-4 bg-white rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-4 group shadow-custom' >
        
            <div className='flex justify-center items-center flex-col' > 
            <Image src={"/images/person2.avif"} objectFit="cover" height={200} width={150} alt='e' className='rounded-xl  duration-300  transition-transform transform ' />

            </div>

        <div className='flex justify-between mt-4'>
            <div>
                <p className='font-medium font-montserrat text-black '>1250K</p>
                <p className='text-sm font-montserrat text-gray-500'>Followers</p>
            </div>
            <div>
            <Separator orientation="vertical" />
            </div>
            <div>
                <p className='font-medium font-montserrat text-black '>60K</p>
                <p className='text-sm font-montserrat text-gray-500'>Following</p>
            </div>
        </div>  
    </div>
   )
 }
 
 export default ProfileCard
 