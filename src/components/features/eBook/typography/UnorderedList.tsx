import { ReactNode } from "react";

const UnorderedList = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) => (
  <ul id={id} className={`list-disc pl-5 ml-5 text-gray-900 dark:text-gray-200 ${className || ""}`}>
    {children}
  </ul>
);

export default UnorderedList;
