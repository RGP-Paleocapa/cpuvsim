import image1 from './immagine_2021-11-07_132524_edited.jpg';
import image2 from './main-qimg-1c0dc8c8e5dd690f7607372305bcf5c2.jpg';
import image3 from './immagine_2021-11-18_124833_edited.jpg';

interface ImageObject {
  src: string;
  alt: string;
}

export const images: Record<string, ImageObject> = {
    image1: { src: image1, alt: 'immagine_2021-11-07_132524_edited.jpg' },
    image2: { src: image2, alt: 'main-qimg-1c0dc8c8e5dd690f7607372305bcf5c2.jpg' },
    image3: { src: image3, alt: 'immagine_2021-11-18_124833_edited.jpg' },

};

export default images;