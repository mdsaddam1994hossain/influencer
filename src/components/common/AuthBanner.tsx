 import React from 'react'

 import Image from 'next/image'
 
 const AuthBanner = () => {
   return (
    <div className='col-span-2 lg:col-span-1 hidden lg:block' >
    <div className='bg-red-300 flex justify-center items-center rounded-lg h-full bg-cover bg-center transform  ' style={{ backgroundImage: "url('/images/in-bread-bg.jpg')" }}>
     <Image src="/images/login-pic.png" height={400} width={350}  className="h-[70%] w-[70%]" alt='l'/> 
    </div>
   </div>
   )
 }
 
 export default AuthBanner
 