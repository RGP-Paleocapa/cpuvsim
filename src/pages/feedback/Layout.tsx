import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainContentProps {
    children: ReactNode;
}

const LeftMenu = () => {
    return (
        <nav className="fixed inset-y-0 pt-16 left-0 bg-gray-200 dark:bg-gray-800 w-64 min-h-screen flex flex-col">
            {/* Logo or Branding (optional) */}
            <div className="py-4 px-6 bg-gray-800 dark:bg-gray-700 text-white flex items-center">
                <span className="text-lg font-semibold">MyApp</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex-1">
                {/* Link 1 */}
                <li>
                    <Link to="/feedback/submit" className="block py-2 px-6 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">Submit Feedback</Link>
                </li>
                {/* Link 2 */}
                <li>
                    <Link to="/feedback/read" className="block py-2 px-6 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">Read Feedback</Link>
                </li>
            </ul>
        </nav>
    );
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 min-h-screen flex flex-col ml-64 overflow-auto">
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
