import { images } from "@assets/images/pages/page2";
import Table from "@/components/features/eBook/content/Table";
import EBookPage from "@/components/features/eBook/EBook";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/features/eBook/layout/layout";
import { B, Description, H3, Li, SectionTitle, Text, Ul } from "@/components/features/eBook/content";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";
import RenderHTML from "@/components/common/RenderHTML";
import { useTranslation } from "react-i18next";
import { useFooterStore } from "@/context/useFooterStore";

const Page2 = () => {
    useDocumentMetadata('Simple Binary Calculations', "This is the second page");
    const { setFooterData } = useFooterStore();
    useEffect(() => {
      setFooterData(references);
    }, [setFooterData]);
    const references = data.references;
    const textTable = data.textTable;
    const instructionTable = data.instructionTable;
    const { t } = useTranslation("page2");

  return (
    <EBookPage currentPage={2}>
        <Section>
            <SectionTitle>{t("binaryCalculations.title")}</SectionTitle>
            <Text>
                {t("binaryCalculations.intro")} <B>{t("binaryCalculations.one")}</B> and <B>{t("binaryCalculations.zero")}</B>.
                <br /><br />
                {t("binaryCalculations.binaryAdditionRules")}
                <SmoothScrollButton targetId="footer" buttonText="[1]" />
                <br /><br />
                <B className="text-blue-400">0</B> + <B className="text-blue-400">0</B> = <B className="text-blue-400">0</B>
                <br />
                <B className="text-blue-400">0</B> + <B className="text-green-700/75 dark:text-green-400">1</B> = <B className="text-green-700/75 dark:text-green-400">1</B>
                <br />
                <B className="text-green-700/75 dark:text-green-400">1</B> + <B className="text-green-700/75 dark:text-green-400">1</B> = <B className="text-red-700">1</B><B className="text-blue-600">0</B>
                {t("binaryCalculations.firstPart")}<B className="text-blue-600">0</B>{t("binaryCalculations.secondPart")}<B className="text-red-700">carry 1</B>.
                <br /><br />
                {t("binaryCalculations.thirdPart")}<B className="text-red-700">1</B><B className="text-blue-600">0</B><B> as a binary number</B>{t("binaryCalculations.fourthPart")}
            </Text>
        </Section>

        <Section>
            <SectionTitle>{t("binaryRepresentation.title")}</SectionTitle>
            <Text>
                <RenderHTML htmlString={t("binaryRepresentation.intro")} />
                <br /><br />
                <RenderHTML htmlString={t("binaryRepresentation.codingConventions")} />
            </Text>
        </Section>

        <Section>
            <InlineDivs centerStart containsTable>
                <MaxWidthContainer>
                    <H3 isDark>{t("textSection.title")}</H3>
                    <Text isDark>
                        <RenderHTML htmlString={t("textSection.description1")} />
                        <br /><br />
                        <RenderHTML htmlString={t("textSection.description2")} />
                        <br />
                        <RenderHTML htmlString={t("textSection.description3")} />
                    </Text>
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
                    <H3 isDark>{t("imagesAndVideosSection.title")}</H3>
                    <Text isDark>
                        <RenderHTML htmlString={t("imagesAndVideosSection.description")} />
                        <br />
                        <RenderHTML htmlString={t("imagesAndVideosSection.colorRepresentation")} />
                        <br /><br />
                        {t("imagesAndVideosSection.imagePerception")}
                    </Text>
                </MaxWidthContainer>
            </InlineDivs>

            <InlineDivs centerStart>
                <MaxWidthContainer>
                    <H3 isDark>{t("audioSection.title")}</H3>
                    <Text isDark>
                        <RenderHTML htmlString={t("audioSection.description")} />
                        <br />
                        {t("audioSection.samplingDetail")}
                    </Text>
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
                    <H3 isDark>{t("instructionsSection.title")}</H3>
                    <Text isDark>
                        <RenderHTML htmlString={t("instructionsSection.description")} />
                    </Text>
                </MaxWidthContainer>
            </InlineDivs>
        </Section>

        <Section>
            <SectionTitle>{t("multimediaInformation.title")}</SectionTitle>
            <Text>
                <RenderHTML htmlString={t("multimediaInformation.intro")} />
            </Text>
            <br />
            <InlineDivs>
                <MaxWidthContainer>
                    <Ul>
                        <Li isDark>{t("multimediaInformation.example1")}</Li>
                        <Li isDark>{t("multimediaInformation.example2")}</Li>
                        <Li isDark>{t("multimediaInformation.example3")}</Li>
                        <Li isDark>{t("multimediaInformation.example4")}</Li>
                    </Ul>
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