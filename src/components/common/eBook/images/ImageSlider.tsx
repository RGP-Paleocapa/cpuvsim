import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ImageObject {
  src: string;
  alt: string;
  customTranslateX?: string; // Optional custom translate-x value
  customTranslateY?: string; // Optional custom translate-y value
}

const CarouselSlider = ({ images }: { images: ImageObject[] }) => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrent(current => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(current => (current === 0 ? images.length - 1 : current - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="max-w-2xl m-auto relative z-10">
      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fullscreen-overlay">
          {/* Fullscreen Image */}
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full fullscreen-image"
            onClick={toggleFullscreen}
          />

          {/* Description Overlay */}
          <div className="absolute bottom-0 w-full text-center p-4 bg-black bg-opacity-50 text-white">
            {images[current].alt} {/* Description next to the zoomed image */}
          </div>
        </div>
      )}

      <div className="relative mb-4 mt-4 ml-4" data-carousel="static">
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {images.map((img, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${index === current ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`absolute top-1/2 left-1/2 ${
                  img.customTranslateX || '-translate-x-1/2'
                } ${img.customTranslateY || '-translate-y-1/2'} w-full ${
                  index === current ? 'block' : 'hidden'
                }`}
                onClick={toggleFullscreen}
              />
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="hover:scale-125 absolute top-1/2 left-0 transform -translate-y-1/2 scale-150 bg-white dark:bg-gray-800 dark:text-white p-4 rounded"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={nextSlide} 
          className="hover:scale-125 absolute top-1/2 right-0 transform -translate-y-1/2 scale-150 bg-white dark:bg-gray-800 dark:text-white p-4 rounded"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
