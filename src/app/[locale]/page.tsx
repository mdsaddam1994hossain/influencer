import React from 'react';
import initTranslations from '../i18n';
import HomePage from "@/module/Home/Home"



const i18nNamespaces = ['home',"nav","common"];

export default async function Home({params: { locale }}: any) {

  const { t } = await initTranslations(locale, i18nNamespaces);

  return (

    <main className="px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44">  
       <HomePage />
    </main>
  );
}
