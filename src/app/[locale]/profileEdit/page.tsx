
import React from 'react'

import { redirect } from 'next/navigation'

import readUserSession, { verifyUser } from '@/lib/actions'
import InfluencerProfileEdit from '@/module/Influencer/InfluencerProfileEdit'



const ProfileEditPage = async() => {
 
  const {data} = await readUserSession()
  let user;
  if(data){
    const verify:any =  await verifyUser(data?.session?.user?.id as string)
     user = verify;
    
  }

 



  if(!data?.session){
    redirect("/login")
  }
  return (
    <main>
      <InfluencerProfileEdit user={user}/>
    </main>
  )
}

export default ProfileEditPage
