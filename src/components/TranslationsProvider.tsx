'use client';
import React, { useEffect, useState } from "react"
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance } from 'i18next';
import AOS from 'aos';
import useAppStore from "@/store";

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: any;
}



export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: TranslationsProviderProps) {

  const isMobile = useAppStore((state) => state.isMobile)
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);
  const [resWidth, setResWidth] = useState(0);
  const setMobile = useAppStore((state) => state.setMobile)


  const handleResize = () => {
    if (window?.innerWidth < 768) {
      setResWidth(window?.innerWidth);
    } else {
      setResWidth(window?.innerWidth);
    }
  };



  useEffect(() => {
    AOS.init({
      once: true
    });

    if (window !== undefined) {
      setResWidth(window?.innerWidth);
    }
    if (resWidth < 768) {
      setMobile(true)

    } else {
      setMobile(false)

    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [resWidth])


  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}