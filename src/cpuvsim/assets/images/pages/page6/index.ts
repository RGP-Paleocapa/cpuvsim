import image1 from './languagesFlowchart.jpg';

interface ImageObject {
    src: string;
    alt: string;
}

export const images: Record<string, ImageObject> = {
    image1: { src: image1, alt: 'default'},
}

export default images;