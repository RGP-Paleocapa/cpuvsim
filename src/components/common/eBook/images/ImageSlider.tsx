import { useState } from 'react';

interface ImageObject {
  src: string;
  alt: string;
}

const CarouselSlider = ({ images }: { images: ImageObject[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="max-w-2xl m-auto relative z-10">
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
                className={`absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 ${
                  index === current ? 'block' : 'hidden'
                }`}
              />
              <div className="absolute bottom-0 w-full text-center p-4 bg-black bg-opacity-50 text-white">
                {img.alt} {/* Description at the bottom */}
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="hover:scale-125 absolute top-1/2 left-0 transform -translate-y-1/2 scale-150 bg-white dark:bg-gray-800 dark:text-white p-4 rounded"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="hover:scale-125 absolute top-1/2 right-0 transform -translate-y-1/2 scale-150 bg-white dark:bg-gray-800 dark:text-white p-4 rounded"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
