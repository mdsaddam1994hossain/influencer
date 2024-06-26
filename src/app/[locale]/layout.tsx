import type { Metadata } from "next";
import { IBM_Plex_Mono, Montserrat, Poppins, Roboto,Cairo } from "next/font/google";
import Head from "next/head";

import i18nConfig from '@/i18nConfig';
import TranslationsProvider from "@/components/TranslationsProvider"
import Header from "@/module/Header/Header";
import Footer from "@/module/Footer/Footer";
import QueryProvider from "@/components/query-provider";
import readUserSession, { verifyUser } from "@/lib/actions";
import { Toaster } from "@/components/ui/toaster"
import initTranslations from "../i18n";

import "./globals.css";
import 'aos/dist/aos.css';
import 'react-phone-input-2/lib/style.css'

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-montserrat" });
const ibm_mono = IBM_Plex_Mono({ subsets: ["vietnamese"], weight: ["400", "500", "700"], variable: "--font-ibm_mono" });
const cairo = Cairo({ subsets: ["latin"], weight: ["400", "500", "700","800"], variable: "--font-cairo" });
// `cyrillic`, `cyrillic-ext`, `latin`, `latin-ext`, `vietnamese`
export const metadata: Metadata = {
  title: "Moalen, gathering the largest influencers in all fileds moalen.sa",
  description: "A Saudi platform, an advertiser marketing company that brings together the largest influencers in all fields!",
};

const i18nNamespaces = ['common', "home", "nav"]

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  const { resources } = await initTranslations(locale, i18nNamespaces);
  const { data } = await readUserSession()
  let user;
  if(data){
    const verify:any =  await verifyUser(data?.session?.user?.id as string)
     user = verify; 
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} >
      <Head>
        <link rel="icon" href="/public/images/favicon.png" />
      </Head>
      <body className={`${poppins.variable} ${montserrat.variable} ${ibm_mono.variable} ${cairo.variable} font-montserratArabic bg-white `}>
        <QueryProvider>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
            data={data}
            >
            <>
              <Header data={data} user={user} />
              {children}
              <Footer />
              <Toaster  />
            </>
          </TranslationsProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
