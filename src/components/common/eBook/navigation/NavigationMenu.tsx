import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationMenuProps {
  currentPage: number;
  totalPages: number;
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ currentPage, totalPages, isNavOpen, setIsNavOpen }) => {

  const pageTexts = [
    "ComputersAsGeneralPurpose",
    "SimpleBinaryCalculations",
    "VonNeumannModel",
    "CPUFundamentalFetchDecodeExecute",
    "CPUInstructionSet",
    "AssemblyAndHighLevelLanguages",
    "TranslationOfHighLevelLanguage",
    "InteractivePage",
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      {isNavOpen && (
        <nav className="navigation-menu">
          <button onClick={toggleNav} className="absolute top-20 right-4 text-gray-600 hover:text-gray-800">
            {/* SVG for Close Icon */}
            <svg className="h-6 w-6 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={currentPage === page ? 'current-page' : ''}>
                <Link to={`/page${page}`} className="navigation-link flex items-center break-all">
                  {/* SVG Icon */}
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 5a5 5 0 100 10 5 5 0 000-10zM2 10a8 8 0 1116 0 8 8 0 010-16H2z" />
                  </svg>
                  {pageTexts[page - 1]}
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
