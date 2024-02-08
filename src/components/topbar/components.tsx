"use client"

import { Menu, Search, ShoppingCart, User } from "lucide-react"

import { BannerTypes } from "@/utils/types"
import { useTopBannersStore } from "@/zustand/useTopBannersStore";

import { cn } from "@/utils/cn"
import { buttonVariants, ButtonInterface } from "../UI/Button"


interface TopBarButtonInterface extends ButtonInterface{
    controllBanner: BannerTypes;
    buttonLabel: "UserIcon" | "ShoppingCartIcon"| "SearchIcon" | "MenuIcon";
}
export const TopBarButton = ({ className, variant, size, buttonLabel, controllBanner }: TopBarButtonInterface) => {
    const bannerStore = useTopBannersStore();
    const child = () => {
        switch (buttonLabel) {
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
        <button className={cn(buttonVariants({ variant, size, className}))} onClick={openRelBanner}>
            {child()}
        </button>
    )
}