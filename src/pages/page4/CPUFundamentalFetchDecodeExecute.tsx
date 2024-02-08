import images from "@assets/images/pages/page4";
import EBookPage from "@common/eBook/EBook";
import { Li, Ol, SectionTitle, Text } from "@common/eBook/content";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/common/eBook/layout/layout";
import { YourImageComponent } from "@common/eBook/images";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
>>>>>>> source-repo/main

const Page4 = () => {
    useDocumentMetadata('CPU Fundamentals Fetch Decode Execute', "This is the fourth page");
    const { setFooterData } = useFooter();
    useEffect(() => {
      setFooterData(references);
    }, [setFooterData]);
    const references = data.references;
<<<<<<< HEAD
=======
    const { t } = useTranslation("page4");
>>>>>>> source-repo/main

    return (
        <EBookPage currentPage={4}>
            <Section>
                <SectionTitle>
<<<<<<< HEAD
                    The CPU Fetch/Decode/Execute cycle
=======
                    {t("cpuCycleSection.title")}
>>>>>>> source-repo/main
                </SectionTitle>
                <InlineDivs>
                    <MaxWidthContainer>
                        <Text isDark>
<<<<<<< HEAD
                            The CPU continuously repeats a <strong>fetch-decode-execute cycle</strong>, in order to execute the instructions in a program, one by one.
                            <br />
                            In this cycle, the CPU goes through three main stages:
                            <br /><br />
                        </Text>
                        <Ol className="dark:text-black">
                            <Li isDark margin0>
                                <strong>Fetches</strong> a program instruction from the main memory;
                            </Li>
                            <Li isDark margin0>
                                <strong>Decodes</strong> the instruction, i.e. it works out what needs to be done;
                            </Li>
                            <Li isDark margin0>
                                <strong>Executes</strong> ( i.e. carries out) the instruction.
                            </Li>
                        </Ol>
=======
                            <RenderHTML htmlString={t("cpuCycleSection.description")} />
                            <br /><br />
                            <Ol className="dark:text-black">
                                <Li isDark margin0>
                                    <RenderHTML htmlString={`${t("cpuCycleSection.fetch")}`} />
                                </Li>
                                <Li isDark margin0>
                                    <RenderHTML htmlString={`${t("cpuCycleSection.decode")}`} />
                                </Li>
                                <Li isDark margin0>
                                    <RenderHTML htmlString={`${t("cpuCycleSection.execute")}`} />
                                </Li>
                            </Ol>
                        </Text>
>>>>>>> source-repo/main
                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        <img src={images.fetchCodeExecute.src} alt={images.fetchCodeExecute.alt} className="img-center" />
                    </MaxWidthContainer>
                </InlineDivs>
            </Section>

            <Section>
                <Text>
<<<<<<< HEAD
                    During the <strong>fetch</strong> stage of the cycle, the content of the memory cell addressed by the program counter is retrieved and placed into the Instruction Register (IR).
=======
                    <RenderHTML htmlString={`${t("fetchSection.description")}`} />
>>>>>>> source-repo/main
                </Text>
                <YourImageComponent image={images.fetch} />
            </Section>

            <Section>
                <Text>
<<<<<<< HEAD
                    During the <strong>execute</strong> stage of the cycle, the instruction is executed, using the ALU if necessary. Sometimes, this stage may involve the loading or saving of data from and to the main memory.
                </Text>
                <YourImageComponent image={images.execute} />
            </Section>
            
            <Section>
                <Text>
                    In the <strong>decode</strong> part of the cycle, the Control Unit works out what needs to be done by the instruction, and sends control signals to coordinate the other components.
=======
                <RenderHTML htmlString={`${t("executeSection.description")}`} />
                </Text>
                <YourImageComponent image={images.execute} />
            </Section>

            <Section>
                <Text>
                <RenderHTML htmlString={`${t("decodeSection.description")}`} />
>>>>>>> source-repo/main
                </Text>
                <YourImageComponent image={images.decode} />
            </Section>

            <Section>
                <Text>
<<<<<<< HEAD
                    Then, the content of the PC is increased to point to the next instruction to be executed, and a new fetch cycle starts again. In this specific case the PC is incremented by two, because the RAM memory is organized in bytes, and the size of each CPU instruction is two bytes.
                    <br />
                    It is worthwhile noticing here that real CPUs, in order to improve their speed, perform the increment of the PC in parallel to previous operations, during the Execute cycle.
                </Text>
                <YourImageComponent image={images.altro} />
=======
                    <RenderHTML htmlString={`${t("otherSection.description")}`} /> <br /><br />
                </Text>
                    <YourImageComponent image={images.altro} />
>>>>>>> source-repo/main
            </Section>
        </EBookPage>
    );

}

export default Page4;   