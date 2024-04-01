"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import SliderButton from '@/components/ui/slider-button'
import { useTranslation } from 'react-i18next'
import { signInWithCradential } from '@/lib/actions'
import useAppStore from '@/store'




const LoginForm = () => {
    const {t,i18n} = useTranslation()
    const {language} = i18n;
    const isLoading = useAppStore((state)=>state.isLoading)
    const setIsLogin = useAppStore((state)=>state.setIsLogin)
    const setIsLoading = useAppStore((state)=>state.setIsLoading)
    const router = useRouter()
    const FormSchema = z.object({

        email: z.string().min(8, {
            message: `${t("login.email_error_message")}`,
        }),
        password: z.string().min(6, {
            message: `${t("login.password_error_message")}`,
        }),
    
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
      
       const result:any = await signInWithCradential(data.email,data.password) 
        if(result.status === 400){
            toast({
                duration:1000,
                 description: (
                     <pre  >
                      {result.message}
                     </pre>
                 ),
             })
        }else{
            router.push("/")
           }

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
                                <FormLabel className='text-blackDark text-base'>{t("common.email")}</FormLabel>
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
                                <FormLabel className='text-blackDark mt-2 text-base'>{t("common.password")}</FormLabel>
                                <FormControl>
                                    <Input placeholder='●●●●●●●●' {...field} className=' my-2 focus:border-red-500' type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

               <div className='flex justify-between my-6 '>
                    <div className='flex gap-2 justify-center'>
                        <div className="flex items-center ">
                            <Checkbox id="terms" className={`border-blackLight -mt-[2px] rounded-[2px] ${language === "en" ? "mr-2" : "ml-2"}`} />
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
                <SliderButton label="login.button_label" btnStyle="w-full mt-4 font-medium text-lg w-full h-14" />
                {/* <Button className='bg-red-500 mt-4 font-medium text-lg w-full h-14 hover:bg-red-600'>Log In</Button> */}
            </form>
        </Form>
    )
}

export default LoginForm
