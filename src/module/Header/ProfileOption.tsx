import React from 'react'

import { FaUser } from "react-icons/fa";
import { MdLock,MdLogout } from "react-icons/md";
  import {  useRouter } from 'next/navigation';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Separator
  } from "@/components/ui/separator"
  import { userSignOut } from '@/lib/actions';
  import { Button } from '@/components/ui/button';
  import useAppStore from '@/store';

  const profileData = [
    {
        id:1,
        item:"Manage Account",
        path:"/account",
        icon:<FaUser />
    },
    {
        id:2,
        item:"Campaign Reports",
        path:"/campain-reports",
        icon:<MdLock />
    },
    {
        id:3,
        item:"My Requests",
        path:"/my-request",
        icon:<MdLock />
    }
  ]

const ProfileOption = ({user}:any) => {

    const setIsLogin = useAppStore((state) => state.setIsLogin)
    const router = useRouter()
    const handleLogOut = async () => {
        console.log("click........")
        await userSignOut()
        setIsLogin(false)
       
      }

      const handleClick = (path:string)=>{
        console.log(path,"pppppppp")
        router.push(path)
      }

      console.log(user,"user....")
  return (
    <div>
       <Popover>
      <PopoverTrigger className="w-[120px] border">
        <p className="text-sm">Hello, {user?.name} </p>
      </PopoverTrigger>
      <PopoverContent className="p-0 " >
        <div  >
          {user?.type === "individual" && profileData?.map((item,index)=>{
            return(
                <div key={index}  className="px-6 group gap-1 z-30 hover:!bg-blackDark hover:!text-white">
                    <div className="flex gap-2  items-center  w-full cursor-pointer">
                      {item.icon}
                      <p onClick={()=>handleClick(item?.path)} className="py-4 " key={index} >{item?.item}</p>
                    </div>
                    <Separator className="-z-20 group-hover:bg-blackDark" />
                </div>
            )
          })}

          <div className="flex gap-2 px-6 items-center hover:!bg-blackDark hover:!text-white w-full cursor-pointer">
            <MdLogout />
            <p className="py-4 w-full rounded-none  "  onClick={handleLogOut}>Logout</p>  
          </div>
         
        </div>
         

      </PopoverContent>
    </Popover>
    </div>
  )
}

export default ProfileOption
