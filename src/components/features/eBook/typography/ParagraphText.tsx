import { ReactNode } from "react";

const ParagraphText = ({
  children,
  textSize,
  className,
  isDark,
}: {
  children: ReactNode;
  textSize?: string;
  className?: string;
  isDark?: boolean;
}) => (
  <p
    className={`${
      textSize || "text-base"
    } responsive-text text-justify ${isDark ? "dark:text-black" : "dark:text-gray-100"} text-gray-700 ${className}`}
  >
    {children}
  </p>
);

export default ParagraphText;
