import React from 'react'

import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
    return (
        <div className='p-4 bg-white rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-3 group shadow-custom' >
            <Skeleton className=' h-72 rounded-lg w-full' />
            <div className='flex justify-between flex-col'>
                <div className='flex flex-row gap-2 '>
                    <Skeleton className='h-5 w-1/2 mt-4 ' />
                    <Skeleton className='h-5 w-1/2 mt-4' />
                </div>
                <div className='flex flex-row gap-2 '>
                    <Skeleton className='h-5 w-1/2 mt-2 ' />
                    <Skeleton className='h-5 w-1/2 mt-2' />
                </div>
            </div>
            <Skeleton className='h-12 w-full mt-4' />
        </div>
    )
}

export default SkeletonCard
