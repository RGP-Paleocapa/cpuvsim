import { YourImageComponent } from '@common/images';
import images from '@assets/images/pages/page6';
import { Description, EBookPage, Figure, H3, Section, SectionTitle, Text } from '@common/CustomComponents';
import References from '@common/Refrences';

const Page6 = () => {
  const references = [
    {
      text: "Educational CPU Visual Simulator: Interpreting a Simplified but Representative Assembly Language",
      link: "https://www.oercommons.org/courses/educational-cpu-visual-simulator-interpreting-a-simplified-but-representative-assembly-language",
    },
    {
      text: "Programming Languages - Wikiversity",
      link: "https://en.wikiversity.org/wiki/Programming_languages",
    },
    {
      text: "High-level programming language - Wikipedia",
      link: "https://en.wikipedia.org/wiki/High-level_programming_language",
    },
    {
      text: "Assembly language - Wikiversity",
      link: "https://en.wikiversity.org/wiki/Assembly_language",
    },
    {
      text: "Low-level programming language - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Low-level_programming_language",
    },
  ];
  
    return (
        <EBookPage currentPage={6}>
          <Section>
            <SectionTitle>
              Machine, assembly, and high-level languages
            </SectionTitle>
            <Text>
              Over the years, computer languages have  evolved from Low-Level to High-Level Languages.
              <br />
              In the early days of computers, the first programs were written directly in machine (binary) language,
              the only language directly understood by a CPU. Nowadays, the great majority of software is written in
              generic high-level languages, closer to the way humans reason and to the specific problems to be solved.
              High-level languages can then be translated to machine language through specific programs called compilers.
              <br />
              Hence, computer languages can be broadly classified as follows:
            </Text>
            <img src={images.languagesFlowchart.src} alt={images.languagesFlowchart.alt} className='img-center bg-white' />
        </Section>

        <Section>
          <SectionTitle>
            High-Level langauges
          </SectionTitle>
          <Text>
            High-level languages are computer languages which can be conveniently and efficiently used by programmers.
            It is usually easier and more efficient for a programmer to reason with a language oriented to the problems
            they need to solve, rather than with a language closer to what the computer hardware can understand.
            Languages like <strong>C, C++, JAVA, Python</strong>, etc., are examples of high-level languages.
            They are closer to human languages, compared to  low-level languages. 
            <br /><br />
            Even though the high-level languages are more convenient for the users, they cannot be directly executed by computers.
            High-level languages need to be converted into low-level languages to make them understandable (executable) by a computer.
            Special programs called compilers can be used to convert high-level languages to low-level, CPU-specific languages.
            A consequent important advantage is that these high-level languages are independent from the machine (CPU)
            where they will be "executed", because each CPU has its own compiler, capable to translate the same high-level
            language to the peculiar low-level language of that specific CPU.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            Low-Level languages
          </SectionTitle>
          <Text>
            Low-level languages are dependent on the particular computer, or more precisely the specific CPU,  where they are executed.
          </Text>
      
          <H3>
            Machine Language
          </H3> 
          <Text>
            The lower possible level language (excluding for simplicity the case of some CPUs which make use of microprograms)
            is known as <strong>Machine Language</strong>, and it  is the only language which can be understood by the computer
            (actually its CPU). The instructions in machine language are written in <strong>binary code</strong>,
            that is they are expressed with just two symbols, 1 and 0 (binary digits).
            These symbols may be physically represented by the voltage in a circuit, for example  0 as null voltage,
            and 1 as a predetermined voltage. Or they may also be represented, respectively,
            as an open (absence of current flowing) or closed (current flowing) circuit, or as a discharged capacitor versus a charged one.
            A binary digit is called "<strong>bit</strong>", and 8 bits form a <strong>byte</strong>.
          </Text>

          <H3>
            Assembly Language
          </H3>
          <Text>
            The <strong>assembly</strong> is a computer language whose instructions consist of predefined words called <strong>mnemonics</strong>,
            such as ADD or NOT. The pure assembly instructions (that is excluding particular macro-instructions or special directives)
            correspond directly (one to one) to the instructions in machine language. The computer does not understand  these mnemonics,
            so they are translated through a simple program called <strong>Assembler</strong> into <strong>machine language</strong>.
            <br />
            That is, the Assembler takes programs written in assembly  as its input and produces executable machine code as its output.
            This makes it possible for the computer to understand the instructions originally written in Assembly.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            Examples of different programming languages
          </SectionTitle>

          <Figure>
            <div>
              <img src={images.image2.src} alt="default" className="img-center w-96 h-28 rounded" />  
              <Description alignCenter>
                <strong>High Level Language</strong>
              </Description>
            </div>
            <div>
              <YourImageComponent image={images.image3} className='w-96 h-28' />
              <Description alignCenter>
                <strong>Assembly Language</strong>
              </Description>
            </div>
            <div>
              <YourImageComponent image={images.image4} className='w-96 h-28' />
              <Description alignCenter>
                <strong>Machine Language</strong>
              </Description>
            </div>
          </Figure>
          <Text>
            The following section will cover how the translation from high to a low level language is carried out,
            and  how constructs such as <strong>For</strong>, <strong>While</strong>, and <strong>If</strong> are translated in assembler and binary code.
          </Text>
        </Section>
        <References references={references} />
      </EBookPage>
    );
}

export default Page6;