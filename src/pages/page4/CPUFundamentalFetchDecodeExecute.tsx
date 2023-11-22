import { YourImageComponent } from "@common/images";
import images from "@assets/images/pages/page4";
import { EBookPage, InlineDivs, MaxWidthContainer, Ol, Section, SectionTitle, Text } from "@common/CustomComponents";
import References from "@common/Refrences";

const Page4 = () => {
    const references = [
        {
          text: 'The fetch-decode-execute cycle',
          link: 'https://isaaccomputerscience.org/concepts/gcse_sys_fetch_decode_execute?examBoard=all&stage=all',
        },
    ];

    return (
        <EBookPage currentPage={4}>
            <Section>
                <SectionTitle>
                    The CPU Fetch/Decode/Execute cycle
                </SectionTitle>
                <InlineDivs>
                    <MaxWidthContainer>
                        <Text>
                            The CPU continuously repeats a <strong>fetch-decode-execute cycle</strong> , in order to execute the instructions in a program, one by one.
                            <br />
                            In this cycle, the CPU goes through three main stages:
                            <br /><br />
                        </Text>
                        <Ol className="dark:text-gray-200">
                            <li>
                                <strong>Fetches</strong> a program instruction from the main memory;
                            </li>
                            <li>
                                <strong>Decodes</strong> the instruction, i.e. it works out what needs to be done;
                            </li>
                            <li>
                                <strong>Executes</strong> ( i.e. carries out) the instruction.
                            </li>
                        </Ol>
                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        <img src={images.fetchCodeExecute.src} alt={images.fetchCodeExecute.alt} className="img-center" />
                    </MaxWidthContainer>
                </InlineDivs>
            </Section>

            <Section>
                <Text>
                    During the <strong>fetch</strong> stage of the cycle, the content of the memory cell addressed by the program counter is retrieved and placed into the Instruction Register (IR).
                </Text>
                <YourImageComponent image={images.fetch} />
            </Section>

            <Section>
                <Text>
                    During the <strong>execute</strong> stage of the cycle, the instruction is executed, using the ALU if necessary. Sometimes, this stage may involve the loading or saving of data from and to the main memory.
                </Text>
                <YourImageComponent image={images.execute} />
            </Section>
            
            <Section>
                <Text>
                    In the <strong>decode</strong> part of the cycle, the Control Unit works out what needs to be done by the instruction, and sends control signals to coordinate the other components.
                </Text>
                <YourImageComponent image={images.decode} />
            </Section>

            <Section>
                <Text>
                    Then, the content of the PC is increased to point to the next instruction to be executed, and a new fetch cycle starts again. In this specific case the PC is incremented by two, because the RAM memory is organized in bytes, and the size of each CPU instruction is two bytes.
                    <br />
                    It is worthwhile noticing here that real CPUs, in order to improve their speed, perform the increment of the PC in parallel to previous operations, during the Execute cycle.
                </Text>
                <YourImageComponent image={images.altro} />
            </Section>

            <References references={references} />
        </EBookPage>
    );

}

export default Page4;   