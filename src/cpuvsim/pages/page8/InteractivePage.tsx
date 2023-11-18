import DraggableContainerGrid from "@common/DraggableContainerGrid";
import { EBookPage, H4, InlineDivs, MaxWidthContainer, Ol, Section, SectionTitle, Text } from "@common/CustomComponents";

const Page8 = () => {
    const container1 = [
        { id: 'container-1', content: 'LOD #5' },
        { id: 'container-2', content: 'SUB #3' },
        { id: 'container-3', content: 'LOD X' },
        { id: 'container-4', content: 'STO X' },
        { id: 'container-5', content: 'HLT' },
        { id: 'container-6', content: 'JNZ 10' },
    ];
    const container2 = [
        { id: 'container-1', content: 'LOD X' },
        { id: 'container-2', content: 'JNZ ELSE' },
        { id: 'container-3', content: 'ADD Y' },
        { id: 'container-4', content: 'JMP ENDIF' },
        { id: 'container-5', content: 'ADD Z' },
        { id: 'container-6', content: 'LOD #8' },
        { id: 'container-7', content: 'HTL' },
        { id: 'container-8', content: '7' },
        { id: 'container-9', content: 'CMP #3' },
        { id: 'container-10', content: 'LOD #5' },
        { id: 'container-11', content: 'STO Y' },
        { id: 'container-12', content: 'LOD #2' },
        { id: 'container-13', content: 'STO Z' },
        { id: 'container-14', content: 'STO X' },
        { id: 'container-15', content: '3' },
        { id: 'container-16', content: '6' },
    ];

    return (
        <EBookPage currentPage={8}>
            <Section>
                <SectionTitle>
                    Exercises
                </SectionTitle>
                <Text>
                    The aim of the following two exercises is to code in assembler the pseudo-coded algorithms on the left.
                    Organize the corresponding assembler instructions on the right in the correct order, by dragging them around.
                </Text>
            </Section>

            <Section>
                <InlineDivs>
                    <MaxWidthContainer>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code className="block whitespace-pre">
                            IF-THEN
                            example:

                            IF X==3
                                THEN Y:=5
                            ENDIF
                            HLT
                        </code>
                    </pre>


                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        <DraggableContainerGrid initialContainers={container1} />
                        <button className='text-black'>Solution</button>
                    </MaxWidthContainer>
                </InlineDivs>
            </Section>

            <Section>
                <InlineDivs>
                    <MaxWidthContainer>
                        <DraggableContainerGrid initialContainers={container2} />
                        <button className='text-black'>Solution</button>
                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        empty
                    </MaxWidthContainer>
                </InlineDivs>
            </Section>

            <Section>
                <H4>
                    Perform the following tasks (please remember that any label needs to be defined
                    in the leftmost column of the RAM before it can be used in any instruction):
                </H4>
                <Ol>
                    <li>
                        Describe the difference between numeric and direct addressing.
                    </li>
                    <li>
                        Describe the data transmitted on the data, address and control buses, respectively, 
                        during the execution of the instructions LOD #5, and LOD 5.
                    </li>
                    <li>
                        Identify the binary code of the assembler instruction MUL 5.
                    </li>
                    <li>
                        Identify the mnemonic instruction corresponding to the machine language instruction 00010011.
                    </li>
                </Ol>
            </Section>

            <Section>
                <H4>
                    Develop suitable programs in assembly code, to solve the following problems:
                </H4>
                <InlineDivs>
                    <div>
                        <Ol>
                            <li>
                                Perform the addition, subtraction, multiplication and division of 2 numbers;
                                if the operation is not commutative and the first number is smaller than the second one, reverse them.
                            </li>
                            <li>
                                Calculate the mean of 3 numbers.
                            </li>
                            <li>
                                Find the maximum and the minimum of 2 numbers.
                            </li>
                            <li>
                                Determine the parity (even or odd) of a number.
                            </li>
                            <li>
                                Sum the numbers from 1 to 5.
                            </li>
                            <li>
                                Calculate the factorial of a number.
                            </li>
                            <li>
                                Compute the result of the expression: Y= 3*X + 5, where X and Y are labels corresponding to memory addresses.
                            </li>
                            <li>
                                Compute the sum of the numbers from X to Y included, where X and Y are labels corresponding to memory adresses.
                            </li>
                            <li>
                                Compute the Greatest Common Divisor problem, using the "Euclid's Method".
                            </li>
                            <li>
                                <H4>
                                    Translate the following pseudo-code to assembler:
                                </H4>      
                                <code>
                                    COUNT:=0; K:=5;
                                    <br />
                                    DO
                                    <br />
                                        K:=K+37;
                                        <br />
                                        COUNT:=COUNT+1;
                                        <br />
                                    WHILE K &lt 612
                                </code>                         
                            </li>
                            <li>
                                Determine how many bits are set (i.e. have value “1”) in a given byte.
                                Example: 87 = 0101 0111 -&gt 5
                                Hint: check the last bit, shift right the original number, repeat.
                            </li>
                            <li>
                                <h4>
                                    Translate the following pattern in pseudo-code to assembler:
                                </h4>
                                <code>
                                    FOR I:= 5 DOWNTO 0 DO {

                                        // Body code here
                                        
                                    }

                                    // Additional code here
                                </code>
                            </li>
                            <li>
                                <strong>
                                    Translate the following pattern in pseudo-code to assembler:
                                </strong>
                                <code>
                                    IF &ltboolean expression&gt

                                        THEN &ltstatements&gt

                                    ENDIF

                                    &ltother statements&gt
                                </code>
                            </li>
                            <li>
                                <H4>
                                    Translate the following pattern in pseudo-code to assembler:
                                </H4>
                                <code>
                                    IF W&ltX

                                        THEN

                                            exchange W and X

                                    ENDIF
                                </code>
                            </li>
                            <li>
                                Determine whether a given positive integer number satisfies the Collatz conjecture
                                (see the definition at https://en.wikipedia.org/wiki/Collatz_conjecture),
                                computing the number of iterations necessary to reach the number 1.
                            </li>
                        </Ol>
                    </div>
                    <div>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>
                        <button>Show answer</button>       
                    </div>
                </InlineDivs>
            </Section>
        </EBookPage>
    );

}

export default Page8;