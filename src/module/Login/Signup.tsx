"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import AuthBanner from '@/components/common/AuthBanner'
import SignUpForm from './SignUpForm'

const Signup = () => {
    const router = useRouter()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-16 py-8 lg:py-20 bg-white shadow-lg rounded-xl my-12  lg:my-24 gap-12 lg:gap-12'>
            <div className='col-span-2 lg:col-span-1'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='font-semibold text-4xl text-blackDark'>SignUp</p>
                        <p className="my-3 lg:mt-2 text-blackLight">Welcome to Moalen</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 flex lg:justify-end '>
                        <Button variant={"outline"} className=" h-11 px-8 font-roboto text-lg font-medium mr-4">Client</Button>
                        <Button  className='h-11 px-10 font-roboto bg-blue-600 hover:bg-blue-600 text-lg fontme'>Influencer</Button>

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
