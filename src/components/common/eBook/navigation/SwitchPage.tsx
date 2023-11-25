import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface SwitchPageProps {
  currentPage: number;
}

const SwitchPage: React.FC<SwitchPageProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  const lastPage = 8; // The last page number, stored internally in the component
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const prevLink = isFirstPage ? '/' : `/page${currentPage - 1}`;
  const nextLink = isLastPage ? null : `/page${currentPage + 1}`;

  const prevText = isFirstPage ? 'Home' : `${currentPage - 1}`;
  const nextText = isLastPage ? null : `${currentPage + 1}`;

  const handleNavigation = (link: string, position: 'top' | 'bottom') => {
    navigate(link);

    // Set a delay before scrolling to allow page navigation to complete
    const scrollDelay = 100;
    setTimeout(() => {
      if (position === 'top' || isFirstPage) {
        smoothScrollTo(0);
      } else if (position === 'bottom') {
        const screenWidth = window.innerWidth;
        const offsetFromBottom = screenWidth > 1200 ? 300 : 525;
        const bottomPosition = document.documentElement.scrollHeight - window.innerHeight - offsetFromBottom;
        smoothScrollTo(bottomPosition);
      }
    }, scrollDelay);
  };

  // Custom smooth scroll function
  const smoothScrollTo = (targetPosition: number) => {
    const screenWidth = window.innerWidth;
    const scrollDuration = screenWidth < 1024 ? 2500 : 1000; // 3 times slower for smaller screens

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / scrollDuration, 1);

      window.scrollTo(0, progress * (targetPosition - window.pageYOffset) + window.pageYOffset);

      if (timeElapsed < scrollDuration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={() => handleNavigation(prevLink, 'bottom')}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="ml-2">{prevText}</span>
      </button>

      {currentPage !== lastPage && (
        <p className='text-2xl text-gray-800 dark:text-gray-300'>Page {currentPage}</p>
      )}

      {currentPage < lastPage && nextLink && (
        <button
          onClick={() => handleNavigation(nextLink, 'top')}
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
