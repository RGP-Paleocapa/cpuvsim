interface HamburgerMenuIconProps {
  className?: string;
}

const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({ className }) => {
  return (
    <div className={`${className} bg-gray-400 dark:bg-gray-600 hover:bg-gray-300 focus:bg-gray-300 dark:hover:bg-gray-500 dark:focus:bg-gray-400 p-2 rounded-lg`}>
      <svg
        className="h-6 w-6 dark:text-gray-200 dark:hover:text-gray-100 dark:focus:text-gray-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );
};

export default HamburgerMenuIcon;
