import React, { useState, useEffect } from 'react';
import NavigationMenu from '@common/eBook/navigation/NavigationMenu';
import SwitchPage from '@common/eBook/navigation/SwitchPage';
import HamburgerMenuIcon from '../HamburgerMenuIcon';

interface EBookProps {
  children: React.ReactNode;
  currentPage: number;
}

const EBookPage: React.FC<EBookProps> = ({ children, currentPage }) => {
  const [isNavOpen, setIsNavOpen] = useState(() => {
    const saved = localStorage.getItem('navOpen');
    return saved === null ? true : saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('navOpen', isNavOpen.toString());
  }, [isNavOpen]);

  return (
    <div className={`bg-slate-100 dark:bg-slate-900 min-h-screen pt-16 ${isNavOpen ? 'overflow-hidden' : ''}`}>
      <div className="container mx-auto py-8 px-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-64 ${isNavOpen ? '' : 'hidden'}`}>
            <NavigationMenu currentPage={currentPage} totalPages={8} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          </div>
          <div className={`w-full flex-1 ${isNavOpen ? 'overflow-hidden' : ''}`}>
            <div className={isNavOpen ? 'max-w-screen-xl mx-auto px-4' : 'px-4'}>
              <button onClick={() => setIsNavOpen(!isNavOpen)} className="hidden md:block open-nav-button">
                <HamburgerMenuIcon />
              </button>
              <div className="ebook-page-layout">
                <SwitchPage currentPage={currentPage} />
                {children}
                <SwitchPage currentPage={currentPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBookPage;
