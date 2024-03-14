import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

type Props = {

  item: any
}

const ServiceCard: FC<Props> = ({ item }) => {
  const { t } = useTranslation()
  return (
    <div className='lg:col-span-1 group'>
      <div className={cn('w-20 h-20 rounded-lg flex justify-center items-center bg-red-500 group-hover:scale-110 transition duration-300 ease-in-out', item.bgColor)}>
        {item.icon}
      </div>
      <p className=' text-blackDark text-lg lg:text-2xl mt-6 mb-4 font-medium '>{t(item.title)}</p>
      <p className=' text-blackLight '>{t(item.description)}</p>
    </div>
  )
}

export default ServiceCard
