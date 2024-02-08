import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import useDocumentMetadata from '@hooks/useDocumentMetadata';
import { useEffect } from 'react';
import { useFooter } from '@/context/FooterContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { setFooterData } = useFooter();

  useEffect(() => {
    setFooterData([
      { text: 'Cortinovis, R. (2021). An educational CPU Visual Simulator, Proceedings of the 32nd Annual Workshop of the Psychology of Programming Interest Group (PPIG).', link: 'https://ppig.org/files/2021-PPIG-32nd-DC-cortinovis.pdf' },
    ]);
  }, [setFooterData]); // Dependencies array ensures this runs only when setFooterData changes


  const handleScroll = () => {
    // Scroll to the section with the specified ID
    const section = document.getElementById('discover-features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash
    if (location.hash) {
      // Scroll to the element with the matching ID
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  useDocumentMetadata('HomePage', 'This is the main page.');
  const { t } = useTranslation('home');

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className='flex flex-col items-center'>
          <h1 className="text-4xl lg:text-7xl text-center mb-6 px-2 text-gray-800 dark:text-gray-100">
            {t('main.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
            {t('main.subtitle')}
          </p>
          <div className='flex flex-col-reverse md:flex-row gap-4'>
            <Link
                to="/#discover-features"
                className="bg-blue-700 hover:bg-blue-800 text-white py-4 px-4 md:py-3 md:px-6 rounded-lg text-xl flex items-center justify-center w-full"
                onClick={handleScroll}
            >
                {t('main.button1')} <FaArrowDown className="inline-block ml-2" />
            </Link>
            <Link
                to="/page1"
                className="bg-yellow-700 hover:bg-yellow-800 text-white py-4 px-4 md:py-3 md:px-6 rounded-lg text-xl flex items-center justify-center w-full"
                onClick={handleScroll}
            >
                {t('main.button2')}
                <div className="ml-2 flex items-center justify-center bg-transparent border-transparent transform rotate-45">
                    <FaArrowUp className="text-white" />
                </div>
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-16 border-t border-gray-300 dark:border-gray-700" />

      <section id="discover-features" className="flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 bg-gray-200 dark:bg-gray-800 p-4 rounded-xl whitespace-pre-wrap">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-gray-800 dark:text-white">
          {t('introduction.title')}
        </h2>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
          {t('introduction.p1')}
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
          {t('introduction.p2')}
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
        {t('introduction.p3')}
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
        {t('introduction.p4')}
        </p>
      </section>
    </>
  );
}

export default Home;
