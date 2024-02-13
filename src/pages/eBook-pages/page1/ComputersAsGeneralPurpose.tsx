import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/common/eBook/EBook";
import { ImageSlider } from "@common/eBook/images";
import images from "@assets/images/pages/page1";
import { Figure, Section } from "@/components/common/eBook/layout/layout";
import { SectionTitle, Description, Text } from "@common/eBook/content";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";

const Page1 = () => {
  useDocumentMetadata('ComputersAsGeneralPurpose', "This is the first page");
  const { setFooterData } = useFooter();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  
  const imageArray = Object.values(images).slice(0, 6);
  const gridData = data.gridData;
  const references = data.references;   

  const colors = {
  amber: "bg-amber-800",
  gray: "bg-gray-400",
  green: "bg-green-900",
}; 
  
  const { t } = useTranslation("page1");

  return (
    <EBookPage currentPage={1} >
      <Section>
        <SectionTitle>{t("generalPurposeComputers.title")}</SectionTitle>
        <Text>
            <RenderHTML htmlString={t("generalPurposeComputers.familiar_with_computers_part1")} />
            <SmoothScrollButton targetId="footer" buttonText="[1, 2, 3, 4]" />
            <RenderHTML htmlString={t("generalPurposeComputers.familiar_with_computers_part2")} />
        </Text>
      </Section>

      <Section> 
        <SectionTitle>{t("examplesOfComputers.title")}</SectionTitle>
        <br />
        <ImageSlider images={imageArray} />
      </Section>

      <Section>
        <SectionTitle>{t("genericArchitecture.title")}</SectionTitle>
        <Text>
            <RenderHTML htmlString={t("genericArchitecture.architecture_intro")} />
        </Text>

        <div className="flex flex-wrap justify-center lg:justify-evenly items-center py-8 sm:gap-y-8">
          <img src={images.architecture1.src} alt={images.architecture1.alt} className="w-auto h-[300px] object-contain mb-4 sm:mb-0" />
          <img src={images.architecture2.src} alt={images.architecture2.alt} className="w-auto h-[300px] object-contain" />
        </div>

        <div>
          <Text>
              <RenderHTML htmlString={t("genericArchitecture.cpu_description_part1")} />
              <SmoothScrollButton targetId="stored-program-machines" buttonText={t("genericArchitecture.stored_program_machines_button")} />
              <RenderHTML htmlString={t("genericArchitecture.cpu_description_part2")} />
              <SmoothScrollButton targetId="digital-representation" buttonText={t("genericArchitecture.digital_representation_button")} />
              <RenderHTML htmlString={t("genericArchitecture.cpu_description_part3")} />
          </Text>
        </div>
      </Section>

      <Section id="stored-program-machines">
        <SectionTitle>{t("storedProgramMachines.title")}</SectionTitle>
        <Text>
            <RenderHTML htmlString={t("storedProgramMachines.description")} />
        </Text>
        <Figure>
            <div>
                <img src={images.eniac.src} alt={images.eniac.alt} className="2xl:ml-[20px] w-[400px] h-[300px]" />
                <Description>
                    {t("storedProgramMachines.eniac_description")}
                </Description>
            </div>
            <div>
                <img src={images.modernComputer.src} alt={images.modernComputer.alt} className="2xl:ml-[20px] w-[400px] h-[300px]" />
                <Description>
                    {t("storedProgramMachines.modern_computer_description")}
                </Description>
            </div>
            <div>
                <img src={images.specialPurposeComputer.src} alt={images.specialPurposeComputer.alt} className="2xl:ml-[20px] w-[400px] h-[300px]" />
                <Description>
                    {t("storedProgramMachines.special_purpose_computer_description")}
                </Description>
            </div>
        </Figure>
    </Section>

    <Section id="digital-representation">
      <SectionTitle>{t("digitalRepresentation.title")}</SectionTitle>
      <Text>
          <RenderHTML htmlString={t("digitalRepresentation.description")} />
      </Text>
        <Figure>
        {gridData.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-start h-full px-4">
            <div
              className={`${
                colors[item.colorKey as keyof typeof colors]
              } flex flex-col items-center justify-center w-48 h-48 p-4 ${
                index === 1 ? 'text-black' : 'text-gray-200'
              }`}
            >
              {item.texts.map((text, textIndex) => (
                <p
                  key={textIndex}
                  className="text-center text-lg shadow-slate-700 shadow-sm py-1 px-2 rounded"
                >
                  {text}
                </p>
              ))}
            </div>
            <div>
              <Description>{item.description}</Description>
            </div>
          </div>
        ))}
        </Figure>
      </Section>
    </EBookPage>
  );
}

export default Page1;