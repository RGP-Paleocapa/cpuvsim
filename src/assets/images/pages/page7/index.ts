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

const images: Record<string, ImageObject> = {
    sum1: { src: image1, alt: 'default'},
    sum2: { src: image2, alt: 'default'},
    sum3: { src: image3, alt: 'default'},
    formula1: { src: image4, alt: 'default'},
    formula2: { src: image5, alt: 'default'},
    formula3: { src: image6, alt: 'default'},
    loop1: { src: image7, alt: 'default'},
    loop2: { src: image8, alt: 'default'},
    loop3: { src: image9, alt: 'default'},
    ifThenElse1: { src: image10, alt: 'default'},
    ifThenElse2: { src: image11, alt: 'default'},
    ifThenElse3: { src: image12, alt: 'default'},
    while1: { src: image13, alt: 'default'},
    while2: { src: image14, alt: 'default'},
    while3: { src: image15, alt: 'default'},
    for1: { src: image16, alt: 'default'},
    for2: { src: image17, alt: 'default'},
    for3: { src: image18, alt: 'default'},
}

export default images;