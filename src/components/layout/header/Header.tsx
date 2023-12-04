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
      <div className="md:flex space-x-4 items-center">
        <Link to="/" className="hidden lg:block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" onClick={scrollToTop}>
          Home
        </Link>
        <Link to="/page1" className="hidden lg:block text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white" onClick={scrollToTop}>
          Ebook
        </Link>
        <a
          href='https://cpuvisualsimulator.github.io/'
          target='_blank'
          className="hidden lg:block text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-white"
        >
          Simulator
        </a>
        <Link to="/about" className="hidden lg:block text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-white" onClick={scrollToTop}>
          About
        </Link>
        <ThemeSwitcher />
        <button className='block lg:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <HamburgerMenuIcon />
        </button>
      </div>
    </div>
    {mobileMenuOpen && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
      <div className="my-2">
        <Link
          to="/"
          className="block w-full text-center py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded"
          onClick={scrollToTop}
        >
          Home
        </Link>
      </div>
      <div className="my-2">
        <Link
          to="/page1"
          className="block w-full text-center py-2 px-4 bg-blue-200 dark:bg-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-300 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-white rounded"
          onClick={scrollToTop}
        >
          Ebook
        </Link>
      </div>
      <div className="my-2">
        <a
          href='https://cpuvisualsimulator.github.io/'
          target='_blank'
          className="block w-full text-center py-2 px-4 bg-red-200 dark:bg-red-700 text-red-600 dark:text-red-400 hover:bg-red-300 dark:hover:bg-red-800 hover:text-red-900 dark:hover:text-white rounded"
        >
          Simulator
        </a>
      </div>
      <div className="my-2">
        <Link
          to="/about"
          className="block w-full text-center py-2 px-4 bg-green-200 dark:bg-green-700 text-green-600 dark:text-green-400 hover:bg-green-300 dark:hover:bg-green-800 hover:text-green-900 dark:hover:text-white rounded"
          onClick={scrollToTop}
        >
          About
        </Link>
      </div>
      <button
        className="mt-4 text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-white"
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
  