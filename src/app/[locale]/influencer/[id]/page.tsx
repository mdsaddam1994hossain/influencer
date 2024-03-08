


import React, { FC } from 'react'

import Influencer from '@/module/Influencer/Influencer'

type Props ={
    params:{
        id:number
    }
}

const InfluencerPage:FC<Props> = ({params}) => {

         
  return (
    <main className="lg:mt-10"> 
      <Influencer id={params?.id}/>      
    </main>
  )
}

export default InfluencerPage
