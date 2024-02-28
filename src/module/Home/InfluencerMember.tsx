import React from 'react'

import InfluencerMemberCard from '@/components/common/InfluencerMemberCard'
import { Button } from '@/components/ui/button'

const InfluencerMember = () => {

    return (
        <div className='lg:p-8 mt-4 lg:mt-16 rounded-lg lg:rounded-xl ' >
            <div className='flex flex-col items-center '>
                <p className=" lg:text-lg">Top Influencer</p>
                <p className=" text-2xl lg:text-4xl font-bold font-roboto mt-2">Talented Influencer Member</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-16'
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
            >
                {
                    [1, 2, 3, 4].map((item, index) => {
                        return <InfluencerMemberCard key={index} />
                    })
                }
            </div>

            <div className='flex justify-center items-center my-4 lg:my-12 ' data-aos-duration="1000" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-delay="1000">
                <Button className="group overflow-hidden flex justify-center items-center relative h-14 px-12 hover:bg-red-500 bg-red-500 text-white cursor-pointer">
                    <span className="text-lg font-semibold">View All</span>
                    <span className="absolute top-0 -inset-full h-full w-full z-5 block transform -skew-x-0 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine group-focus-within:animate-shine2 " />
                </Button>
            </div>


        </div>
    )
}

export default InfluencerMember
