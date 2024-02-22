import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface SwitchPageProps {
  currentPage: number;
}

const lastPage = 8; // The last page number, stored internally in the component

const SwitchPage: React.FC<SwitchPageProps> = ({ currentPage }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const prevLink = isFirstPage ? '/' : `/page${currentPage - 1}`;
  const nextLink = isLastPage ? null : `/page${currentPage + 1}`;

  const prevText = isFirstPage ? "Home Page" : t(`navigationMenu.page${currentPage - 1}Title`).split(' - ')[1];
  const nextText = isLastPage ? null : t(`navigationMenu.page${currentPage + 1}Title`).split(' - ')[1];

  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const changeInY = targetY - startY;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startY + changeInY * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNavigation = (link: string, position: 'top' | 'bottom') => {
    navigate(link);

    const screenWidth = window.innerWidth;
    let scrollDuration: number;
    if (screenWidth < 480) {
      scrollDuration = 500; // Longer duration for mobile devices
    } else {
      scrollDuration = 300; // Tablets and desktops
    }

    setTimeout(() => {
      if (position === 'top' || isFirstPage) {
        smoothScrollTo(0, scrollDuration);
      } else if (position === 'bottom') {
        let offsetFromBottom: number;
        if (screenWidth > 1200) { // Large screens
          offsetFromBottom = 50;
        } else { // Medium and small screens
          offsetFromBottom = 50;
        }

        const footer = document.querySelector('footer'); // Replace 'footer' with the appropriate selector
        if (footer) {
          const footerHeight = footer.clientHeight;
          const bottomPosition = document.documentElement.scrollHeight - window.innerHeight - offsetFromBottom - footerHeight;
          smoothScrollTo(bottomPosition, scrollDuration);
        }
      }
    }, 300); // Fixed delay of 300ms for all devices
  };

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => handleNavigation(`${prevLink}`, 'bottom')}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="ml-2">{prevText}</span>
      </button>

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
