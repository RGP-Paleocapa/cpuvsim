import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NavigationMenuProps {
  currentPage: number;
  totalPages: number;
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ currentPage, totalPages, isNavOpen }) => {
  const { t } = useTranslation();
  const nameSpace = "navigationMenu";
  const getPageTextKey = (pageNumber: number) => `${nameSpace}.page${pageNumber}Title`;

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
                  <span className='text-justify'>
                    {t(getPageTextKey(page))};
                  </span>
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
