import { ReactNode } from "react";

const Figure = ({ children }: { children: ReactNode }) => (
  <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 justify-items-center">{children}</figure>
);

export default Figure;
