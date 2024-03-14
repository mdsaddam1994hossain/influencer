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
import SliderButton from '@/components/ui/slider-button'
import { useTranslation } from 'react-i18next'


const SignUpForm = () => {
    const {t,i18n} = useTranslation()
    const {language} = i18n;
    const router = useRouter()
    const FormSchema = z.object({

        fName: z.string().min(8, {
            message: `${t("signup.fname_error")}`,
        }),
        lName: z.string().min(8, {
            message: `${t("signup.lname_error")}`,
        }),
        email: z.string().min(8, {
            message: `${t("login.email_error_message")}`,
        }),
        phone: z.string().min(6, {
            message: `${t("signup.phone_error")}`,
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
                                <FormLabel className='text-blackDark text-base'>{t("signup.first_name")}</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder={`${t("signup.first_name")}`} />
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
                                <FormLabel className='text-blackDark text-base'>{t("signup.last_name")}</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder={`${t("signup.last_name")}`} />
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
                                <FormLabel className='text-blackDark text-base'>{t("common.email")}</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder='infoyour@gmail.com' />
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
                                <FormLabel className='text-blackDark text-base'>{t("common.phone")}</FormLabel>
                                <FormControl>
                                    <Input className='my-2 focus:border-red-500' {...field} placeholder={`${t("common.phone_placeholder")}`}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                </div>

                <div className='col-span-2 mt-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p>{t("signup.country")}</p>
                        <Select >
                            <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
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
                        <p>{t("signup.address")}</p>
                        <Input placeholder={`${t('signup.address')}`} className='mt-2' />
                    </div>

                </div>

                <div className='col-span-2 grid grid-cols-2 gap-6 mt-6'>
                    <div className='col-span-2 md:col-span-1'>
                        <p>{t("signup.town")}</p>
                        <Select >
                            <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                <SelectValue defaultValue={"riad"} placeholder="Riad"  />
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
                        <p>{t("signup.post")}</p>
                        <Input placeholder={t("signup.post")} className='mt-2' />
                    </div>
                </div>

                <div className='flex justify-between my-6 '>
                    <div className='flex gap-2 justify-center'>
                        <div className="flex items-center ">
                            <Checkbox id="terms" className={`border-blackLight -mt-[2px] ${language === "en" ? "mr-2" : "ml-2"}`} />
                            <label
                                htmlFor="terms"
                                className="text-blackLight "
                            >
                                {t("common.remember_me")}
                            </label>
                        </div>
                    </div>
                    <p className='text-red-500 '> {t("common.forgot_password")}</p>
                </div>
                {/* <Button className='bg-red-500 hover:bg-red-600 mt-4 font-medium text-lg w-full h-14'>Create Account</Button> */}
                <SliderButton label="common.create_account" btnStyle="w-full mt-4 font-medium text-lg w-full h-14" />

                <p className='mt-6 text-center text-blackLight'>{t("signup.already_account")} <span className=' text-blackDark cursor-pointer hover:text-red-500' onClick={() => router.push("/login")}>{t("login.login")}</span></p>

            </form>

        </Form>
      
    </div>
  )
}

export default SignUpForm
