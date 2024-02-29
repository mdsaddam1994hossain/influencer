"use client"
import React from 'react'

import { Phone, Mail, MapPin } from "lucide-react"
import Image from 'next/image'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SliderButton from '@/components/ui/slider-button'
import { Label } from '@/components/ui/label';


const FormSchema = z.object({
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    phone: z.string().min(9, {
        message: "phone must be at least 9 characters.",
    }),
    email: z.string().min(8, {
        message: "email must be at least 8 characters.",
    }),
    subject: z.string().min(8, {
        message: "subject must be at least 12 characters.",
    }),
    message: z.string().min(20, {
        message: "message must be at least 20 characters.",
    }),
})

const Contact = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {


        console.log(data, "submit data...")


    }

    return (
        <div className='my-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
                <div className='lg:col-span-1  relative lg:my-8' >
                    <Image src={"/images/in-bread-bg.jpg"} alt='error' height={450} width={500} className='w-full h-full absolute -z-10 rounded-xl' objectFit='cover' />
                    <div className=' p-6 lg:p-10'>
                        <p className='text-3xl lg:text-4xl text-blackDark font-semibold'>Contact Info</p>
                        <p className='text-blackDark mt-1'>Our Contact Info and we'll respond as soon as possible</p>
                        <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
                            <div className='lg:col-span-1 '>
                                <div className='w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center'>
                                    <Phone color='red' />
                                </div>
                                <div className='mt-3'>
                                    <p className='text-lg font-medium text-blackDark'>+966 9200 31888</p>
                                    <p className='text-lg font-medium text-blackDark'>+966 9200 31888</p>
                                </div>
                            </div>
                            <div className='lg:col-span-1 mt-6 lg:mt-0'>
                                <div className='w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center'>
                                    <Mail color='red' />
                                </div>
                                <div className='mt-3'>
                                    <p className='text-lg font-medium text-blackDark'>support@moalen.sa</p>
                                    <p className='text-lg font-medium text-blackDark'>support@moalen.sa</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='w-[60px] h-[60px] mt-6 rounded-full bg-white flex justify-center items-center'>
                                <MapPin color='red' />
                            </div>
                            <div className='mt-3'>
                                <p className='text-lg font-medium text-blackDark'>Kingdom of Saudi Arabia</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='lg:col-span-1 mt-6 lg:mt-0 shadow-custom bg-white p-6 lg:p-10 rounded-xl'>
                    <p className='text-3xl lg:text-4xl text-blackDark font-semibold'>Feel Free to Get in Touch</p>
                    
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                             <span className='grid grid-cols-1 lg:grid-cols-2 mt-6 gap-2 lg:gap-4'>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter name" {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Phone number" {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Enter email" {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your Subject" {...field} className='w-full col-span-1 focus:border-red-500 ' />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                
                                {/* <Button type="submit">Submit</Button> */}
                                </span>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea  placeholder="Write your message" {...field} className='w-full focus:border-red-500' />
                                            </FormControl>
                                            {/* <FormDescription>
                                                This is your public display name.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <SliderButton label='Contact Us' />
                            </form>
                        </Form>

                    
                </div>

            </div>
        </div>
    )
}

export default Contact
