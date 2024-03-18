"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import AuthBanner from '@/components/common/AuthBanner'
import SignUpForm from './SignUpForm'
import { useTranslation } from 'react-i18next'

const Signup = () => {
    const {t,i18n} = useTranslation()
    const {language} = i18n;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-16 py-8 lg:py-20 bg-white shadow-custom rounded-xl my-8  lg:my-14 gap-12 lg:gap-12'>
            <div className='col-span-2 lg:col-span-1'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='font-semibold text-4xl text-blackDark'>{t("signup.signup")}</p>
                        <p className="my-3 lg:mt-3 text-blackLight">{t("common.welcome_moalen")}</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 flex lg:justify-end '>
                        <Button variant={"outline"} className={`h-11 px-8 font-montserrat text-lg font-medium text-blackDark ${language === "en" ? "mr-4" :"ml-4"}`}>{t("common.client")}</Button>
                        <Button  className='h-11 px-10 font-montserrat bg-blue-600 hover:bg-blue-600 text-lg font-medium '>{t("common.influencer")}</Button>

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
