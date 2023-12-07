import React, { useState } from 'react';

type ImageLinkProps = {
  image: {
    src: string;
    alt?: string;
    url?: string;
  };
  className?: string;
};

const ImageLink: React.FC<ImageLinkProps> = ({ image, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (image.url) {
      window.open(image.url, '_blank');
    } else {
      // Handle the case where there is no URL.
      // You can add your logic here.
    }
  };

  const baseClassName = 'img-center rounded';
  const combinedClassName = `${baseClassName} ${className || ''}`;

  return (
    <div
      className={`relative ${isHovered ? 'hover:opacity-80 cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={image.url ? handleClick : undefined}
    >
      <img
        src={image.src}
        alt={image.alt || 'Image description'}
        className={combinedClassName}
      />
      {image.url && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-80">
          Click to open link
        </div>
      )}
    </div>
  );
};

export default ImageLink;
