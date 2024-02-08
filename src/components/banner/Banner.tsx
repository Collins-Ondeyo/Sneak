"use client"
import { useTopBannersStore } from "@/zustand/useTopBannersStore";
import { cn } from "@/utils/cn";
import clsx from "clsx";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";

import { Brands } from "./bannerComponents/Brands";
import { Cart } from "./bannerComponents/Cart";
import { Search } from "./bannerComponents/Search";
import { UserProfile } from "./bannerComponents/UserProfile";

export const Banner = ({ className }: {
    className: string;
}) => {
    const bannerStore = useTopBannersStore();
    const child = () => {
        switch (bannerStore.activeBanner) {
            case "BrandsBanner":
                return <Brands />
            case "CartBanner":
                return <Cart />
            case "SearchBanner":
                return <Search />
            case "UserProfileBanner":
                return <UserProfile />
            default:
                console.error("Wrong banner")
                break;
        }
    }
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
                    {child()}
                </MaxWidthWrapper>
            </div>
        </div>
    )
}