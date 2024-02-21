import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { create } from 'zustand';

// Define the scroll state and its actions
type ScrollState = {
    scrollPosition: number;
    setScrollPosition: (position: number) => void;
};

export const useScrollState = create<ScrollState>((set) => ({
    scrollPosition: 0,
    setScrollPosition: (position) => set({ scrollPosition: position }),
}));

// Custom hook to reset scroll position on route change
export function useResetScrollOnRouteChange() {
    const location = useLocation();
    const { setScrollPosition } = useScrollState();

    useEffect(() => {
        setScrollPosition(0);
    }, [location, setScrollPosition]);
}
