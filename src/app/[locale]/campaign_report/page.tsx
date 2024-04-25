import React from 'react'

import { Metadata } from 'next';

import Campaign from '../../../module/private/profile/Campaign';


export const metadata: Metadata = {
  title: "Campaign Report",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};
const CampaignReportPage = async() => {
   
    return (
      <div className="px-4 my-8 lg:my-14 md:px-20 lg:px-24 xl:px-36 2xl:px-44 ">
          <Campaign />
      </div>
    )
  }
  
  export default CampaignReportPage