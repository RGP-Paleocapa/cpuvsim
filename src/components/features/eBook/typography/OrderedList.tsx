import { ReactNode } from "react";

const OrderedList = ({
  children,
  className,
  start,
}: {
  children: ReactNode;
  className?: string;
  start?: number;
}) => (
  <ol className={`list-decimal pl-5 ml-5 text-gray-900 dark:text-gray-200 ${className || ""}`} start={start}>
    {children}
  </ol>
);

export default OrderedList;
