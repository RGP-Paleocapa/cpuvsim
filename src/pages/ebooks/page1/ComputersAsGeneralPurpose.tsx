import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/features/eBook/EBook";
import { ImageSlider } from "@/components/features/eBook/images";
import images from "@assets/images/pages/page1";
import { Figure, Section } from "@/components/features/eBook/layout";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
import { useFooterStore } from "@/context/useFooterStore";
import { SectionTitle, Description, ParagraphText } from "@/components/features/eBook/typography";
import ImageGroup from "@/components/features/eBook/images/ImageGroup";
import ImageContainer from "@/components/features/eBook/images/ImageContainer";

const Page1 = () => {
  useDocumentMetadata('ComputersAsGeneralPurpose', "This is the first page");
  const { setFooterData } = useFooterStore();
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
        <ParagraphText>
            <RenderHTML htmlString={t("generalPurposeComputers.familiar_with_computers_part1")} />
            <SmoothScrollButton targetId="footer" buttonText="[1, 2, 3, 4]" />
            <RenderHTML htmlString={t("generalPurposeComputers.familiar_with_computers_part2")} />
        </ParagraphText>
      </Section>

      <Section>
        <SectionTitle>{t("examplesOfComputers.title")}</SectionTitle>
        <br />
        <ImageSlider images={imageArray} />
      </Section>

      <Section>
        <SectionTitle>{t("genericArchitecture.title")}</SectionTitle>
        <ParagraphText>
            <RenderHTML htmlString={t("genericArchitecture.architecture_intro")} />
        </ParagraphText>

        <ImageGroup>
          <ImageContainer
            src={images.architecture1.src}
            alt={images.architecture1.alt}
          />
          <ImageContainer
            src={images.architecture2.src}
            alt={images.architecture2.alt}
          />
        </ImageGroup>

        <div>
          <ParagraphText>
              <RenderHTML htmlString={t("genericArchitecture.cpu_description_part1")} />
              <SmoothScrollButton targetId="stored-program-machines" buttonText={t("genericArchitecture.stored_program_machines_button")} />
              <RenderHTML htmlString={t("genericArchitecture.cpu_description_part2")} />
              <SmoothScrollButton targetId="digital-representation" buttonText={t("genericArchitecture.digital_representation_button")} />
              <RenderHTML htmlString={t("genericArchitecture.cpu_description_part3")} />
          </ParagraphText>
        </div>
      </Section>

      <Section id="stored-program-machines">
        <SectionTitle>{t("storedProgramMachines.title")}</SectionTitle>
        <ParagraphText>
          <RenderHTML htmlString={t("storedProgramMachines.description")} />
        </ParagraphText>
        <Figure>
          <ImageContainer
            src={images.eniac.src}
            alt={images.eniac.alt}
            caption={t("storedProgramMachines.eniac_description")}
          />
          <ImageContainer
            src={images.modernComputer.src}
            alt={images.modernComputer.alt}
            caption={t("storedProgramMachines.modern_computer_description")}
          />
          <ImageContainer
            src={images.specialPurposeComputer.src}
            alt={images.specialPurposeComputer.alt}
            caption={t("storedProgramMachines.special_purpose_computer_description")}
          />
        </Figure>
      </Section>


    <Section id="digital-representation">
      <SectionTitle>{t("digitalRepresentation.title")}</SectionTitle>
      <ParagraphText>
          <RenderHTML htmlString={t("digitalRepresentation.description")} />
      </ParagraphText>
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
