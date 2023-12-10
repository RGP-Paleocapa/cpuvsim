import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const location = useLocation();

  const routes = [
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
      "text": "Pages",
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
        "default": "text-green-600 dark:text-green-400",
        "hover": "hover:text-green-900 dark:hover:text-white"
      }
    }
  ];

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
        <div>
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              {route.path.startsWith("http") ? (
                <a
                  href={route.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mr-4 ${new RegExp(route.pattern).test(location.pathname) ? 'font-bold underline decoration-2 underline-offset-8' : ''} ${route.color.default} ${location.pathname === route.path ? route.color.hover : ''}`}
                >
                  {route.text}
                </a>
              ) : (
                <Link
                  to={route.path}
                  className={`mr-4 ${new RegExp(route.pattern).test(location.pathname) ? 'font-bold underline decoration-2 underline-offset-8' : ''} ${route.color.default} ${location.pathname === route.path ? route.color.hover : ''}`}
                  onClick={scrollToTop}
                >
                  {route.text}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
  <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} menuItems={routes} />
</>

  );
};

export default Header;
