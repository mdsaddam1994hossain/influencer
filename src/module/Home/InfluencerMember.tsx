"use client"
import React, { useState ,useEffect} from 'react'

import InfluencerMemberCard from '@/components/common/InfluencerMemberCard'
import PaginationSection from '@/components/common/PaginationSection'
import { influencerData } from '@/utils/Data'
import useInfluencers from '@/app/hook/useUser'
import useAppStore from '@/store'
import SkeletonCard from '@/components/common/SkeletonCard'

const InfluencerMember = () => {
    const { data,isLoading } = useInfluencers()
    const isMobile = useAppStore((state) => state.isMobile)
    const [numberOfDisplayPages,setNumberOfDisplayPages] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(8)

    const totalItems = data?.length; // Assuming influencerData is your data source

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = data?.slice(firstItemIndex, lastItemIndex);

 

    useEffect(()=>{
      if(isMobile){
        setNumberOfDisplayPages(4)
      }else{
        setNumberOfDisplayPages(10)
      }
    },[isMobile])

    console.log({currentItems})

    return (
        <div className='my-8 lg:my-10 rounded-lg lg:rounded-xl'>
            
            <p className="lg:text-2xl text-blackDark font-medium ">Influencers</p>
             {/* <p className="text-2xl lg:text-4xl font-bold font-roboto mt-2">Talented Influencer Member</p> */}
           

            {isLoading ? 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-8'>
                {[1,2,3,4,5,6,7,8].map((item)=>{
                    return(
                        <SkeletonCard key={item}/>
                    )
                })}
            </div>
            :

            <div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-8'
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
            >
                {currentItems?.map((influencer, index) => (
                    <InfluencerMemberCard key={index} influencer={influencer} />
                ))}
            </div>

            <div className='my-6 lg:my-12'>
                <PaginationSection
                    totalItems={totalItems && totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageRangeDisplayed={numberOfDisplayPages} // This prop controls the range of pages displayed
                />
            </div>
                
            </div>}

           
        </div>
    )
}

export default InfluencerMember