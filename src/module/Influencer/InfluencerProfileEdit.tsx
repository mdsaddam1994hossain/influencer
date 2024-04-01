"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaYoutube,FaTiktok,FaSnapchatSquare,FaInstagram,FaTwitter} from "react-icons/fa";

import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useCategories ,useTags,useCountry,useRegions} from '@/app/hook/useCategories'
import CustomFileUpload from '@/components/common/CustomFileUpload';


const InfluencerProfileEdit = () => {
    const {data:categorie}= useCategories()
    const {data:tags}= useTags()
    const {data:countries}= useCountry()
    const {data:regions}= useRegions()
    console.log(tags,"tags")
  return (
    <div className=' px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 my-12'>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">Nickame</p>
                <Input className="flex-grow" />
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">A brief overview of you</p>
                 <Textarea className="flex-grow"/>
           
            </div>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6  mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">Gender</p>
                <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-14 ">
                        <SelectValue placeholder="Please Choose" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow">
                        <SelectGroup >
                        <SelectItem className="px-4 pt-4" value="male">Male</SelectItem>
                        <SelectItem className="p-4 py-4" value="female">Female</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">Specialization</p>
                 <Input className="flex-grow"/>
           
            </div>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">Categories</p>
                <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-14 ">
                        <SelectValue placeholder="Please Choose" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4 w-full">
                        <SelectGroup >
                            {categorie?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        
                     
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">Tags</p>
                 <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-14 ">
                        <SelectValue placeholder="Please Choose" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {tags?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        
                        </SelectGroup>
                    </SelectContent>
                </Select>
           
            </div>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">Country</p>
                <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-14 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {countries?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">Regions</p>
                 <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-14 ">
                        <SelectValue placeholder="Please Choose" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {regions?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
           
            </div>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">Cover</p>
               
                <div className="flex-grow   rounded-md flex w-full  items-center justify-center " >
                  <div className="w-full h-full mt-6">
                   <CustomFileUpload />
                    </div>
                </div>
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">Sample content</p>
                 <div className="flex-grow grid grid-cols-2 lg:grid-cols-3 gap-4 " >
                  <CustomFileUpload />

                  <CustomFileUpload />

                </div>
           
            </div>
       </div>


       <div className="flex mt-6 gap-6">
          <p className="  text-center lg:text-left">Platforms</p>
          <div className="flex-grow mt-6">
           <p className="text-blackDark text-center">Please choose the platform through which you want to receive advertisements and fill out all the required data</p>
 
                            {/* Youtype section */}
           <div className="grid grid-cols-1 lg:grid-cols-2 justify-between   gap-6 mt-6 ">

             <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
                <div className="flex items-center justify-center gap-6">
                   <FaYoutube size={36} className="text-red-500 text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder="State the number of followers"/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder="Add your account link"/>
                <p className='text-center mt-6'>Publication type and price</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Product/service review video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                    <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Indirect advertising</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                    <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                    <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Live advertisement</div>
                    </div>
                </div>

            </div>

            {/* Tiktok section */}
            <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaTiktok  size={36} className="text-blackDark  text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder="State the number of followers"/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder="Add your account link"/>
                <p className='text-center mt-6'>Publication type and price</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Cover with presence</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Coverage without attendance</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Indirect video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Live video</div>
                    </div>
                </div>

            </div>

            {/* snapchat section */}

            <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaSnapchatSquare  size={36} className="text-yellow-300  text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder="State the number of followers"/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder="Add your account link"/>
                <p className='text-center mt-6'>Publication type and price</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Picture</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Cover with presence</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Coverage without attendance</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Coverage outside the influencer's city</div>
                    </div>
                </div>
                {/* percentage of influence section */}
                <div className="mt-10">
                    <p className="text-center">Percentage of influence</p>
                    <div className="flex justify-between gap-6 mt-2">
                        <div className="flex gap-2 items-center">
                            <Input className="h-10"/>
                            <p>Men</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Input className=" h-10"/>
                            <p>Women</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-center">Percentage for each country</p>
                    <div className="flex justify-between gap-6 mt-2">
                        <div className="flex gap-2 items-center">
                        <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-10 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {countries?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                        </div>
                        <div className="flex gap-2 items-center">
                         <p  className="w-full">The Percentage</p>
                            <Input className=" h-10" placeholder="%"/>
                           
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-center">Relating all interests</p>
                
                    <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-10 mt-2 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4 ">
                        <SelectGroup >
                        {tags?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                    
                </div>

                <div className="mt-6">
                    <p className="text-center">Interests Percentage</p>
                    <div className="flex justify-between gap-6 mt-2">
                        <div className="flex gap-2 items-center">
                        <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-10 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {tags?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                        </div>
                        <div className="flex gap-2 items-center">
                         <p  className="w-full">The Percentage</p>
                            <Input className=" h-10" placeholder="%"/>
                           
                        </div>
                    </div>
                </div>

            </div>

            {/* instagram section  start*/}

            <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaInstagram  size={36} className="text-pink-600" />
                    <Input className="w-40 h-10 text-xs" placeholder="State the number of followers"/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder="Add your account link"/>
                <p className='text-center mt-6'>Publication type and price</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Picture</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Story</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>High light</div>
                    </div>
                </div>

            </div>
             {/* instragram section  end*/}
              {/* twitter section start */}
             <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaTwitter  size={32} className="text-sky-500  text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder="State the number of followers"/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder="Add your account link"/>
                <p className='text-center mt-6'>Publication type and price</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Tweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Retweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Quote Tweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Pinned tweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Installed header</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Mention</div>
                    </div>
                </div>

            </div>

            {/* twiter section end  */}

           </div>

           <div className="flex flex-col lg:flex-row gap-6 justify-between mt-6">
                <Button className="w-full bg-yellow-500 text-white">Save changes </Button>
       
                <Button className="w-full bg-yellow-500 text-blackDark hover:text-white">Save and continue later </Button>
            </div>
           
          </div>  
     
                
        </div>
      
      




    </div>
  )
}

export default InfluencerProfileEdit
