import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import HamburgerMenuIcon from '@/components/common/HamburgerMenuIcon';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
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
      <Link to="/" className="text-2xl font-bold text-black dark:text-white" onClick={scrollToTop}>
        CPU Visual Simulator E-Book
      </Link>
    </div>
    <div className="flex space-x-4 items-center lg:hidden">
      <button className='block' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <HamburgerMenuIcon />
      </button>
    </div>
    <div className="hidden lg:flex space-x-4 items-center">
      <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" onClick={scrollToTop}>
        Home
      </Link>
      <Link to="/page1" className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white" onClick={scrollToTop}>
        Ebook
      </Link>
      <a
        href='https://cpuvisualsimulator.github.io/'
        target='_blank'
        className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-white"
      >
        Simulator
      </a>
      <Link to="/about" className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-white" onClick={scrollToTop}>
        About
      </Link>
      <ThemeSwitcher />
    </div>
  </div>
  {mobileMenuOpen && (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
        <Link
          to="/"
          className="block w-full text-center py-3 px-6 text-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white focus:bg-gray-300 dark:focus:bg-gray-900 focus:text-gray-900 dark:focus:text-white rounded my-3"
          onClick={scrollToTop}
        >
          Home
        </Link>
        <Link
          to="/page1"
          className="block w-full text-center py-3 px-6 text-lg bg-blue-200 dark:bg-blue-700 text-blue-600 dark:text-blue-300 hover:bg-blue-300 dark:hover:bg-blue-900 hover:text-blue-900 dark:hover:text-white focus:bg-blue-300 dark:focus:bg-blue-900 focus:text-blue-900 dark:focus:text-white rounded my-3"
          onClick={scrollToTop}
        >
          Ebook
        </Link>
        <a
          href='https://cpuvisualsimulator.github.io/'
          target='_blank'
          className="block w-full text-center py-3 px-6 text-lg bg-red-200 dark:bg-red-700 text-red-600 dark:text-red-300 hover:bg-red-300 dark:hover:bg-red-900 hover:text-red-900 dark:hover:text-white focus:bg-red-300 dark:focus:bg-red-900 focus:text-red-900 dark:focus:text-white rounded my-3"
        >
          Simulator
        </a>
        <Link
          to="/about"
          className="block w-full text-center py-3 px-6 text-lg bg-green-200 dark:bg-green-700 text-green-600 dark:text-green-300 hover:bg-green-300 dark:hover:bg-green-900 hover:text-green-900 dark:hover:text-white focus:bg-green-300 dark:focus:bg-green-900 focus:text-green-900 dark:focus:text-white rounded my-3"
          onClick={scrollToTop}
        >
          About
        </Link>
        <ThemeSwitcher />
        <button
          className="mt-4 text-lg ml-3 text-red-600 dark:text-red-300 hover:text-red-900 dark:hover:text-white focus:text-red-900 dark:focus:text-white"
          onClick={closeMobileMenu}
        >
          Close Menu
        </button>
      </div>
    </div>
  )}
</nav>

  );
};

export default Header;
  