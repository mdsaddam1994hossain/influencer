'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import arabic from "../../../public/images/saudi_flag.jpeg"
import english from "../../../public/images/Flags.png"
import i18nConfig from '@/i18nConfig';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
 
import { 
    Select,  
    SelectTrigger, 
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectSeparator
} from '@/components/ui/select';
import Image from 'next/image';


export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const handleChange = (value:string) => {
        const newLocale = value;
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (

        <Popover >
            <PopoverTrigger className={`w-full flex items-center gap-2 flex-start  bg-transparent flex-row-reverse`}>   
               
                {
                    currentLocale === "en" ?  <Image objectFit="cover" src={arabic} height={28} width={28} className="h-[28px] w-[28px] rounded-full" alt='l' />:
                    <Image src={english} height={28} width={28} objectFit="cover" className="h-[28px] w-[28px] rounded-full" alt='l' />
                  
                }
                 <p > {currentLocale == "en" ? "العربية" : "English"} </p>
                
            </PopoverTrigger>
            <PopoverContent className='lg:mt-6 bg-secondary w-52 '>
               
                    <div className="flex items-center gap-4 cursor-pointer " onClick={()=>{handleChange("ar")}}>
                      <Image src={arabic} height={28} width={28} objectFit="cover" className="h-[28px] w-[28px] rounded-full" alt='l' />
                      <p  className=' w-full' >العربية</p>
                    </div>
                    {/* <SelectSeparator className='mx-2'></SelectSeparator> */}
                    
                    <div className="flex items-center gap-4 bg-transparent mt-4 cursor-pointer" onClick={()=>{handleChange("en")}}>
                      <Image src={english} height={28} width={28} objectFit="cover" className="h-[28px] w-[28px] rounded-full" alt='l' />
                       <span  className='w-full' >English</span>
                    </div>
                    
                
            </PopoverContent>
        </Popover>
    );
}