import { ReactNode } from "react";
import NavigationMenu from "@common/eBook/navigation/NavigationMenu";
import SwitchPage from "@common/eBook/navigation/SwitchPage";

interface EBookProps {
    children: ReactNode;
    currentPage: number;
}

// eBook Page Component
const EBookPage: React.FC<EBookProps> = ({ children, currentPage }) => (
    <div className="ebook-page-layout">
      <NavigationMenu currentPage={currentPage} totalPages={8} />
      <SwitchPage currentPage={currentPage} />
      {children}
      <SwitchPage currentPage={currentPage} />
    </div>
);

export default EBookPage;
