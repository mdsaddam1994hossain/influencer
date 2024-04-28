"use client"
import React, { FC, useState,useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaYoutube,FaTiktok,FaSnapchatSquare,FaInstagram,FaTwitter} from "react-icons/fa";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useQueryClient } from "@tanstack/react-query";

import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useCategories ,useTags,useCountry,useRegions} from '@/app/hook/useCategories'
import CustomFileUpload from '@/components/common/CustomFileUpload';
import { UseMutationInfluencerCategories,UseMutationInfluencerTags,UseMutationInfluencerRegions,UseMutationInfluencer } from '@/app/hook/useInfluencers'
import { useTranslation } from 'react-i18next'
import { IoClose } from "react-icons/io5";
import {useRouter} from "next/navigation"

 type Tuser={
    user:any;
 }

const InfluencerProfileEdit:FC<Tuser> = ({user}) => {
    const { t, i18n } = useTranslation()
    const {language} = i18n;
    const router = useRouter()
    const queryClient = useQueryClient()
    const [nickname, setNickname] = useState(user?.name || '');
    const {data:categorie}= useCategories()
    const {data:tags}= useTags()
    const {data:countries}= useCountry()
    const {data:regions}= useRegions()
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]); 
    const [selectedcategoryId,setSelectedcategoryId] = useState<number[]>([])
    const [selectedTagId,setSelectedTagId] = useState<number[]>([])
    const [selectedRegionId,setSelectedRegionId] = useState<number[]>([])
    

    // if(influencerData && influencerData?.length > 0){
    //     router.push("/")
    // }
   
    const categoriesLabel   = categorie?.map((item) => language ==="en" ? item?.name_en: item?.name_ar);
    const tagsLabel = tags?.map((item) => language ==="en" ? item?.name_en : item?.name_ar);
    const countriesLabel = countries?.map((item) =>  item?.name);
    const regionsLabel = regions?.map((item) => language ==="en" ? item?.name_en : item?.name_ar);


    const handleSelectCategory = (item:any) => {
        setSelectedCategories((prev:any) =>
          prev.includes(item) ? prev.filter((i:any) => i !== item) : [...prev, item]
        );

        const category = categorie?.find(value => value.name_en === item  || value.name_ar === item);
        if(category){
            setSelectedcategoryId((prev:any) =>
            prev.includes(category?.id) ? prev.filter((i:any) => i !== category?.id) : [...prev, category?.id]
        );
        }
       
       // return category ? category.id : null;
       
      };

      const handleSelectTag = (item:string) => {
        setSelectedTags((prev:any) =>
          prev.includes(item) ? prev.filter((i:any) => i !== item) : [...prev, item]
        );
        const tag = tags?.find(value => value.name_en === item || value.name_ar === item);
        if(tag){
            setSelectedTagId((prev:any) =>
            prev.includes(tag?.id) ? prev.filter((i:any) => i !== tag?.id) : [...prev, tag?.id]
        );
        }
      };
      
      const handleSelectRegion = (item:any) => {
        setSelectedRegions((prev:any) =>
          prev.includes(item) ? prev.filter((i:any) => i !== item) : [...prev, item]
        );
        const rigion = regions?.find(value => value.name_en === item || value.name_ar === item);
        if(rigion){
            setSelectedRegionId((prev:any) =>
            prev.includes(rigion?.id) ? prev.filter((i:any) => i !== rigion?.id) : [...prev, rigion?.id]
        );
        }
      };

    const FormSchema = z.object({

        name: z.string().min(4, {
            message: `${t("signup.fname_error")}`,
        }),
        overView: z.string().min(12, {
            message: `${t("common.input_field_error")}`,
        }),
        gender: z.enum(["Male", "Female"]),
        specialization: z.string().min(4, {
            message: `${t("common.input_field_error")}`,
        }),
        categories: z.enum(categoriesLabel as [string]),
        tags: z.enum(tagsLabel as [string]),
        countries: z.enum(countriesLabel as [string]),
        regions: z.enum(regionsLabel as [string]),

    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: user?.name,
            overView: "",
            gender: "" || undefined,
            specialization: "",
            categories: "" || undefined,
            tags: "" || undefined,
            countries: "" || undefined,
            regions: "" || undefined,
           
        },
    })

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {

        const userData:any = {
            name:data?.name,
            specialization:data?.specialization,
            gender:data?.gender,
            country:data?.countries
        }

        const insertCategory = await UseMutationInfluencerCategories(user?.id,selectedcategoryId)
        const insertTags = await UseMutationInfluencerTags(user?.id,selectedTagId)
        const insertRigions = await UseMutationInfluencerRegions(user?.id,selectedRegionId)
        const insertInfluencer = await UseMutationInfluencer(userData,user?.id)
        console.log("insertInfluencer=",insertInfluencer,"insertCategory=",insertCategory,"insertTags=",insertTags,"insertRigions=",insertRigions)
        if(insertInfluencer){
            queryClient.invalidateQueries(["singleInfluencer", user?.id] as any)
            router.push("/")
            
        }

        
       
       
    }


  return (
    <div className='px-4 md:px-20 lg:px-24 xl:px-36 2xl:px-44 my-12'>
        <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                   

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">{t("profileEdit.nickname")}</p>
                 <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        {/* <FormLabel className='text-blackDark text-base flex-shrink basis-1/5'>{t("signup.first_name")}</FormLabel> */}
                                        <FormControl>
                                            <Input className='my-2 focus:border-red-500 flex-grow' {...field} placeholder={`${t("signup.first_name")}`} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">{t("profileEdit.brief_overview")}</p>
                 <FormField
                                control={form.control}
                                name="overView"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Textarea className='my-2 focus:border-red-500 flex-grow' {...field}  />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
           
            </div>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6  mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">{t("profileEdit.gender")}</p>
                <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className=" w-full">
                                        
                                        {/* <FormLabel className='text-blackDark text-base'>{t("signup.company_field")}</FormLabel> */}
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>

                                                <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                    <SelectValue defaultValue={"male"} placeholder="Please choose" />
                                                </SelectTrigger>


                                            </FormControl>
                                            <SelectContent className='bg-white hover:bg-red-500 '>
                                                {
                                                    ["Male","Female"]?.map((item: string, index: number) => {
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
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">{t("profileEdit.specialization")}</p>
                 <FormField
                                control={form.control}
                                name="specialization"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        {/* <FormLabel className='text-blackDark text-base flex-shrink basis-1/5'>{t("signup.first_name")}</FormLabel> */}
                                        <FormControl>
                                            <Input className='my-2 focus:border-red-500 flex-grow' {...field}  />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
           
            </div>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 lg:mt-6'>
            <div className="grid grid-cols-10 items-center  ">
                <p className="col-span-2">{t("profileEdit.categories")}</p>
               
                
                {selectedCategories?.length > 0 && <div className="flex gap-2 flex-wrap col-span-8">   {selectedCategories.map((category, index) => (
                <div key={index} className="flex gap-2  px-2 py-1 bg-blackMedium text-white rounded-full ">
                    <span className="text-xs font-normal">{category}</span>
                    <span onClick={() => handleSelectCategory(category)}><IoClose /></span>
                </div>
                ))}
                </div>}
                       <FormField
                                control={form.control}
                                name="categories"
                                render={({ field }) => (
                                    <FormItem className=" w-full col-start-3 col-span-8">
                                        {/* <FormLabel className='text-blackDark text-base'>{t("signup.company_field")}</FormLabel> */}
                                        <Select  onValueChange={(value:any) =>{ handleSelectCategory(value)
                                        field.onChange(value)
                                       
                                    }}>
                                            <FormControl>

                                                <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                    <SelectValue  placeholder="Please choose" />
                                                </SelectTrigger>


                                            </FormControl>
                                            <SelectContent className='bg-white hover:bg-red-500 '>
                                                {
                                                    categorie?.map((category: any, index: number) => {
                                                        return (
                                                            <SelectItem  key={index} className='p-4 text-center' value={language ==="en" ? category?.name_en: category?.name_ar}>{language ==="en" ? category?.name_en: category?.name_ar}</SelectItem>
                                                        )
                                                    })
                                                }

                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
            </div>
            <div className="grid grid-cols-10 items-center ">
                 <p className="col-span-2">{t("profileEdit.tags")}</p>
                

              {selectedTags?.length > 0 && <div className="flex gap-2 flex-wrap col-span-8">   {selectedTags.map((tag, index) => (
                <div key={index} className="flex gap-2  px-2 py-1 bg-blackMedium text-white rounded-full ">
                    <span className="text-xs font-normal">{tag}</span>
                    <button onClick={() => handleSelectTag(tag)}><IoClose /></button>
                </div>
                ))}
                </div>}

                        <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem className=" w-full col-start-3 col-span-8 ">
                                        {/* <FormLabel className='text-blackDark text-base'>{t("signup.company_field")}</FormLabel> */}
                                        <Select onValueChange={(value) =>{ handleSelectTag(value)
                                        field.onChange(value)}
                                         }>
                                            <FormControl>

                                                <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                    <SelectValue defaultValue={"company"} placeholder="Please choose" />
                                                </SelectTrigger>


                                            </FormControl>
                                            <SelectContent className='bg-white hover:bg-red-500 '>
                                                {
                                                    tagsLabel?.map((item: string, index: number) => {
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
           
            </div>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">{t("profileEdit.country")}</p>
                
             <FormField
                                control={form.control}
                                name="countries"
                                render={({ field }) => (
                                    <FormItem className=" w-full">
                                        {/* <FormLabel className='text-blackDark text-base'>{t("signup.company_field")}</FormLabel> */}
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>

                                                <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                    <SelectValue defaultValue={"company"} placeholder="Please choose" />
                                                </SelectTrigger>


                                            </FormControl>
                                            <SelectContent className='bg-white hover:bg-red-500 '>
                                                {
                                                    countriesLabel?.map((item: string, index: number) => {
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
            </div>

            <div className="grid grid-cols-10 items-center ">
                 <p className="col-span-2">{t("profileEdit.regions")}</p>
                

{selectedRegions?.length > 0 && <div className="flex gap-2 flex-wrap col-span-8">   {selectedRegions.map((rigion, index) => (
                <div key={index} className="flex gap-2  px-2 py-1 bg-blackMedium text-white rounded-full ">
                    <span className="text-xs font-normal">{rigion}</span>
                    <button onClick={() => handleSelectRegion(rigion)}><IoClose /></button>
                </div>
                ))}
                </div>}

                  <FormField
                                control={form.control}
                                name="regions"
                                render={({ field }) => (
                                    <FormItem className=" w-full col-start-3 col-span-8 ">
                                        {/* <FormLabel className='text-blackDark text-base'>{t("signup.company_field")}</FormLabel> */}
                                        <Select  onValueChange={(value) =>{ handleSelectRegion(value)
                                        field.onChange(value)}
                                         }>
                                            <FormControl>

                                                <SelectTrigger className={`w-full  gap-1 px-2 mt-2  bg-transparent border h-14 `}>
                                                    <SelectValue defaultValue={"company"} placeholder="Please choose" />
                                                </SelectTrigger>


                                            </FormControl>
                                            <SelectContent className='bg-white hover:bg-red-500 '>
                                                {
                                                    regionsLabel?.map((item: string, index: number) => {
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
           
            </div>
       </div>
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 lg:mt-6'>
            <div className="flex gap-3 items-center ">
                <p className="flex-shrink basis-1/5">{t("profileEdit.cover")}</p>
               
                <div className="flex-grow   rounded-md flex w-full  items-center justify-center " >
                  <div className="w-full h-full mt-6">
                   <CustomFileUpload />
                    </div>
                </div>
            </div>
            <div className="flex gap-3 items-center ">
                 <p className="flex-shrink basis-1/5">{t("profileEdit.sample_content")}</p>
                 <div className="flex-grow grid grid-cols-2 lg:grid-cols-3 gap-4 " >
                  <CustomFileUpload />

                  <CustomFileUpload />

                </div>
           
            </div>
       </div>


       <div className="flex mt-6 gap-6">
          <p className="  text-center lg:text-left">{t("profileEdit.platforms")}</p>
          <div className="flex-grow mt-6">
           <p className="text-blackDark text-center">{t("profileEdit.plat_description")}</p>
 
                            {/* Youtype section */}
           <div className="grid grid-cols-1 lg:grid-cols-2 justify-between   gap-6 mt-6 ">

             <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
                <div className="flex items-center justify-center gap-6">
                   <FaYoutube size={36} className="text-red-500 text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder={`${t("profileEdit.followers_number")}`}/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder={`${t("profileEdit.account_link")}`}/>
                <p className='text-center mt-6'>{t("profileEdit.publication_type")}</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Product/service review video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                    <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Indirect advertising</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                    <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                    <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Live advertisement</div>
                    </div>
                </div>

            </div>

            {/* Tiktok section */}
            <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaTiktok  size={36} className="text-blackDark  text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder={`${t("profileEdit.followers_number")}`}/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder={`${t("profileEdit.account_link")}`}/>
                <p className='text-center mt-6'>{t("profileEdit.publication_type")}</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Cover with presence</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Coverage without attendance</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Indirect video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Live video</div>
                    </div>
                </div>

            </div>

            {/* snapchat section */}

            <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaSnapchatSquare  size={36} className="text-yellow-300  text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder={`${t("profileEdit.followers_number")}`}/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder={`${t("profileEdit.account_link")}`}/>
                <p className='text-center mt-6'>{t("profileEdit.publication_type")}</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Picture</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Cover with presence</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Coverage without attendance</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Coverage outside the influencer's city</div>
                    </div>
                </div>
                {/* percentage of influence section */}
                <div className="mt-10">
                    <p className="text-center">Percentage of influence</p>
                    <div className="flex justify-between gap-6 mt-2">
                        <div className="flex gap-2 items-center">
                            <Input className="h-10"/>
                            <p>Men</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Input className=" h-10"/>
                            <p>Women</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-center">Percentage for each country</p>
                    <div className="flex justify-between gap-6 mt-2">
                        <div className="flex gap-2 items-center">
                        <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-10 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {countries?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                        </div>
                        <div className="flex gap-2 items-center">
                         <p  className="w-full">The Percentage</p>
                            <Input className=" h-10" placeholder="%"/>
                           
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-center">Relating all interests</p>
                
                    <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-10 mt-2 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4 ">
                        <SelectGroup >
                        {tags?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                    
                </div>

                <div className="mt-6">
                    <p className="text-center">Interests Percentage</p>
                    <div className="flex justify-between gap-6 mt-2">
                        <div className="flex gap-2 items-center">
                        <Select onValueChange={(v)=>console.log(v,"v.....")}>
                    <SelectTrigger className="flex-grow border border-grayBorder px-4 h-10 ">
                        <SelectValue placeholder="Please select a country" />
                    </SelectTrigger>
                    <SelectContent className="flex-grow p-4">
                        <SelectGroup >
                        {tags?.map((item,index)=>{
                                return(
                                    <SelectItem key={index} className="py-1" value={item.name}>{item.name}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                   </Select>
                        </div>
                        <div className="flex gap-2 items-center">
                         <p  className="w-full">The Percentage</p>
                            <Input className=" h-10" placeholder="%"/>
                           
                        </div>
                    </div>
                </div>

            </div>

            {/* instagram section  start*/}

            <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaInstagram  size={36} className="text-pink-600" />
                    <Input className="w-40 h-10 text-xs" placeholder={`${t("profileEdit.followers_number")}`}/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder={`${t("profileEdit.account_link")}`}/>
                <p className='text-center mt-6'>{t("profileEdit.publication_type")}</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Video</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Picture</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Story</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>High light</div>
                    </div>
                </div>

            </div>
             {/* instragram section  end*/}
              {/* twitter section start */}
             <div className='bg-white px-8 py-12 shadow-custom rounded-lg w-full '>
              <div className="flex items-center justify-center gap-6">
                   <FaTwitter  size={32} className="text-sky-500  text-lg" />
                    <Input className="w-40 h-10 text-xs" placeholder={`${t("profileEdit.followers_number")}`}/>
                </div>
                <Input className="w-40 h-10 text-xs mt-6" placeholder={`${t("profileEdit.account_link")}`}/>
                <p className='text-center mt-6'>{t("profileEdit.publication_type")}</p>

                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Care</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Tweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Retweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Quote Tweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Pinned tweet</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Installed header</div>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className='col-span-1'>
                    <Input className="w-full h-10 text-xs" placeholder="Enter the advertisement"/>
                    </div>
                    <div className='col-span-3'>
                     <div className='h-10 w-full rounded-md text-sm  bg-blackDark text-center flex justify-center text-white items-center  '>Mention</div>
                    </div>
                </div>

            </div>

            {/* twiter section end  */}

           </div>

           <div className="flex flex-col lg:flex-row gap-6 justify-between mt-6">
                <Button className="w-full bg-yellow-500 text-white">Save changes </Button>
       
                <Button className="w-full bg-yellow-500 text-blackDark hover:text-white">Save and continue later </Button>
            </div>
           
          </div>  
     
                
        </div>
      
      
        </form>
                    </Form>



    </div>
  )
}

export default InfluencerProfileEdit
