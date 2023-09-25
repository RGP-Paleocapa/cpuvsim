import { FiGlobe } from "react-icons/fi";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { De, Fr, Gb, It } from "react-flags-select";

const LanguageSwitcher = () => {
    const systemLanguage = navigator.language.substring(0, 2);
    const [language, setLanguage] = useState(systemLanguage || 'en');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
    const { t, i18n } = useTranslation('header');

    const changeLanguage = (lng: string) => {
        setLanguage(lng);
        i18n.changeLanguage(lng);
        setIsDropdownOpen(false);
      };
    
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    
      const languages = [
        { code: 'en', labelKey: 'languages.en' },
        { code: 'it', labelKey: 'languages.it' },
        { code: 'fr', labelKey: 'languages.fr' },
        { code: 'de', labelKey: 'languages.de' },
        // Add more language options as needed
      ];

      interface LanguageIcons {
        [key: string]: JSX.Element;
      }

      const languageIcons: LanguageIcons = {
        en: <Gb className="inline-block text-xl mr-2" />,
        fr: <Fr className="inline-block text-xl mr-2" />,
        it: <It className="inline-block text-xl mr-2" />,
        de: <De className="inline-block text-xl mr-2" />,
        // Add more lax\nguage icons as needed
      };

    return (
        <div className="relative inline-block text-left">
        <button
            type="button"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={toggleDropdown}
        >
            {languageIcons[language] || <FiGlobe className="inline-block text-xl mr-2" />}
            <span>{t('languages.' + language)}</span>
        </button>
        <div
          id="language-dropdown"
          className={`${
            isDropdownOpen ? 'block' : 'hidden' // Toggle dropdown visibility
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
}

export default LanguageSwitcher;