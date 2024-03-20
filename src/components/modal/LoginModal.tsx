import React,{FC} from 'react'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from 'react-i18next'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import LoginForm from '@/module/Login/LoginForm'
import { Button } from '../ui/button'

type Props = {
    isOpen:boolean
}
const LoginModal:FC<Props> = ({isOpen}) => {
    const {t,i18n} = useTranslation()
    const {language} = i18n;
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


        console.log(data, "submit data...")


    }
  return (
    <AlertDialog open={isOpen} >

      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}

      <AlertDialogContent className="w-[448px]">

     
      <p className='font-bolder text-xl text-blackDark_3'> {t("login.title")}</p>
      
      <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                <div className='w-full mt-0'>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-blackDark text-base'>{t("common.email")}</FormLabel>
                                <FormControl>
                                    <Input className='h-10 focus:border-blackDark' {...field} placeholder='infoyour@gmail.com' />
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
                                <FormLabel className='text-blackDark text-base'>{t("common.password")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("common.password")} {...field} className=' h-10 focus:border-blackDark' type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

               <p className={`${language === "ar" ? " text-left " : "text-right"}`}>{t("login.password_forgot")}</p>
                
               <Button className="bg-blackDark rounded-md text-base font-bold w-full h-10"> {t("login.login")}</Button>
            </form>
        </Form>
        <p className="text-center text-blackDark">{t("common.donot_account")} <span className='font-bold'>{t("nav.join")} </span></p>
        
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LoginModal
