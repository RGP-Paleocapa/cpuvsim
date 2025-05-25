import images from "@assets/images/pages/page4";
import EBookPage from "@/components/features/eBook/EBook";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/features/eBook/layout";
import { YourImageComponent } from "@/components/features/eBook/images";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
import { useFooterStore } from "@/context/useFooterStore";
import { ListItem, OrderedList, ParagraphText, SectionTitle } from "@/components/features/eBook/typography";

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
                        <ParagraphText isDark><RenderHTML htmlString={t("cpuCycleSection.description")} /></ParagraphText>
                        <br /><br />
                        <OrderedList className="dark:text-black">
                            <ListItem isDark margin0>
                                <RenderHTML htmlString={`${t("cpuCycleSection.fetch")}`} />
                            </ListItem>
                            <ListItem isDark margin0>
                                <RenderHTML htmlString={`${t("cpuCycleSection.decode")}`} />
                            </ListItem>
                            <ListItem isDark margin0>
                                <RenderHTML htmlString={`${t("cpuCycleSection.execute")}`} />
                            </ListItem>
                        </OrderedList>
                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        <img src={images.fetchCodeExecute.src} alt={images.fetchCodeExecute.alt} className="img-center" />
                    </MaxWidthContainer>
                </InlineDivs>
            </Section>

            <Section>
                <ParagraphText>
                    <RenderHTML htmlString={`${t("fetchSection.description")}`} />
                </ParagraphText>
                <YourImageComponent image={images.fetch} />
            </Section>

            <Section>
                <ParagraphText>
                <RenderHTML htmlString={`${t("executeSection.description")}`} />
                </ParagraphText>
                <YourImageComponent image={images.execute} />
            </Section>

            <Section>
                <ParagraphText>
                <RenderHTML htmlString={`${t("decodeSection.description")}`} />
                </ParagraphText>
                <YourImageComponent image={images.decode} />
            </Section>

            <Section>
                <ParagraphText>
                    <RenderHTML htmlString={`${t("otherSection.description")}`} /> <br /><br />
                </ParagraphText>
                    <YourImageComponent image={images.altro} />
            </Section>
        </EBookPage>
    );

}

export default Page4;
