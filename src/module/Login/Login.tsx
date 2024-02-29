"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation'
import AuthBanner from '@/components/common/AuthBanner'
import { supabaseBrowser } from '@/lib/supabase/brower'


const Login = () => {
   const router = useRouter()

   const handleLoginWithOauth = (provider:"google" | "facebook")=>{
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
        provider,
        options:{
            redirectTo: location.origin+"/auth/callback"
        }
    })

}
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  px-6 py-8 lg:px-16 lg:py-20   shadow-lg bg-white rounded-xl my-12  lg:my-24 gap-12 lg:gap-12'> 
       <div className='col-span-2 lg:col-span-1'>
          <div className='grid grid-cols-6'>
             <div className='col-span-6 md:col-span-3'>
                <p className='font-roboto font-semibold text-4xl  text-blackDark'>Login</p>
                <p className="my-3 lg:mt-2 text-blackLight">Welcome to Inflanar</p>
             </div>
             <div className='col-span-6 md:col-span-3 flex lg:justify-end '>
               <Button className="bg-blue-600 hover:bg-blue-600 h-11 px-8 font-roboto text-lg font-medium mr-4">Client</Button>
               <Button variant="outline" className='h-11 px-6 font-roboto text-lg text-blackDark'>Influencer</Button>
                
             </div>
          </div>
          <div className='w-full mt-6'>
            <p className='text-blackDark'>Email*</p>
            <Input className='my-2' placeholder='infoyour@gmail.com'/>
            <p className='mt-4 text-blackDark'>Password*</p>
            <Input placeholder='...........' className=' my-2' type='password'/>
          </div>
          <div className='flex justify-between my-6 '>
                <div className='flex gap-2 justify-center'>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms"  className='border-blackLight' />
                  <label
                  htmlFor="terms"
                  className="text-blackLight "
                  >
                   Remember Me
                  </label>
               </div>
                </div>
                <p className='text-red-500 '>Forgot Password?</p>
          </div>
          <Button className='bg-red-500 mt-4 font-medium text-lg w-full h-14 hover:bg-red-600'>Log In</Button>
          <div className="my-8 flex justify-center gap-2 items-center">
             <Separator className='w-20'/>
             <p>OR</p>
             <Separator className='w-20'/>
          </div>  
            <Button onClick={()=>handleLoginWithOauth("google")} className='bg-white shadow-custom font-normal hover:bg-white text-blackDark mt-4  text-lg w-full h-14'>
              <img src="/images/in-google-logo.png" height={19} width={19}  className="mr-4 " alt='l'/> 
               Sign In with Google
            </Button>
               
          <Button onClick={()=>handleLoginWithOauth("facebook")}  className='bg-white shadow-custom font-normal hover:bg-white  text-blackDark mt-4  text-lg w-full h-14'>
          <img src="/images/in-facebook-logo.png" height={19} width={10}  className="mr-4 " alt='l'/> 
            Sign In with Facebook
          </Button>
          <p className='mt-6 text-center text-blackLight'>Dont't have an account ? <span className='text-blackDark cursor-pointer hover:text-red-500' onClick={()=>router.push("/signup")} >Create Account</span></p>
       </div>
       <AuthBanner />
     
    </div>
  )
}

export default Login
