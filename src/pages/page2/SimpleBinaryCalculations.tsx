import { images } from "@assets/images/pages/page2";
import Table from "@common/eBook/content/Table";
import EBookPage from "@common/eBook/EBook";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/common/eBook/layout/layout";
import { B, Description, H3, Li, SectionTitle, Text, Ul } from "@common/eBook/content";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";

const Page2 = () => {
    useDocumentMetadata('Simple Binary Calculations', "This is the second page");
    const { setFooterData } = useFooter();
    useEffect(() => {
      setFooterData(references);
    }, [setFooterData]);
    const references = data.references;
    const textTable = data.textTable;
    const instructionTable = data.instructionTable;

  return (
    <EBookPage currentPage={2}>
        <Section>
            <SectionTitle>
                Computers perform simple calculations on binary digits
            </SectionTitle>

            <Text>
                As said before, computers do not represent and process information using numbers, text, images, or sounds as we do. Instead, they represent everything using just two symbols: <b>1</b> and <b>0</b>.
                <br /><br />
                For example, pairs of binary digits are added according to the rules:
                <SmoothScrollButton targetId="footer" buttonText="[1]" />
                <br /><br />
                <B className="text-blue-400">0</B> + <B className="text-blue-400">0</B> = <B className="text-blue-400">0</B>
                <br />
                <B className="text-blue-400">0</B> + <B className="text-green-700/75 dark:text-green-500">1</B> = <B className="text-green-700/75 dark:text-green-500">1</B>
                <br />
                <B className="text-green-700/75 dark:text-green-400">1</B> + <B className="text-green-700/75 dark:text-green-500">1</B> = <B className="text-red-700">1</B><B className="text-blue-600">0</B>, (one - zero, not ten) which means <B className="text-blue-600">0</B> with <B className="text-red-700">carry 1</B>.
                <br /><br />
                The sequence <B className="text-red-700">1</B><B className="text-blue-600">0</B> <B>as a binary number</B>, that is using only 2 symbols, is the equivalent of 2 as a decimal number.
            </Text>
        </Section>

        <Section>
            <SectionTitle>
                Binary digits can represent text, images, video, audio, instructions
            </SectionTitle>
            <Text>
                But how can different types of information such as text, images, sounds or even computer instructions be represented, using just the two symbols 1 and 0?
                <br /><br />
                Starting from the numbers, and soon the alphabet, different <b>coding conventions</b> have been designed. Here are some examples of binary representations of different media:
            </Text>
        </Section>

        <Section>
            <InlineDivs centerStart containsTable>
                <MaxWidthContainer>
                    <H3 isDark>Text</H3>
                    <Text isDark>
                        Text can be represented in a computer by a sequence of binary codes, with each code representing a letter or a punctuation mark.
                        <br /><br />
                        Older computing machinery used the so called ASCII code, which allocates seven bits for each symbol in latin-based alphabets. Because nowadays computers work with 8-bit groups of 1s and 0s (bytes), rather than with 7-bit groups, ASCII codes are often extended by one bit to 8 bits.
                        <br />
                        A more flexible solution is Unicode, which makes use of 16 or even 32 bits, permitting a huge number of different characters (including, for example, Chinese or Japanese) to be coded
                    </Text>
                    
                </MaxWidthContainer>
                <MaxWidthContainer smallPadding>
                    <Table headerTitles={['Binary', 'Char', 'Binary', 'Char'] } bodyRows={textTable} />
                    <Description alignCenter isDark>
                        A few examples of ASCII codes
                    </Description>
                </MaxWidthContainer>
            </InlineDivs>

            <InlineDivs centerStart isEven>
                <MaxWidthContainer>
                    {/* First Image */}
                    <img src={images.image1.src} alt={images.image1.alt} className="img-center" />

                    {/* Second Image (Square) and Description */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <div className="w-16 h-16 bg-gray-400 mr-4 flex-shrink-0" /> {/* 32x32 pixels square */}
                        <Description isDark>
                            Using the RGB color model, the color of this pixel is represented as "37, 154, 170" in decimal, or 100101, 10011010, 10101010 in binary.
                        </Description>
                    </div>
                </MaxWidthContainer>

                <MaxWidthContainer>
                    <H3 isDark>Images and Videos</H3>
                    <Text isDark>
                        In 1886, impressionist painters developed a technique called Pointillism in which small, distinct dots of color were applied in patterns to form an image. Just by switching from dots to little tiny squares (<b>pixels</b>), we can easily understand how an image can be digitally represented. 
                        <br />
                        In color imaging systems, the color of a pixel is typically represented by three or four numbers coding component intensities such as red, green, and blue, or cyan, magenta, yellow, and black.
                        <br /><br />
                        A series of still images (hence set of numbers) visualized at sufficiently short time intervals, is perceived by our visual system as moving images. 
                    </Text>
                </MaxWidthContainer>
            </InlineDivs>

            <InlineDivs centerStart>
                <MaxWidthContainer>
                    <H3 isDark>Audio</H3>
                    <Text isDark>
                        Sound, such as speech or music, is an analogue physical quantity, corresponding for example to variations in air pressure. But also this type of information can be converted to a digital form. To obtain a digital representation of a sound, samples of its intensity are taken at a sufficient speed (sampling rate), and the value of each <b>sample is quantised to the nearest binary code</b>.
                        <br />
                        It is important to appreciate that sounds such as speech or music varies rapidly with time, and so its samples will have to be taken at sufficiently closely spaced intervals, if the digital representation is to be faithful to the original.
                    </Text>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <img src={images.image2.src} alt={images.image2.alt} className="img-center bg-white" />
                    <Description isDark>
                        A representation of the quantization process in which every sample is approximated to the closest value that the system can represent.
                    </Description>
                </MaxWidthContainer>
            </InlineDivs>

            <InlineDivs centerStart isEven>
                <MaxWidthContainer smallPadding>
                    <Table headerTitles={['binary Code', 'description'] } bodyRows={instructionTable} />
                    <Description isDark>
                        Three examples of operations common to many instruction sets
                    </Description>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <H3 isDark>Instructions</H3>
                    <Text isDark>
                        In order to execute programs or process data, computers must follow some specific instructions. 
                        <br />
                        As discussed in the
                        "CPU instruction set"
                        section,there are many basic operations that a machine can perform. Each one is composed of an opcode (the instruction executed by the CPU) and one or more operands (the data or memory locations the instruction operates on). 
                        <br />
                        Since binary code is the only language that a computer can understand, these instruction are represented, again, as binary digits.
                    </Text>
                </MaxWidthContainer>
            </InlineDivs>
        </Section>

        <Section>
            <SectionTitle>
                Multimedia information can be processed with "elementary" digital calculations
            </SectionTitle>
            <Text>
                Since any multimedia information looks just like binary numbers to the computer, it should be clear by now that <b>whichever processing of these data involves digital calculations</b>. 
                <br />
                Here are some examples:
                <br /><br />
            </Text>
            <InlineDivs>
                <MaxWidthContainer>
                    <Ul>
                        <Li isDark>
                            The volume of a sound represents the intensity of air pressure variations. Hence, increasing the volume of a song involves a simple multiplication of the value of each sound sample by a factor greater than 1.
                        </Li>
                        <Li isDark>
                            The contrast of an image can be explained as the difference between maximum and minimum pixels colour intensity. Hence, to change the contrast of an image it is sufficient to modify the value of these intensities, increasing the difference between maximum and minimum values, following a simple formula.
                        </Li>
                        <Li isDark>
                            The simplest way to increase the size of an image is replacing every pixel with a number of pixels of the same color. The resulting image is larger than the original and preserves all the original detail.
                        </Li>
                        <Li isDark>
                            To compress a video it is possible, for example,  to reduce the level of detail of the composing frames. This can be achieved, for example, by computing the average color of a group of pixels of different colors, and by replacing them with a single repeated pixel having that averaged color.
                        </Li>
                    </Ul>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <img src={images.image3.src} alt={images.image3.alt} className="img-center" />
                    <Description alignCenter isDark>
                        Increasing the volume of a sound.
                    </Description>
                </MaxWidthContainer>
            </InlineDivs>
        </Section>
    </EBookPage>
  );
}

export default Page2;