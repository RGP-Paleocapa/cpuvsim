import EBookPage from "@/components/features/eBook/EBook";
import { Description, SectionTitle, Text, Ul, Table, Li } from "@/components/features/eBook/content";
import images from "@assets/images/pages/page5";
import { YourImageComponent } from "@/components/features/eBook/images";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButton";
import { Section } from "@/components/features/eBook/layout/layout";
import { useTranslation } from "react-i18next";
import RenderHTML from "@/components/common/RenderHTML";
import { useFooterStore } from "@/context/useFooterStore";

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
          <Text>
              <RenderHTML htmlString={t("instructionSetSection.description")} />
          </Text>
          <div className="mt-6 xl:mx-40">
              <Table headerTitles={["Binary code", "Mnemonic code", "Description"]} bodyRows={bodyRows} />
          </div>
      </Section>

        <Section>
          <Text>
            <RenderHTML htmlString={t("instructionSection.text1")} />
            <br /><br />
            <RenderHTML htmlString={t("instructionSection.text2")} />
          </Text>
          <Ul className="dark:text-gray-200">
            <Li>
              <RenderHTML htmlString={t("instructionSection.addressingModes.immediate")} />
            </Li>
            <Li>
              <RenderHTML htmlString={t("instructionSection.addressingModes.direct")} />
            </Li>
          </Ul>
          <YourImageComponent image={images}/>
          <Description>
            <RenderHTML htmlString={t("instructionSection.description")} />
          </Description>
          <Text>
            <RenderHTML htmlString={t("instructionSection.text3")} />
          </Text>
              <Ul className="dark:text-gray-200">
                <Li>
                  <RenderHTML htmlString={t("instructionSection.operationsSection.dataFlow.title")} />
                  <SmoothScrollButton targetId={"footer"} buttonText={"[1]"} />
                </Li>
                <Li>
                  <RenderHTML htmlString={t("instructionSection.operationsSection.controlFlow.title")} /><SmoothScrollButton targetId={"footer"} buttonText={"[2]"} />
                </Li>
                <Li>
                  <RenderHTML htmlString={t("instructionSection.operationsSection.arithmeticLogic.title")} /><SmoothScrollButton targetId={"footer"} buttonText={"[3]"} />
                </Li>
              </Ul>
        </Section>

        <Section>
          <Text>
            <RenderHTML htmlString={t("tableSection.text")} />
          </Text>
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