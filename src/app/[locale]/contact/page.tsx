import React from 'react'

import { Metadata } from 'next';

import Contact from '@/module/Contact/Contact'

export const metadata: Metadata = {
  title: "contact",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};

const ContactPage = () => {
  return (
    <main className="px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44">
       <Contact />
    </main>
  )
}

export default ContactPage
