import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold dark:text-cyan-400 text-cyan-600 my-5">{children}</h2>
);

export default SectionTitle;
