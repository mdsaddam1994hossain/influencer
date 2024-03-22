import React, { useState } from 'react';

import Image from 'next/image';
import {  X } from "lucide-react";

import { Input } from '@/components/ui/input';
import serach from "../../../public/images/li_search.png"

const SearchComponent = () => {
  const [edit, setEdit] = useState(false);

  return (
    < >
     {!edit ? <Image onClick={()=>setEdit(true)} src={serach} height={20} width={20} className="h-[20px] w-[20px]" alt='l' /> :
             <div className='relative'>
               <Input className='w-[200px] h-11 rounded-none pr-8 transition-all duration-1000 '/>
               
                <X  onClick={()=>setEdit(false)}  className="h-[20px] w-[20px] absolute top-3 right-2"  /> 
              
             </div>
            }
    </>
  );
};

export default SearchComponent;
