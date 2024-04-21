import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
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
        path:"/manage-account"
    },
    {
        id:2,
        item:"Campaign Reports",
        path:"/campain-reports"
    },
    {
        id:3,
        item:"My Requests",
        path:"/my-request"
    }
  ]

const ProfileOption = ({user}:any) => {

    const setIsLogin = useAppStore((state) => state.setIsLogin)

    const handleLogOut = async () => {
        console.log("click........")
        await userSignOut()
        setIsLogin(false)
       
      }

      const handleClick = (path:string)=>{
        console.log(path,"pppppppp")
      }
  return (
    <div>
       <Select>
      <SelectTrigger className="w-[120px]">
        <p>Hello, {user?.name} </p>
      </SelectTrigger>
      <SelectContent >
        <SelectGroup  >
          {profileData?.map((item,index)=>{
            return(
                <div >
                    <SelectItem onChange={()=>handleClick(item?.path)} className="py-4 hover:!bg-blackDark hover:!text-white px-6 " key={index} value={item?.item}>{item?.item}</SelectItem>
                    <Separator />
                </div>
            )
          })}

          <Button className="py-6 w-full rounded-none bg-white text-black hover:!bg-blackDark hover:!text-white px-6 "  onClick={handleLogOut}>Logout</Button>  
        </SelectGroup>
         

      </SelectContent>
    </Select>
    </div>
  )
}

export default ProfileOption
