import { create } from 'zustand';

export interface FooterItem {
    text: string;
    link: string;
    subReferences?: FooterItem[];
}
  
type FooterStore = {
    footerData: FooterItem[];
    setFooterData: (data: FooterItem[]) => void;
};

export const useFooterStore = create<FooterStore>((set) => ({
    footerData: [],
    setFooterData: (data) => set({ footerData: data }),
}));
