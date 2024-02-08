import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import useDocumentMetadata from '@hooks/useDocumentMetadata';
import { useEffect } from 'react';
import { useFooter } from '@/context/FooterContext';
<<<<<<< HEAD
=======
import { useTranslation } from 'react-i18next';
>>>>>>> source-repo/main

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
<<<<<<< HEAD
=======
  const { t } = useTranslation('home');
>>>>>>> source-repo/main

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className='flex flex-col items-center'>
          <h1 className="text-4xl lg:text-7xl text-center mb-6 px-2 text-gray-800 dark:text-gray-100">
<<<<<<< HEAD
            A gentle introduction to the Central Processing Unit and Assembly language
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
            Based on (and in support of) the complementary Educational CPU Visual Simulator
=======
            {t('main.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
            {t('main.subtitle')}
>>>>>>> source-repo/main
          </p>
          <div className='flex flex-col-reverse md:flex-row gap-4'>
            <Link
                to="/#discover-features"
                className="bg-blue-700 hover:bg-blue-800 text-white py-4 px-4 md:py-3 md:px-6 rounded-lg text-xl flex items-center justify-center w-full"
                onClick={handleScroll}
            >
<<<<<<< HEAD
                Introduction <FaArrowDown className="inline-block ml-2" />
=======
                {t('main.button1')} <FaArrowDown className="inline-block ml-2" />
>>>>>>> source-repo/main
            </Link>
            <Link
                to="/page1"
                className="bg-yellow-700 hover:bg-yellow-800 text-white py-4 px-4 md:py-3 md:px-6 rounded-lg text-xl flex items-center justify-center w-full"
                onClick={handleScroll}
            >
<<<<<<< HEAD
                Documentation Pages
=======
                {t('main.button2')}
>>>>>>> source-repo/main
                <div className="ml-2 flex items-center justify-center bg-transparent border-transparent transform rotate-45">
                    <FaArrowUp className="text-white" />
                </div>
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-16 border-t border-gray-300 dark:border-gray-700" />

<<<<<<< HEAD
      <section id="discover-features" className="flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 bg-gray-200 dark:bg-gray-800 p-4 rounded-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-gray-800 dark:text-white">
          Computer Architecture Introduction
        </h2>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
          This e-book aims to illustrate the basics of how a computer works,
          focusing on how a program written in a high-level language ends up being physically executed on a Central Processing Unit (CPU).
          The e-book is intended to be used in the context of an introductory computer science course at high school or undergraduate level.
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
          The e-book starts with a concise explanation of the fundamental architecture shared by a wide variety of modern "computers",
          such as desktop computers, mobile phones, or car control units.
          This is followed by an explanation of the essential elements of the structure of any CPU,
          and the machine (assembly) language that it can execute.
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
          This e-book is built around the Educational CPU Visual Simulator (CPUVSIM) shown on the left,
          which you can access through the 'Simulator' button in the top right corner.
          The e-book is a dynamic document because the simulator is seamlessly integrated with the proposed exercises: by clicking on the
          'Show solution' buttons, the CPUVSIM comes to life, loading the solution for the specific exercise into memory.
          This allows you to experiment directly with the programming exercises presented in the book.
        </p>
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-4 text-justify">
          The associated CPUVSIM allows users to visualize with detailed animations the execution of assembly language code.
          Its main goal is to support novices in understanding the behavior of the key components of a CPU,
          focusing on how code written in high-level languages is actually executed on the hardware of a computer.
          <br />
          It supports a simplified but representative assembly language of 16 (Data Transfer, Control Flow, Arithmetic-Logic) instructions,
          with immediate and direct addressing modalities. Instructions and numeric data can be inserted and edited directly in RAM.
          It is possible to define “labels” to be used as parameters in jump instructions, or as variable identifiers.
          The speed and level of details of the animations can be controlled by the users. At any time,
          it is possible to switch between symbolic and binary representations.
=======
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
>>>>>>> source-repo/main
        </p>
      </section>
    </>
  );
}

export default Home;
