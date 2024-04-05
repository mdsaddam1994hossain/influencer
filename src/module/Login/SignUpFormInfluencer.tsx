"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast"
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
import SliderButton from '@/components/ui/slider-button'
import { useTranslation } from 'react-i18next'
import { insertDataAsInfluencerOrAdvertiser, signUpWithCradential } from '@/lib/actions'
import useAppStore from '@/store'
import PageLoading from '@/components/common/PageLoading'
import PhoneInput from 'react-phone-input-2'



const  SignUpFormInfluencer = () => {
    const {t,i18n} = useTranslation()
    const {language} = i18n;
    const setIsLogin = useAppStore((state)=>state.setIsLogin)
    const isLoading = useAppStore((state)=>state.isLoading)
    const setIsLoading = useAppStore((state)=>state.setIsLoading)
    const   userType = useAppStore((state)=> state.userType)
    const router = useRouter()
    const FormSchema = z.object({

        name: z.string().min(4, {
            message: `${t("signup.fname_error")}`,
        }),
        email: z.string().min(8, {
            message: `${t("login.email_error_message")}`,
        }),
        phone: z.string().min(6, {
            message: `${t("signup.phone_error")}`,
        }),
        password: z.string().min(6, {
            message: `${t("signup.password_error")}`,
        }),
        confirm_password: z.string().min(6, {
            message: `${t("signup.confirm_password_error")}`,
        }),  
    
    }).refine((data) => {
        return data.password === data.confirm_password
    }, {
        message: `${t("signup.confirm_password_error")}`,
        path: ["confirm_password"]
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email:"",
            phone:"",
            password:"",
            confirm_password:""
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
  
       
            setIsLoading(true)
            const result:any = await signUpWithCradential(data?.email,data?.password)
            console.log(result)
       
       if(result?.status === 422){
        setIsLoading(false)
        toast({
            duration:2000,
             description: (
                 <pre  >
                  <p className='text-red-500 font-medium  text-center'>{result.message}</p>
                 </pre>
             ),
         })
         form.reset();
       }else{
        const verify:any = result && await insertDataAsInfluencerOrAdvertiser(result,userType,data)
        setIsLoading(false)
                setIsLogin(true)
                form.reset();
                if(verify[0]?.type === "individual"){
                    router.push("/")
                }else if(verify[0]?.type != "individual" && (verify[0]?.category_id === null || verify[0]?.country)  ){
                    router.push("/profileEdit")
                }else{ 
                    router.push("/")
                }
       }

        
        
       

    }

   
  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">

            <div className='col-span-2 grid grid-cols-2 mt-6 gap-6'>
                    <div className='col-span-2'>
                       
                        
                        <FormField
                        control={form.control}
                        name="name"
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
                    
                </div>

                <div className='col-span-2 grid grid-cols-2 gap-6 mt-6'>
                    <div className='col-span-2 '>
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
                </div>
                <div className='col-span-2 grid grid-cols-2 gap-6 mt-6'>
                    <div className='col-span-2 '>
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>{t("common.phone")}</FormLabel>
                                <FormControl>
                                <PhoneInput                              
                                     country={'sa'}
                                       {...field}
                                    
                                    />
                                    
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
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>{t("common.password")}</FormLabel>
                                <FormControl>
                                    <Input type="password" className='my-2 focus:border-red-500' {...field} placeholder={`${t("common.password")}`} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                    <FormField
                        control={form.control}
                        name="confirm_password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>{t("common.confirm_password")}</FormLabel>
                                <FormControl>
                                    <Input type="password" className='my-2 focus:border-red-500' {...field} placeholder={`${t("common.confirm_password")}`} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    {/* <p className='text-red-500 '> {t("common.forgot_password")}</p> */}
                </div>
                {/* <Button className='bg-red-500 hover:bg-red-600 mt-4 font-medium text-lg w-full h-14'>Create Account</Button> */}
                <SliderButton loading={isLoading} label="common.create_account" btnStyle="w-full mt-4 font-medium text-lg w-full h-14" />

                <p className='mt-6 text-center text-blackLight'>{t("signup.already_account")} <span className=' text-blackDark cursor-pointer hover:text-red-500' onClick={() => router.push("/login")}>{t("login.login")}</span></p>

            </form>

        </Form>
      
    </div>
  )
}

export default  SignUpFormInfluencer

