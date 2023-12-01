import { ReactNode } from "react";
import Table from "./Table";
import DraggableContainerGrid from "./DraggableContainerGrid";

export { Table };
export { DraggableContainerGrid };

// Responsive Section Component
export const Section = ({ children, id }: { children: ReactNode; id?: string }) => (
  <section className="py-10" id={id}>
    {children}
  </section>
);

// Section Title Component
export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold dark:text-cyan-400 text-cyan-600 my-5">{children}</h2>
);  

// Text Component
export const Text = ({ children, textSize }: { children: ReactNode; textSize?: string }) => (
  <p className={`${textSize ? textSize : 'text-base'} responsive-text text-gray-700 dark:text-gray-100`}>{children}</p>
);

// Description Component
export const Description = ({ children, alignCenter = false }: { children: React.ReactNode, alignCenter?: boolean }) => (
  <p className={`my-4 text-sm leading-5 text-gray-600 dark:text-gray-300 mx-auto max-w-xl ${alignCenter ? 'text-center' : 'text-left'}`}>
    {children}
  </p>
);

// H2 Component
export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-4 mt-10 text-xl font-bold leading-7 text-gray-900 dark:text-gray-100">{children}</h2>
);

// H3 Component
export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-4 text-lg font-bold leading-7 text-gray-900 dark:text-gray-100">{children}</h3>
);

// H4 Component
export const H4 = ({ children }: { children: ReactNode }) => (
  <h4 className="mb-4 mt-10 text-base font-bold leading-5 text-gray-900 dark:text-gray-100">{children}</h4>
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
