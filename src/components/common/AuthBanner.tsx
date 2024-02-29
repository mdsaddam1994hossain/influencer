 import React from 'react'

 import Image from 'next/image'

 import authImg from "../../../public/images/login-pic.png"
 
 const AuthBanner = () => {
   return (
    <div className='col-span-2 lg:col-span-1 hidden lg:block' >
    <div className='bg-red-300 flex justify-center items-center rounded-lg h-full bg-cover bg-center transform  ' style={{ backgroundImage: "url('/images/in-bread-bg.jpg')" }}>
     <Image src={authImg}   className="" alt='l'/> 
    </div>
   </div>
   )
 }
 
 export default AuthBanner
 