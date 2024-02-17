import { ImageObject } from '@/types/images';
import { useState, useEffect } from 'react';
import { YourImageComponent } from '.';

interface ImageSwitcherProps {
  images: ImageObject[];
  instructionsList: string[][];
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ images, instructionsList }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState('300px');

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const currentInstructions = instructionsList[activeIndex] || [];
  const labels = ['High Level', 'Assembler', 'Binary']; // Adjust if needed

  useEffect(() => {
    const img = new Image();
    img.src = images[activeIndex].src;
    img.onload = () => {
      const aspectRatio = img.height / img.width;
      setImageHeight(`${300 * aspectRatio}px`);
    };
  }, [activeIndex, images]);

  return (
    <div className="w-full max-w-full mx-auto p-4 overflow-hidden">
      <div className="border rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-none">
        <div className="relative flex-row lg:flex">
          <div className="flex-shrink-0 w-full lg:w-1/3 xl:w-1/4 mx-auto">
            <div className={`h-[${imageHeight}] sm:h-[300px] overflow-hidden`}>
              <YourImageComponent image={images[activeIndex]} className="w-full h-[300px] object-contain md:object-fill" isNotCentered />
            </div>
          </div>
          <div className="flex-grow p-4 bg-gray-100 dark:bg-gray-700 overflow-y-scroll lg:overflow-auto h-[300px]">
            {currentInstructions.map((text, index) => (
              <p key={index} className="mb-2 text-lg dark:text-gray-200">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="menu text-center mt-4">
          {labels.map((label, index) => (
            <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`px-3 py-2 mr-2 mb-6 button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
                  active:translate-y-2 ${activeIndex === index ? 'active:shadow-[0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px]' : ''}
                  transition-all duration-150 ${activeIndex === index ? 'shadow-[0_10px_0_0_#1747a6,0_15px_0_0_#1747a641] border-blue-400' : 'shadow-[0_10px_0_0_#A9A9A9,0_15px_0_0_#A9A9A941] dark:shadow-[0_10px_0_0_#374151,0_15px_0_0_#37415141] border-gray-400'}
                  border-b-[1px] ${
                    activeIndex === index
                      ? 'bg-blue-500 text-black'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700'
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
