"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import AuthBanner from '@/components/common/AuthBanner'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectSeparator
} from '@/components/ui/select';

const Signup = () => {
    const router = useRouter()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-16 py-8 lg:py-20 bg-white shadow-lg rounded-xl my-12  lg:my-24 gap-12 lg:gap-12'>
            <div className='col-span-2 lg:col-span-1'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p className='font-semibold text-4xl text-blackDark'>SignUp</p>
                        <p className="my-3 lg:mt-2 text-blackLight">Welcome to Inflanar</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 flex lg:justify-end '>
                        <Button variant={"outline"} className=" h-11 px-8 font-roboto text-lg font-medium mr-4">Client</Button>
                        <Button  className='h-11 px-10 font-roboto bg-blue-600 hover:bg-blue-600 text-lg fontme'>Influencer</Button>

                    </div>
                </div>

                <div className='col-span-2 grid grid-cols-2 mt-6 gap-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p >First Name</p>
                        <Input placeholder='First Name' className='mt-2' />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p>Last Name</p>
                        <Input placeholder='Last Name' className='mt-2' />
                    </div>
                </div>

                <div className='col-span-2 grid grid-cols-2 gap-6 mt-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p>Email</p>
                        <Input placeholder='Email Address' className='mt-2' />
                    </div>
                    <div className='col-span-2 md:col-span-1 md:mt-0'>
                        <p>Phone</p>
                        <Input placeholder='Phone Number' className='mt-2' />
                    </div>
                </div>

                <div className='col-span-2 mt-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p>Country</p>
                        <Select >
                            <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-12 `}>
                                <SelectValue defaultValue={"saudiarabia"} placeholder="Saudi Arabia" />
                            </SelectTrigger>
                            <SelectContent className='bg-white hover:bg-red-500 '>
                                <SelectGroup className='my-2 w-full '>
                                    <SelectItem className='p-4 text-center' value="ar">Bangladesh</SelectItem>
                                    <SelectItem className='p-4' value="saudiarabia">Saudi Arabia</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
                <div className='col-span-2 mt-6'>
                    <div className='col-span-2 '>
                        <p>Address</p>
                        <Input placeholder='Address' className='mt-2' />
                    </div>

                </div>

                <div className='col-span-2 grid grid-cols-2 gap-6 mt-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p>Town/City</p>
                        <Select >
                            <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-12 `}>
                                <SelectValue defaultValue={"riad"} placeholder="Riad" />
                            </SelectTrigger>
                            <SelectContent className='bg-white hover:bg-red-500 '>
                                <SelectGroup className='my-2 w-full '>
                                    <SelectItem className='p-4 text-center' value="ar">Zedda</SelectItem>
                                    <SelectItem className='p-4' value="dhaka">Dhaka</SelectItem>
                                    <SelectItem className='p-4' value="riad">Riad</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <p>Post Code</p>
                        <Input placeholder='Phone number' className='mt-2' />
                    </div>
                </div>

                <div className='flex justify-between my-6 '>
                    <div className='flex gap-2 justify-center'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" className='border-blackLight' />
                            <label
                                htmlFor="terms"
                                className="text-blackLight "
                            >
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <p className='text-red-500 '>Forgot Password?</p>
                </div>
                <Button className='bg-red-500 hover:bg-red-600 mt-4 font-medium text-lg w-full h-14'>Create Account</Button>


                <p className='mt-6 text-center text-blackLight'>Already have an account ? <span className=' text-blackDark cursor-pointer hover:text-red-500' onClick={() => router.push("/login")}>Login</span></p>
            </div>
            <AuthBanner />
        </div>
    )
}

export default Signup
