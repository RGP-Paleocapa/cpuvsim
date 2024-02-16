import { useState } from 'react';

const FullscreenToggleImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      {isFullscreen && (
        <div className="fullscreen-overlay">
          <button
            className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
            onClick={closeFullscreen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isFullscreen ? 'fullscreen-image' : ''} lg:cursor-pointer`}
        onClick={() => {
          if (window.innerWidth >= 1024) {
            toggleFullscreen();
          }
        }}
      />
    </>
  );
};

export default FullscreenToggleImage;
