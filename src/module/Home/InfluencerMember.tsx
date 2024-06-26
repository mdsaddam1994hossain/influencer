"use client"
import React, { useState, useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import InfluencerMemberCard from '@/components/common/InfluencerMemberCard'
import PaginationSection from '@/components/common/PaginationSection'
import useInfluencers from '@/app/hook/useInfluencers'
import useAppStore from '@/store'
import SkeletonCard from '@/components/common/SkeletonCard'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import FilterOptions from './FilterOptions'
import { useCategories } from '@/app/hook/useCategories'


const InfluencerMember = () => {

  const isMobile = useAppStore((state) => state.isMobile)
  const [numberOfDisplayPages, setNumberOfDisplayPages] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const {data:categorie}:any= useCategories()
  const influencerGender = useAppStore((state) => state.influencerGender)
  const setCategoriesId = useAppStore((state)=>state.setCategoriesId)
  const categoriesId = useAppStore((state) => state.categoriesId)
  const { data, isLoading } = useInfluencers(categoriesId)
  const { t,i18n } = useTranslation()
  const {language} = i18n;


 
  const totalItems = data?.length; // Assuming influencerData is your data source

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex);

 const handleReset =()=>{
  setCategoriesId(null)
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

      <div className="flex  gap-4 lg:gap-8 items-center flex-wrap">
        <div className="flex-grow flex gap-2 lg:gap-4 flex-wrap">
          <Button onClick={handleReset} className={`group rounded-full border-grayBorder h-[50px] focus:bg-blackDark hover:bg-blackDark hover:text-white px-5 font-normal ${categoriesId != null && ' bg-transparent text-blackDark border rounded-full border-grayBorder '}`}>
            {/* <Image src={widget} alt='W' className="px-1" /> */}
            <RxDashboard className={`${categoriesId === null ? ' text-white' : "text-blackDark" } h-4 w-4 group-hover:text-white`}/>
            {t("categories.all_categories")}
          </Button>
          {categorie?.slice(0,5)?.map((item:any,index:number)=>{
            return(
              <Button onClick={()=>handleCategorySelect(item?.id)} key={index} variant="outline" className={`border rounded-full border-grayBorder h-[50px] hover:bg-blackDark px-5 font-normal ${categoriesId === item?.id && 'bg-blackDark text-white'} `}>
            {language === "en" ? item?.name_en || item?.name : item?.name_ar|| item?.name }
          </Button>
            )
          })}
        

         
        </div>
        <div className="flex-shrink ">
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
          { data?.length <= 0 ? <div className="flex justify-center items-center h-60">
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