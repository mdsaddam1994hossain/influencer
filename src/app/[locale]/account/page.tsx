import React from 'react'
import { Metadata } from 'next';
import readUserSession, { verifyUser } from "@/lib/actions";
import MyFile from '@/module/private/profile/MyFile';

export const metadata: Metadata = {
  title: "My file",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};

const AccountPage = async() => {
  const {data} = await readUserSession()
  let user;
  if(data){
    const verify:any =  await verifyUser(data?.session?.user?.id as string)
     user = verify;
    
  }


  return (
    <div className="px-4 my-8 lg:my-14 md:px-20 lg:px-24 xl:px-36 2xl:px-44">
      <MyFile user={user}/>
    </div>
  )
}

export default AccountPage