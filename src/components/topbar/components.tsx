"use client"

import clsx from "clsx";
import { ChevronDown, Menu, Search, ShoppingCart, User } from "lucide-react"

import { BannerTypes } from "@/utils/types"
import { useTopBannersStore } from "@/zustand/useTopBannersStore";

import { cn } from "@/utils/cn"
import { buttonVariants, ButtonInterface } from "../UI/Button"


interface TopBarButton extends ButtonInterface{
    controllBanner: BannerTypes;
    buttonLabel: "Brands" | "UserIcon" | "ShoppingCartIcon"| "SearchIcon" | "MenuIcon";
}
export const TopBarButton = ({ className, variant, size, buttonLabel, controllBanner }: TopBarButton) => {
    const bannerStore = useTopBannersStore();
    const child = () => {
        switch (buttonLabel) {
            case "Brands":
                return buttonLabel;
            case "SearchIcon":
                return <Search />
            case "ShoppingCartIcon":
                return <ShoppingCart />
            case "UserIcon":
                return <User />
            case "MenuIcon":
                return <Menu/>
        }
    }
    // open the relevant banner when clicked
    const openRelBanner = () => {
        switch (controllBanner) {
            case "BrandsBanner":
                bannerStore.openBrandBanner();
                break;
            case "CartBanner":
                bannerStore.openCartBanner();
                break;
            case "SearchBanner":
                bannerStore.openSearchBanner();
                break;
            case "UserProfileBanner":
                bannerStore.openUserProfileBanner()
                break;
            default:
                console.error("wrong banner type");
                break;
        }
        if (bannerStore.activeBanner == controllBanner) bannerStore.closeEntireBanner();
    }
    const isActive: boolean = bannerStore.activeBanner == controllBanner;
    return (
        <button className={cn(buttonVariants({ variant, size, className}), clsx("transition-colors duration-200 ease-in-out", {"text-[var(--text-color-decor)]":isActive && buttonLabel=="Brands"}))} onClick={openRelBanner}>
            {child()}
            {buttonLabel == "Brands" && <ChevronDown className={ clsx("w-[20px] h-[20px] transition-transform duration-200 ease-in-out", {"rotate-180":isActive}) } />}
        </button>
    )
}