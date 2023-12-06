// Header.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import HamburgerMenuIcon from '@/components/common/HamburgerMenuIcon';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component

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
      behavior: 'smooth'
    });
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      controlNavbar();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
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
            <Link to="/page1" className="text-blue-600 dark:text-blue-400 hover.text-blue-900 dark:hover.text-white" onClick={scrollToTop}>
              Start Reading
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
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
