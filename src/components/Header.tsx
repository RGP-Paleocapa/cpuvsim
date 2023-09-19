import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    <nav className="bg-white dark:bg-slate-800 py-4 px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black dark:text-white">
          Your Logo
        </Link>
        <div className="md:flex space-x-4 items-center"> {/* Center items vertically */}
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/page1"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-white"
          >
            Ebook
          </Link>
          <Link
            to="/about"
            className="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-white"
          >
            About
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Header;
