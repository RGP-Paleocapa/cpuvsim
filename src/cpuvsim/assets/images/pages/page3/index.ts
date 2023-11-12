// Importing images
import image1 from './von.jpg';
import image2 from './InputOutput.jpg';
import image3 from './Screenshot 2023-11-11 163842.png';
import image4 from './Screenshot 2023-11-11 163708.png';
import image5 from './Screenshot 2023-11-11 163825.png';

// ImageObject interface
interface ImageObject {
  src: string;
  alt: string;
}

// Exporting images with alt text
export const images: Record<string, ImageObject> = {
  image1: { src: image1, alt: 'Von' },
  image2: { src: image2, alt: 'Input Output' },
  image3: { src: image3, alt: 'Screenshot 163842' },
  image4: { src: image4, alt: 'Screenshot 163708' },
  image5: { src: image5, alt: 'Screenshot 163825' },
};

export default images;
