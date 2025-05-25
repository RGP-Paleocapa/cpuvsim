import { FC, ReactNode } from "react";

type ImageGroupProps = {
  children: ReactNode;
  className?: string;
};

const ImageGroup: FC<ImageGroupProps> = ({ children, className = "" }) => {
  return (
    <section className={`flex flex-wrap justify-center lg:justify-evenly items-center py-8 sm:gap-8 max-w-screen-xl mx-auto px-4 ${className}`}>
      {children}
    </section>
  );
}

export default ImageGroup
