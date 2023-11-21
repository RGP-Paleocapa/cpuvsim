import image1 from './images/FetchDecodeExecute_00.jpg';
import image2 from './images/fetch.gif';
import image3 from './images/decode.gif';
import image4 from './images/execute.gif';
import image5 from './images/something_else.gif';

interface ImageObject {
    src: string;
    alt: string;
    url?: string;
}

export const images: Record<string, ImageObject> = {
    fetchCodeExecute: { src: image1, alt: 'default' }, // no url
    fetch: { src: image2, alt: 'default', url: '' },
    decode: { src: image3, alt: 'default', url: '' },
    execute: { src: image4, alt: 'default', url: '' },
    altro: { src: image5, alt: 'default', url: '' },
}

export default images;