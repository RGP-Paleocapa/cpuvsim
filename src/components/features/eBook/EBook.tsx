import React, { useState, useEffect } from 'react';
import NavigationMenu from '@/components/features/eBook/navigation/NavigationMenu';
import SwitchPage from '@/components/features/eBook/navigation/SwitchPage';
import { HamburgerMenuIcon, CloseIcon } from '@common/SvgIcons';

interface EBookProps {
  children: React.ReactNode;
  currentPage: number;
}

const EBookPage: React.FC<EBookProps> = ({ children, currentPage }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  // const [isNavOpen, setIsNavOpen] = useState(() => {
  //   const saved = localStorage.getItem('navOpen');
  //   return saved === null ? true : saved === 'true';
  // });

  useEffect(() => {
    localStorage.setItem('navOpen', isNavOpen.toString());
  }, [isNavOpen]);

  return (
    <div className={`bg-slate-100 dark:bg-slate-900 min-h-screen ${isNavOpen ? 'overflow-hidden' : ''}`}>
      <div className="container mx-auto py-4 sm:px-6 md:px-0">
        <div className="flex flex-col md:flex-row">
          <div className={`w-full md:w-0 lg:w-64 ${isNavOpen ? '' : 'hidden'}`}>
            <NavigationMenu currentPage={currentPage} totalPages={8} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          </div>
          <div className={`w-full flex-1 ${isNavOpen ? 'overflow-hidden' : ''}`}>
            <div className={`mx-auto ${isNavOpen ? 'max-w-screen-xl px-4' : 'px-4 md:max-w-fit lg:max-w-full'}`}>
              <button onClick={() => setIsNavOpen(!isNavOpen)} className="hidden lg:block open-nav-button">
                {/* Render the HamburgerMenuIcon when navigation is closed */}
                {!isNavOpen && <HamburgerMenuIcon />}
                {/* Render the CloseIcon when navigation is open */}
                {isNavOpen && <CloseIcon />}
              </button>
              <div className={`ebook-page-layout ${isNavOpen ? 'md:ml-[30px] lg:ml-140 2xl:ml-140' : 'md:ml-0 lg:ml-0'}`}>
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
