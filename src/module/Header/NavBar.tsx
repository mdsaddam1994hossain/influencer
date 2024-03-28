
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next';
import ResultFilter from '../../components/common/Filter'
import {UserPlus,UserCheck } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Categories from '@/components/common/Categories'
import { navData } from '@/utils/Data'
import useAppStore from '@/store'
import { userSignOut } from '@/lib/actions'
import { Separator } from '@/components/ui/separator';




const NavBar = ({ data }: any) => {

  const pathname = usePathname()
  const isMobile = useAppStore((state) => state.isMobile)
  const [joinus,setJoinus] = useState(false)
  const router = useRouter()
  const path = pathname.startsWith("/en") ? pathname.slice(0, 1) + pathname.substring(4) : pathname;
  const { t} = useTranslation()
  const setUserType = useAppStore((state)=>state.setUserType)
  const isLogin = useAppStore((state) => state.isLogin)
  const setIsLogin = useAppStore((state) => state.setIsLogin)


  const handleLogOut = async () => {
    await userSignOut()
    setIsLogin(false)
  }

  const handleJoinUs =()=>{
     setJoinus(true)
  }
  const handleJoinClick =(value : "influencer" | "advertiser" )=>{
  
    if(value === "advertiser"){
      setUserType("advertiser")
      
    }else{
      setUserType("influencer")   
    }
    router.push("/signup")
     setJoinus(false)
  }

  const handleClosePopover = () => {
    setJoinus(!joinus);
  };


  useEffect(() => {
    if (data?.session) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])


  return (
    <div className='hidden lg:block'>
      <div className='min-h-[65px] flex justify-between bg-white shadow-custom rounded-2xl px-12 items-center'>
        <ul className='flex  gap-6  py-5  ' >
          {navData.map((item, index) => {
            return (
              <li key={index}><Link href={item.path} className={`${path === item.path ? "underline decoration-[3px] underline-offset-[15px] text-yellow-400" : ""} `}>{`${t(`${item.label}`)}`} </Link></li>
            )
          })}
          {isMobile ? <li className='cursor-pointer' >Join Us</li> :
            <li> <Popover open={joinus} onOpenChange={handleClosePopover}>
              <PopoverTrigger asChild onClick={handleJoinUs}>
              <p className=' cursor-pointer '>
                {`${t(`nav.join`)}`}
              </p>
            </PopoverTrigger>
              <PopoverContent className="w-56 mt-5 p-0">
                <div className='flex flex-col gap-2  w-full my-2 overflow-hidden '>

                  <div className="hover:bg-red-500  w-full h-12 flex  items-center px-4 group   ">
                    <div onClick={()=>{handleJoinClick("advertiser")}}  className="flex gap-2 cursor-pointer transition duration-500 ease-in-out transform group-hover:translate-x-3 group-hover:text-white">
                      <UserPlus  size={18} />
                      <p   >{`${t(`nav.join_an_adviser`)}`} </p>
                    </div>               
                  </div>

                  <Separator className="my-0"/>

                  <div className="hover:bg-red-500  w-full h-12 flex  items-center px-4 group   ">
                   <div onClick={()=>{handleJoinClick("influencer")}} className="flex gap-2 cursor-pointer transition duration-500 ease-in-out transform group-hover:translate-x-3 group-hover:text-white">
                      <UserCheck   size={18} />
                      <p    >{`${t(`nav.join_an_influencer`)}`} </p>
                    </div>  
                  </div>

                </div>

              </PopoverContent>

            </Popover></li>
          }

          {data?.session ? <li className='cursor-pointer' onClick={handleLogOut}>{`${t(`nav.logout`)}`}</li> :
            <li ><Link href={"/login"} className={`${path === "/login" || path === "/login/en" ? "underline decoration-[3px] underline-offset-[15px] text-yellow-400" : ""} `}>{`${t(`nav.login`)}`} </Link></li>
          }
        </ul>
        <div className='flex gap-4 items-center'>
          <Categories categories='nav.categories' />
          <ResultFilter  />
        </div>
      </div>
    </div>
  )
}

export default NavBar




