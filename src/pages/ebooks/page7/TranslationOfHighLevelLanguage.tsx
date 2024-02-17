import { useEffect } from "react";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/features/eBook/EBook";
import { SectionTitle, Text } from "@/components/features/eBook/content";
import images from "@assets/images/pages/page7";
import ImageSwitcher from "@/components/features/eBook/images/ImageAndTextSwitcher";
// import data from './data.json';
import { Section } from "@/components/features/eBook/layout/layout";
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
import { useFooterStore } from "@/context/useFooterStore";

const Page7 = () => {
    useDocumentMetadata('Translation of High Level Language', "This is the seventh page");
    const { setFooterData } = useFooterStore();
    useEffect(() => {
      setFooterData([]);
    }, [setFooterData]);

    // const sumListText = data.sum;
    // const formulaListText = data.formula;
    // const infiniteLoopListText = data.infiniteLoop;
    // const ifThenElseListText = data.ifThenElse;
    // const whileListText = data.while;
    // const forLoopListText = data.forLoop;

    const { t } = useTranslation("page7");

    // Fetch each translation, ensuring it's returned as an object (array of arrays)
    const sumListText: string[][] = t("sum", { returnObjects: true });
    const formulaListText: string[][] = t("formula", { returnObjects: true });
    const infiniteLoopListText: string[][] = t("infiniteLoop", { returnObjects: true });
    const ifThenElseListText: string[][] = t("ifThenElse", { returnObjects: true });
    const whileListText: string[][] = t("while", { returnObjects: true });
    const forLoopListText: string[][] = t("forLoop", { returnObjects: true });

    return (
        <EBookPage currentPage={7}>
            <Section>
                <SectionTitle>
                    {t("translationOfHighLevelConstructsSection.title")}
                </SectionTitle>
                <Text>
                    <RenderHTML htmlString={t("translationOfHighLevelConstructsSection.text")} />
                </Text>
            </Section>

            <Section>
                <SectionTitle>
                    {t("example1Title")}
                </SectionTitle>
                <ImageSwitcher images={images.sum} instructionsList={sumListText} />
            </Section>

                        
            <Section>
                <SectionTitle>
                    {t("example2Title")}
                </SectionTitle>
                <ImageSwitcher images={images.formula} instructionsList={formulaListText} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example3Title")}
                </SectionTitle>
                <ImageSwitcher images={images.loop} instructionsList={infiniteLoopListText} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example4Title")}
                </SectionTitle>
                <ImageSwitcher images={images.ifThenElse} instructionsList={ifThenElseListText} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example5Title")}
                </SectionTitle>
                <ImageSwitcher images={images.while} instructionsList={whileListText} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example6Title")}
                </SectionTitle>
                <ImageSwitcher images={images.for} instructionsList={forLoopListText} />
            </Section>
        </EBookPage>
    );
}

export default Page7;