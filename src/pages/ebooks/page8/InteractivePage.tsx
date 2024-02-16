import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/features/eBook/EBook";
import { Ol, SectionTitle, Text, DraggableContainerGrid, H3, Pre, Li } from "@/components/features/eBook/content";
import { Section, InlineDivs, MaxWidthContainer } from "@/components/features/eBook/layout/layout";
import { useEffect, useState } from "react";
import problemListData from './problems.json';
import containerData from './containers.json';
import ProblemComponent from "./ProblemComponent";
import { useTranslation } from "react-i18next";
import { useFooterStore } from "@/context/useFooterStore";
// import AssemblyTasksComponent from "@/pages/page8/AssemblyTaskComponent";

// Define a TypeScript interface for a problem
interface Problem {
    title?: string;
    code?: string | string[];
    text?: string;
    link?: string;
}
interface ContainerStates {
    container1Visible: boolean;
    container2Visible: boolean;
}

const Page8 = () => {
  useDocumentMetadata('Interactive Page', "This is the eighth page");
  const { setFooterData } = useFooterStore();
  useEffect(() => {
    setFooterData([]);
  }, [setFooterData]);

  const [containerStates, setContainerStates] = useState<ContainerStates>({
      container1Visible: false,
      container2Visible: false,
      // Add more container visibility states as needed
    });
  
    const toggleContainer = (containerKey: keyof ContainerStates) => {
      setContainerStates((prevState) => ({
        ...prevState,
        [containerKey]: !prevState[containerKey],
      }));
    };
  
  const container1 = containerData.container1;
  const container1Solved = containerData.container1Solved;
  const container2 = containerData.container2;
  const container2Solved = containerData.container2Solved;
  const problemList: Problem[] = problemListData;

  const code = [
    "IF-THEN example:\n\n",
    "IF X==3\n",
    "   THEN\n",
    "   Y:=5\n",
    "ENDIF\n",
    "HLT\n"
  ]

  const { t } = useTranslation("page8");
  
  return (
    <EBookPage currentPage={8}>
        <Section>
            <SectionTitle>
                {t("exercisesSectionTitle")}
            </SectionTitle>
            <div className="hidden lg:block">
                <Text>
                    {t("exercisesSectionText")}
                </Text>
            </div>

            <div className="hidden lg:block">
                <Section>
                    <InlineDivs>
                        <MaxWidthContainer>
                            <Pre content={code} />
                            <br />
                            <DraggableContainerGrid initialContainers={container1} />
                        </MaxWidthContainer>
                        <MaxWidthContainer classname="flex flex-col items-center">
                            {containerStates.container1Visible && <DraggableContainerGrid initialContainers={container1Solved} />}
                            <button
                                className="text-gray-100 hover:text-gray-800 bg-green-700 hover:bg-green-300 border-2 border-gray-700 py-2 px-5 rounded"
                                onClick={() => toggleContainer('container1Visible')}
                                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                                >
                                {containerStates.container1Visible ? (
                                    <p>Hide Solution</p>
                                    ) : (
                                        <p>Show Solution</p>
                                        )}
                            </button>
                        </MaxWidthContainer>
                    </InlineDivs>
                </Section>
            </div>
        </Section>

      <div className="hidden lg:block">
          <Section>
              <InlineDivs>
                  <MaxWidthContainer>
                      <DraggableContainerGrid initialContainers={container2} />
                  </MaxWidthContainer>
                  <MaxWidthContainer classname="flex flex-col items-center">
                      {containerStates.container2Visible && <DraggableContainerGrid initialContainers={container2Solved} />}
                      <button
                        className="text-gray-100 hover:text-gray-800 bg-green-700 hover:bg-green-300 border-2 border-gray-700 py-2 px-5 rounded"
                        onClick={() => toggleContainer('container2Visible')}
                        style={{ transition: 'background-color 0.3s, color 0.3s' }}
                        >
                        {containerStates.container2Visible ? (
                            <p>Hide Solution</p>
                        ) : (
                            <p>Show Solution</p>
                        )}
                        </button>
                  </MaxWidthContainer>
              </InlineDivs>
          </Section>
      </div>

      <Section>
            <H3>
                {t("tasksSectionTitle")}
            </H3>
            <Ol className="bg-gray-100 dark:bg-gray-700 py-4 rounded-xl">
                <Li margin0>
                    {t("task1")}
                </Li>
                <Li margin0>
                    {t("task2")}
                </Li>
                <Li margin0>
                    {t("task3")}
                </Li>
                <Li margin0>
                    {t("task4")}
                </Li>
            </Ol>
        </Section>

        <Section>
            <H3>
                {t("assemblyProblemsSectionTitle")}
            </H3>
            <div className="flex flex-wrap bg-gray-100 dark:bg-gray-700 rounded-xl">
                {problemList.map((problem, index) => (
                    <ProblemComponent key={index} problem={problem} index={index} />
                ))}
            </div>
        </Section>
    </EBookPage>
  );  
}

export default Page8;