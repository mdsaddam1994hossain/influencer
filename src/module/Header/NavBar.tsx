
"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../../components/ui/button'
import { useTranslation } from 'react-i18next';
import {
  Settings,
  LayoutDashboard,
  ChevronDown,
  Palette,
  CarTaxiFront,
  Music4,
  Award,
  ShoppingBag,
  UtensilsCrossed,
  Dumbbell,
  CandlestickChart
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import ResultFilter from '../../components/common/Filter'
import Categories from '@/components/common/Categories'
import { navData } from '@/utils/Data'
import { supabaseBrowser } from '@/lib/supabase/brower'
import useAppStore from '@/store'
import { userSignOut } from '@/lib/actions'



export const catagoryData =[
          {label: "Design and art",
           icon: <Palette  className="mr-4 h-4 w-4 text-gray-400 " />
          },
          {label: "Cars",
           icon:  <CarTaxiFront className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Beauty and makeup",
           icon:  <Settings className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Trade and entrepreneurship",
           icon:  <CandlestickChart  className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Music",
           icon:  <Music4 className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Shopping",
           icon:  <ShoppingBag className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Sports",
           icon:  <Award className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Physical fitness and health",
           icon:  <Dumbbell className="mr-2 h-4 w-4 text-gray-400" />
          },
          {label: "Food and drinks",
           icon:  <UtensilsCrossed className="mr-2 h-4 w-4 text-gray-400" />
          }
         
]


const NavBar = ({data}:any) => {

  const pathname = usePathname()
  const path = pathname.startsWith("/en") ? pathname.slice(0,1)+pathname.substring(4) : pathname;
  const {t,i18n} = useTranslation()
  const {language} = i18n
  const isLogin = useAppStore((state) => state.isLogin)
  const setIsLogin = useAppStore((state) => state.setIsLogin)
  

  const handleLogOut = async() => {
     await userSignOut()
    setIsLogin(false)
  }

  
  useEffect(()=>{
    if(data?.session){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])

  console.log({isLogin})
  console.log({data})
  return (
   <div className='hidden lg:block'>
      <div  className='min-h-[65px] flex justify-between bg-white rounded-2xl px-12 items-center'>
      <ul className='flex  gap-6  py-5  ' >
        {navData.map((item, index) => {
          return (
            <li key={index}><Link href={item.path} className={`${path === item.path ? "underline decoration-[3px] underline-offset-[15px] text-yellow-400" : ""} `}>{`${t(`${item.label}`)}`} </Link></li>
          )
        })}
       {isLogin && <li className='cursor-pointer' onClick={handleLogOut}>LogOut</li>}
      </ul>
      <div className='flex gap-4 items-center'>
         <Categories categories='nav:categories' />
         <ResultFilter language={language}/>
      </div>
    </div>
   </div>
  )
}

export default NavBar




