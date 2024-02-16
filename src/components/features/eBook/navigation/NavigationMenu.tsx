import { Link } from 'react-router-dom';

interface NavigationMenuProps {
  currentPage: number;
  totalPages: number;
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ currentPage, totalPages, isNavOpen }) => {

  const pageTexts = [
    "1 - Computers as General-purpose Machines",
    "2 - Simple Binary Calculations",
    "3 - VonNeumann Model",
    "4 - CPU Fundamental Fetch Decode Execute",
    "5 - CPU Instruction Set",
    "6 - Assembly And High Level Languages",
    "7 - From High-level to Assembly Languages",
    "8 - Exercises",
  ];


  return (
    <>
      {isNavOpen && (
        <nav className="navigation-menu z-0">
          <ul>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={currentPage === page ? 'current-page' : ''}>
                <Link to={`/page${page}`} className="navigation-link flex items-center break-all">
                  {/* SVG Icon */}
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 5a5 5 0 100 10 5 5 0 000-10zM2 10a8 8 0 1116 0 8 8 0 010-16H2z" />
                  </svg>
                  {pageTexts[page - 1]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>      
      )}
    </>
  );
};

export default NavigationMenu;
