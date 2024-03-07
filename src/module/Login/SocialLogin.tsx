"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { browserClient } from '@/lib/supabase/brower'
import { Button } from '@/components/ui/button'

const SocialLogin = () => {

    const router = useRouter()

    const handleLoginWithOauth = (provider: "google" | "facebook") => {
      const supabase = browserClient();
      supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: location.origin + "/auth/callback"
        }
      })
    }
  return (
    <div>
        <Button onClick={() => handleLoginWithOauth("google")} className='bg-white shadow-custom font-normal hover:bg-white text-blackDark mt-4  text-lg w-full h-14'>
          <img src="/images/in-google-logo.png" height={19} width={19} className="mr-4 " alt='l' />
          Sign In with Google
        </Button>

        <Button onClick={() => handleLoginWithOauth("facebook")} className='bg-white shadow-custom font-normal hover:bg-white  text-blackDark mt-4  text-lg w-full h-14'>
          <img src="/images/in-facebook-logo.png" height={19} width={10} className="mr-4 " alt='l' />
          Sign In with Facebook
        </Button>
        <p className='mt-6 text-center text-blackLight'>Dont't have an account ? <span className='text-blackDark cursor-pointer hover:text-red-500' onClick={() => router.push("/signup")} >Create Account</span></p>
    </div>
  )
}

export default SocialLogin
