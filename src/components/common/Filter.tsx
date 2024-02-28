import React, { FC } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Filter,RotateCw} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslation } from 'react-i18next'

type Props ={
    language:string
}

const ResultFilter:FC<Props> = ({language}) => {
    const {t} = useTranslation()
  return (
    <Popover>
      <PopoverTrigger asChild>
      <div className='relative'>
          <Filter size={20} className={` absolute text-white top-1.5 lg:top-3.5 ${language === 'ar' ? "right-2" : "left-3 "} `} />
          <Button className={`bg-yellow-500 hover:bg-yellow-500 h-8 lg:h-12 w-full lg:w-20 ${language === 'ar' ? "pr-8" : " pl-8"}`}>
            {t("nav:filter")}
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent  className="w-[750px] mt-2" side='bottom' align='end'  >
    
            <div className='py-6 flex justify-between'>
                <p className='text-xl font-roboto '>Options</p>
                <Button className='flex gap-1 items-center bg-transparent text-black hover:bg-transparent'>
                  <span className='text-xs'>reset</span>
                  <RotateCw size={12}/>
                </Button>
            </div>
          
          <Separator />
          <div className='grid grid-cols-2 py-8'>
            <p>Influecer</p>
            {/* <Separator orientation="vertical" /> */}
            <p>Followers</p>
          </div>
          <Separator  className="m-8"/>
          
           
           
         
     
      </PopoverContent>
    </Popover>
  )
}

export default ResultFilter
