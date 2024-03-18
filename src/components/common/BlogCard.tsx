"use client"

import React from 'react'
import Image from 'next/image'
import { UserRound, CalendarClock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { blogData } from '@/utils/Data'

const BlogCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 '>
            {blogData?.map((item, index) => {
                return (
                    <Card key={index} className="w-full pt-6 group transition duration-500 ease-in-out transform hover:-translate-y-3 border-0 shadow-custom ">
                        <CardContent >
                            <div className='w-full overflow-hidden'>
                                <Image className='text-4xl group-hover:scale-110 transition duration-500 ease-in-out rounded-t-lg w-full ' src={item?.img} alt='error' />
                            </div>
                            <div className='mt-4 flex justify-between '>
                                <div className="flex gap-1 items-center ">
                                    <UserRound size={14} className='text-red-500' />
                                    <p className="text-sm text-blackLight ">By <span className='underline'>Influencer</span></p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <CalendarClock size={14} className='text-red-500' />
                                    <p className="text-sm text-blackLight "> {item.date}</p>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <p className="group-hover:text-red-500 text-base lg:text-2xl hover:cursor-pointer text-blackDark font-montserrat font-bold duration-1000 ease-in-out hover:underline">{item.title}</p>
                        </CardContent>
                    </Card>
                )
            })}


        </div>
    )
}

export default BlogCard
