"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { browserClient } from '@/lib/supabase/brower'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import googleLogo from "../../../public/images/in-google-logo.png"
import facebookLogo from "../../../public/images/in-facebook-logo.png"

const SocialLogin = () => {

    const {t,i18n} = useTranslation()
    const {language} = i18n
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
          <Image src={googleLogo} height={19} width={19} className={`${language === "en" ? "mr-4":"ml-4"}`} alt='l' />
          {t("login.signin_google")}
        </Button>

        <Button onClick={() => handleLoginWithOauth("facebook")} className='bg-white shadow-custom font-normal hover:bg-white  text-blackDark mt-4  text-lg w-full h-14'>
          <Image src={facebookLogo} height={19} width={10} className={`${language === "en" ? "mr-4":"ml-4"}`} alt='l' />
           {t("login.signin_facebook")}
        </Button>
        <p className='mt-6 text-center text-blackLight'>{t("common.donot_account")} <span className='text-blackDark cursor-pointer hover:text-red-500' onClick={() => router.push("/signup")} >{t("common.create_account")}</span></p>
    </div>
  )
}

export default SocialLogin
