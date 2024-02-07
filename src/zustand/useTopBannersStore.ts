import { create } from "zustand";
import { BannerTypes } from "@/utils/types";

export const useTopBannersStore = create<{
    activeBanner: BannerTypes | null;
    closeEntireBanner: () => void;
    openBrandBanner: () => void;
    openCartBanner: () => void;
    openSearchBanner: () => void;
    openUserProfileBanner: () => void;
}>(set => ({
    activeBanner: null,
    closeEntireBanner: () => set(() => ({ activeBanner: null })),
    openBrandBanner: () => set(() => ({ activeBanner: "BrandsBanner" })),
    openCartBanner: () => set(() => ({ activeBanner: "CartBanner" })),
    openSearchBanner: () => set(() => ({ activeBanner: "SearchBanner" })),
    openUserProfileBanner:()=>set(()=>({activeBanner:"UserProfileBanner"}))
}))