interface HamburgerMenuIconProps {
  className?: string;
  isOpen: boolean; // Add a prop to determine whether the nav is open or closed
}

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({ className, isOpen }) => {
  const iconLabel = isOpen ? 'Close Navigation' : 'Open Navigation';

  return (
    <div
      className={`${className} bg-gray-400 dark:bg-gray-600 hover:bg-gray-300 focus:bg-gray-300 dark:hover:bg-gray-500 dark:focus:bg-gray-400 p-2 rounded-lg`}
      aria-label={iconLabel} // Set aria-label dynamically based on isOpen
    >
      {isOpen ? (
        /* Render the "X" icon when navigation is open */
        <svg
          className="h-6 w-6 dark:text-gray-200 dark:hover:text-gray-100 dark:focus:text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          role="img"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      ) : (
        /* Render the hamburger icon when navigation is closed */
        <svg
          className="h-6 w-6 dark:text-gray-200 dark:hover:text-gray-100 dark:focus:text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          role="img"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      )}
    </div>
  );
};

export default HamburgerMenuIcon;
