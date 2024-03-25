"use client"
import React, { useState, useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
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
import FilterOptions from './FilterOptions'
import { useCategories } from '@/app/hook/useCategories'


const InfluencerMember = () => {

  const isMobile = useAppStore((state) => state.isMobile)
  const [numberOfDisplayPages, setNumberOfDisplayPages] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const {data:categorie}= useCategories()
  const influencerGender = useAppStore((state) => state.influencerGender)
  const setCategoriesId = useAppStore((state)=>state.setCategoriesId)
  const categoriesId = useAppStore((state) => state.categoriesId)
  const { data, isLoading } = useInfluencers(categoriesId)
  const { t,i18n } = useTranslation()
  const {language} = i18n;

  const processedData = data?.map((influencer: any) => {
    const uniquePlatforms = Array.from(
      new Map(
        influencer.influencer_platform.map((item: any) => [
          item?.platforms?.id,
          item.platforms,
        ])
      ).values()
    );

    const uniqueTags = Array.from(
      new Map(
        influencer.influencer_tag.map((item: any) => [
          item?.tags?.id,
          item.tags,
        ])
      ).values()
    );

    return {
      ...influencer,
      influencer_platform: uniquePlatforms,
      influencer_tag: uniqueTags,
    };
  });

  console.log(data, "iniii")
  console.log(processedData, "processedData")
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

 const handleReset =()=>{
  setCategoriesId(0)
 }

  const handleCategorySelect = (id:number) => {
    setCategoriesId(id)   
  }



  useEffect(() => {
    if (isMobile) {
      setNumberOfDisplayPages(4)
    } else {
      setNumberOfDisplayPages(10)
    }
  }, [isMobile, influencerGender])



  return (
    <div className='my-8 lg:my-12  rounded-lg lg:rounded-xl'>

      {/* <p className="lg:text-2xl text-blackDark font-medium ">{t("home.influencers")}</p> */}

      <div className="flex gap-4 lg:gap-8 items-center flex-wrap">
        <div className="flex-grow flex gap-4 flex-wrap">
          <Button onClick={handleReset} className={`group rounded-full border-grayBorder h-[50px] focus:bg-blackDark hover:bg-blackDark hover:text-white px-5 font-normal ${categoriesId > 0 && ' bg-transparent text-blackDark border rounded-full border-grayBorder '}`}>
            {/* <Image src={widget} alt='W' className="px-1" /> */}
            <RxDashboard className={`${categoriesId === 0 ? ' text-white' : "text-blackDark" } h-4 w-4 group-hover:text-white`}/>
            {t("categories.all_categories")}
          </Button>
          {categorie?.slice(0,5)?.map((item,index)=>{
            return(
              <Button onClick={()=>handleCategorySelect(item?.id)} key={index} variant="outline" className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5 font-normal ${categoriesId === item?.id && 'bg-blackDark text-white'} `}>
            {language === "en" ? item?.name_en || item?.name : item?.name_ar|| item?.name }
          </Button>
            )
          })}
        

         
        </div>
        <div className=" flex-shrink ">
          {/* <Button className='bg-[#F5F5F5] hover:bg-[#F5F5F5] h-[50px] w-[50px] rounded-full '>
               <Image src={filter} alt="F" />
               </Button> */}

          <FilterOptions />
        </div>

      </div>


      <div>
        {isLoading ?
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <SkeletonCard key={item} />
              )
            })}
          </div>
          :

          <div>
          {data && data?.length === 0 ? <div className="flex justify-center items-center h-60">
              {t("common.not_found")}
             </div>
             : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 lg:mt-12'
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              {currentItems?.map((influencer: any, index: number) => (
                <InfluencerMemberCard key={index} influencer={influencer} />
              ))}
            </div>
            
            }

            {/* {data && data?.length > 8 && <div className='my-6 lg:my-8 flex justify-center items-center' data-aos={"fade-up"}
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2500">
              <Button  variant="outline" className="rounded-full border border-blackDark h-[45px] hover:bg-blackDark text-blackDark font-medium text-sm px-4"> {t("home.show_more")}</Button>
            </div>} */}
               { data && data?.length > 8 && <PaginationSection
                      totalItems={totalItems}
                      itemsPerPage={itemsPerPage}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      pageRangeDisplayed={numberOfDisplayPages} // This prop controls the range of pages displayed
                  />}

          </div>
        }

      </div>
     



    </div>
  )
}

export default InfluencerMember