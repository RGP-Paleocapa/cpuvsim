// MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '..'; // Adjust the import path as needed

interface MenuItemProps {
  menuItem: Route;
  isCurrentPathMatched: boolean;
  onClose: () => void;
}

const getLinkClassName = (isCurrentPathMatched: boolean, menuItem: Route) => {
  const baseClass = 'block w-full text-center py-3 px-6 text-lg';
  if (isCurrentPathMatched) {
    return `${baseClass} ${menuItem.color.default} ${menuItem.color.hover} dark:bg-black border-4 rounded`;
  }
  return `${baseClass} bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 hover:text-gray-900 dark:hover:text-white focus:bg-gray-300 dark:focus:bg-gray-900 focus:text-gray-900 dark:focus:text-white rounded my-3`;
};

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, isCurrentPathMatched, onClose }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  const linkClassName = getLinkClassName(isCurrentPathMatched, menuItem);

  return menuItem.path.startsWith('http') ? (
    <a href={menuItem.path} target="_blank" rel="noopener noreferrer" className={linkClassName} onClick={onClose}>
      {menuItem.text}
    </a>
  ) : (
    <Link to={menuItem.path} className={linkClassName} onClick={handleClick}>
      {menuItem.text}
    </Link>
  );
};

export default MenuItem;
