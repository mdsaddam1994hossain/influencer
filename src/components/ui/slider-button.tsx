// Button.tsx

import React, { ButtonHTMLAttributes } from 'react';

import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props, if any

}

const SliderButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={cn("group overflow-hidden relative flex justify-center items-center rounded-md relative h-14 px-12 hover:bg-red-500 bg-red-500 text-white cursor-pointer")} {...props}>
            <span className={cn`(text-lg font-semibold`} >{children}</span>
            <span className="absolute top-0 -inset-full h-full w-full z-5 block transform -skew-x-0 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine group-focus-within:animate-shine2 " />
        </button>
    );
};

export default SliderButton;
