import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainContentProps {
    children: ReactNode;
}

const LeftMenu = () => {
    return (
        <nav className="bg-gray-800 dark:bg-gray-900 w-64 min-h-screen flex flex-col">
            {/* Logo or Branding (optional) */}
            <div className="py-4 px-6 bg-gray-900 dark:bg-gray-800 text-white flex items-center">
                <span className="text-lg font-semibold">MyApp</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex-1">
                {/* Link 1 */}
                <li>
                    <Link to="/submit-feedback" className="block py-2 px-6 text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800">Submit Feedbaack</Link>
                </li>
                {/* Link 2 */}
                <li>
                    <Link to="/read-feedback" className="block py-2 px-6 text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800">Read Feedback</Link>
                </li>
            </ul>
        </nav>
    );
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 min-h-screen flex flex-col">
            {children}
        </div>
    );
};

const Layout: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className="flex">
            <LeftMenu />
            <MainContent>
                {children}
            </MainContent>
        </div>
    );
};

export default Layout;
