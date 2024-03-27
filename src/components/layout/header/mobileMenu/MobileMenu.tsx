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

  if (!isOpen) return <></>;

  return (
    <nav className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-md z-50">
      <div className="flex flex-col w-full h-full bg-white dark:bg-black p-6 justify-between">
        <div>
          {menuItems.map((menuItem) => {
            const isCurrentPathMatched = new RegExp(menuItem.pattern).test(location.pathname);
            return <MenuItem key={menuItem.path} menuItem={menuItem} isCurrentPathMatched={isCurrentPathMatched} onClose={onClose} />;
          })}
        </div>
        <footer className="flex justify-between items-center">
          <div className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out">
            <ThemeSwitcher />
          </div>
          <button
            aria-label="Close menu"
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition duration-150 ease-in-out text-lg"
            onClick={onClose}
          >
            Close Menu
          </button>
        </footer>
      </div>
    </nav>
  );
});

export default MobileMenu;
