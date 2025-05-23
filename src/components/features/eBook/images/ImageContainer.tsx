import { FC } from "react";
import Description from "@/components/features/eBook/typography/Description";

type ImageContainerProps = {
  src: string;
  alt: string;
  caption?: string;
  classname?: string;
};

const ImageContainer: FC<ImageContainerProps> = ({
  src,
  alt,
  caption,
  classname = "",
}) => {
  return (
    <div className={`flex flex-col items-center w-full max-w-sm ${classname}`}>
      <div className="relative w-full aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      {caption && (
        <Description alignCenter className="mt-4">
          {caption}
        </Description>
      )}
    </div>
  );
};

export default ImageContainer;
