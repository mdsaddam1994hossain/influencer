import React, { FC } from 'react'

import { Filter, RotateCw } from "lucide-react"
import { useTranslation } from 'react-i18next'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'

type Props = {
  language: string
}

const ResultFilter: FC<Props> = ({ language }) => {
  const { t } = useTranslation()
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
      <PopoverContent className="w-[350px] lg:w-[750px] mt-2" side='bottom' align='end'  >

        <div className='py-10 flex justify-between'>
          <p className='text-2xl text-blackLight '>Options</p>
          <Button className='flex gap-1 items-center bg-transparent text-black hover:bg-transparent'>
            <span className='text-sm text-blackLight'>reset</span>
            <RotateCw size={12} />
          </Button>
        </div>

        <Separator />
        <div className='grid grid-cols-1 lg:grid-cols-3 py-6 gap-4 lg:gap-6  '>
          <div >
            <p className=' text-base text-blackDark '>Influecer gender</p>
            <RadioGroup className="flex gap-4 justify-around my-2" >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r1" />
                <Label htmlFor="r1 text-blackLight">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r2" />
                <Label htmlFor="r2 text-blackLight">Male</Label>
              </div>

            </RadioGroup>
          </div>
          <div className=' lg:flex lg:justify-end lg:items-end  sm:hidden w-full'>
            <Separator orientation="vertical" className="lg:block" />
          </div>
          <div>
            <p className=' text-base text-blackDark '>Followers</p>
            <RadioGroup className="flex gap-4 justify-around my-2" >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r1" />
                <Label htmlFor="r1 text-blackLight ">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r2" />
                <Label htmlFor="r2 text-blackLight">Male</Label>
              </div>

            </RadioGroup>
          </div>
        </div>

        <Separator />

        <div className='grid grid-cols-1 lg:grid-cols-4 py-6 gap-4 lg:gap-6  '>
          <div className="w-full col-span-1">
            <p>Impact location</p>
            <Popover  >
              <PopoverTrigger asChild>
                <div className="w-full p-2 mt-2 rounded-sm bg-slate-100 ">All</div>
              </PopoverTrigger>
              <PopoverContent align="center" side="bottom" className="w-[300px] lg:w-[160px] max-h-[300px]  p-4  overflow-y-scroll no-scrollbar "  >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => {
                  return (
                    <p key={index} className="h-8">Items-{item}</p>
                  )
                })}
              </PopoverContent>
            </Popover>
          </div>



          <div className="w-full col-span-1 lg:flex sm:hidden">
          <Separator orientation="vertical" className="hidden lg:block lg:mr-4" />
           <div className='w-full'>
           <p>Platforms</p>
            <Popover  >
              <PopoverTrigger asChild>
                <div className="w-full p-2 mt-2 rounded-sm bg-slate-100 ">All</div>
              </PopoverTrigger>
              <PopoverContent align="center" side="bottom" className="w-[300px] lg:w-[160px] max-h-[300px]  p-4 overflow-y-scroll no-scrollbar "  >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => {
                  return (
                    <p key={index} className="h-8">Items-{item}</p>
                  )
                })}
              </PopoverContent>
            </Popover>
           </div>
          </div>





          <div className="w-full col-span-1 lg:flex sm:hidden">
          <Separator orientation="vertical" className="hidden lg:block lg:mr-4" />
           <div className='w-full'>
           <p>Followers Age</p>
            <Popover  >
              <PopoverTrigger asChild>
                <div className="w-full p-2 mt-2 rounded-sm bg-slate-100 ">All</div>
              </PopoverTrigger>
              <PopoverContent align="center" side="bottom" className="w-[300px] lg:w-[160px] max-h-[300px]  p-4  overflow-y-scroll no-scrollbar "  >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                  return (
                    <p key={index} className="h-8">Items-{item}</p>
                  )
                })}
              </PopoverContent>
            </Popover>
           </div>
          </div>





          <div className="w-full col-span-1 lg:flex   sm:hidden">
            <Separator orientation="vertical" className="hidden lg:block lg:mr-4" />
            <div className='w-full'>
              <p>Followers Count</p>
              <Popover  >
                <PopoverTrigger asChild>
                  <div className="w-full p-2 mt-2 rounded-sm bg-slate-100 ">All</div>
                </PopoverTrigger>
                <PopoverContent align="center" side="bottom" className="w-[300px] lg:w-[160px] max-h-[300px]  p-4 overflow-y-scroll no-scrollbar "  >
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <p key={index} className="h-8">Items-{item}</p>
                    )
                  })}
                </PopoverContent>
              </Popover>
            </div>
          </div>


        </div>

        <Separator />

        <p className='mt-6 text-lg text-blackLight'>Catagories</p>
        <div className='grid grid-cols-2 lg:grid-cols-5 py-6 gap-4 lg:gap-6 '>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item,index)=>{
              return(
                <div className="flex items-center space-x-2 col-span-1">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Checkbox items
      </label>
    </div>
              )
            })}
        </div>




      </PopoverContent>
    </Popover>
  )
}

export default ResultFilter
