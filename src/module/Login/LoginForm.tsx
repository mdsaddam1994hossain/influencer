"use client"
import React from 'react'
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
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'


const FormSchema = z.object({

    email: z.string().min(8, {
        message: "email must be at least 8 characters.",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),

})

const LoginForm = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {


        console.log(data, "submit data...")


    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <div className='w-full mt-6'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>Email</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder='infoyour@gmail.com' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark mt-2 text-base'>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder='...........' {...field} className=' my-2 focus:border-red-500' type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                <Button className='bg-red-500 mt-4 font-medium text-lg w-full h-14 hover:bg-red-600'>Log In</Button>
            </form>
        </Form>
    )
}

export default LoginForm
