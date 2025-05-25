import { ReactNode } from "react";

const Section = ({
  children,
  id,
  className
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) => (
  <section className={`whitespace-pre-wrap py-10 ${className || ''}`} id={id}>
    {children}
  </section>
);

export default Section;
