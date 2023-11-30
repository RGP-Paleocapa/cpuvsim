import React, { createContext, useState, useContext } from 'react';
import { FooterItem } from '@/types/footerTypes';

interface FooterContextType {
  footerData: FooterItem[];
  setFooterData: (data: FooterItem[]) => void;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooter must be used within a FooterProvider');
  }
  return context;
};

// Type for the props of FooterProvider, including children
interface FooterProviderProps {
  children: React.ReactNode;
}

export const FooterProvider: React.FC<FooterProviderProps> = ({ children }) => {
  const [footerData, setFooterData] = useState<FooterItem[]>([]);

  return (
    <FooterContext.Provider value={{ footerData, setFooterData }}>
      {children}
    </FooterContext.Provider>
  );
};
