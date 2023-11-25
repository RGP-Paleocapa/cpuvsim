import { ReactNode } from 'react';

export const Figure = ({ children }: { children: ReactNode }) => (
    <figure className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-10 justify-items-center">{children}</figure>
  );

// Two Divs Inline Component
export const InlineDivs = ({ children, centerStart = false }: { children: React.ReactNode[], centerStart?: boolean }) => (
    <div className="flex flex-col md:flex-row justify-center items-stretch">
      {children.map((child, index) => (
        <div 
          key={index} 
          className={`w-full md:w-1/2 flex flex-col ${centerStart ? "justify-start" : "justify-center"} py-4  ${index % 2 === 0 ? 'bg-green-500 dark:bg-green-700' : 'bg-red-500 dark:bg-red-700'}`}>
          {child}
        </div>
      ))}
    </div>
  );
  
// Max Width Container Component
// PADDING?
export const MaxWidthContainer = ({
    children,
    bgColor = 'bg-gray-100 dark:bg-transparent',
    smallPadding = false
  }: {
    children: React.ReactNode;
    bgColor?: string;
    smallPadding?: boolean;
  }) => (
    <div className={`max-w-4xl mx-auto ${smallPadding ? 'lg:p-4' : 'p-4'} rounded-lg ${bgColor}`}>
      {children}
    </div>
);

export default {
    MaxWidthContainer,
    InlineDivs,
    Figure,
}