import React from 'react'

import { useTranslation } from 'react-i18next'
import Image from "next/image"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import Categories from '@/components/common/Categories'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from '@/components/ui/input'
import { ratingData } from '@/utils/Data'
import { useCategories } from '@/app/hook/useCategories'
import filter from "../../../public/images/filter.png"
import star from "../../../public/images/star_rating.png"


const FilterOptions = () => {
    const { t,i18n } = useTranslation()
    const {language} = i18n;
   
    return (
        <Popover >
            <PopoverTrigger asChild className='w-16'>
                <Button className='bg-[#F5F5F5] hover:bg-[#F5F5F5] h-[50px] w-[50px] rounded-full '>
                    <Image src={filter} alt="F" />

                </Button>
            </PopoverTrigger>
            <PopoverContent align='end' className="w-80 border-0  mt-3  p-0   rounded-2xl flex flex-col gap-8 ">
                <div className='shadow-custom border-0 w-full rounded-2xl p-4'>
                    <p className='text-sm text-blackMedium font-extrabold'>{t("filter.filter_by")}</p>
                    <Categories categories='nav.categories_mobile' />
                    <div>
                        <p className="mt-4 text-sm text-blackMedium">{t("filter.ratings")}</p>
                        <div className='flex flex-col gap-4 mt-4'>
                            {
                                ratingData.map((item,index)=>{
                                    return(
                                        <div className="flex items-center space-x-2" key={index}>
                                <Checkbox id={`${item.rating}`}  className={`${language === "ar" ? "ml-2" : ""}`}/>
                                <label
                                    htmlFor={`${item.rating}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-2"
                                >
                                    {item?.numberOfRating?.map((item)=>{
                                        return(
                                            <div key={item}>
                                                <Image src={star} alt="F" className="w-4 h-4" />
                                            </div>
                                        )
                                    })}
                                    {`(${item?.numberOfRating?.length})`}
                                </label>
                            </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-blackMedium'>{t("home.followers")}</p>
                        <div className="mt-4 flex gap-4 justify-between items-center">
                            <Input value={10}  className="h-45px border border=[#F5F5F5] rounded-none text-center"/>
                            <p>{t("filter.to")}</p>
                            <Input value={1500} className="h-45px border border=[#F5F5F5] rounded-none text-center"/>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default FilterOptions
