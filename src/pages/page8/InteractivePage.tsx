import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@common/eBook/EBook";
import { Ol, Section, SectionTitle, Text, DraggableContainerGrid, H3 } from "@common/eBook/content";
import { InlineDivs, MaxWidthContainer } from "@common/eBook/layout";
import { useState } from "react";
import problemListData from './problems.json';
import containerData from './containers.json';
// import AssemblyTasksComponent from "@/pages/page8/AssemblyTaskComponent";



// Define a TypeScript interface for a problem
interface Problem {
    title?: string;
    code?: string;
    text?: string;
    link?: string;
    hasButton?: boolean; // Add a hasButton property
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
            <Section>
                <SectionTitle>
                    Exercises
                </SectionTitle>
                <Text>
                    The aim of the following two exercises is to code in assembler the pseudo-coded algorithms on the left.
                    Organize the corresponding assembler instructions on the right in the correct order, by dragging them around.
                </Text>
            </Section>

            <div className="hidden lg:block">
                <Section>
                    <InlineDivs>
                        <MaxWidthContainer>
                            {containerStates.container1Visible && <DraggableContainerGrid initialContainers={container1Solved} />}
                            <button
                                className='text-black bg-green-300 py-2 px-5 rounded'
                                onClick={() => toggleContainer('container1Visible')}
                            >
                                Show Solution
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
                            <DraggableContainerGrid initialContainers={container2} />
                        </MaxWidthContainer>
                        <MaxWidthContainer>
                            {containerStates.container2Visible && <DraggableContainerGrid initialContainers={container2Solved} />}
                            <button
                                className='text-black bg-green-300 py-2 px-5 rounded'
                                onClick={() => toggleContainer('container2Visible')}
                            >
                                Show Solution
                            </button>
                        </MaxWidthContainer>
                    </InlineDivs>
                </Section>
            </div>

            <Section>
                <H3>
                    Perform the following tasks (please remember that any label needs to be defined
                    in the leftmost column of the RAM before it can be used in any instruction):
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
  <H3>Develop suitable programs in assembly code, to solve the following problems:</H3>
  <div className="flex flex-wrap">
    {problemList.map((problem, index) => (
      <div key={index} className="w-full p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start">
          <div className="w-3/4"> {/* Adjust the width as needed */}
            {(problem.text || problem.code) && (
              <Ol start={index + 1} className="dark:text-white max-w-full">
                {problem.text && <li>{problem.text}</li>}
                {problem.code && (
                  <li>
                    <strong>{problem.title}</strong>
                    <code>{problem.code}</code>
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
                className="bg-blue-500 dark:bg-blue-800 text-white ml-2 px-2 py-1 rounded max-w-sm"
              >
                Go to Link
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