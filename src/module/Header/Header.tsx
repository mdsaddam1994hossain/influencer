
import React from 'react'
import Image from 'next/image'
import LanguageChanger from './LanguageChanger';
import { Input } from '@/components/ui/input';
import NavBar from './NavBar';
import ResponsiveHeader from './ResponsiveHeader';


const Header = () => {
    // const {t,i18n} = useTranslation()
    // const {language} = i18n

   
  
    return (
        <div className='px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 bg-white lg:bg-transparent'>
            <ResponsiveHeader />
            <NavBar  />
          
        </div>

    )
}

export default Header
