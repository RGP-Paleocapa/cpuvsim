import EBookPage from "@/components/features/eBook/EBook";
import { Table } from "@/components/features/eBook/content";
import images from "@assets/images/pages/page5";
import { YourImageComponent } from "@/components/features/eBook/images";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";
import { Section } from "@/components/features/eBook/layout";
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
import { useFooterStore } from "@/context/useFooterStore";
import { SectionTitle, Description, ListItem, UnorderedList, ParagraphText } from "@/components/features/eBook/typography";

const Page5 = () => {
  useDocumentMetadata('CPU Instructions Set', "This is the fifth page");
  const { setFooterData } = useFooterStore();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  const references = data.const_references;
  const bodyRows = data.bodyRows;
  const dataFlowRows = data.dataFlowRows;
  const controlFlowRows = data.controlFlowRows;
  const arithmeticLogicRows = data.arithmeticLogicRows;
  const { t } = useTranslation("page5");

  return (
    <EBookPage currentPage={5}>
        <Section>
          <SectionTitle>
              <RenderHTML htmlString={t("instructionSetSection.title")} />
          </SectionTitle>
          <ParagraphText>
              <RenderHTML htmlString={t("instructionSetSection.description")} />
          </ParagraphText>
          <div className="mt-6 xl:mx-40">
              <Table headerTitles={["Binary code", "Mnemonic code", "Description"]} bodyRows={bodyRows} />
          </div>
      </Section>

        <Section>
          <ParagraphText>
            <RenderHTML htmlString={t("instructionSection.text1")} />
            <br /><br />
            <RenderHTML htmlString={t("instructionSection.text2")} />
          </ParagraphText>
          <UnorderedList className="dark:text-gray-200">
            <ListItem>
              <RenderHTML htmlString={t("instructionSection.addressingModes.immediate")} />
            </ListItem>
            <ListItem>
              <RenderHTML htmlString={t("instructionSection.addressingModes.direct")} />
            </ListItem>
          </UnorderedList>
          <YourImageComponent image={images}/>
          <Description>
            <RenderHTML htmlString={t("instructionSection.description")} />
          </Description>
          <ParagraphText>
            <RenderHTML htmlString={t("instructionSection.text3")} />
          </ParagraphText>
              <UnorderedList className="dark:text-gray-200">
                <ListItem>
                  <RenderHTML htmlString={t("instructionSection.operationsSection.dataFlow.title")} />
                  <SmoothScrollButton targetId={"footer"} buttonText={"[1]"} />
                </ListItem>
                <ListItem>
                  <RenderHTML htmlString={t("instructionSection.operationsSection.controlFlow.title")} /><SmoothScrollButton targetId={"footer"} buttonText={"[2]"} />
                </ListItem>
                <ListItem>
                  <RenderHTML htmlString={t("instructionSection.operationsSection.arithmeticLogic.title")} /><SmoothScrollButton targetId={"footer"} buttonText={"[3]"} />
                </ListItem>
              </UnorderedList>
        </Section>

        <Section>
          <ParagraphText>
            <RenderHTML htmlString={t("tableSection.text")} />
          </ParagraphText>
          <div className="mt-6 xl:mx-40">
            <Table headerTitles={["Data Flow"]} bodyRows={dataFlowRows} />
            <Table headerTitles={["Control Flow"]} bodyRows={controlFlowRows} />
            <Table headerTitles={["Arithmetic-logic"]} bodyRows={arithmeticLogicRows} />
          </div>
        </Section>
    </EBookPage>
  );
}

export default Page5;
