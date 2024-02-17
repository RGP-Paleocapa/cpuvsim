import image1 from './images/FetchDecodeExecute_00.jpg';
import image2 from './images/fetch.gif';
import image3 from './images/decode.gif';
import image4 from './images/execute.gif';
import image5 from './images/something_else.gif';
import { ImageObject } from '@/types/images';

const commonUrl = 'https://cpuvisualsimulator.github.io/?program=ICAgICAgICAgICAgICAgTE9EIENPVU5UCiAgICAgICAgICAgICAgIEFERCAjMQogICAgICAgICAgICAgICBTVE8gQ09VTlQKICAgICAgICAgICAgICAgSk1QIDIKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKQ09VTlQ6ICAgICAgICAgNA%3D%3D';

export const images: Record<string, ImageObject> = {
    fetchCodeExecute: { src: image1, alt: 'default' }, // no url
    fetch: { src: image2, alt: 'default', url: commonUrl },
    execute: { src: image4, alt: 'default', url: commonUrl },
    decode: { src: image3, alt: 'default', url: commonUrl },
    altro: { src: image5, alt: 'default', url: commonUrl },
}

export default images;