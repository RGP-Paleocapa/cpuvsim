import { ReactNode } from "react";
import ParagraphText from "./ParagraphText";

const ListItem = ({
  children,
  className,
  margin0,
  ...restProps
}: {
  children: ReactNode;
  className?: string;
  isDark?: boolean;
  margin0?: boolean;
}) => (
  <li className={`${margin0 ? "mb-0" : "mb-4"} ${className}`}>
    <ParagraphText {...restProps}>{children}</ParagraphText>
  </li>
);

export default ListItem;
