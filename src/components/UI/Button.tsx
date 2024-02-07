import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

export const buttonVariants = cva(
    "transition-colors duration-200 ease-in-out cursor-pointer flex flex-row items-center justify-center",
    {
        variants: {
            variant: {
                ghost:"bg-transparent hover:bg-slate-300 rounded-md"
            },
            size: {
                medium:"px-2 py-1"
            }
        },
        defaultVariants:{}
    }
)

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>{
    className?: string;
    children?: ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonInterface>(
    ({className, children, size, variant}, ref) => {
        return (
            <button
            className={cn(buttonVariants({variant, size}))}
            ref={ref}
        >
            {children}
        </button>)
    }
)