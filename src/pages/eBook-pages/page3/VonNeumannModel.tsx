import EBookPage from "@common/eBook/EBook";
import { SectionTitle, Ul, Text, Description, H2, Li } from "@common/eBook/content";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/common/eBook/layout/layout";
import images from "@assets/images/pages/page3";
import { InteractiveImage } from "@common/eBook/images/";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';
import RenderHTML from "@/components/common/RenderHTML";
import { useTranslation } from "react-i18next";

const Page3 = () => {
  useDocumentMetadata('Von Neumann Model', "This is the third page");
  const { setFooterData } = useFooter();
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
                  <Text isDark>
                      <RenderHTML htmlString={t("vonNeumannArchitecture.description1")} />
                  </Text>
              </MaxWidthContainer>
              <MaxWidthContainer>
                  <img src={images.image1.src} alt={images.image1.alt} className="img-center" />
              </MaxWidthContainer>
          </InlineDivs>

          <InlineDivs>
              <MaxWidthContainer>
                  <Text isDark>
                      <RenderHTML htmlString={t("vonNeumannArchitecture.description2")} />
                  </Text>
                  <Ul>
                      <Li isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component1")} />
                      </Li>
                      <Li isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component2")} />
                      </Li>
                      <Li isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component3")} />
                      </Li>
                      <Li isDark>
                          <RenderHTML htmlString={t("vonNeumannArchitecture.component4")} />
                      </Li>
                  </Ul>
              </MaxWidthContainer>
              <MaxWidthContainer>
                  <img src={images.image2.src} alt={images.image2.alt} className="img-center" />
              </MaxWidthContainer>
          </InlineDivs>
      </Section>

    <Section>
      <H2>{t("cpuSection.title")}</H2>
      <Text className="mb-4">
          {t("cpuSection.description")}
      </Text>
      <InlineDivs isEven>
          <MaxWidthContainer>
              <Ul className="list-none">
                  <Li>
                      <strong className='text-gray-900'>Arithmetic Logic Unit (ALU):</strong>
                      <Ul className="text-gray-300"> 
                          <Li isDark>
                              {t("cpuSection.aluDescription")}
                          </Li>
                          <Li isDark>
                              {t("cpuSection.logicOperations")}
                          </Li>
                      </Ul>
                  </Li>
                  <Li>
                      <strong className='text-gray-900'>Control Unit and Decoder:</strong>
                      <Ul className="text-gray-300"> 
                          <Li isDark>
                              {t("cpuSection.controlUnitDescription")}
                          </Li>
                          <Li isDark>
                              {t("cpuSection.timingControlSignals")}
                          </Li>
                      </Ul>
                  </Li>
                  <Li>
                      <strong className='text-gray-900'>Specialized Registers:</strong>
                      <Ul className="text-gray-300"> 
                          <Li isDark>
                              <strong className='text-gray-900'>Accumulator (Acc): </strong>
                              {t("cpuSection.accumulatorDescription")}
                          </Li>
                          <Li isDark>
                              <strong className='text-gray-900'>Program Counter (PC): </strong>
                              {t("cpuSection.programCounterDescription")}
                          </Li>
                          <Li isDark>
                              <strong className='text-gray-900'>Instruction Register (IR):</strong>
                              {t("cpuSection.instructionRegisterDescription")}
                          </Li>
                          <Li isDark>
                              <strong className='text-gray-900'>Status Word (SW): </strong>
                              {t("cpuSection.statusWordDescription")}
                          </Li>
                          <Li isDark>
                              <strong className='text-gray-900'>Multiplexer (MUX): </strong>
                              {t("cpuSection.multiplexerDescription")}
                          </Li>
                      </Ul>
                  </Li>
              </Ul>
          </MaxWidthContainer>
          <MaxWidthContainer>
              <img src={images.image3.src} alt={images.image3.alt} className="img-center" />
          </MaxWidthContainer>
      </InlineDivs>
  </Section>

        <Section>
          <H2>{t("ioDevicesSection.title")}</H2>
          <Text>
              <RenderHTML htmlString={t("ioDevicesSection.description1")} />
          </Text>
          <Ul>
              <Li>
                  <RenderHTML htmlString={t("ioDevicesSection.inputDevices")} />
              </Li>
              <Li>
                  <RenderHTML htmlString={t("ioDevicesSection.outputDevices")} />
              </Li>
          </Ul>
          <Text>
              <RenderHTML htmlString={t("ioDevicesSection.additionalInfo")} />
          </Text>
      </Section>

      <Section>
        <H2>{t("busSystemSection.title")}</H2>
        <Text>
            <RenderHTML htmlString={t("busSystemSection.description")} />
        </Text>
        <br />
        <InlineDivs>
            <MaxWidthContainer>
                <Ul>
                    <Li isDark>
                        <RenderHTML htmlString={t("busSystemSection.dataBus")} />
                    </Li>      
                    <Li isDark>
                        <RenderHTML htmlString={t("busSystemSection.addressBus")} />
                    </Li>
                    <Li isDark>
                        <RenderHTML htmlString={t("busSystemSection.controlBus")} />
                    </Li>
                </Ul>
            </MaxWidthContainer>
            <MaxWidthContainer>
                <InteractiveImage src={images.image4.src} alt={images.image4.alt} className="img-center min" />
                <Description alignCenter><b className="hidden lg:block text-red-700 dark:text-black text-lg">Click to zoom!</b></Description>
            </MaxWidthContainer>
        </InlineDivs>
    </Section>

        <Section>
          <H2>{t("memorySection.title")}</H2>
          <Text>
              <RenderHTML htmlString={t("memorySection.intro")} />
          </Text>  
          <InlineDivs>
              <MaxWidthContainer>
                  <Text isDark>
                      <RenderHTML htmlString={t("memorySection.mainMemoryDescription")} />
                  </Text>
              </MaxWidthContainer>
              <MaxWidthContainer>
                  <img src={images.image5.src} alt={images.image5.alt} className="img-center" />
              </MaxWidthContainer>
          </InlineDivs>
          <br /><br />
          <Text>
              <RenderHTML htmlString={t("memorySection.secondaryMemoryDescription")} />
          </Text>
      </Section>
    </EBookPage>
  );
}

export default Page3;