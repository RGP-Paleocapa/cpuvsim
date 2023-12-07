import React, { useState } from 'react';

// Define a type for the image prop
type ImageObject = {
  src: string;
  alt?: string;
  url?: string;
};

// Extend the props to include an optional className
type YourImageComponentProps = {
  image: ImageObject;
  className?: string;
  text?: string;
};

const YourImageComponent: React.FC<YourImageComponentProps> = ({ image, className, text = 'Click to open link' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle click
  const handleClick = () => {
    if (image.url) {
      window.open(image.url, '_blank');
    } else {
      // If navigate is needed for some reason in the future
      // navigate('/cpuvsim/404');
    }
  };

  // Combine the default classes with any additional classes passed in
  const baseClassName = 'img-center rounded';
  const combinedClassName = `${baseClassName} ${className || ''}`;

  return (
    <div
      className={`relative ${isHovered ? 'hover:opacity-80' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={image.url ? handleClick : undefined}
    >
      <img
        src={image.src}
        alt={image.alt || 'Image description'}
        className={combinedClassName}
        style={{ cursor: image.url ? 'pointer' : 'default' }}
      />
      {text && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-80">
          {text}
        </div>
      )}
    </div>
  );
};

export default YourImageComponent;
