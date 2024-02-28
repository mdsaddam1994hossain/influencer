'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { 
    Select,  
    SelectTrigger, 
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectSeparator
} from '@/components/ui/select';


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

        <Select onValueChange={handleChange}>
            <SelectTrigger className={`w-full h-8 gap-1 px-2 lg:h-10 lg:w-[100px] bg-transparent ${currentLocale == "en" && "flex-row-reverse"}`}>
                <SelectValue placeholder={currentLocale == "ar" ? "العربية" : "English"} />
            </SelectTrigger>
            <SelectContent className='lg:mt-6 bg-secondary '>
                <SelectGroup className='my-2 w-[170px] '>
                    <SelectItem className='p-4 text-center' value="ar">العربية</SelectItem>
                    <SelectSeparator className='mx-2'></SelectSeparator>
                    <SelectItem className='p-4' value="en">English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}