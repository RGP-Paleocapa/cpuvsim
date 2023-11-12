import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>(localStorage.getItem('theme') as 'dark' | 'light' || 'light');

    useEffect(() => {
        // Check the initial theme, either from localStorage or system preference
        const storedTheme = localStorage.getItem('theme') as 'dark' | 'light';
        if (storedTheme) {
            setTheme(storedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme('dark');
        }

        // Listen for changes in the system theme
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const themeChangeListener = (e: MediaQueryListEvent) => {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        };

        mediaQuery.addEventListener('change', themeChangeListener);

        // Clean up the event listener when the component unmounts
        return () => {
            mediaQuery.removeEventListener('change', themeChangeListener);
        };
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Store the user's preference in localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <button
        className={`text-xl p-2 rounded-full ${
            theme === 'dark' ? 'bg-gray text-white' : 'bg-white text-gray-800'
        }`}
        onClick={handleThemeSwitch}
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeSwitcher;
