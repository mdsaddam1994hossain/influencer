"use client"
import React, { useState ,useEffect} from 'react'

import InfluencerMemberCard from '@/components/common/InfluencerMemberCard'
import PaginationSection from '@/components/common/PaginationSection'
import useInfluencers from '@/app/hook/useInfluencers'
import useAppStore from '@/store'
import SkeletonCard from '@/components/common/SkeletonCard'
import { TInfluencer } from '@/types/influencer'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import filter from "../../../public/images/filter.png"
import widget from "../../../public/images/widget.png"
import { Button } from '@/components/ui/button'


const InfluencerMember = () => {
   
    const isMobile = useAppStore((state) => state.isMobile)
    const [numberOfDisplayPages,setNumberOfDisplayPages] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const influencerGender = useAppStore((state)=>state.influencerGender)
    console.log({influencerGender})
    const { data,isLoading } = useInfluencers(influencerGender)

    const { t } = useTranslation()

    const totalItems = data?.length; // Assuming influencerData is your data source
    const images = ["/images/p1.png",
     "/images/p2.png",
      "/images/p3.png",
      "/images/p4.png",
      "/images/p5.png",
     "/images/p6.png",
      "/images/p7.png",
      "/images/p8.png"
    ];
    const colors = ["bg-red-100", "bg-cyan-200", "bg-lime-100", "bg-purple-100"];
    const itemsWithImages = data?.map((item, index) => {
        const imageIndex = index % images.length; // Get the index of the image in a round-robin fashion
        const imageUrl = images[imageIndex];
        const colorClass = colors[index % colors.length];
      
        return {
          item,
          imageUrl,
          colorClass
        };
      });

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = itemsWithImages?.slice(firstItemIndex, lastItemIndex);

   




 

    useEffect(()=>{
      if(isMobile){
        setNumberOfDisplayPages(4)
      }else{
        setNumberOfDisplayPages(10)
      }
    },[isMobile,influencerGender])

    

    return (
        <div className='my-8 lg:my-12  rounded-lg lg:rounded-xl'>
            
            {/* <p className="lg:text-2xl text-blackDark font-medium ">{t("home.influencers")}</p> */}
            
           <div className="flex gap-4 lg:gap-8 items-center flex-wrap">
            <div className="flex-grow flex gap-4 flex-wrap">
                <Button   className={` rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}>
                  <Image src={widget} alt='W' className="px-1" />
                  {t("categories.all_categories")} 
                </Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> 
                {t("categories.arts")} 
                </Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.music")} </Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.cars")}</Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.sports")}</Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.fitness")}</Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.commerce")}</Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.eat_drinking")}</Button>
                <Button variant="outline"  className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5`}> {t("categories.beauty_health")}</Button>
                
                
            </div>
            <div className=" flex-shrink ">
               <Button className='bg-[#F5F5F5] hover:bg-[#F5F5F5] h-[50px] w-[50px] rounded-full '>
               <Image src={filter} alt="F" />
               </Button>
            </div>

           </div>

            {isLoading ? 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12'>
                {[1,2,3,4,5,6,7,8].map((item)=>{
                    return(
                        <SkeletonCard key={item}/>
                    )
                })}
            </div>
            :

            <div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12'
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
            >
                {currentItems?.map((influencer:any, index:number) => (
                    <InfluencerMemberCard key={index} influencer={influencer} />
                ))}
            </div>

            <div className='my-6 lg:my-8 flex justify-center items-center' data-aos={"fade-up"}
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2500">

              <Button variant="outline" className="rounded-full border border-blackDark h-[45px] hover:bg-blackDark text-blackDark font-medium text-sm px-4"> {t("home.show_more")}</Button>
                {/* <PaginationSection
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageRangeDisplayed={numberOfDisplayPages} // This prop controls the range of pages displayed
                /> */}
            </div>
                
            </div>}

           
        </div>
    )
}

export default InfluencerMember