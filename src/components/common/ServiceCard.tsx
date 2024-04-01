import React, { FC,useState} from 'react'
import {Button} from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import { LuMinusCircle,LuPlusCircle } from "react-icons/lu";
import { cn } from '@/lib/utils'

type Props = {

  item: any
}

const ServiceCard: FC<Props> = ({ item }) => {
  const { t } = useTranslation()
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='lg:col-span-1 group'>
      <div className={cn('w-20 h-20 rounded-lg flex justify-center items-center bg-red-500 group-hover:scale-110 transition duration-300 ease-in-out', item.bgColor)}>
        {item.icon}
      </div>
      <p className=' text-blackDark text-lg lg:text-2xl mt-6 mb-4 font-medium '>{t(item.title)}</p>
     
        <p className=' text-blackLight mt-6 gap-2 items-center'>{showMore ? `${t(item.description)}` : `${t(item.description).substring(0,100)}`}
        {" "}<button onClick={()=>setShowMore(!showMore)}>{showMore ? <LuMinusCircle size={16} className="text-red-500" /> : <LuPlusCircle size={16} className="text-green-500" />}</button>
        </p>
        
    
    </div>
  )
}

export default ServiceCard
