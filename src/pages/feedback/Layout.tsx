import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainContentProps {
    children: ReactNode;
}

const LeftMenu = () => {
    return (
        <>
            <LeftMenuDesktop />
            <LeftMenuMobile />
        </>
    );
}

const LeftMenuDesktop = () => {
    const location = useLocation();

    return (
        <nav className="hidden inset-y-0 pt-16 left-0 bg-gray-200 dark:bg-gray-800 w-64 min-h-screen fixed lg:flex flex-col">
            <ul className="flex-1 mt-4">
                <li>
                    <Link 
                        to="/feedback/submit" 
                        className={`block py-2 px-6 text-gray-600 dark:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          location.pathname === "/feedback/submit" ? "font-bold dark:bg-gray-700 dark:text-green-500" : ""
                        }`}
                    >
                        Submit Feedback
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/feedback/" 
                        className={`block py-2 px-6 text-gray-600 dark:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          location.pathname === "/feedback/" ? "font-bold dark:bg-gray-700 dark:text-green-500" : ""
                        }`}
                    >
                        Read Feedback
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

const LeftMenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <button 
                className="fixed z-20 left-4 lg:hidden bg-red-600 hover:bg-red-700 focus:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:bg-red-800 p-1 rounded-md text-white scale-110" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)}></div>
            )}
            <nav className={`${isOpen ? 'fixed' : 'hidden'} inset-0 z-30 pt-16 bg-gray-200 dark:bg-gray-800 lg:hidden flex flex-col`}>
                <div className="py-4 px-6 bg-gray-800 dark:bg-gray-700 text-white flex justify-between items-center">
                    <button onClick={() => setIsOpen(false)} className='p-2 bg-red-500 hover:bg-red-600 focus:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:bg-red-800 rounded-md'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="flex-1">
                    <li>
                        <Link to="/feedback/submit" className={`block py-2 px-6 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${location.pathname === "/feedback/submit" ? "font-bold dark:bg-gray-700 dark:text-green-500" : ""}`} onClick={() => setIsOpen(false)}>Submit Feedback</Link>
                    </li>
                    <li>
                        <Link to="/feedback/" className={`block py-2 px-6 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${location.pathname === "/feedback/" ? "font-bold dark:bg-gray-700 dark:text-green-500" : ""}`} onClick={() => setIsOpen(false)}>Read Feedback</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-slate-900 min-h-screen flex flex-col lg:ml-64 overflow-auto">
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
