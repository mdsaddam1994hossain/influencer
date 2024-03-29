"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaUpload } from "react-icons/fa";
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useQueryClient } from '@tanstack/react-query'
import { useCategories ,useTags,useCountry,useRegions} from '@/app/hook/useCategories'


const InfluencerProfileEdit = () => {
    const queryClient = useQueryClient();
    const {data:categorie}= useCategories()
    const {data:tags}= useTags()
    const {data:countries}= useCountry()
    const {data:regions}= useRegions()
    console.log(regions,"regions")
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
                            {categorie?.map((item)=>{
                                return(
                                    <SelectItem className="py-1" value={item.name}>{item.name}</SelectItem>
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
                                    <SelectItem className="py-1" value={item.name}>{item.name}</SelectItem>
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
                        {countries?.map((item)=>{
                                return(
                                    <SelectItem className="py-1" value={item.name}>{item.name}</SelectItem>
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
                        {regions?.map((item)=>{
                                return(
                                    <SelectItem className="py-1" value={item.name}>{item.name}</SelectItem>
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
               
                <div className="flex-grow border border-grayBorder rounded-md flex w-full h-32 items-center justify-center " >
                    <Button >Choose a picture</Button>
                </div>
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">Sample content</p>
                 <div className="flex-grow grid grid-cols-2 lg:grid-cols-3 gap-4 " >
                    <div className="border border-grayBorder rounded-md flex flex-col gap-4 w-full h-32 items-center justify-center">
                      <FaUpload />
                      <Button >Choose a picture</Button>
                    </div>
                    <div className="border border-grayBorder rounded-md flex flex-col gap-4 w-full h-32 items-center justify-center">
                      <FaUpload />
                      <Button >Choose a picture</Button>
                    </div>
                </div>
           
            </div>
       </div>
       <p className="text-blackDark mt-6">Platforms</p>
       <div>
         <p className="text-blackDark text-center">Please choose the platform through which you want to receive advertisements and fill out all the required data</p>
       </div>



    </div>
  )
}

export default InfluencerProfileEdit
