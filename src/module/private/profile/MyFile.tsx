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
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'


const FormSchema = z.object({
    company_name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    company_field: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    website: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
    type: z.string().min(2, {
        message: "name must be at least 2 characters.",
    }),
})

const MyFile = ({user}:any) => {

    const { t} = useTranslation()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            company_name: "",
            company_field: "",
            name: "",
            website: "",
            type: "",
           
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {

        const result = await UseMutationContact(data)
 
        if(result){
         toast({
             duration:2000,
              description: (
                  <pre className="text-green-500" >
                   Your message has been sent and you will be answered as soon as possible.
                  </pre>
              ),
          })
          form.reset();
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
                                            {/* <FormLabel>{t("common.name")}</FormLabel> */}
                                            <FormLabel>Company Field</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t("common.name_placeholder")} {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
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
                                            {/* <FormLabel>{t("common.name")}</FormLabel> */}
                                            <FormLabel>Type</FormLabel>
                                            <FormControl>
                                                <Input value={user?.company_type} placeholder={t("common.name_placeholder")} {...field} className='w-full col-span-1 focus:border-red-500' />
                                            </FormControl>
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
