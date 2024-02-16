// MobileMenu.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';
import MenuItem from './MenuItem'; // Adjust the import path as needed
import { Route } from '..'; // Adjust the import path as needed

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Route[];
}

const MobileMenu: React.FC<MobileMenuProps> = React.memo(({ isOpen, onClose, menuItems }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg dark:text-white">
        {menuItems.map((menuItem) => {
          const isCurrentPathMatched = new RegExp(menuItem.pattern).test(location.pathname);
          return <MenuItem key={menuItem.path} menuItem={menuItem} isCurrentPathMatched={isCurrentPathMatched} onClose={onClose} />;
        })}
        <ThemeSwitcher />
        <button
          className="mt-4 text-lg ml-3 dark:text-red-300 dark:hover:text-white focus:text-red-900 dark:focus:text-white"
          onClick={onClose}
        >
          Close Menu
        </button>
      </div>
    </div>
  );
});

export default MobileMenu;
