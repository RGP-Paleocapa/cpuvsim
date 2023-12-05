import { useState, useEffect } from 'react';

// Define the props interface for the ImageSwitcher component
interface ImageSwitcherProps {
  images: string[];
  instructionsList: string[][];
}

// Define the ImageSwitcher component
const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ images, instructionsList }) => {
  // Initialize state variables using React hooks
  const [activeIndex, setActiveIndex] = useState(0); // Keeps track of the active image index
  const [imageHeight, setImageHeight] = useState('300px'); // Initial height for mobile

  // Function to handle image click and update activeIndex
  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  // Get the instructions for the currently active image
  const currentInstructions = instructionsList[activeIndex] || [];

  // Labels for the image selection buttons
  const labels = ['High Level', 'Assembler', 'Binary'];

  // Use useEffect hook to adjust the image container height based on the loaded image's aspect ratio
  useEffect(() => {
    const img = new Image();
    img.src = images[activeIndex];
    img.onload = () => {
      const aspectRatio = img.height / img.width;
      const newHeight = `${300 * aspectRatio}px`; // Adjust for mobile
      setImageHeight(newHeight);
    };
  }, [activeIndex, images]);

  return (
    <div className="w-full max-w-full mx-auto p-4 overflow-hidden">
      <div className="border rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-none">
        {/* Container */}
        <div className="relative flex-row lg:flex">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/3 xl:w-1/4 mx-auto">
            <div className={`h-${imageHeight} sm:h-[300px] overflow-hidden`}>
              <img
                src={images[activeIndex]}
                alt={`Image ${activeIndex + 1}`}
                className="w-full h-full object-contain md:object-fill"
              />
            </div>
          </div>
          {/* Text */}
          <div className="flex-grow p-4 bg-gray-100 dark:bg-gray-700 overflow-y-scroll lg:overflow-auto h-[300px]">
            <div className="text-2xl font-bold mb-4">
              {currentInstructions.map((text, index) => (
                <p key={index} className="mb-2 text-lg dark:text-gray-200">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="menu text-center mt-4">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`px-3 py-2 mr-2 mb-2 rounded ${
                activeIndex === index
                  ? 'bg-blue-500 text-gray-200'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700'
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
