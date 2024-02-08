"use client"
import { useTopBannersStore } from "@/zustand/useTopBannersStore";
import { cn } from "@/utils/cn";
import clsx from "clsx";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";

export const Banner = ({ className }: {
    className: string;
}) => {
    const bannerStore = useTopBannersStore();
    return (
        <div className={cn("transition-[opacity, transform] duration-200 ease-in-out", className, clsx({
            "opacity-100 visible -translate-y-0": bannerStore.activeBanner != null,
            "opacity-0 invisible -translate-y-6": bannerStore.activeBanner == null,
        }))}>
            {/* BLURRED BACKGROUND */}
            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm" />
            
            {/* BANNER CONTENT */}
            <div className="absolute top-0 left-0 h-fit w-full bg-white">
                <MaxWidthWrapper className="py-2">
                banner content
                </MaxWidthWrapper>
            </div>
        </div>
    )
}