import { cn } from "@/utils/cn"
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper"
import Link from "next/link"
import { TopBarButton } from "./components"
export const TopBar = ({
    className
}: {
    className:string
    }) => {
    return (
        <div className={cn("border-b border-slate-300", className)}>
            <MaxWidthWrapper className="flex flex-row justify-between items-center h-full">
                {/* LOGO/HOME LINK & BRANDS BUTTON */}
                <div className="w-fit flex flex-row justify-center gap-6 items-center">
                    <Link href={"/"} className="w-fit">
                    <div className="w-fit cursor-pointer">
                        <span className="text-3xl text-[var(--text-color-decor)]">S</span>
                        <span className="text-2xl">neak</span>
                        <span className="text-3xl text-[var(--text-color-decor)]">.</span>
                    </div>
                    </Link>
                    <TopBarButton buttonLabel="Brands" controllBanner="BrandsBanner" className="hidden sm:flex"/>
                </div>

                {/* ICONS */}
                <div className="w-fit flex flex-row justify-center gap-3 items-center">
                    <TopBarButton buttonLabel="SearchIcon" controllBanner="SearchBanner" />
                    <TopBarButton buttonLabel="ShoppingCartIcon" controllBanner="CartBanner" />
                    <TopBarButton buttonLabel="UserIcon" controllBanner="UserProfileBanner" />
                    <TopBarButton buttonLabel="MenuIcon" controllBanner="BrandsBanner" className="sm:hidden"/>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}