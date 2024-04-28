
"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import AuthBanner from '@/components/common/AuthBanner'
import LoginForm from './LoginForm'
import SocialLogin from './SocialLogin'
import { useTranslation } from 'react-i18next';


const Login = () => {
 const {t,i18n} = useTranslation()
 const {language} = i18n;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  px-6 py-8 lg:px-16 lg:py-20   shadow-custom bg-white rounded-xl my-8  lg:my-14 gap-12 lg:gap-12'>
      <div className='col-span-2 lg:col-span-1'>
        <div className='grid grid-cols-6'>
          <div className='col-span-6 md:col-span-3'>
            <p className='font-montserrat font-semibold text-4xl  text-blackDark'>{t("login.login")}</p>
            <p className="my-3 lg:mt-3 text-blackLight">{t("common.welcome_moalen")}</p>
          </div>
         
        </div>
      {/* login form */}
         <LoginForm />
        <div className="my-8 flex justify-center gap-2 items-center">
          <Separator className='w-20' />
          <p>{t("common.or")}</p>
          <Separator className='w-20' />
        </div>
        {/* social login button & route to login page*/}
        <SocialLogin />
      </div>
      <AuthBanner />

    </div>
  )
}

export default Login
