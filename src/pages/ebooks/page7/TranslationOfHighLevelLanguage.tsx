import { useEffect } from "react";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/features/eBook/EBook";
import { SectionTitle, Text } from "@/components/features/eBook/content";
import images from "@assets/images/pages/page7";
import { useFooter } from "@/context/FooterContext";
import ImageSwitcher from "@/components/features/eBook/images/ImageAndTextSwitcher";
import data from './data.json';
import { Section } from "@/components/features/eBook/layout/layout";
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";

const Page7 = () => {
    useDocumentMetadata('Translation of High Level Language', "This is the seventh page");
    const { setFooterData } = useFooter();
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
        images.sum1.src,
        images.sum2.src,
        images.sum3.src,
      ]
    const formulaSwitcher = [
        images.formula1.src,
        images.formula2.src,
        images.formula3.src,
      ]
    const loopSwitcher = [
        images.loop1.src,
        images.loop2.src,
        images.loop3.src,
      ]
    const ifThenElseSwitcher = [
        images.ifThenElse1.src,
        images.ifThenElse2.src,
        images.ifThenElse3.src,
      ]
    const whileSwitcher = [
        images.while1.src,
        images.while2.src,
        images.while3.src,
      ]
    const forSwitcher = [
        images.for1.src,
        images.for2.src,
        images.for3.src,
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