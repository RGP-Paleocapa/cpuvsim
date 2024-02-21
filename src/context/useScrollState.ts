import { create } from 'zustand';

type ScrollState = {
    scrollPosition: number;
    setScrollPosition: (position: number) => void;
}

export const useScrollState = create<ScrollState>((set) => ({
    scrollPosition: 0,
    setScrollPosition: (position) => set({ scrollPosition: position }),
}));