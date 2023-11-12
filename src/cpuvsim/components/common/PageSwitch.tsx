import { Link } from "react-router-dom";

interface PageSwitchProps {
    previousPage?: string,
    nextPage?: string
}

const PageSwitch: React.FC<PageSwitchProps> = ({ previousPage, nextPage }) => {
  return (
    <div className="mt-8 text-center">
      <Link
        to={`/${previousPage}`}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-block mr-4"
      >
        Previous Page
      </Link>
      <Link
        to={`/${nextPage}`}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white inline-block"
      >
        Next Page
      </Link>
    </div>
  );
};

export default PageSwitch;
