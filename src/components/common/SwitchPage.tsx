// SwitchPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SwitchPageProps {
  currentPage: number;
}

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
      setTimeout(() => {
        if (position === 'top' || isFirstPage) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (position === 'bottom') {
          // Determine offset based on screen width
          let offsetFromBottom;
          const screenWidth = window.innerWidth;

          if (screenWidth > 1200) { // Large screens
            offsetFromBottom = 300;
          // } else if (screenWidth > 768) { // Medium screens
          //   offsetFromBottom = 300;
          } else { // Small screens
            offsetFromBottom = 525;
          }

          const bottomPosition = document.documentElement.scrollHeight - window.innerHeight - offsetFromBottom;
          window.scrollTo({ top: bottomPosition, behavior: 'smooth' });
        }
      }, 100);
  };

  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={() => handleNavigation(`${prevLink}`, 'bottom')}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="ml-2">{prevText}</span>
      </button>

      {currentPage != lastPage && (
        <p className='text-2xl text-gray-800 dark:text-gray-300'>Page {currentPage}</p>
      )}

      {currentPage < lastPage && nextLink && (
        <button
          onClick={() => handleNavigation(`${nextLink}`, 'top')}
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
