import images from "@assets/images/pages/page4";
import EBookPage from "@/components/features/eBook/EBook";
import { Li, Ol, SectionTitle, Text } from "@/components/features/eBook/content";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/features/eBook/layout/layout";
import { YourImageComponent } from "@/components/features/eBook/images";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
import { useFooterStore } from "@/context/useFooterStore";

const Page4 = () => {
    useDocumentMetadata('CPU Fundamentals Fetch Decode Execute', "This is the fourth page");
    const { setFooterData } = useFooterStore();
    useEffect(() => {
      setFooterData(references);
    }, [setFooterData]);
    const references = data.references;
    const { t } = useTranslation("page4");

    return (
        <EBookPage currentPage={4}>
            <Section>
                <SectionTitle>
                    {t("cpuCycleSection.title")}
                </SectionTitle>
                <InlineDivs>
                    <MaxWidthContainer>
                        <Text isDark><RenderHTML htmlString={t("cpuCycleSection.description")} /></Text>
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
                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        <img src={images.fetchCodeExecute.src} alt={images.fetchCodeExecute.alt} className="img-center" />
                    </MaxWidthContainer>
                </InlineDivs>
            </Section>

            <Section>
                <Text>
                    <RenderHTML htmlString={`${t("fetchSection.description")}`} />
                </Text>
                <YourImageComponent image={images.fetch} />
            </Section>

            <Section>
                <Text>
                <RenderHTML htmlString={`${t("executeSection.description")}`} />
                </Text>
                <YourImageComponent image={images.execute} />
            </Section>

            <Section>
                <Text>
                <RenderHTML htmlString={`${t("decodeSection.description")}`} />
                </Text>
                <YourImageComponent image={images.decode} />
            </Section>

            <Section>
                <Text>
                    <RenderHTML htmlString={`${t("otherSection.description")}`} /> <br /><br />
                </Text>
                    <YourImageComponent image={images.altro} />
            </Section>
        </EBookPage>
    );

}

export default Page4;   