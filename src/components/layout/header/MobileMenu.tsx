import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

interface MenuItem {
  path: string;
  text: string;
  pattern: string;
  color: {
    default: string;
    hover: string;
  };
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuItems }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const location = useLocation();

  return isOpen ? (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg dark:text-white">
        {menuItems.map((menuItem, index) => {
          const regex = new RegExp(menuItem.pattern);
          const isCurrentPathMatched = regex.test(location.pathname);

          return (
            <React.Fragment key={index}>
              {menuItem.path.startsWith('http') ? (
                // External link
                <a
                  href={menuItem.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 text-lg ${
                    isCurrentPathMatched
                      ? menuItem.color.default + ' ' + menuItem.color.hover + ' dark:bg-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 hover:text-gray-900 dark:hover:text-white focus:bg-gray-300 dark:focus:bg-gray-900 focus:text-gray-900 dark:focus:text-white rounded my-3'
                  }`}
                  onClick={onClose}
                >
                  {menuItem.text}
                </a>
              ) : (
                // Internal link
                <Link
                  to={menuItem.path}
                  className={`block w-full text-center py-3 px-6 text-lg ${
                    isCurrentPathMatched
                      ? menuItem.color.default + ' ' + menuItem.color.hover + ' dark:bg-black border-4 rounded'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 hover:text-gray-900 dark:hover:text-white focus:bg-gray-300 dark:focus:bg-gray-900 focus:text-gray-900 dark:focus:text-white rounded my-3'
                  }`}
                  onClick={() => {
                    scrollToTop();
                    onClose();
                  }}
                >
                  {menuItem.text}
                </Link>
              )}
            </React.Fragment>
          );
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
  ) : null;
};

export default MobileMenu;
