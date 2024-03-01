"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectSeparator
} from '@/components/ui/select';
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { type } from '../../components/ui/calendar';

const SignUpForm = () => {
    const router = useRouter()
    const FormSchema = z.object({

        fName: z.string().min(8, {
            message: "first name must be at least 4 characters.",
        }),
        lName: z.string().min(8, {
            message: "last name must be at least 4 characters.",
        }),
        email: z.string().min(8, {
            message: "email must be at least 8 characters.",
        }),
        phone: z.string().min(6, {
            message: "phone must be at least 11 characters.",
        }),
    
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fName: "",
            lName: "",
            email:"",
            phone:""
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {


        console.log(data, "submit data...")


    }
  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">

            <div className='col-span-2 grid grid-cols-2 mt-6 gap-6'>
                    <div className='col-span-2 md:col-span-1'>
                       
                        
                        <FormField
                        control={form.control}
                        name="fName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>First Name</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder='First Name' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                       
                        <FormField
                        control={form.control}
                        name="lName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>Last Name</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder='Last Name' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                </div>

                <div className='col-span-2 grid grid-cols-2 gap-6 mt-6'>
                    <div className='col-span-2 md:col-span-1'>
                       
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>Email</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder='Email Address' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                    <div className='col-span-2 md:col-span-1 md:mt-0'>
                       
                        <FormField
                        control={form.control}
                        
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>Phone</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder='Phone Number' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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

            </form>

        </Form>
      
    </div>
  )
}

export default SignUpForm
