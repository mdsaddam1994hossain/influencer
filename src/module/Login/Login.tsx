
import React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import AuthBanner from '@/components/common/AuthBanner'
import LoginForm from './LoginForm'
import SocialLogin from './SocialLogin'


const Login = () => {

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2  px-6 py-8 lg:px-16 lg:py-20   shadow-custom bg-white rounded-xl my-8  lg:my-14 gap-12 lg:gap-12'>
      <div className='col-span-2 lg:col-span-1'>
        <div className='grid grid-cols-6'>
          <div className='col-span-6 md:col-span-3'>
            <p className='font-roboto font-semibold text-4xl  text-blackDark'>Login</p>
            <p className="my-3 lg:mt-3 text-blackLight">Welcome to Moalen</p>
          </div>
          <div className='col-span-6 md:col-span-3 flex lg:justify-end '>
            <Button className="bg-blue-600 hover:bg-blue-600 h-11 px-8 font-roboto text-lg font-medium mr-4">Client</Button>
            <Button variant="outline" className='h-11 px-6 font-roboto text-lg text-blackDark'>Influencer</Button>

          </div>
        </div>
        {/* login form */}
         <LoginForm />
        <div className="my-8 flex justify-center gap-2 items-center">
          <Separator className='w-20' />
          <p>OR</p>
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
