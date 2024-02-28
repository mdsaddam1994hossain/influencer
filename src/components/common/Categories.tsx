import React, { FC } from 'react'

import { useTranslation } from 'react-i18next';
import {
    Settings,
    LayoutDashboard,
    ChevronDown,
    Palette,
    CarTaxiFront,
    Music4,
    Award,
    ShoppingBag,
    UtensilsCrossed,
    Dumbbell,
    CandlestickChart
  } from "lucide-react"

import useAppStore from '@/store';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../../components/ui/dropdown-menu"
  import {catagoryData} from "../../utils/Data"

  type Props ={
    categories:string
  }

const Categories:FC<Props> = ({categories}) => {
  
  
  const {t} = useTranslation()
  const isMobile = useAppStore((state)=>state.isMobile)

  return (
    <div >
       <DropdownMenu>
            <DropdownMenuTrigger asChild className='w-full  lg:w-[250px]'>
               <div className="flex items-center justify-between gap-0  lg:gap-4 bg-sky-100 rounded-xl px-1 lg:px-6 h-8 lg:h-12 " >
                <LayoutDashboard  size={isMobile ? 12 : 16} />
                 <p className="text-[11px] lg:text-sm opacity-50" >{t(categories)}</p>
                 <ChevronDown size={isMobile ? 16 : 20}/>
               </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[305px] mr-20 py-2 px-0 gap-8">
              <DropdownMenuGroup >

                {catagoryData.map((item,index)=>{
                  return(
                    <DropdownMenuItem key={index} className='p-5 focus:bg-yellow-500 focus:rounded-none focus:text-white'>
                  {item.icon}
                  <span >{item.label}</span> 
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
