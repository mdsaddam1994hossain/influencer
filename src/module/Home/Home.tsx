import React from 'react'

import InfluencerMember from './InfluencerMember'
import Banner from '@/components/common/Banner'

const Home = () => {

  return (
    <div>
         <Banner />
         <div className="px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44">
         <InfluencerMember />
        </div>
    </div>
  )
}

export default Home
