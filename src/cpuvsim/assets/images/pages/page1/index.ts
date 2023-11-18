import image1 from './slider/amazon.png';
import image2 from './slider/car.png';
import image3 from './slider/controller.png';
import image4 from './slider/drone.png';
import image5 from './slider/laptop.png';
import image6 from './slider/smartwatch.png';
import architecture1 from './images/architecture_01.jpg';
import architecture2 from './images/architecture_02.jpg';
import specialPurposeComputer from './images/special_purpose_computer.png';
import modernComputer from './images/modern_computer.png';
import eniac from './images/796px-ENIAC_Penn1.jpg';

interface ImageObject {
    src: string;
    alt: string;
}

export const images: Record<string, ImageObject> = {
    image1: { src: image1, alt: 'default'},
    image2: { src: image2, alt: 'default'},
    image3: { src: image3, alt: 'default'},
    image4: { src: image4, alt: 'default'},
    image5: { src: image5, alt: 'default'},
    image6: { src: image6, alt: 'default'},
    image7: { src: modernComputer, alt: 'default'},
    architecture1: { src: architecture1, alt: 'architecture1'},
    architecture2: { src: architecture2, alt: 'architecture2'},
    eniac: { src: eniac, alt: 'eniac'},
    modernComputer: { src: modernComputer, alt: 'modernComputer'},
    specialPurposeComputer: { src: specialPurposeComputer, alt: 'specialPurposeComputer'},
}

export default images;