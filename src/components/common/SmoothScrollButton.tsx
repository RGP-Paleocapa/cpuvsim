import { useScrollState } from '@/context/useScrollState';
import React from 'react';

interface SmoothScrollButtonProps {
  targetId: string;
  buttonText: string;
}

const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  targetId,
  buttonText,
}) => {
  const smoothScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const { setScrollPosition } = useScrollState(); // Get setScrollPosition from your Zustand store

  const handleClick = () => {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
    smoothScrollToId(targetId);
  };

  return (
    <>    
      {' '}
      <button
        className="text-sm underline custom-button text-blue-700 focus:text-blue-900 hover:text-blue-900 dark:text-blue-400 dark:focus:text-white dark:hover:text-white"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {' '}
    </>
  );
};

export default SmoothScrollButton;
