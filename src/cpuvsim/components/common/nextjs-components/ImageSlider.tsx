import React, { useRef, cloneElement } from 'react';

interface ImageSliderProps {
  children: React.ReactNode;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'prev' | 'next') => {
    const container = sliderRef.current;

    if (container) {
      const slide = container.querySelector('.flex-none') as HTMLElement; // Cast to HTMLElement
      if (slide) {
        const slideMargin = parseFloat(window.getComputedStyle(slide).marginRight);
        const slideWidth = slide.offsetWidth + slideMargin;
        const numVisibleSlides = 3; // Number of visible slides

        if (direction === 'next') {
          container.scrollLeft += slideWidth * numVisibleSlides;
        } else {
          container.scrollLeft -= slideWidth * numVisibleSlides;
        }
      }
    }
  };

  // Convert children to an array
  const slides = React.Children.toArray(children);

  return (
    <div className="relative overflow-hidden">
      <div className="flex overflow-x-hidden" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-full sm:w-1/2 h-64 sm:h-auto rounded-lg mr-4"> {/* Add margin for spacing */}
            {cloneElement(slide as React.ReactElement, {
              className: 'w-full h-auto max-h-64 lg:max-h-full rounded-lg',
              alt: `Slide ${index + 1}`,
            })}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-2 flex justify-between">
        <button
          onClick={() => scroll('prev')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => scroll('next')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
