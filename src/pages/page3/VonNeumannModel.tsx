import EBookPage from "@common/eBook/EBook";
import { SectionTitle, Ul, Text, Description, H2, Li } from "@common/eBook/content";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/common/eBook/layout/layout";
import images from "@assets/images/pages/page3";
import { InteractiveImage } from "@common/eBook/images/";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';

const Page3 = () => {
  useDocumentMetadata('Von Neumann Model', "This is the third page");
  const { setFooterData } = useFooter();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  const references = data.references;

  return (
      <EBookPage currentPage={3} >
        <Section>
            <SectionTitle>
              The Von Neumann architecture
            </SectionTitle>
            <InlineDivs>
              <MaxWidthContainer>
                <Text isDark>
                  The <b>Von Neumann's architecture</b>, or Von Neumann's machine, refers to the generic computer architecture
                  illustrated in the picture on the right. This architecture is based on the stored-program computer concept,
                  where instructions and data are stored in the same (primary or main) memory.  This design, first published by
                  the Hungarian mathematician John Von Neumann in 1945, is still used in most computers produced today, with minor variations. 
                </Text>
              </MaxWidthContainer>
              <MaxWidthContainer>
                <img src={images.image1.src} alt={images.image1.alt} className="img-center" />
              </MaxWidthContainer>
            </InlineDivs>

            <InlineDivs>
              <MaxWidthContainer>
                <Text isDark>
                  This model has <b>5 essential components</b>, as illustrated in the equivalent schema on the right:
                </Text>
                <Ul>
                  <Li isDark>
                    The <strong>Central Processing Unit (CPU)</strong>;
                  </Li>
                  <Li isDark>
                    The <strong>(primary or main) memory</strong>;
                  </Li>
                  <Li isDark>
                    <strong>Input</strong> and <strong>Output</strong> devices;
                  </Li>
                  <Li isDark>
                    The data, address, and control <strong>buses</strong>.
                  </Li>
                </Ul>
              </MaxWidthContainer>
              <MaxWidthContainer>
                <img src={images.image2.src} alt={images.image2.alt} className="img-center" />
              </MaxWidthContainer>
            </InlineDivs>
        </Section>

        <Section>
          <H2>Central Processing Unit  (CPU)</H2>
          <Text className="mb-4">
            The Central Processing Unit (or processor), illustrated in the picture on the right,  is the core element of this model.
            It is the hearth of a computer and is responsible for the execution of every computer instruction. It is constituted by
            the following main elements:
          </Text>
          <InlineDivs isEven>
            <MaxWidthContainer>
              <Ul className="list-none">
                <Li>
                  <strong className='text-gray-900'>Arithmetic Logic Unit (ALU):</strong>
                  <Ul className="text-gray-300"> 
                    <Li isDark>
                      Performs arithmetic operations such as additions, mUltiplications, and comparisons.
                    </Li>
                    <Li isDark>
                      Handles logical operations like AND, OR, and NOT.
                    </Li>
                  </Ul>
                </Li>
                <Li>
                  <strong className='text-gray-900'>Control Unit and Decoder:</strong>
                  <Ul className="text-gray-300"> 
                    <Li isDark>
                      Decode instructions.
                    </Li>
                    <Li isDark>
                      Provide timing and control signals to coordinate operations.
                    </Li>
                  </Ul>
                </Li>
                <Li>
                  <strong className='text-gray-900'>Specialized Registers:</strong>
                  <Ul className="text-gray-300"> 
                    <Li isDark>
                      <strong className='text-gray-900'>AccumUlator (Acc): </strong>
                      Stores resUlts produced by the ALU.
                    </Li>
                    <Li isDark>
                      <strong className='text-gray-900'>Program Counter (PC): </strong>
                      Contains the address of the next instruction to execute.
                      <Ul> 
                        <Li isDark>
                          Automatically incremented for sequential instruction execution.
                        </Li>
                      </Ul>
                    </Li>
                    <Li isDark>
                      <strong className='text-gray-900'>Instruction Register (IR):</strong>
                      Holds the currently executing instruction fetched from memory.
                    </Li>
                    <Li isDark>
                      <strong className='text-gray-900'>Status Word (SW): </strong>
                      Contains flags reflecting properties of ALU resUlts.
                      <Ul>
                        <Li isDark>
                          For example, the Z flag is true if the resUlt is zero, and the N flag is true if the resUlt is negative.
                        </Li>
                      </Ul>
                    </Li>
                    <Li isDark>
                      <strong className='text-gray-900'>MUltiplexer (MUX): </strong>
                      A mUlti-way switch that determines input for the ALU.
                    </Li>
                  </Ul>
                </Li>
              </Ul>
            </MaxWidthContainer>
            <MaxWidthContainer>
              <img src={images.image3.src} alt={images.image3.alt} className="img-center" />
            </MaxWidthContainer>
          </InlineDivs>
        </Section>

        <Section>
          <H2>I/O devices</H2>
          <Text>
            The Input/Output devices, controlled and coordinated by the processor, enable the interaction between the computer
            and its external environment, including the users.
          </Text>
          <Ul>
            <Li>
                  <strong>Input devices</strong>: allow the introduction of data (including instructions) to the system. For example,
                  a keyboard, a mouse, or a temperature sensor.
            </Li>
            <Li>
                <strong>Output devices</strong> are necessary to communicate the processed data to the external world. For example,
                a monitor, or the controller of a water pump to irrigate a garden.
            </Li>
          </Ul>
          <Text>
            Some peripheral units can act as both input and output devices; for example a modem, a touch screen, or an SSD device.
          </Text>
        </Section>

        <Section>
          <H2>Bus</H2>
          <Text>
            The bus is a shared communication channel interconnecting the different components of the architecture,
            permitting the transfer of the necessary information, according to the operation to be performed.
            The bus can be subdivided in three components:
          </Text>
          <InlineDivs>
            <MaxWidthContainer>
              <Ul>
                <Li isDark>
                    <strong className="bg-blue-600 font-normal p-1 text-white">Data Bus</strong>: transfers the data to be read or written,
                    from/to memory or I/O devices. For example the content of a memory cell.
                </Li>      
                <Li isDark>
                    <strong className="bg-orange-400/95 dark:bg-orange-600 p-1 font-normal">Address Bus</strong>:
                    transfers the addresses of the memory (or I/O devices) involved in an operation.
                    For example the address of the memory cell involved in a Read operation.
                </Li>
                <Li isDark>
                    <strong className="bg-red-600 p-1 text-white font-normal">Control Bus</strong>:
                    transfers the control signals to coordinate the operations of the subcomponents involved in an operation.
                    For example signalling a Read versus a Write operation in memory.
                </Li>
              </Ul>
            </MaxWidthContainer>
            <MaxWidthContainer>
              <InteractiveImage src={images.image4.src} alt={images.image4.alt} className="img-center min" />
              <Description alignCenter><b className="hidden lg:block text-red-700 dark:text-black text-lg">Click to zoom!</b></Description>
            </MaxWidthContainer>
          </InlineDivs>
        </Section>

        <Section>
          <H2>
            Memory
          </H2>
          <Text>
            Another fundamental component in the Von Neumann model is the memory, where both data and instructions are stored.
            This type of memory is called Primary or Main Memory.
          </Text>  
          <InlineDivs>
            <MaxWidthContainer>
              <Text isDark>
                This memory can be conceptually considered as a set of locations (cells), each of them being able to memorize some information,
                such as an instruction (or part of it) or elementary data. These cell are depicted in gray in the picture on the right,
                and in this case they all contain the code corresponding to the computer instruction NOP (No Operation).
                A unique address is associated with each location (the yellow column in the same picture), so that the CPU can address them.
                <br /><br />
                In modern computers, most of this main memory is usually implemented as Random Access Memory (<strong>RAM</strong>).
                This is a fast but volatile memory used by the CPU to read and store data and instructions.
                Part of this memory can also be implemented as Read Only Memory (<strong>ROM</strong>),
                which is a permanent memory as fast as the RAM. The ROM usually contains a relatively few instructions
                to test the proper functioning of the hardware and "boot" the computer.
              </Text>
            </MaxWidthContainer>
            <MaxWidthContainer>
              <img src={images.image5.src} alt={images.image5.alt} className="img-center" />
            </MaxWidthContainer>
          </InlineDivs>
          <br /><br />
          <Text>
            Most computers make also use of an additional type of memory, called <strong>secondary memory</strong>.
            This may be implemented as an hard disk or an SSD device - which are considered in the Von Neumann architecture as I/O devices.
            This is a much slower memory but it is persistent and usually has a larger storage capacity.
            Because of its insufficient speed, it is not used directly by the CPU, but it is used to permanently store data
            and programs which are loaded in the main memory as needed.
          </Text>
        </Section>
    </EBookPage>
  );
}

export default Page3;