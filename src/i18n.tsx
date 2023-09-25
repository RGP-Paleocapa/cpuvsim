// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: false,
    saveMissing: false,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['header', 'footer', 'page1', 'page2'], // Use an array for namespaces
    defaultNS: 'page2', // Set the default namespace
  });

export default i18n;
