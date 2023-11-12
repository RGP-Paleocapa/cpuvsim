import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ImageObject {
  src: string;
  alt: string;
}

const CarouselSlider = ({ images }: { images: ImageObject[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent(current => (current === 0 ? images.length - 1 : current - 1));
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
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2"
          aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      <p className="ml-4">This carousel component is part of the Flowbite component library.</p>
    </div>
  );
};

export default CarouselSlider;
