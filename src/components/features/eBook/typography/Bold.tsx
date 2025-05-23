import { ReactNode } from "react";

const Bold = ({ children, className }: { children: ReactNode; className?: string }) => (
  <b className={`${className ? className : ''}`}>
    {children}
  </b>
);

export default Bold;
