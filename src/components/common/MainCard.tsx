"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next';
import Image from 'next/image'
import PlatformModal from "@/components/common/PlatformModal"

const MainCard = () => {
    const [platformVisible, setPlatformVisible] = useState(false)
    const {t,i18n} = useTranslation()
    const {language} = i18n
    return (
        <Card className='rounded-3xl group hover:bg-sky-100 transition-bg duration-500 ease-in'    >
            <CardHeader className='relative'>
                <CardTitle className="opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-500">
                   <PlatformModal  language={language}/>
                </CardTitle>
            </CardHeader>
            <div className='px-4 flex items-center gap-5'>
                <Image src={"/images/person2.avif"} objectFit="cover" height={90} width={90} alt='e' className='rounded-full h-24 w-24' />
                <div>
                    <p className='font-montserrat'>Yasser Al-Shahrani</p>
                    <div>
                        <p>Icon</p>
                    </div>
                </div>
            </div>
            <CardContent className='flex gap-5 mt-4'>
                <div className='min-w-24'>
                    <p>3.1m</p>
                    <p>Followers</p>
                </div>
                <p className={`font-ibmmono tracking-tight`}>Al Hilal Club player</p>
            </CardContent>
            <CardFooter>
                <Button className='bg-red-500 hover:bg-red-500 h-6 text-[9px]'>Football</Button>
            </CardFooter>
        </Card>
    )
}

export default MainCard
