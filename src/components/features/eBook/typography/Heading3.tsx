import { ReactNode, FC } from "react";

const Heading3: FC<{ children: ReactNode; className?: string; isDark?: boolean }> = ({
  children,
  className,
  isDark = false,
}) => (
  <h3
    className={`mb-4 text-lg font-bold leading-7 text-gray-900 ${
      isDark ? "dark:text-black" : "dark:text-gray-100"
    } ${className}`}
  >
    {children}
  </h3>
);

export default Heading3;
