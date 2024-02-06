import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { Gb, It, Es } from "react-flags-select";

interface LanguageOption {
    code: string;
    labelKey: string;
}

interface LanguageIcons {
    [key: string]: JSX.Element;
}

const LanguageSwitcher: React.FC = () => {
    const systemLanguage: string = navigator.language.substring(0, 2);
    const savedLanguage: string = localStorage.getItem('userLanguage') || systemLanguage;

    const [language, setLanguage] = useState<string>(savedLanguage);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string): void => {
        setLanguage(lng);
        i18n.changeLanguage(lng);
        setIsDropdownOpen(false);
        localStorage.setItem('userLanguage', lng);
    };

    useEffect(() => {
        i18n.changeLanguage(savedLanguage);
    }, [savedLanguage, i18n]);

    const toggleDropdown = (): void => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const languages: LanguageOption[] = [
        { code: 'en', labelKey: 'header.languages.en' },
        { code: 'it', labelKey: 'header.languages.it' },
        { code: 'es', labelKey: 'header.languages.es' }
        // Add more language options as needed
    ];

    const languageIcons: LanguageIcons = {
        en: <Gb className="inline-block text-xl mr-2" />,
        it: <It className="inline-block text-xl mr-2" />,
        es: <Es className="inline-block text-xl mr-2" />,
        // Add more language icons as needed
    };

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                onClick={toggleDropdown}
            >
                {languageIcons[language] || <FiGlobe className="inline-block text-xl mr-2" />}
                <span>{t('header.languages.' + language)}</span>
            </button>
            <div
                id="language-dropdown"
                className={`${
                    isDropdownOpen ? 'block' : 'hidden'
                } origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                <div className="py-1" role="none">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-slate-700 focus:outline-none"
                            role="menuitem"
                        >
                            {languageIcons[lang.code] || <FiGlobe className="inline-block text-xl mr-2" />}
                            {t(lang.labelKey)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
