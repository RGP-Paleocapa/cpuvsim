import image1 from './images/languagesFlowchart.jpg';
import image2 from './images/counter.jpg';
import image3 from './images/assemblerRam.png';
import image4 from './images/binarioRam.png';

interface ImageObject {
    src: string;
    alt: string;
    url?: string;
}

export const images: Record<string, ImageObject> = {
    languagesFlowchart: { src: image1, alt: 'default'},
    image2: { src: image2, alt: 'default'},
    image3: { src: image3, alt: 'default', url: 'https://cpuvisualsimulator.github.io/?program=ICAgICAgICAgICAgICAgTE9EIENPVU5URVIKICAgICAgICAgICAgICAgQUREICMxCiAgICAgICAgICAgICAgIFNUTyBDT1VOVEVSCiAgICAgICAgICAgICAgIEhMVApDT1VOVEVSOiAgICAgICAw'},
    image4: { src: image4, alt: 'default', url: 'https://cpuvisualsimulator.github.io/?program=ICAgICAgICAgICAgICAgTE9EIENPVU5URVIKICAgICAgICAgICAgICAgQUREICMxCiAgICAgICAgICAgICAgIFNUTyBDT1VOVEVSCiAgICAgICAgICAgICAgIEhMVApDT1VOVEVSOiAgICAgICAw'},
}

export default images;