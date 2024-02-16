// Header.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { HamburgerMenuIcon } from '@/components/common/SvgIcons';
import MobileMenu from './mobileMenu/MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';
import LogoutButton from './LogoutButton';
import useAuthStore from '@/context/useAuthStore';
import NavLink from './NavLink';

export interface Route {
  path: string;
  text: string;
  pattern: string;
  color: {
    default: string;
    hover: string;
  };
}

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isAuthenticated } = useAuthStore();

  const routes: Route[] = [
    {
      "path": "/",
      "text": "Home",
      "pattern": "^/$",
      "color": {
        "default": "text-gray-600 dark:text-gray-400",
        "hover": "hover:text-gray-900 dark:hover:text-white"
      }
    },
    {
      "path": "/page1",
      "text": "Content",
      "pattern": "^/page[1-8]$",
      "color": {
        "default": "text-blue-600 dark:text-blue-400",
        "hover": "hover:text-blue-900 dark:hover:text-white"
      },
    },    
    {
      "path": "https://cpuvisualsimulator.github.io/",
      "text": "Simulator",
      "pattern": "^https://cpuvisualsimulator.github.io/",
      "color": {
        "default": "text-red-600 dark:text-red-400",
        "hover": "hover:text-red-900 dark:hover:text-white"
      }
    },
      {
        "path": "/about",
        "text": "About",
        "pattern": "^/about$",
        "color": {
          "default": "text-green-700 dark:text-green-300",
          "hover": "hover:text-green-900 dark:hover:text-white"
        }
      }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const controlNavbar = () => {
    setShow(!(window.scrollY > lastScrollY && window.scrollY > 100));
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navClassName = `fixed w-full z-50 transition-all duration-300 ease-in-out ${show ? 'top-0' : '-top-full'} bg-white dark:bg-slate-800 py-4 px-6 md:px-12 lg:px-16 xl:px-24 shadow-md`;

  return (
    <>
      <nav className={navClassName}>
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-black dark:text-white" onClick={scrollToTop}>
            <span className='block sm:hidden'>CPU Visual Simulator<br />E-Book</span>
            <span className='hidden sm:block'>CPU Visual Simulator E-Book</span>
          </Link>
          <div className="lg:hidden">
            <button aria-label="Toggle mobile menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <HamburgerMenuIcon />
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            {routes.map((route, index) => (
              <NavLink key={index} route={route} scrollToTop={scrollToTop} />
            ))}
            {isAuthenticated && <LogoutButton />}
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} menuItems={routes} />
    </>
  );
};

export default Header;

