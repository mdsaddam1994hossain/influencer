// Button.tsx

import React, { ButtonHTMLAttributes } from 'react';

import { useTranslation } from 'react-i18next'

import { cn } from "@/lib/utils"
import { Button } from './button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props, if any
    label: string;
    btnStyle?: string;
    labelStyle?: string;
    variant?: string | any;
    loading?: boolean

}

const SliderButton: React.FC<ButtonProps> = ({ label, children, btnStyle, labelStyle, loading, variant = "default", ...props }) => {
    const { t } = useTranslation()
    return (
        <Button variant={variant || "default"} className={cn("group overflow-hidden flex justify-center items-center relative h-14 px-8 hover:bg-red-500 bg-red-500 text-white cursor-pointer", btnStyle)} {...props}>
            <span className={cn("text-lg font-semibold", labelStyle)}> {loading ? <div className="flex items-center">
                <span className="dot-flashing"></span>
                <span className="dot-flashing"></span>
                <span className="dot-flashing"></span>
            </div> : t(label)} </span>
            <span className="absolute top-0 -inset-full h-full w-full z-5 block transform -skew-x-0  bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine group-focus-within:animate-shine2 " />
        </Button>
    );
};

export default SliderButton;
