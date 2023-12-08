import { useEffect } from "react";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@common/eBook/EBook";
import { Section, SectionTitle, Text } from "@common/eBook/content";
import images from "@assets/images/pages/page7";
import { useFooter } from "@/context/FooterContext";
import ImageSwitcher from "@common/eBook/images/ImageAndTextSwitcher";
import data from './data.json';

const Page7 = () => {
    useDocumentMetadata('Translation of High Level Language', "This is the seventh page");
    const { setFooterData } = useFooter();
    useEffect(() => {
      setFooterData([]);
    }, [setFooterData]);

    const sumList = data.sum;
    const formulaList = data.formula;
    const infiniteLoopList = data.infiniteLoop;
    const ifThenElseList = data.ifThenElse;
    const whileList = data.while;
    const forLoopList = data.forLoop;

    // const imagesSwitcher = [
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    //     'https://picsum.photos/200/300.jpg',
    // ]

    const sumSwitcher = [
        images.sum1.src,
        images.sum2.src,
        images.sum3.src,
      ]
    const formulaSwitcher = [
        images.formula1.src,
        images.formula2.src,
        images.formula3.src,
      ]
    const loopSwitcher = [
        images.loop1.src,
        images.loop2.src,
        images.loop3.src,
      ]
    const ifThenElseSwitcher = [
        images.ifThenElse1.src,
        images.ifThenElse2.src,
        images.ifThenElse3.src,
      ]
    const whileSwitcher = [
        images.while1.src,
        images.while2.src,
        images.while3.src,
      ]
    const forSwitcher = [
        images.for1.src,
        images.for2.src,
        images.for3.src,
      ]

    return (
        <EBookPage currentPage={7}>
            <Section>
                <SectionTitle>
                    Translation of high-level language constructs to Assembly/Machine Language
                </SectionTitle>
                <Text>
                    Most software today is written by programmers in a high-level language, such as C++, Java, or Python.
                    Yet, whatever program is executed on a CPU, needs to be specified in its machine-language.
                    How is it possible, then, to run a program written in a high-level language?
                    <br /><br />
                    A high-level language can be physically executed on a CPU, which can only "understand" its machine-language,
                    with two main (possibly combined) techniques: <strong>interpretation</strong> and <strong>compilation</strong>. In the case of interpretation,
                    each high-level instruction is executed by an "interpreter", a program that acts as a sort of virtual CPU,
                    having as its Instruction Set the instructions available in the high-level language. Yet this interpreter,
                    in turn, must be executed as a program in machine-language on the real CPU. In the case of compilation,
                    the programs in a high-level language are first translated (compiled) to machine language, before being executed on the CPU.
                    <br /><br />
                    Yet, programs written in high-level languages use programming constructs such as IF-THEN-ELSE,FOR, WHILE-DO,
                    and so on. How can these constructs be translated to machine language, where such high-level instructions are not available?
                    This is possible mainly exploiting the control-flow instructions jump on condition and unconditional jump, as shown in this
                    section with the help of a few concrete examples.
                </Text>
            </Section>

            <Section>
                <SectionTitle>
                    EXAMPLE: translation of the initialization and sum of two variables
                </SectionTitle>
                <ImageSwitcher images={sumSwitcher} instructionsList={sumList} />
            </Section>
            
            <Section>
                <SectionTitle>
                    EXAMPLE: translation of the initialization and sum of two variables
                </SectionTitle>
                <ImageSwitcher images={formulaSwitcher} instructionsList={formulaList} />
            </Section>

            <Section>
                <SectionTitle>
                    EXAMPLE: translation of the initialization and sum of two variables
                </SectionTitle>
                <ImageSwitcher images={loopSwitcher} instructionsList={infiniteLoopList} />
            </Section>

            <Section>
                <SectionTitle>
                    EXAMPLE: translation of the initialization and sum of two variables
                </SectionTitle>
                <ImageSwitcher images={ifThenElseSwitcher} instructionsList={ifThenElseList} />
            </Section>

            <Section>
                <SectionTitle>
                    EXAMPLE: translation of the initialization and sum of two variables
                </SectionTitle>
                <ImageSwitcher images={whileSwitcher} instructionsList={whileList} />
            </Section>

            <Section>
                <SectionTitle>
                    EXAMPLE: translation of the initialization and sum of two variables
                </SectionTitle>
                <ImageSwitcher images={forSwitcher} instructionsList={forLoopList} />
            </Section>

            <Section>
                {/* <SuccessButton onClick={() => alert("SuccessButton clicked!")} /> */}
                {/* <CancelButton onClick={() => alert("CancelButton clicked!")} /> */}
            </Section>
        </EBookPage>
    );
}

export default Page7;