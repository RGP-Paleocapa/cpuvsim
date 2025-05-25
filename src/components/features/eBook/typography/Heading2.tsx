import { ReactNode } from "react";

const Heading2 = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2 className={`mb-4 mt-10 text-xl font-bold leading-7 text-gray-900 dark:text-gray-100 ${className}`}>
    {children}
  </h2>
);

export default Heading2;
