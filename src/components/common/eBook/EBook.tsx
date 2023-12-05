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
    const saved = localStorage.getItem("navOpen");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("navOpen", isNavOpen.toString());
  }, [isNavOpen]);

  return (
<div className="flex justify-center max-w-screen-xl mx-auto px-4">
  {!isNavOpen && (
    <button onClick={() => setIsNavOpen(true)} className="open-nav-button">
      <HamburgerMenuIcon />
    </button>
  )}
  <div className={`sidebar-container w-0 lg:w-64 ${isNavOpen ? '' : 'hidden'}`}>
    <NavigationMenu currentPage={currentPage} totalPages={8} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
  </div>
  <div className="ebook-page-layout flex-1">
    <SwitchPage currentPage={currentPage} />
    {children}
    <SwitchPage currentPage={currentPage} />
  </div>
</div>

  );
};

export default EBookPage;
