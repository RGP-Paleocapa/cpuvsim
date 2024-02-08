import { ReactNode } from 'react';

// Responsive Section Component
export const Section = ({
  children,
  id,
  className
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) => (
<<<<<<< HEAD
  <section className={`py-10 ${className || ''}`} id={id}>
=======
  <section className={`whitespace-pre-wrap py-10 ${className || ''}`} id={id}>
>>>>>>> source-repo/main
    {children}
  </section>
);

export const Figure = ({ children }: { children: ReactNode }) => (
  <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 justify-items-center">{children}</figure>
);

// Two Divs Inline Component
export const InlineDivs = ({
  children,
  containsTable,
  centerStart = false,
  isEven = false,
}: {
  children: React.ReactNode[];
  containsTable?: boolean;
  centerStart?: boolean;
  isEven?: boolean;
}) => {
  const lightBg = 'bg-blue-200 dark:bg-yellow-400';
  const darkBg = 'bg-green-200 dark:bg-indigo-400';
  const oddBackground = isEven ? darkBg : lightBg;
  const evenBackground = isEven ? lightBg : darkBg;

  return (
    <div
<<<<<<< HEAD
      className={`flex flex-col ${
=======
      className={`whitespace-pre-wrap flex flex-col ${
>>>>>>> source-repo/main
        containsTable ? 'lg:flex-row' : 'lg:flex-row'
      } ${
        isEven ? 'flex-col-reverse' : ''
      } justify-center items-stretch`}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={`${
            containsTable ? 'w-full lg:w-1/2' : 'w-full md:w-full'
          } flex flex-col ${centerStart ? 'justify-start' : 'justify-center'} py-4 ${
            index % 2 === 0 ? evenBackground : oddBackground
          } overflow-auto`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
  
// Max Width Container Component
// PADDING?
export const MaxWidthContainer = ({
  children,
  bgColor = 'bg-transparent',
  smallPadding = false,
  classname = '',
}: {
  children: React.ReactNode;
  bgColor?: string;
  smallPadding?: boolean;
  classname?: string;
}) => (
<<<<<<< HEAD
  <div className={`max-w-4xl mx-fit ${smallPadding ? 'lg:p-4' : 'p-4'} rounded-lg ${bgColor} ${classname}`}>
=======
  <div className={`whitespace-pre-wrap max-w-4xl mx-fit ${smallPadding ? 'lg:p-4' : 'p-4'} rounded-lg ${bgColor} ${classname}`}>
>>>>>>> source-repo/main
    {children}
  </div>
);

export default {
    MaxWidthContainer,
    InlineDivs,
    Figure,
}