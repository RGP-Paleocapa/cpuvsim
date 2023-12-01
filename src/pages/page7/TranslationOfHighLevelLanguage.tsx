import EBookPage from "@common/eBook/EBook";
import { Section, SectionTitle, Text } from "@common/eBook/content";
import { InlineDivs, MaxWidthContainer } from "@common/eBook/layout";
import images from "@assets/images/pages/page7";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";

const Page7 = () => {
    useDocumentMetadata('Translation of High Level Language', "This is the seventh page");
    const { setFooterData } = useFooter();
    useEffect(() => {
      setFooterData([]);
    }, [setFooterData]);
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

            {/* <Section>
                <H4>
                    Basic constructs
                </H4>
                <Figure>
                    <div>
                        <H3>
                            Init/sum of two variables
                        </H3>
                        <img src="https://via.placeholder.com/300" alt="default" className="img-center" />
                        <button>
                            Click here for more info
                        </button>
                    </div>
                    <div>
                        <H3>
                            Arithmetic formula
                        </H3>
                        <img src="https://via.placeholder.com/300" alt="default" className="img-center" />
                        <button>
                            Click here for more info
                        </button>
                    </div>
                    <div>
                        <H3>
                            Infinite loop
                        </H3>
                        <img src="https://via.placeholder.com/300" alt="default" className="img-center" /> 
                        <button>
                            Click here for more info
                        </button>
                    </div>
                </Figure>
            </Section>

            <Section>
                <H4>
                    More complex constructs
                </H4>
                <Figure>
                    <div>
                        <H3>
                            If then else
                        </H3>
                        <img src="https://via.placeholder.com/300" alt="default" className="img-center" />
                        <button>
                            Click here for more info
                        </button>
                    </div>
                    <div>
                        <H3>
                            While do
                        </H3>
                        <img src="https://via.placeholder.com/300" alt="default" className="img-center" />
                        <button>
                            Click here for more info
                        </button>
                    </div>
                    <div>
                        <H3>
                            For
                        </H3>
                        <img src="https://via.placeholder.com/300" alt="default" className="img-center" />
                        <button>
                            Click here for more info
                        </button>
                    </div>
                </Figure>
            </Section> */}

            <Section>
                <SectionTitle>
                    <hr />
                    EXAMPLE: translation of the initialization and sum of two variables
                    <hr />
                </SectionTitle>
                <InlineDivs>
                    <div className='flex flex-col items-center justify-center space-t-4'>
                        <img src={images.sum1.src} alt={images.sum1.src} className="img-center" />
                        <img src={images.sum2.src} alt={images.sum2.src} className="img-center" />
                        <img src={images.sum3.src} alt={images.sum3.src} className="img-center" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-6 m-6 xl:m-28'>
                        <MaxWidthContainer>
                            <Text>
                                W, X, AND Y are initialized (a  numerical value is assigned to them).
                                <br />
                                The sum of W and X is then assigned to the variable Y.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Initially W=0,  X=0,  Y=0 (labels of the last three memory cells).
                                <br />
                                <strong>LOD #2:</strong> 2 is loaded into the accumulator.
                                <br />
                                <strong>STO W:</strong> the result is stored into (the memory cell of address) W
                                <br />
                                <strong>LOD #8:</strong> 8 is loaded into the accumulator.
                                <br />
                                <strong>STO X:</strong> the result is stored into (the memory cell of address) X
                                <br />
                                <strong>LOD W:</strong> the content of (memory cell of address) W is loaded into the accumulator.
                                <br />
                                <strong>ADD X:</strong> (the content of the cell of address) X is added to the value in the accumulator.
                                <br />
                                <strong>STO Y:</strong> the result is stored into (the memory cell of address) Y.
                                <br />
                                <strong>HLT:</strong> Stops all further operations.
                                <br />
                                <b>Results</b>: W=2, Y=8, Y=10.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Here the content of the RAM memory, as well as the memory addresses, are visualized in binary code.
                                These are the values as they are physically stored and handled - but it is obviously more convenient,
                                for a human, to use the equivalent mnemonics, working with the assembly language and a more familiar numbering base.
                            </Text>
                        </MaxWidthContainer>
                    </div>
                </InlineDivs>
            </Section>

            <Section>
                <SectionTitle>
                    <hr />
                    EXAMPLE: translation of an arithmetic formula
                    <hr />
                </SectionTitle>
                <InlineDivs>
                    <div className='flex flex-col items-center justify-center space-t-4'>
                        <img src={images.formula1.src} alt={images.formula1.alt} className="img-center" />
                        <img src={images.formula2.src} alt={images.formula2.alt} className="img-center" />
                        <img src={images.formula3.src} alt={images.formula3.alt} className="img-center" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-6 m-6 xl:m-28'>
                        <MaxWidthContainer>
                            <Text>
                                Initially Y=10, W=2, and X=0; 
                                <br /><br />
                                3 is multiplied by the value of Y. The result is then assigned  to a temporary variable (TMP),
                                and is subsequently added to the quotient of 2/W;
                                <br />
                                the result shall be: Y=10, W=2, TMP=30 and X=31.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Assertion: Y=10, W=2, TMP=0, X=0 (labels of the last four memory cells).
                                <br />
                                <strong>LOD #3:</strong> 3 is loaded into the accumulator.
                                <br />
                                <strong>MUL Y:</strong> (the content of the cell of address) Y is multiplied by the value in the accumulator.
                                <br />
                                <strong>STO TMP:</strong> the result is stored into (the memory cell of address) TMP
                                <br />
                                <strong>LOD #2:</strong> 2 is loaded into the accumulator.
                                <br />
                                <strong>DIV W:</strong> (the content of the cell of address) W is divided to the value in the accumulator.
                                <br />
                                <strong>ADD TMP:</strong> (the content of the cell of address) TMP is added to the value in the accumulator.
                                <br />
                                <strong>STO X:</strong> the result is stored into (the memory cell of address) X.
                                <br />
                                <strong>HLT:</strong> Stops all further operations.
                                <br />
                                <b>Results</b>: Y=10,  W=2,  TMP=30, X=31
                            </Text>
                        </MaxWidthContainer>
                    </div>
                </InlineDivs>
            </Section>

            <Section>
                <SectionTitle>
                    <hr />
                    EXAMPLE: translation of an infinite loop
                    <hr />
                </SectionTitle>
                <InlineDivs>
                    <div className='flex flex-col items-center justify-center space-t-4'>
                        <img src={images.loop1.src} alt={images.loop1.alt} className="img-center" />
                        <img src={images.loop2.src} alt={images.loop2.alt} className="img-center" />
                        <img src={images.loop3.src} alt={images.loop3.alt} className="img-center" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-6 m-6 xl:m-28'>
                        <MaxWidthContainer>
                            <Text>
                                Initially COUNT=0;
                                <br /><br />
                                Infinite loop in which COUNT is incremented  by one at every iteration.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Initially A=0 (label of the last memory cell).
                                <br />
                                <strong>LOD A:</strong> the content of (memory cell of address) A is loaded into the accumulator.
                                <br />
                                <strong>ADD #1:</strong> 1 is added to the value in the accumulator.
                                <br />
                                <strong>STO A:</strong> the result is stored into (the memory cell of address) A.
                                <br />
                                <strong>JMP FOR:</strong> Jumps unconditionally to the address corresponding to the label "FOR”.
                                <br />
                                <b>Results</b>: A takes the values 0, 1, 2, 3, ...
                            </Text>
                        </MaxWidthContainer>
                    </div>
                </InlineDivs>
            </Section>

            <Section>
                <SectionTitle>
                    <hr />
                    EXAMPLE: translation of an IF-THEN-ELSE construct
                    <hr />
                </SectionTitle>
                <InlineDivs>
                    <div className='flex flex-col items-center justify-center space-t-4'>
                        <img src={images.ifThenElse1.src} alt={images.ifThenElse1.alt} className="img-center" />
                        <img src={images.ifThenElse2.src} alt={images.ifThenElse2.alt} className="img-center" />
                        <img src={images.ifThenElse3.src} alt={images.ifThenElse3.alt} className="img-center" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-6 m-6 xl:m-28'>
                        <MaxWidthContainer>
                            <Text>
                                Initially X=8, Y=0, and Z=1; 
                                <br /><br />
                                The high-level code specifies that if X equals 3 then Y is set to Y+5, otherwise Z is set to Z+2.
                                <br /><br />
                                In this case X is different from 3, so the ELSE clause is executed. Hence the result will be: Y=2 and Z=3. 
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Initially X=8,  Y=2,  Z=1 (labels of the last three memory cells).
                                <br />
                                <strong>LOD X:</strong> the content of (memory cell of address) X is loaded into the accumulator.
                                <br />
                                <strong>CMP #3:</strong> X is compared to 3. That is, the operation 8-3 is performed,
                                which sets the NZ Flag (without affecting the accumulator).
                                <br />
                                <strong>JNZ ELSE:</strong> as NZ is set, jumps to the (address corresponding to the) label “ELSE”.
                                <br />
                                <strong>LOD #5:</strong> 5 is loaded into the accumulator.
                                <br />
                                <strong>ADD Y:</strong> (the content of the cell of address) Y is added to the value in the accumulator.
                                <br />
                                <strong>STO Y:</strong> the result is stored into (the memory cell of address) Z.
                                <br />
                                <strong>LOD #2:</strong> 2 is loaded into the accumulator.
                                <br />
                                <strong>ADD Z:</strong> (the content of the cell of address) Z is added to the value in the accumulator.
                                <br />
                                <strong>STO Z:</strong> the result is stored into (the memory cell of address) Z.
                                <br />
                                <strong>HLT:</strong> Stops all further operations.
                                <br />
                                <b>Results</b>: X=8, Y=2, Z=3.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Here the content of the RAM memory, as well as the memory addresses, are visualized in binary code.
                                These are the values as they are physically stored and handled - but it is obviously more convenient, for a human, to use the equivalent mnemonics, working with the assembly language and a more familiar numbering base.
                            </Text>
                        </MaxWidthContainer>
                    </div>
                </InlineDivs>
            </Section>

            <Section>
                <SectionTitle>
                    <hr />
                    EXAMPLE: Translation of a While construct
                    <hr />
                </SectionTitle>
                <InlineDivs>
                    <div className='flex flex-col items-center justify-center space-t-4'>
                        <img src={images.while1.src} alt={images.while1.alt} className="img-center" />
                        <img src={images.while2.src} alt={images.while2.alt} className="img-center" />
                        <img src={images.while3.src} alt={images.while3.alt} className="img-center" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-6 m-6 xl:m-28'>
                        <MaxWidthContainer>
                            <Text>
                                Initially MAX=5,  COUNT=0, SUM=0 
                                <br /><br />
                                The high-level code specifies that while COUNT differs from MAX, the instructions COUNT=COUNT+1 and SUM=SUM+COUNT 
                                <br />
                                are to be executed.
                                <br /><br />
                                The result of the execution of this loop will be: MAX=5,  COUNT=5, SUM=15.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Initially MAX=5, COUNT=0, SUM=0 (labels of the last three memory cells).
                                <br />
                                <strong>LOD COUNT:</strong> COUNT is loaded into the Accumulator.
                                <br />
                                <strong>CMP MAX:</strong> MAX is compared to the accumulator, setting the corresponding flags.
                                The operation (0-5) is executed in the first cycle, the operation (5-5) in the last cycle.
                                <br />
                                <strong>JZ ENDWHILE:</strong> flag Z is not set in the first cycle, hence the jump is not executed. 
                                The flag Z is only set in the last cycle, when the control jumps to the address corresponding to the label “END WHILE”, 
                                terminating the iterations.
                                <br />
                                <strong>ADD #1:</strong> 1 is added to the content of the accumulator.
                                <br />
                                <strong>STO COUNT:</strong> the result is stored in (the memory cell) COUNT.
                                <br />
                                <strong>ADD SUM:</strong> SUM is added to the value of the accumulator.
                                <br />
                                <strong>STO SUM:</strong> the result is stored in (the cell of address) SUM.
                                <br />
                                <strong>JMP WHILE:</strong> Jumps unconditionally to the address corresponding to the label “WHILE”.
                                <br />
                                <strong>HLT:</strong> Stops all further operations.
                            </Text>
                        </MaxWidthContainer>
                    </div>
                </InlineDivs>
            </Section>

            <Section>
                <SectionTitle>
                    <hr />
                    EXAMPLE: Translation of a For construct
                    <hr />
                </SectionTitle>
                <InlineDivs>
                    <div className='flex flex-col items-center justify-center space-t-4'>
                        <img src={images.for1.src} alt={images.for1.alt} className="img-center" />
                        <img src={images.for2.src} alt={images.for2.alt} className="img-center" />
                        <img src={images.for3.src} alt={images.for3.alt} className="img-center" />
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-6 m-6 xl:m-28'>
                        <MaxWidthContainer>
                            <Text>
                                Initially COUNT=0.
                                <br /><br />
                                Starting from I=3, cycle backwards through the loop until I reaches 0.
                                <br />
                                Every loop increments the counter COUNT by one.
                                <br />
                                The result will be: COUNT=3, I=0.
                            </Text>
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            <Text>
                                Initially I=3, COUNT=0 (labels of the last two memory cells).
                                <br />
                                <strong>Lod I:</strong> the content of the memory cell of address I is loaded into the accumulator.
                                <br />
                                <strong>CMP #1:</strong> 1 is compared to the content of the accumulator. In case the accumulator contains 1, 
                                the operation (1-1) sets the Z flag.
                                <br />
                                <strong>JZ ENDFOR:</strong> If the Z flag is set, jump to the address corresponding to the label “ENDFOR”.
                                <br />
                                <strong>LOD COUNT:</strong> (the content of the memory cell of address) COUNT is loaded into the accumulator.
                                <br />
                                <strong>ADD #1:</strong> 1 is added to the value of the accumulator.
                                <br />
                                <strong>STO COUNT:</strong> the result is stored into the memory cell of address COUNT.
                                <br />
                                <strong>LOD I:</strong> the content of (the memory cell of address) I is loaded into the accumulator.
                                <br />
                                <strong>SUB #1:</strong> 1 is subtracted from the value of the accumulator.
                                <br />
                                <strong>STO I:</strong> the result is stored into the memory cell of address I.
                                <br />
                                <strong>JMP FOR:</strong> Jumps to the address corresponding to the label “For”.
                                <br />
                                <strong>HLT:</strong> Stops all further operations.
                            </Text>
                        </MaxWidthContainer>
                    </div>
                </InlineDivs>
            </Section>
            {/* <References references={references} /> */}
        </EBookPage>
    );
}

export default Page7;