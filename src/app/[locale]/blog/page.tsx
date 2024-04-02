import React from 'react'

import { redirect } from 'next/navigation'
import { Metadata } from 'next';

import Blog from '@/module/Blog/Blog'
import readUserSession from '@/lib/actions'

export const metadata: Metadata = {
  title: "blogs",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};

const BlogPage = async() => {
  const {data} = await readUserSession()

  if(!data?.session){
    redirect("/login")
  }
  return (
    <div className="px-4 my-8 lg:my-14 md:px-20 lg:px-24 xl:px-36 2xl:px-44">
       <Blog />
    </div>
  )
}

export default BlogPage
