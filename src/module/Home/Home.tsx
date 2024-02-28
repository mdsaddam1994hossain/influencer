import React from 'react'
import MainCard from '@/components/common/MainCard'
import InfluencerMember from './InfluencerMember'



const Home = () => {
  
  return (
    <div>
{/*          
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'  data-aos="fade-up"
          data-aos-duration="2000">
        {[1,2,3,4,5,6].map((item,index)=>{
          return(
            <MainCard key={index} />
          )
        })}
        </div> */}
        <InfluencerMember />

      
    </div>
  )
}

export default Home
