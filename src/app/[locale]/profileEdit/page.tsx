
import React from 'react'
import { redirect } from 'next/navigation'
import readUserSession from '@/lib/actions'
import InfluencerProfileEdit from '@/module/Influencer/InfluencerProfileEdit'

const ProfileEditPage = async() => {

  const {data} = await readUserSession()

  if(!data?.session){
    redirect("/login")
  }
  return (
    <main>
      <InfluencerProfileEdit />
    </main>
  )
}

export default ProfileEditPage
