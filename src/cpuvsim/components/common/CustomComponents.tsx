import { ReactNode } from 'react';
import SwitchPage from './SwitchPage';
                                                                                                       
// eBook Page Component
const EBookPage = ({ children, currentPage }: { children: ReactNode, currentPage: number }) => (
    <div className="w-full max-w-full mx-0 my-8 pb-4 lg:px-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-slate-700">
      <SwitchPage currentPage={currentPage} />
      {children}
      <SwitchPage currentPage={currentPage} />
    </div>
);

// Responsive Section Component
const Section = ({ children }: { children: ReactNode }) => (
  <section className="py-10">{children}</section>
);

// Section Title Component
const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold text-cyan-600 my-5">{children}</h2>
);

// Max Width Container Component

// PADDING?
const MaxWidthContainer = ({ children, bgColor = 'bg-white' }: { children: React.ReactNode; bgColor?: string }) => (
  <div className={`max-w-4xl mx-auto px-4 rounded-lg ${bgColor}`}>
    {children}
  </div>
);

// Text Component
const Text = ({ children, textSize }: { children: ReactNode; textSize?: string }) => (
    <p className={`${textSize ? textSize : 'text-base'} responsive-text text-gray-700 dark:text-gray-400`}>{children}</p>
);
  
// Two Divs Inline Component
const InlineDivs = ({ children, centerStart = false }: { children: React.ReactNode[], centerStart?: boolean }) => (
  <div className="flex flex-col md:flex-row justify-center items-stretch">
    {children.map((child, index) => (
      <div 
        key={index} 
        className={`w-full md:w-1/2 flex flex-col ${centerStart ? "justify-start" : "justify-center"} py-4 ${index % 2 === 0 ? 'bg-green-500 dark:bg-green-700' : 'bg-red-500 dark:bg-red-700'}`}>
        {child}
      </div>
    ))}
  </div>
);


// Description Component
const Description = ({ children, alignCenter = false }: { children: React.ReactNode, alignCenter?: boolean }) => (
  <p className={`my-4 text-sm leading-5 text-gray-600 dark:text-gray-300 mx-auto max-w-xl ${alignCenter ? 'text-center' : 'text-left'}`}>
    {children}
  </p>
);

// H3 Component
const H2 = ({ children }: { children: ReactNode }) => (
    <h2 className="mb-4 mt-10 text-xl font-bold leading-7 text-gray-900 dark:text-gray-200">{children}</h2>
);

// H3 Component
const H3 = ({ children }: { children: ReactNode }) => (
    <h3 className="mb-4 text-lg font-bold leading-7 text-gray-900 dark:text-gray-200">{children}</h3>
);

// H4 Component
const H4 = ({ children }: { children: ReactNode }) => (
    <h4 className="mb-4 mt-10 text-base font-bold leading-5 text-black">{children}</h4>
);

// Ul Component
const Ul = ({ children, color }: { children: ReactNode; color?: string }) => (
  <ul className={`list-disc pl-5 ml-5 ${color ? `text-${color}` : 'text-black'}`}>{children}</ul>
);

// Ul Component
const Ol = ({ children, color }: { children: ReactNode; color?: string }) => (
  <ol className={`list-decimal pl-5 ml-5 ${color ? `text-${color}` : 'text-black'}`}>{children}</ol>
);

const Figure = ({ children }: { children: ReactNode }) => (
  <figure className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-10 justify-items-center">{children}</figure>
);


export {
    EBookPage,
    Section,
    MaxWidthContainer,
    SectionTitle,
    Text,
    InlineDivs,
    Description,
    Figure,
    H2,
    H3,
    H4,
    Ul,
    Ol,
  };