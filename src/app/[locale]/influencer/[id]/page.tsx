


import React, { FC } from 'react'

import InfluencerProfile from '@/module/Influencer/InfluencerProfile'
import readUserSession from "@/lib/actions";

// import Influencer from '@/module/Influencer/Influencer'

type Props ={
    params:{
        id:number
    }
}

const InfluencerPage:FC<Props> = async({params}) => {
  const { data } = await readUserSession()
         
  return (
    <main > 
      {/* <Influencer id={params?.id}/>       */}
      <InfluencerProfile id={params?.id} data={data}/>      
    </main>
  )
}

export default InfluencerPage
