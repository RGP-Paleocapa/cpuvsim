import React, { useState } from 'react';

interface ImageSwitcherProps {
  images: string[];
  instructionsList: string[][];
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ images, instructionsList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const currentInstructions = instructionsList[activeIndex] || [];

  const labels = ['High Level', 'Assembler', 'Binary'];

  return (
    <div className="w-full max-w-full mx-auto p-4 overflow-hidden">
      <div className="border rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-none">
        <div className="relative flex-row lg:flex">
          <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto">
            <div className="h-[300px] overflow-hidden">
              <img
                src={images[activeIndex]}
                alt={`Image ${activeIndex + 1}`}
                className="w-full h-full object-contain md:object-fill"
              />
            </div>
          </div>
          <div className="flex-grow p-4 bg-gray-100 dark:bg-gray-700 overflow-y-auto h-[300px]">
            <div className="text-2xl font-bold mb-4">
              {currentInstructions.map((text, index) => (
                <p key={index} className="mb-2 text-lg dark:text-gray-200">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="menu text-center mt-4">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`px-3 py-2 mr-2 mb-2 rounded ${
                activeIndex === index ? 'bg-blue-500 text-gray-200' : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSwitcher;
