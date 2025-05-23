import { ReactNode } from "react";

const Description = ({
  children,
  alignCenter = false,
  className,
  isDark = false,
}: {
  children: ReactNode;
  alignCenter?: boolean;
  className?: string;
  isDark?: boolean;
}) => (
  <p
    className={`my-4 text-sm leading-5 text-gray-600 ${
      isDark ? "dark:text-black" : "dark:text-gray-300"
    } mx-auto max-w-xl ${alignCenter ? "text-center" : "text-justify"} ${className}`}
  >
    {children}
  </p>
);

export default Description;
