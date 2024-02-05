// Export the HamburgerMenuIcon as a functional component
export const HamburgerMenuIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-6 dark:text-gray-200 dark:hover:text-gray-100 dark:focus:text-gray-100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
      aria-label="Open menu"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );
};

// Export the CloseIcon as a functional component
export const CloseIcon: React.FC = () => {
  return (
    <svg
      className="h-6 w-6 dark:text-gray-200 dark:hover:text-gray-100 dark:focus:text-gray-100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
      aria-label="Close menu"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
};
