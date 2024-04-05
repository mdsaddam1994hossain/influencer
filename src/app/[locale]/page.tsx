import React from 'react';

import { redirect } from 'next/navigation'

import HomePage from "@/module/Home/Home"
import readUserSession, { verifyUser } from '@/lib/actions';
import initTranslations from '../i18n';



const i18nNamespaces = ['home',"nav","common"];

export default async function Home({params: { locale }}: any) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const {data} = await readUserSession()

  if(data){
    const verify:any =  await verifyUser(data?.session?.user?.id as string)
    console.log({verify})
    if(verify?.category_id === null ){
       redirect("/profileEdit")
         
         }
  }

 

  return (

    <main >
       <HomePage />
    </main>
  );
}
