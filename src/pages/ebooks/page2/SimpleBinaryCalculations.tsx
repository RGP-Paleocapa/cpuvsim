import { images } from "@assets/images/pages/page2";
import Table from "@/components/features/eBook/content/Table";
import EBookPage from "@/components/features/eBook/EBook";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/features/eBook/layout";
// import { B, Description, Heading3, Li, SectionTitle, ParagraphText, Ul } from "@/components/features/eBook/content";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";
import RenderHTML from "@/components/common/RenderHTML";
import { useTranslation } from "react-i18next";
import { useFooterStore } from "@/context/useFooterStore";
import { Bold, Description, Heading3, ListItem, ParagraphText, SectionTitle, UnorderedList } from "@/components/features/eBook/typography";

const Page2 = () => {
    useDocumentMetadata('Simple Binary Calculations', "This is the second page");
    const { setFooterData } = useFooterStore();
    const references = data.references;
    useEffect(() => {
      setFooterData(references);
    }, [setFooterData]);
    const textTable = data.textTable;
    const instructionTable = data.instructionTable;
    const { t } = useTranslation("page2");

  return (
    <EBookPage currentPage={2}>
        <Section>
            <SectionTitle>{t("binaryCalculations.title")}</SectionTitle>
            <ParagraphText>
                {t("binaryCalculations.intro")} <Bold>{t("binaryCalculations.one")}</Bold> and <Bold>{t("binaryCalculations.zero")}</Bold>.
                <br /><br />
                {t("binaryCalculations.binaryAdditionRules")}
                <SmoothScrollButton targetId="footer" buttonText="[1]" />
                <br /><br />
                <Bold className="text-blue-400">0</Bold> + <Bold className="text-blue-400">0</Bold> = <Bold className="text-blue-400">0</Bold>
                <br />
                <Bold className="text-blue-400">0</Bold> + <Bold className="text-green-700/75 dark:text-green-400">1</Bold> = <Bold className="text-green-700/75 dark:text-green-400">1</Bold>
                <br />
                <Bold className="text-green-700/75 dark:text-green-400">1</Bold> + <Bold className="text-green-700/75 dark:text-green-400">1</Bold> = <Bold className="text-red-700">1</Bold><Bold className="text-blue-600">0</Bold>
                {t("binaryCalculations.firstPart")}<Bold className="text-blue-600">0</Bold>{t("binaryCalculations.secondPart")}<Bold className="text-red-700">carry 1</Bold>.
                <br /><br />
                {t("binaryCalculations.thirdPart")}<Bold className="text-red-700">1</Bold><Bold className="text-blue-600">0</Bold><Bold> as a binary number</Bold>{t("binaryCalculations.fourthPart")}
            </ParagraphText>
        </Section>
        <Section>
            <SectionTitle>{t("binaryRepresentation.title")}</SectionTitle>
            <ParagraphText>
                <RenderHTML htmlString={t("binaryRepresentation.intro")} />
                <br /><br />
                <RenderHTML htmlString={t("binaryRepresentation.codingConventions")} />
            </ParagraphText>
        </Section>
        <Section>
            <InlineDivs centerStart containsTable>
                <MaxWidthContainer>
                    <Heading3 isDark>{t("textSection.title")}</Heading3>
                    <ParagraphText isDark>
                        <RenderHTML htmlString={t("textSection.description1")} />
                        <br /><br />
                        <RenderHTML htmlString={t("textSection.description2")} />
                        <br />
                        <RenderHTML htmlString={t("textSection.description3")} />
                    </ParagraphText>
                </MaxWidthContainer>
                <MaxWidthContainer smallPadding>
                    <Table headerTitles={['Binary', 'Char', 'Binary', 'Char'] } bodyRows={textTable} />
                    <Description alignCenter isDark>
                        {t("textSection.examplesAscii")}
                    </Description>
                </MaxWidthContainer>
            </InlineDivs>
            <InlineDivs centerStart isEven>
                <MaxWidthContainer>
                    {/* First Image */}
                    <img src={images.image1.src} alt={images.image1.alt} className="img-center" />
                    {/* Second Image (Square) and Description */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <div className="w-16 h-16 bg-gray-400 mr-4 flex-shrink-0" /> {/* 32x32 pixels square */}
                        <Description isDark>
                            {t("imagesAndVideosSection.pixelDescription")}
                        </Description>
                    </div>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <Heading3 isDark>{t("imagesAndVideosSection.title")}</Heading3>
                    <ParagraphText isDark>
                        <RenderHTML htmlString={t("imagesAndVideosSection.description")} />
                        <br />
                        <RenderHTML htmlString={t("imagesAndVideosSection.colorRepresentation")} />
                        <br /><br />
                        {t("imagesAndVideosSection.imagePerception")}
                    </ParagraphText>
                </MaxWidthContainer>
            </InlineDivs>
            <InlineDivs centerStart>
                <MaxWidthContainer>
                    <Heading3 isDark>{t("audioSection.title")}</Heading3>
                    <ParagraphText isDark>
                        <RenderHTML htmlString={t("audioSection.description")} />
                        <br />
                        {t("audioSection.samplingDetail")}
                    </ParagraphText>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <img src={images.image2.src} alt={images.image2.alt} className="img-center bg-white" />
                    <Description isDark>
                        {t("audioSection.quantizationDescription")}
                    </Description>
                </MaxWidthContainer>
            </InlineDivs>
            <InlineDivs centerStart isEven>
                <MaxWidthContainer smallPadding>
                    <Table headerTitles={['binary Code', 'description']} bodyRows={instructionTable} />
                    <Description isDark>
                        {t("instructionsSection.tableDescription")}
                    </Description>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <Heading3 isDark>{t("instructionsSection.title")}</Heading3>
                    <ParagraphText isDark>
                        <RenderHTML htmlString={t("instructionsSection.description")} />
                    </ParagraphText>
                </MaxWidthContainer>
            </InlineDivs>
        </Section>
        <Section>
            <SectionTitle>{t("multimediaInformation.title")}</SectionTitle>
            <ParagraphText>
                <RenderHTML htmlString={t("multimediaInformation.intro")} />
            </ParagraphText>
            <br />
            <InlineDivs>
                <MaxWidthContainer>
                    <UnorderedList>
                        <ListItem isDark>{t("multimediaInformation.example1")}</ListItem>
                        <ListItem isDark>{t("multimediaInformation.example2")}</ListItem>
                        <ListItem isDark>{t("multimediaInformation.example3")}</ListItem>
                        <ListItem isDark>{t("multimediaInformation.example4")}</ListItem>
                    </UnorderedList>
                </MaxWidthContainer>
                <MaxWidthContainer>
                    <img src={images.image3.src} alt={images.image3.alt} className="img-center" />
                    <Description alignCenter isDark>
                        {t("multimediaInformation.soundVolumeDescription")}
                    </Description>
                </MaxWidthContainer>
            </InlineDivs>
        </Section>
    </EBookPage>
  );
}

export default Page2;
