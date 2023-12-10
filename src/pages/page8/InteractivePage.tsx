import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@common/eBook/EBook";
import { Ol, Section, SectionTitle, Text, DraggableContainerGrid, H3, Pre } from "@common/eBook/content";
import { InlineDivs, MaxWidthContainer } from "@/components/common/eBook/layout/layout";
import { useState } from "react";
import problemListData from './problems.json';
import containerData from './containers.json';
import ProblemComponent from "./ProblemComponent";
// import AssemblyTasksComponent from "@/pages/page8/AssemblyTaskComponent";

// Define a TypeScript interface for a problem
interface Problem {
    title?: string;
    code?: string | string[];
    text?: string;
    link?: string;
}

const Page8 = () => {
  interface ContainerStates {
      container1Visible: boolean;
      container2Visible: boolean;
  }

  useDocumentMetadata('Interactive Page', "This is the eighth page");

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
  
  return (
    <EBookPage currentPage={8}>
      
          <SectionTitle>
              Exercises
          </SectionTitle>
      <div className="hidden lg:block">
          <Text>
              The aim of the following two exercises is to code in assembler the pseudo-coded algorithms on the left.
              Organize the corresponding assembler instructions on the right in the correct order, by dragging them around.
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
                  <MaxWidthContainer>
                      {containerStates.container1Visible && <DraggableContainerGrid initialContainers={container1Solved} />}
                      <button
                          className='text-gray-200 hover:text-gray-800 bg-green-700 hover:bg-green-400 border-2 border-gray-50 py-2 px-5 rounded'
                          onClick={() => toggleContainer('container1Visible')}
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

      <div className="hidden lg:block">
          <Section>
              <InlineDivs>
                  <MaxWidthContainer>
                      <DraggableContainerGrid initialContainers={container2} />
                  </MaxWidthContainer>
                  <MaxWidthContainer>
                      {containerStates.container2Visible && <DraggableContainerGrid initialContainers={container2Solved} />}
                      <button
                          className='text-gray-200 hover:text-gray-800 bg-green-700 border-2 border-gray-50 hover:bg-green-400 py-2 px-5 rounded'
                          onClick={() => toggleContainer('container2Visible')}
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
              Perform the following tasks:
          </H3>
          <Ol className="bg-gray-100 dark:bg-gray-700 py-4 rounded-xl">
              <li>
                  Describe the difference between numeric and direct addressing.
              </li>
              <li>
                  Describe the data transmitted on the data, address and control buses, respectively, 
                  during the execution of the instructions LOD #5, and LOD 5.
              </li>
              <li>
                  Identify the binary code of the assembler instruction MUL 5.
              </li>
              <li>
                  Identify the mnemonic instruction corresponding to the machine language instruction 00010011.
              </li>
          </Ol>
      </Section>

      <Section>
        <H3>Develop suitable programs in assembly code, to solve the following problems (please remember that any label needs to be defined
              in the leftmost column of the RAM before it can be used in any instruction):</H3>
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