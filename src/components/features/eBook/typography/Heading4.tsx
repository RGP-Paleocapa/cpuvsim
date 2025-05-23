import { ReactNode, FC } from "react";

const Heading4: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <h4 className={`mb-4 mt-10 text-base font-bold leading-5 text-gray-900 dark:text-gray-100 ${className}`}>
    {children}
  </h4>
);

export default Heading4;
