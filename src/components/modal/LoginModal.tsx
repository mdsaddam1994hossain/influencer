import React,{FC} from 'react'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from 'react-i18next'
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
import { signInWithCradential } from '@/lib/actions'
import useAppStore from '@/store'
import Link from 'next/link'

type Props = {
    isOpen:boolean,
    setIsOpen:(v:boolean)=>void;
}
const LoginModal:FC<Props> = ({isOpen,setIsOpen}) => {
    const {t,i18n} = useTranslation()
    const {language} = i18n;
    const isLoading = useAppStore((state)=>state.isLoading)
    const setIsLoading = useAppStore((state)=>state.setIsLoading)
    const setIsLogin = useAppStore((state)=>state.setIsLogin)
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
        setIsLoading(true)
        const result:any = await signInWithCradential(data?.email,data?.password)
        setIsLoading(false)

        if(result.status === 400){
            console.log("print if block")
            toast({
                duration:2000,
                 description: (
                     <pre  >
                      {result?.message}
                     </pre>
                 ),
             })
        }else{
            setIsLogin(true)
            setIsOpen(false)
           } 
    }
 
  return (
    <AlertDialog open={isOpen} >

      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}

      <AlertDialogContent className="w-[448px]">

     
      <p className=' font-extrabold text-xl text-blackDark_3 font-montserratArabic'> {t("login.title")}</p>
      
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
                
               <Button className="bg-blackDark rounded-md text-base font-bold w-full h-10">{isLoading ? "Loading..." : `${t("login.login")}`} </Button>
            </form>
        </Form>
        <p className="text-center text-blackDark">{t("common.donot_account")}<Link href="/login"> <span className='font-bold'>{t("nav.join")} </span></Link> </p>
        
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LoginModal
