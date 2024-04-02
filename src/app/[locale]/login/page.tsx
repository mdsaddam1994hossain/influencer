import React from 'react'

import Head from 'next/head'
import { Metadata } from 'next';

import Login from '@/module/Login/Login'


export const metadata: Metadata = {
  title: "login",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};

const LoginPage = () => {
  return (
    <main className="px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44">
      <Login />
    </main>
  )
}

export default LoginPage