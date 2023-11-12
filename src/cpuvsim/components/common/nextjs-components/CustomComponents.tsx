import { ReactNode } from 'react';
// import Image from 'next/image';

// eBook Page Component
const EBookPage = ({ children }: { children: ReactNode }) => (
    <div className="w-full max-w-full mx-0 my-8 pb-4 px-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-slate-700">
      {children}
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
const MaxWidthContainer = ({ children, bgColor = 'bg-white' }: { children: React.ReactNode; bgColor?: string }) => (
  <div className={`max-w-4xl mx-auto px-4 rounded-lg ${bgColor}`}>
    {children}
  </div>
);

// Text Component
const Text = ({ children, textSize }: { children: ReactNode; textSize?: string }) => (
    <p className={`${textSize ? textSize : 'text-base'} responsive-text`}>{children}</p>
);
  
// Two Divs Inline Component
// const InlineDivs = ({ children }: { children: React.ReactNode[] }) => (
//   <div className="flex flex-col sm:flex-row justify-center items-stretch py-5 space-y-4 sm:space-y-0">
//     {children.map((child, index) => (
//       <div key={index} className="w-full sm:w-1/2 px-4 py-2 bg-gray-300 dark:bg-gray-700 flex flex-col justify-center">
//         {child}
//       </div>
//     ))}
//   </div>
// );
const InlineDivs = ({ children }: { children: React.ReactNode[] }) => (
  <div className="flex flex-col md:flex-row justify-center items-stretch">
    {children.map((child, index) => (
      <div key={index} className="w-full md:w-1/2 flex flex-col justify-center py-4">
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
const H3 = ({ children }: { children: ReactNode }) => (
    <h3 className="mb-4 mt-10 text-lg font-bold leading-7 text-gray-900 dark:text-gray-200">{children}</h3>
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
  <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-10 justify-items-center">{children}</figure>
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
    // Image,
    H3,
    H4,
    Ul,
    Ol,
  };