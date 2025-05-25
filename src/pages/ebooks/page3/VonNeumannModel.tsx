import EBookPage from "@/components/features/eBook/EBook";
// import { SectionTitle, Ul, Text, Description, H2, Li } from "@/components/features/eBook/content";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/features/eBook/layout";
import images from "@assets/images/pages/page3";
import { ImageContainer, InteractiveImage } from "@/components/features/eBook/images/";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import RenderHTML from "@/components/common/RenderHTML";
import { useTranslation } from "react-i18next";
import { useFooterStore } from "@/context/useFooterStore";
import { SectionTitle, Description, Heading2, UnorderedList, ListItem, ParagraphText } from "@/components/features/eBook/typography";
import LazyImage from "@/components/features/eBook/images/LazyImage";

const Page3 = () => {
  useDocumentMetadata('Von Neumann Model', "This is the third page");
  const { setFooterData } = useFooterStore();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  const references = data.references;
  const { t } = useTranslation("page3");

  return (
      <EBookPage currentPage={3} >
        <Section>
          <SectionTitle>{t("vonNeumannArchitecture.title")}</SectionTitle>
          <InlineDivs>
              <MaxWidthContainer>
                  <ParagraphText isDark>
                      <RenderHTML htmlString={t("vonNeumannArchitecture.description1")} />
                  </ParagraphText>
              </MaxWidthContainer>
              <MaxWidthContainer>
                  <ImageContainer src={images.image1.src} alt={images.image1.alt} classname="img-center" />
              </MaxWidthContainer>
          </InlineDivs>

          <InlineDivs>
              <MaxWidthContainer>
                  <ParagraphText isDark>
                      <RenderHTML htmlString={t("vonNeumannArchitecture.description2")} />
                  </ParagraphText>
                  <UnorderedList>
                      <ListItem isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component1")} />
                      </ListItem>
                      <ListItem isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component2")} />
                      </ListItem>
                      <ListItem isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component3")} />
                      </ListItem>
                      <ListItem isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component4")} />
                      </ListItem>
                  </UnorderedList>
              </MaxWidthContainer>
              <MaxWidthContainer>
                  <ImageContainer src={images.image2.src} alt={images.image2.alt} classname="img-center" />
              </MaxWidthContainer>
          </InlineDivs>
      </Section>

    <Section>
      <Heading2>{t("cpuSection.title")}</Heading2>
      <ParagraphText className="mb-4">
          {t("cpuSection.description")}
      </ParagraphText>
      <InlineDivs isEven>
          <MaxWidthContainer>
              <UnorderedList className="list-none pl-0 ml-0">
                  <UnorderedList className="pl-0 ml-0">
                      <strong className='text-gray-900'>Arithmetic Logic Unit (ALU):</strong>
                      <UnorderedList className="text-gray-300">
                          <ListItem isDark>
                              {t("cpuSection.aluDescription")}
                          </ListItem>
                          <ListItem isDark>
                              {t("cpuSection.logicOperations")}
                          </ListItem>
                      </UnorderedList>
                  </UnorderedList>
                  <UnorderedList>
                      <strong className='text-gray-900'>Control Unit and Decoder:</strong>
                      <UnorderedList className="text-gray-300">
                          <ListItem isDark>
                              {t("cpuSection.controlUnitDescription")}
                          </ListItem>
                          <ListItem isDark>
                              {t("cpuSection.timingControlSignals")}
                          </ListItem>
                      </UnorderedList>
                  </UnorderedList>
                  <UnorderedList>
                      <strong className='text-gray-900'>Specialized Registers:</strong>
                      <UnorderedList className="text-gray-300">
                          <ListItem isDark>
                              <strong className='text-gray-900'>Accumulator (Acc): </strong>
                              {t("cpuSection.accumulatorDescription")}
                          </ListItem>
                          <ListItem isDark>
                              <strong className='text-gray-900'>Program Counter (PC): </strong>
                              {t("cpuSection.programCounterDescription")}
                          </ListItem>
                          <ListItem isDark>
                              <strong className='text-gray-900'>Instruction Register (IR):</strong>
                              {t("cpuSection.instructionRegisterDescription")}
                          </ListItem>
                          <ListItem isDark>
                              <strong className='text-gray-900'>Status Word (SW): </strong>
                              {t("cpuSection.statusWordDescription")}
                          </ListItem>
                          <ListItem isDark>
                              <strong className='text-gray-900'>Multiplexer (MUX): </strong>
                              {t("cpuSection.multiplexerDescription")}
                          </ListItem>
                      </UnorderedList>
                  </UnorderedList>
              </UnorderedList>
          </MaxWidthContainer>
          <MaxWidthContainer>
              <LazyImage src={images.image3.src} alt={images.image3.alt} className="img-center" />
          </MaxWidthContainer>
      </InlineDivs>
  </Section>

        <Section>
          <Heading2>{t("ioDevicesSection.title")}</Heading2>
          <ParagraphText>
              <RenderHTML htmlString={t("ioDevicesSection.description1")} />
          </ParagraphText>
          <UnorderedList>
              <ListItem>
                  <RenderHTML htmlString={t("ioDevicesSection.inputDevices")} />
              </ListItem>
              <ListItem>
                  <RenderHTML htmlString={t("ioDevicesSection.outputDevices")} />
              </ListItem>
          </UnorderedList>
          <ParagraphText>
              <RenderHTML htmlString={t("ioDevicesSection.additionalInfo")} />
          </ParagraphText>
      </Section>

      <Section>
        <Heading2>{t("busSystemSection.title")}</Heading2>
        <ParagraphText>
            <RenderHTML htmlString={t("busSystemSection.description")} />
        </ParagraphText>
        <br />
        <InlineDivs>
            <MaxWidthContainer>
                <UnorderedList>
                    <ListItem isDark>
                        <RenderHTML htmlString={t("busSystemSection.dataBus")} />
                    </ListItem>
                    <ListItem isDark>
                        <RenderHTML htmlString={t("busSystemSection.addressBus")} />
                    </ListItem>
                    <ListItem isDark>
                        <RenderHTML htmlString={t("busSystemSection.controlBus")} />
                    </ListItem>
                </UnorderedList>
            </MaxWidthContainer>
            <MaxWidthContainer>
                <InteractiveImage src={images.image4.src} alt={images.image4.alt} className="img-center min" />
                <Description alignCenter><b className="hidden lg:block text-red-700 dark:text-black text-lg">Click to zoom!</b></Description>
            </MaxWidthContainer>
        </InlineDivs>
    </Section>

        <Section>
          <Heading2>{t("memorySection.title")}</Heading2>
          <ParagraphText>
              <RenderHTML htmlString={t("memorySection.intro")} />
          </ParagraphText>
          <InlineDivs>
              <MaxWidthContainer>
                  <ParagraphText isDark>
                      <RenderHTML htmlString={t("memorySection.mainMemoryDescription")} />
                  </ParagraphText>
              </MaxWidthContainer>
              <MaxWidthContainer>
                  <LazyImage src={images.image5.src} alt={images.image5.alt} className="img-center" />
              </MaxWidthContainer>
          </InlineDivs>
          <br /><br />
          <ParagraphText>
              <RenderHTML htmlString={t("memorySection.secondaryMemoryDescription")} />
          </ParagraphText>
      </Section>
    </EBookPage>
  );
}

export default Page3;
