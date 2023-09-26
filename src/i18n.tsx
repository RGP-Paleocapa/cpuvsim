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
      loadPath: 'https://github.com/RGP-Paleocapa/cpuvsim/blob/main/public/locales/{{lng}}/{{ns}}.json',
      // Use the correct GitHub URL for your JSON files
    },
    ns: ['header', 'footer', 'page1', 'page2'], // Use an array for namespaces
    defaultNS: 'page2', // Set the default namespace
  });

export default i18n;
