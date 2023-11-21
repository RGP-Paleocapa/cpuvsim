import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="hidden md:flex hover:animate-spin animate-bounce fixed right-4 bottom-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  ) : null;
};

export default ScrollToTopButton;
