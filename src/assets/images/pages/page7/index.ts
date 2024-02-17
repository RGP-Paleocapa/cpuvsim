// Import images
import image1 from './images/high-sum.webp';
import image2 from './images/assembler-sum.webp';
import image3 from './images/binary-sum.webp';
import image4 from './images/high-formula.webp';
import image5 from './images/assembler-formula.webp';
import image6 from './images/binary-formula.webp';
import image7 from './images/high-loop.webp';
import image8 from './images/assembler-loop.webp';
import image9 from './images/binary-loop.webp';
import image10 from './images/high-if-then-else.webp';
import image11 from './images/assembler-if-then-else.webp';
import image12 from './images/binary-if-then-else.webp';
import image13 from './images/high-while.webp';
import image14 from './images/assembler-while.webp';
import image15 from './images/binary-while.webp';
import image16 from './images/high-for.webp';
import image17 from './images/assembler-for.webp';
import image18 from './images/binary-for.webp';
import { ImageObject } from '@/types/images';

type Category = 'sum' | 'formula' | 'loop' | 'ifThenElse' | 'while' | 'for';

const urls: Record<Category, string> = {
    sum: 'https://cpuvisualsimulator.github.io/?program=ICAgICAgICAgICAgICAgTE9EICMyCiAgICAgICAgICAgICAgIFNUTyBXCiAgICAgICAgICAgICAgIExPRCAjOAogICAgICAgICAgICAgICBTVE8gWAogICAgICAgICAgICAgICBMT0QgVwogICAgICAgICAgICAgICBBREQgWAogICAgICAgICAgICAgICBTVE8gWQogICAgICAgICAgICAgICBITFQKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUApXOiAgICAgICAgICAgICBOT1AKWDogICAgICAgICAgICAgTk9QClk6ICAgICAgICAgICAgIE5PUA%3D%3D',
    formula: 'https://cpuvisualsimulator.github.io/?program=ICAgICAgICAgICAgICAgTE9EICMzCiAgICAgICAgICAgICAgIE1VTCBZCiAgICAgICAgICAgICAgIFNUTyBUTVAKICAgICAgICAgICAgICAgTE9EICMyCiAgICAgICAgICAgICAgIERJViBXCiAgICAgICAgICAgICAgIEFERCBUTVAKICAgICAgICAgICAgICAgU1RPIFgKICAgICAgICAgICAgICAgSExUCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUApZOiAgICAgICAgICAgICAxMApXOiAgICAgICAgICAgICAyClRNUDogICAgICAgICAgIE5PUApYOiAgICAgICAgICAgICBOT1A%3D',
    loop: 'https://cpuvisualsimulator.github.io/?program=Rk9SRVZFUjogICAgICAgTE9EIENPVU5UCiAgICAgICAgICAgICAgIEFERCAjMQogICAgICAgICAgICAgICBTVE8gQ09VTlQKRU5ERlJWUjogICAgICAgSk1QIEZPUkVWRVIKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUAogICAgICAgICAgICAgICBOT1AKICAgICAgICAgICAgICAgTk9QCiAgICAgICAgICAgICAgIE5PUApDT1VOVDogICAgICAgICBOT1A%3D',
    ifThenElse: 'https://cpuvisualsimulator.github.io/?program=ICAgICAgICAgICAgICAgTE9EIFgKICAgICAgICAgICAgICAgQ01QICMzCiAgICAgICAgICAgICAgIEpOWiBFTFNFClRIRU46ICAgICAgICAgIExPRCAjNQogICAgICAgICAgICAgICBBREQgWQogICAgICAgICAgICAgICBTVE8gWQogICAgICAgICAgICAgICBKTVAgRU5ESUYKRUxTRTogICAgICAgICAgTE9EICMyCiAgICAgICAgICAgICAgIEFERCBaCiAgICAgICAgICAgICAgIFNUTyBaCkVORElGOiAgICAgICAgIEhMVApYOiAgICAgICAgICAgICA4Clk6ICAgICAgICAgICAgIDIKWjogICAgICAgICAgICAgMQ%3D%3D',
    while: 'https://cpuvisualsimulator.github.io/?program=V0hJTEU6ICAgICAgICAgTE9EIENPVU5UCiAgICAgICAgICAgICAgIENNUCBNQVgKICAgICAgICAgICAgICAgSlogRU5EV0hJTEUKICAgICAgICAgICAgICAgQUREICMxCiAgICAgICAgICAgICAgIFNUTyBDT1VOVAogICAgICAgICAgICAgICBBREQgU1VNCiAgICAgICAgICAgICAgIFNUTyBTVU0KICAgICAgICAgICAgICAgSk1QIFdISUxFCkVORFdISUxFOiAgICAgIEhMVAogICAgICAgICAgICAgICBOT1AKTUFYOiAgICAgICAgICAgNQpDT1VOVDogICAgICAgICBOT1AKU1VNOiAgICAgICAgICAgTk9Q',
    for: 'https://cpuvisualsimulator.github.io/?program=V0hJTEU6ICAgICAgICAgTE9EIENPVU5UCiAgICAgICAgICAgICAgIENNUCBNQVgKICAgICAgICAgICAgICAgSlogRU5EV0hJTEUKICAgICAgICAgICAgICAgQUREICMxCiAgICAgICAgICAgICAgIFNUTyBDT1VOVAogICAgICAgICAgICAgICBBREQgU1VNCiAgICAgICAgICAgICAgIFNUTyBTVU0KICAgICAgICAgICAgICAgSk1QIFdISUxFCkVORFdISUxFOiAgICAgIEhMVAogICAgICAgICAgICAgICBOT1AKTUFYOiAgICAgICAgICAgNQpDT1VOVDogICAgICAgICBOT1AKU1VNOiAgICAgICAgICAgTk9Q',
}

// Dynamically generate image objects
function generateImageObjects(): Record<string, ImageObject[]> {
    const categories: Category[] = ['sum', 'formula', 'loop', 'ifThenElse', 'while', 'for'];
    const imagesPerCategory = 3; // Assuming 3 images per category
    const imageImports = [
        image1, image2, image3, // sum
        image4, image5, image6, // formula
        image7, image8, image9, // loop
        image10, image11, image12, // ifThenElse
        image13, image14, image15, // while
        image16, image17, image18, // for
    ];

    const images: Record<string, ImageObject[]> = {};

    categories.forEach((category, index) => {
        const baseIndex = index * imagesPerCategory;
        images[category] = imageImports.slice(baseIndex, baseIndex + imagesPerCategory).map((src, i) => ({
            src,
            alt: `default ${category} ${i + 1}`,
            url: i === 1 || i === 2 ? urls[category] : undefined, // Add URL only to the 2nd and 3rd images
        }));
    });

    return images;
}

const images = generateImageObjects();

export default images;
