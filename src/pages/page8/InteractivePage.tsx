import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@common/eBook/EBook";
import { Ol, Section, SectionTitle, Text, DraggableContainerGrid, H3 } from "@common/eBook/content";
import { InlineDivs, MaxWidthContainer } from "@/components/common/eBook/layout/layout";
import { useState } from "react";
import problemListData from './problems.json';
import containerData from './containers.json';
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
                  <MaxWidthContainer>
                      <Text>
                          IF-THEN example:
                          <br /><br />
                          IF X==3 <br />
                              THEN Y:=5 <br />
                          ENDIF <br />
                          HLT <br /><br />
                      </Text>
                      <DraggableContainerGrid initialContainers={container1} />
                  </MaxWidthContainer>
              </InlineDivs>
          </Section>
      </div>

      <div className="hidden lg:block">
          <Section>
              <InlineDivs>
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
                  <MaxWidthContainer>
                      <DraggableContainerGrid initialContainers={container2} />
                  </MaxWidthContainer>
              </InlineDivs>
          </Section>
      </div>

      <Section>
          <H3>
              Perform the following tasks:
          </H3>
          <Ol>
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
        <div className="flex flex-wrap">
          {problemList.map((problem, index) => (
            <div key={index} className="w-full p-4 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="w-3/4">
                  {(problem.text || problem.code) && (
                    <Ol start={index + 1} className="dark:text-white max-w-full">
                      {problem.text && <li>{problem.text}</li>}
                      {Array.isArray(problem.code) && ( // Check if problem.code is an array
                        <li>
                          <strong>{problem.title}</strong>
                          <pre>{problem.code.join('\n')}</pre>
                        </li>
                      )}
                    </Ol>
                  )}
                </div>
                <div className="w-1/4 mt-2 md:mt-0">
                  {problem.link ? (
                    <a
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 dark:bg-blue-800 hover:bg-gray-100 dark:hover:bg-blue-100 border-2 border-blue-500 dark:border-blue-800  text-white hover:text-blue-500 dark:hover:text-blue-800 ml-2 px-3 py-1 rounded max-w-sm"
                    >
                      Solution
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </EBookPage>
  );  
}

export default Page8;