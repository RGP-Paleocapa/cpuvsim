import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type SubmenuItem = {
    label: string;
    path: string;
    disabled?: boolean;
};

type MenuItemProps = {
    label: string;
    submenus?: SubmenuItem[];
};

const SidebarMenuItem: React.FC<MenuItemProps> = ({ label, submenus }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (submenus && submenus.some(submenu => submenu.path === location.pathname)) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [submenus, location.pathname]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <li>
            <div>
                <span
                    className={`block py-4 px-4 bg-green-700 text-white cursor-pointer select-none relative`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {label}
                    <svg
                        className={`w-6 h-6 absolute top-1/2 right-4 transform -translate-y-1/2 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
                {isOpen && submenus && (
                    <ul>
                        {submenus.map((submenu, index) => (
                            <li key={index}>
                                {submenu.disabled ? (
                                    <span
                                        className={`block py-2 pl-8 text-gray-400 dark:text-gray-600 cursor-not-allowed select-none`}
                                    >
                                        {submenu.label}
                                    </span>
                                ) : (
                                    <Link
                                        to={submenu.path}
                                        className={`block py-2 pl-8 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                                            isActive(submenu.path) ? "font-bold dark:bg-gray-800 dark:text-green-500 border-l-8 border-green-500" : ""
                                        } select-none`}
                                    >
                                        {submenu.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
};

export default SidebarMenuItem;
