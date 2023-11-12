// SwitchPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SwitchPageProps {
  currentPage: number;
}

const basePath = '/cpuvsim'; // Your base path
const lastPage = 8; // The last page number, stored internally in the component

const SwitchPage: React.FC<SwitchPageProps> = ({ currentPage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;
  
  const prevLink = isFirstPage ? '/' : `/page${currentPage - 1}`;
  const nextLink = isLastPage ? null : `/page${currentPage + 1}`;
  
  const prevText = isFirstPage ? 'Home' : `${currentPage - 1}`;
  const nextText = isLastPage ? null : `${currentPage + 1}`;

  const navigate = useNavigate();

  const handleNavigation = (link: string, position: 'top' | 'bottom') => {
    navigate(link);
    // We need to delay the scroll a bit to allow the page to render
    setTimeout(() => {
      if (position === 'top') {
        window.scrollTo(0, 0);
      } else if (position === 'bottom') {
        window.scrollTo(0, document.body.scrollHeight);
      }
    }, 0);
  };

  return (
    <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => handleNavigation(`${basePath}${prevLink}`, 'bottom')}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="ml-2">{prevText}</span>
        </button>
      {currentPage < lastPage && nextLink && (
        <button
          onClick={() => handleNavigation(`${basePath}${nextLink}`, 'top')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white flex items-center"
        >
          <span className="mr-2">{nextText}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
};

export default SwitchPage;
