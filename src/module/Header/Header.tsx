
import React from 'react'

import Image from 'next/image'

import { Input } from '@/components/ui/input';
import LanguageChanger from './LanguageChanger';
import NavBar from './NavBar';
import ResponsiveHeader from './ResponsiveHeader';


const Header = ({data}:any) => {
    // const {t,i18n} = useTranslation()
    // const {language} = i18n

   
  
    return (
        <div className='px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 bg-white lg:bg-transparent'>
            <ResponsiveHeader />
            <NavBar  data={data}/>
          
        </div>

    )
}

export default Header
