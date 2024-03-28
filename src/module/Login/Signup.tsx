"use client"
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import AuthBanner from '@/components/common/AuthBanner'
import SignUpForm from './SignUpForm'
import { useTranslation } from 'react-i18next'
import useAppStore from '@/store'

const Signup = () => {
   
    const userType = useAppStore((state)=>state.userType)
    const setUserType = useAppStore((state)=>state.setUserType)
    const {t,i18n} = useTranslation()
    const {language} = i18n;

    const handleUserTypeChange = (user : "advertiser" | "influencer")=>{
        setUserType(user)
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-16 py-8 lg:py-20 bg-white shadow-custom rounded-xl my-8  lg:my-14 gap-12 lg:gap-12'>
            <div className='col-span-2 lg:col-span-1'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='font-semibold text-4xl text-blackDark'>{t("signup.signup")}</p>
                        <p className="my-3 lg:mt-3 text-blackLight">{t("common.welcome_moalen")}</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 flex lg:justify-end '>
                        <Button onClick={()=>handleUserTypeChange("advertiser")} variant={"outline"} className={`h-11 px-8 ${userType==='advertiser' ? 'bg-blue-600 text-white':'bg-transparent text-blackDark border border-grayborder'}  text-lg font-medium  ${language === "en" ? "mr-4" :"ml-4"}`}>{t("common.advertiser")}</Button>
                        <Button onClick={()=>handleUserTypeChange("influencer")}  className={`h-11 px-10  ${userType==='influencer' ? 'bg-blue-600':'bg-transparent text-blackDark border border-grayborder '} hover:bg-blue-600 hover:text-white text-lg font-medium`}>{t("common.influencer")}</Button>

                    </div>
                </div>
            {/* sign up form & login page route */}
                <SignUpForm />
            </div>
            <AuthBanner />
        </div>
    )
}

export default Signup
