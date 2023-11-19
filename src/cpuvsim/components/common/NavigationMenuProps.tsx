import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavigationMenuProps {
  currentPage: number;
  totalPages: number;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ currentPage, totalPages }) => {
  const [isNavOpen, setIsNavOpen] = useState(() => {
    const saved = localStorage.getItem("navOpen");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("navOpen", isNavOpen.toString());
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      {!isNavOpen && (
        <button onClick={() => setIsNavOpen(true)} className="open-nav-button">
          {/* SVG for Open Icon */}
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      )}
      
      {isNavOpen && (
        <nav className="navigation-menu">
          <button onClick={toggleNav} className="absolute top-20 right-4 text-gray-600 hover:text-gray-800">
            {/* SVG for Close Icon */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={currentPage === page ? 'current-page' : ''}>
                <Link to={`/page${page}`} className="navigation-link flex items-center">
                  {/* SVG Icon */}
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 5a5 5 0 100 10 5 5 0 000-10zM2 10a8 8 0 1116 0 8 8 0 010-16H2z" />
                  </svg>
                  Page {page}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationMenu;
