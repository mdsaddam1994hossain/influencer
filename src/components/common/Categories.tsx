import React, { FC } from 'react'

import { useTranslation } from 'react-i18next';
import {
  LayoutDashboard,
  ChevronDown,
} from "lucide-react"
import Image from 'next/image';

import useAppStore from '@/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { catagoryData } from "../../utils/Data"

type Props = {
  categories: string
}

const Categories: FC<Props> = ({ categories }) => {


  const { t, i18n } = useTranslation()
  const { language } = i18n;
  const isMobile = useAppStore((state) => state.isMobile)

  return (
    <div >
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='w-full'>
          <div className="flex items-center justify-between gap-0  rounded-0 mt-4   border border-[#F5F5F5] px-2  h-[45px] " >
            {/* <LayoutDashboard size={isMobile ? 12 : 16} /> */}
            <p className="text-sm  text-blackMedium" >{t(categories)}</p>
            <ChevronDown size={isMobile ? 16 : 20} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-full mr-0 px-0 gap-8 max-h-[500px]  overflow-y-scroll no-scrollbar">
          <DropdownMenuGroup dir={`${language === "en" ? 'ltr' : 'rtl'}`}>

            {catagoryData.map((item, index) => {
              return (
                <DropdownMenuItem key={index} className='p-5 focus:bg-yellow-500 focus:rounded-none focus:text-white '>
                  <div className={`${language === "en" ? 'mr-3' : 'ml-3'}`}>
                    <Image src={item?.icon} alt="P" objectFit="cover" className=" h-5 w-5 "/>
                  </div>
                  <span >{t(item.label)}</span>
                </DropdownMenuItem>
              )
            })}

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Categories
