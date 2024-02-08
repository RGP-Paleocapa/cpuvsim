import EBookPage from '@common/eBook/EBook';
import { Description, H3, SectionTitle, Text } from '@common/eBook/content';
import images from '@assets/images/pages/page6';
import { Section, Figure } from '@/components/common/eBook/layout/layout';
import { YourImageComponent } from '@common/eBook/images';
import useDocumentMetadata from '@hooks/useDocumentMetadata';
import { useFooter } from '@/context/FooterContext';
import { useEffect } from 'react';
import data from './data.json';
<<<<<<< HEAD
=======
import RenderHTML from '@/components/common/RenderHTML';
import { useTranslation } from 'react-i18next';
>>>>>>> source-repo/main

const Page6 = () => {
  useDocumentMetadata('Assembly and High Level Languages', "This is the sixth page");
  const { setFooterData } = useFooter();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  const references = data.references;
<<<<<<< HEAD
=======
  const { t } = useTranslation("page6");
>>>>>>> source-repo/main
  
    return (
        <EBookPage currentPage={6}>
          <Section>
            <SectionTitle>
<<<<<<< HEAD
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
=======
                {t("languagesSection.title")}
            </SectionTitle>
            <Text>
                <RenderHTML htmlString={t("languagesSection.description")} />
            </Text>
            <img src={images.languagesFlowchart.src} alt={t("languagesSection.imageAlt")} className='img-center bg-white' />
          </Section>

          <Section>
            <SectionTitle>
                {t("highLevelLanguagesSection.title")}
            </SectionTitle>
            <Text>
                <RenderHTML htmlString={t("highLevelLanguagesSection.description")} />
            </Text>
>>>>>>> source-repo/main
        </Section>

        <Section>
          <SectionTitle>
<<<<<<< HEAD
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
      
          <br /><br />

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
=======
              {t("lowLevelLanguagesSection.title")}
          </SectionTitle>
          <Text>
              {t("lowLevelLanguagesSection.text1")}
>>>>>>> source-repo/main
          </Text>

          <br /><br />

          <H3>
<<<<<<< HEAD
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
=======
              {t("lowLevelLanguagesSection.machineLanguageTitle")}
          </H3>
          <Text>
              <RenderHTML htmlString={t("lowLevelLanguagesSection.machineLanguageText")} />
          </Text>

          <br /><br />

          <H3>
              {t("lowLevelLanguagesSection.assemblyLanguageTitle")}
          </H3>
          <Text>
              <RenderHTML htmlString={t("lowLevelLanguagesSection.assemblyLanguageText")} />
          </Text>
      </Section>

      <Section>
        <SectionTitle>
            {t("programmingLanguagesSection.title")}
        </SectionTitle>

        <Figure>
            <div>
                <img src={images.image2.src} alt="default" className="img-center w-96 h-28 rounded" />  
                <Description alignCenter>
                    <strong>{t("programmingLanguagesSection.highLevelLanguageDescription")}</strong>
                </Description>
            </div>
            <div>
                <YourImageComponent image={images.image3} className='w-96 h-28' />
                <Description alignCenter>
                    <strong>{t("programmingLanguagesSection.assemblyLanguageDescription")}</strong>
                </Description>
            </div>
            <div>
                <YourImageComponent image={images.image4} className='w-96 h-28' />
                <Description alignCenter>
                    <strong>{t("programmingLanguagesSection.machineLanguageDescription")}</strong>
                </Description>
            </div>
        </Figure>

        <Text>
            <RenderHTML htmlString={t("programmingLanguagesSection.text")} />
        </Text>
    </Section>
>>>>>>> source-repo/main
      </EBookPage>
    );
}

export default Page6;