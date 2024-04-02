import React from 'react'

import { Metadata } from 'next';

import About from '@/module/About/About'

export const metadata: Metadata = {
  title: "about",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};

const AboutPage = () => {
  return (
    <main >
      <About /> 
    </main>
  )
}

export default AboutPage
