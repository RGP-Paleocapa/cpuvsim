import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const basePath = '/cpuvsim';
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // If we scroll down and are below 100px from the top
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY); // Update the last scroll position
  };

  useEffect(() => {
    const handleScroll = () => {
      controlNavbar();
    };

    // Set up scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${show ? 'top-0' : '-top-full'} bg-white dark:bg-slate-800 py-4 px-6 md:px-12 lg:px-16 xl:px-24 shadow-md`}>
      <div className="flex justify-between items-center">
        <div>
          <Link to={`${basePath}/`} className="text-2xl font-bold text-black dark:text-white" onClick={scrollToTop}>
            Your Logo
          </Link>
        </div>
        <div className="md:flex space-x-4 items-center">
          <Link to={`${basePath}/`} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" onClick={scrollToTop}>
            Home
          </Link>
          <Link to={`${basePath}/page1`} className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white" onClick={scrollToTop}>
            Ebook
          </Link>
          <Link to={`${basePath}/about`} className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-white" onClick={scrollToTop}>
            About
          </Link>
          <ThemeSwitcher />
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
