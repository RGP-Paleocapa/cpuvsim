import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    // Directly initialize the theme based on localStorage or system preference
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        const storedTheme = localStorage.getItem('theme') as 'dark' | 'light';
        if (storedTheme) return storedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    });

    useEffect(() => {
        // Apply the theme class to the document and store user preference
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);

        // System theme change listener setup
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const themeChangeListener = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', themeChangeListener);

        return () => mediaQuery.removeEventListener('change', themeChangeListener);
    }, [theme]);

    const handleThemeSwitch = () => setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');

    return (
        <button
            className={`text-xl p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={handleThemeSwitch}
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeSwitcher;
