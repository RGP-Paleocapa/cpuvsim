import { useEffect } from "react";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/features/eBook/EBook";
import { SectionTitle, Text } from "@/components/features/eBook/content";
import images from "@assets/images/pages/page7";
import ImageSwitcher from "@/components/features/eBook/images/ImageAndTextSwitcher";
import data from './data.json';
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

    const sumList = data.sum;
    const formulaList = data.formula;
    const infiniteLoopList = data.infiniteLoop;
    const ifThenElseList = data.ifThenElse;
    const whileList = data.while;
    const forLoopList = data.forLoop;

    // const imagesSwitcher = [
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    //     'https://picsum.photos/200/300.jpg',
    // ]

    const sumSwitcher = [
        images.sum1,
        images.sum2,
        images.sum3,
      ]
    const formulaSwitcher = [
        images.formula1,
        images.formula2,
        images.formula3,
      ]
    const loopSwitcher = [
        images.loop1,
        images.loop2,
        images.loop3,
      ]
    const ifThenElseSwitcher = [
        images.ifThenElse1,
        images.ifThenElse2,
        images.ifThenElse3,
      ]
    const whileSwitcher = [
        images.while1,
        images.while2,
        images.while3,
      ]
    const forSwitcher = [
        images.for1,
        images.for2,
        images.for3,
      ]

    const { t } = useTranslation("page7");

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
                <ImageSwitcher images={sumSwitcher} instructionsList={sumList} />
            </Section>

                        
            <Section>
                <SectionTitle>
                    {t("example2Title")}
                </SectionTitle>
                <ImageSwitcher images={formulaSwitcher} instructionsList={formulaList} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example3Title")}
                </SectionTitle>
                <ImageSwitcher images={loopSwitcher} instructionsList={infiniteLoopList} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example4Title")}
                </SectionTitle>
                <ImageSwitcher images={ifThenElseSwitcher} instructionsList={ifThenElseList} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example5Title")}
                </SectionTitle>
                <ImageSwitcher images={whileSwitcher} instructionsList={whileList} />
            </Section>


            <Section>
                <SectionTitle>
                    {t("example6Title")}
                </SectionTitle>
                <ImageSwitcher images={forSwitcher} instructionsList={forLoopList} />
            </Section>

                {/* <SuccessButton onClick={() => alert("SuccessButton clicked!")} /> */}
                {/* <CancelButton onClick={() => alert("CancelButton clicked!")} /> */}
        </EBookPage>
    );
}

export default Page7;