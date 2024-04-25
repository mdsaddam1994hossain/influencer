"use client"
import React from 'react'
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
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectSeparator
} from '@/components/ui/select';
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'
import { UseMutationContact } from '@/app/hook/useContact'
import { toast } from '@/components/ui/use-toast'
import { useFields } from '@/app/hook/useFields'
import { updateUserInformation } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import useAppStore from '@/store';




const MyFile = ({user}:any) => {

    const { t,i18n} = useTranslation()
    const {language} = i18n;
    const router = useRouter()
    const setLoginUser = useAppStore((state)=>state.setLoginUser)
    const { data }:any = useFields()
    const companyFields =  data?.map((item: any) => {
        if (language === "en") {
            return item.name_en
        } else {
            return item.name_ar
        }
    })

    const FormSchema = z.object({
        company_name: z.string().min(2, {
            message: "name must be at least 2 characters.",
        }),
        company_field: z.enum(companyFields),
        name: z.string().min(2, {
            message: "name must be at least 2 characters.",
        }),
        website: z.string().min(2, {
            message: "name must be at least 2 characters.",
        }),
        type: z.enum(["company", "agency"]),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            company_name: user?.company_name,
            company_field: user?.company_field,
            name: user?.name,
            website: user?.website,
            type: user?.company_type,
           
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {

        const result : any = await updateUserInformation(user?.id,data)
         
        if(result){
         setLoginUser(result[0] as any)
         toast({
             duration:2000,
              description: (
                  <pre className="text-green-500" >
                   Successfully update your information.
                  </pre>
              ),
          })
          router.push("/")
        }
 
     }

    console.log(user,"....==================")
  return (
    <div className="lg:px-40">

        <div className='flex gap-4 items-center h-10'>
          <div className='h-10 bg-yellow-500 w-2'></div>
          <p>My file</p>
        </div>

        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-6 lg:mt-12 space-y-4">
                             
                                <FormField
                                    control={form.control}
                                    name="company_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>{t("common.name")}</FormLabel> */}
                                            <FormLabel>Company Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t("common.name_placeholder")} {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                               <FormField
                                control={form.control}
                                name="company_field"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-blackDark '>{t("signup.company_field")}</FormLabel>
                                        <Select defaultValue={user?.company_field} onValueChange={field.onChange}>
                                            <FormControl>

                                                <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                    <SelectValue  placeholder="Please choose" />
                                                </SelectTrigger>


                                            </FormControl>
                                            <SelectContent className='bg-white hover:bg-red-500 '>
                                                {
                                                    companyFields?.map((item: string, index: number) => {
                                                        return (
                                                            <SelectItem key={index} className='p-4 text-center' value={item}>{item}</SelectItem>
                                                        )
                                                    })
                                                }



                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>{t("common.name")}</FormLabel> */}
                                            <FormLabel>Responsible Person</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t("common.name_placeholder")} {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            {/* <FormLabel>{t("common.name")}</FormLabel> */}
                                            <FormLabel>Website</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t("common.name_placeholder")} {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-blackDark text-base'>{t("signup.type")}</FormLabel>
                                            <Select defaultValue={user?.company_type}  onValueChange={field.onChange}>
                                                <FormControl>

                                                    <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                        <SelectValue  placeholder="Please choose" />
                                                    </SelectTrigger>


                                                </FormControl>
                                                <SelectContent className='bg-white hover:bg-red-500 '>

                                                    <SelectItem className='p-4 text-center' value="company">Company</SelectItem>
                                                    <SelectItem className='p-4' value="agency">Agency</SelectItem>

                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                              <div className="lg:mx-20"> <Button className=" w-full">Send</Button></div>
                            </form>
                        </Form>
      
    </div>
  )
}

export default MyFile
