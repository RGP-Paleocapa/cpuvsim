import { ReactNode } from "react";
import Table from "./Table";
import DraggableContainerGrid from "./DraggableContainerGrid";

export { Table };
export { DraggableContainerGrid };

// Section Title Component
export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold dark:text-cyan-400 text-cyan-600 my-5">{children}</h2>
);  

// Text Component
export const Text = ({
  children, 
  textSize, 
  className,
  isDark,
}: { 
  children: ReactNode; 
  textSize?: string; 
  className?: string,
  isDark?: boolean,
}) => (
  <p 
    className={`${
      textSize ? textSize : 'text-base'
    } responsive-text ${isDark ? 'dark:text-black' : 'dark:text-gray-100'} text-gray-700 ${className}`}
  >
    {children}
  </p>
);

// Description Component
export const Description = ({ 
  children, 
  alignCenter = false, 
  className,
  isDark = false,
}: { 
  children: React.ReactNode, 
    alignCenter?: boolean, 
    className?: string,
    isDark?: boolean,
  }) => (
  <p 
    className={`my-4 text-sm leading-5 text-gray-600 ${
      isDark ? 'dark:text-black' : 'dark:text-gray-300'
    } mx-auto max-w-xl ${alignCenter ? 'text-center' : 'text-left'} ${className}`}
  >
    {children}
  </p>
);

// H2 Component
export const H2 = ({ children, className }: { children: ReactNode, className?: string }) => (
  <h2 className={`mb-4 mt-10 text-xl font-bold leading-7 text-gray-900 dark:text-gray-100 ${className}`}>
    {children}
  </h2>
);

// H3 Component
export const H3 = ({ 
  children, 
  className,
  isDark = false,
}: { 
  children: ReactNode, 
  className?: string,
  isDark?: boolean,
}) => (
  <h3 
    className={`mb-4 text-lg font-bold leading-7 text-gray-900 ${
      isDark ? 'dark:text-black' : 'dark:text-gray-100'
    } ${className}`}
  >
    {children}
  </h3>
);

// H4 Component
export const H4 = ({ children, className }: { children: ReactNode, className?: string }) => (
  <h4 className={`mb-4 mt-10 text-base font-bold leading-5 text-gray-900 dark:text-gray-100 ${className}`}>
    {children}
  </h4>
);

export const B = ({ children, className }: { children: ReactNode; className?: string }) => (
  <b className={`${className ? className : ''}`}>
    {children}
  </b>
);

// Ul Component
export const Ul = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <ul className={`list-disc pl-5 ml-5 text-gray-900 dark:text-gray-200 ${className ? className : ''}`}>{children}</ul>
);

// Ol Component
export const Ol = ({ children, className, start }: { children: React.ReactNode; className?: string; start?: number }) => (
  <ol className={`list-decimal pl-5 ml-5 text-gray-900 dark:text-gray-200 ${className ? className : ''}`} start={start}>
    {children}
  </ol>
);

// Pre component
export const Pre: React.FC<{ content: ReactNode; className?: string }> = ({ content, className }) => {
  return (
    <pre className={className || "whitespace-pre overflow-auto text-sm bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded p-4"}>
      {content}
    </pre>
  );
};