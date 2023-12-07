// MobileMenu.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const location = useLocation();

  return isOpen ? (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
    <Link
      to="/"
      className={`block w-full text-center py-3 px-6 text-lg 
        ${location.pathname === '/' ? 'bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}
        hover:bg-gray-300 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white focus:bg-gray-300 dark:focus:bg-gray-900 focus:text-gray-900 dark:focus:text-white rounded my-3`}
      onClick={() => {
        scrollToTop();
        onClose();
      }}
    >
      Home
    </Link>
    <Link
      to="/page1"
      className={`block w-full text-center py-3 px-6 text-lg 
        ${location.pathname === '/page1' ? 'bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900' : 'bg-blue-200 dark:bg-blue-700 text-blue-600 dark:text-blue-300'}
        hover:bg-blue-300 dark:hover:bg-blue-900 hover:text-blue-900 dark:hover:text-white focus:bg-blue-300 dark:focus:bg-blue-900 focus:text-blue-900 dark:focus:text-white rounded my-3`}
      onClick={() => {
        scrollToTop();
        onClose();
      }}
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
      className={`block w-full text-center py-3 px-6 text-lg 
        ${location.pathname === '/about' ? 'bg-gray-900 dark:bg-gray-100 text-green-100 dark:text-gray-900' : 'bg-green-200 dark:bg-green-700 text-green-600 dark:text-green-300'}
        hover:bg-green-300 dark:hover:bg-green-900 hover:text-green-900 dark:hover:text-white focus:bg-green-300 dark:focus:bg-green-900 focus:text-green-900 dark:focus:text-white rounded my-3`}
      onClick={() => {
        scrollToTop();
        onClose();
      }}
    >
      About
    </Link>
    <ThemeSwitcher />
    <button
      className="mt-4 text-lg ml-3 text-red-600 dark:text-red-300 hover:text-red-900 dark:hover:text-white focus:text-red-900 dark:focus:text-white"
      onClick={onClose}
    >
      Close Menu
    </button>
  </div>
</div>

  ) : null;
};

export default MobileMenu;
