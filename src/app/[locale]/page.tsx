import React from 'react';
import HomePage from "@/module/Home/Home"
import initTranslations from '../i18n';



const i18nNamespaces = ['home',"nav","common"];

export default async function Home({params: { locale }}: any) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (

    <main >
       <HomePage />
    </main>
  );
}
