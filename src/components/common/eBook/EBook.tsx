import React, { useState, useEffect } from 'react';
import NavigationMenu from '@common/eBook/navigation/NavigationMenu';
import SwitchPage from '@common/eBook/navigation/SwitchPage';

interface EBookProps {
  children: React.ReactNode;
  currentPage: number;
}

const EBookPage: React.FC<EBookProps> = ({ children, currentPage }) => {
  const [isNavOpen, setIsNavOpen] = useState(() => {
    const saved = localStorage.getItem("navOpen");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("navOpen", isNavOpen.toString());
  }, [isNavOpen]);

  return (
    <div className="flex max-w-full mx-auto my-8 pb-4 px-4">
      {!isNavOpen && (
        <button onClick={() => setIsNavOpen(true)} className="open-nav-button fixed top-20 left-80 z-50">
          {/* SVG for Open Icon */}
          <svg className="h-6 w-6 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      )}
      <div className={`sidebar-container w-64 ${isNavOpen ? '' : 'hidden'}`}>
        <NavigationMenu currentPage={currentPage} totalPages={8} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
      <div className="content-container flex-1">
        <div className="ebook-page-layout">
          <SwitchPage currentPage={currentPage} />
          {children}
          <SwitchPage currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default EBookPage;
