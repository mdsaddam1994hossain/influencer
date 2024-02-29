import React from 'react'

import ServiceCard from '@/components/common/ServiceCard'
import { serviceData } from '@/utils/Data'

const About = () => {
  return (
    <div className="my-12">
      <div className=' flex justify-center items-center flex-col gap-2'>
        <p className=" text-xl text-blackDark  ">Best Feature</p>
        <p className=" text-2xl lg:text-[42px] text-blackDark font-semibold ">Our Latest Features</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-12 items-center px-0 lg:px-20 xl:px-32 '>

        {serviceData.map((item, index) => {
          return (
            <ServiceCard key={index} item={item} />
          )
        })}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-12 lg:mt-20'>
            <div>
               <p>img part</p>
            </div>
            <div>
               <p>descdription part</p>
            </div>
      </div>
    </div>
  )
}

export default About
