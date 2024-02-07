import { cn } from "@/utils/cn";
import { ReactNode } from "react";


// TO MAKE SURE THE ENTIRE WEBSITE COMPONENTS COVERS EQUAL WIDTH
export const MaxWidthWrapper = ({ className, children }: {
    className?: string;
    children: ReactNode;
}) => {
    return <div className={cn("px-5 sm:px-10 w-full", className)}>{children}</div>
}