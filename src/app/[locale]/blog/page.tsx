import React from 'react'

import { redirect } from 'next/navigation'

import Blog from '@/module/Blog/Blog'
import readUserSession from '@/lib/actions'

const BlogPage = async() => {
  const {data} = await readUserSession()

  if(!data?.session){
    redirect("/login")
  }
  return (
    <div className="px-4 my-8 md:px-20 lg:px-24 xl:px-36 2xl:px-44">
       <Blog />
    </div>
  )
}

export default BlogPage
