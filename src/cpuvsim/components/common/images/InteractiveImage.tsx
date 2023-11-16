import { useState } from 'react';

const InteractiveImage = ({ src, alt, className }: {src: string, alt: string, className?: string}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {isFullscreen && <div className="fullscreen-overlay"></div>}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isFullscreen ? 'fullscreen-image' : ''}`}
        onClick={toggleFullscreen}
      />
    </>
  );
};

export default InteractiveImage;
