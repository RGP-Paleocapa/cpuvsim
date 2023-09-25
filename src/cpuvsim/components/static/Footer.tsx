import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('footer'); // Use 'footer' namespace for translations

  return (
    <footer className="flex flex-col items-center justify-center h-64 bg-white dark:bg-slate-800 text-black dark:text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-lg font-semibold mb-4">{t('footerContent')}</div>
        <div className="flex flex-wrap justify-center space-x-2">
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            {t('home')}
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            {t('about')}
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            {t('services')}
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            {t('contact')}
          </a>
        </div>
        <div className="mt-4">&copy; {new Date().getFullYear()} Your Company</div>
      </div>
    </footer>
  );
}

export default Footer;
