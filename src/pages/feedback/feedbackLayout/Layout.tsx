import { LeftMenu } from '@/components/layout/LeftMenu';
import { ReactNode } from 'react';

interface MainContentProps {
    children: ReactNode;
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
