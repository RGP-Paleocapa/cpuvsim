import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

    useEffect(() => {
        // Check the initial system theme
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }

        // Listen for changes in the system theme
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const themeChangeListener = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
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
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button
        className={`text-xl p-2 rounded-full ${
            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
        onClick={handleThemeSwitch}
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeSwitcher;
