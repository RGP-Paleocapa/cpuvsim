import EBookPage from "@common/eBook/EBook";
import { Description, Section, SectionTitle, Text, Ul, Table } from "@common/eBook/content";
import images from "@assets/images/pages/page5";
import { YourImageComponent } from "@common/eBook/images";
// import References from "@common/eBook/Refrences";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButtonProps";

const Page5 = () => {
  useDocumentMetadata('CPU Instructions Set', "This is the fifth page");
  const { setFooterData } = useFooter();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  const references = data.const_references;
  const bodyRows = data.bodyRows;
  const dataFlowRows = data.dataFlowRows;
  const controlFlowRows = data.controlFlowRows;
  const arithmeticLogicRows = data.arithmeticLogicRows;    

  return (
    <EBookPage currentPage={5}>
        <Section>
          <SectionTitle>
            The CPU Instruction Set
          </SectionTitle>
          <Text>
            The instruction set of a given CPU, also called Instruction Set Architecture (ISA), is the  collection of instructions which that specific CPU can recognize and execute. Each instruction is a command to instruct the CPU to perform a certain elementary operation. It can be specified as Machine code (Binary/Hex) or Assembly code (Mnemonic equivalent of binary instructions).
            <br /><br />
            Here are some examples from the simulator: 
          </Text>
          <div className="mt-6 xl:mx-40">
            <Table headerTitles={["Binary code", "Mnemonic code", "Description"]} bodyRows={bodyRows} />
          </div>
        </Section>

        <Section>
          <Text>
            The <b className="text-blue-700">digits or text in blue</b> represent the <strong>Operation Code (opcode)</strong>: a binary number which represents the operation to perform. A binary number is naturally interpreted by a CPU, yet it is difficult to remember for a human. Hence, programmers can use its <strong>mnemonic (assembly)</strong> equivalent code to identify the desired operation, such as "LOD", "ADD", and "STO".
            <br /><br />
            The <b className="text-red-600">digits or text in red</b> represent the operand(s) of the instruction. The operand has different interpretations according to the so-called addressing mode (which is also specified in the opcode). In the case of the simulator, the available addressing modes are:
          </Text>
          <Ul className="dark:text-gray-200">
            <li>
              <strong>Immediate</strong> (or <strong>numeric</strong>) addressing, as in ADD #8:  in this case the operand is a number (add the number 8)
            </li>
            <li>
              <strong>Direct</strong> addressing, as in ADD 8: in this case the operand represents a memory address (add the number stored at the memory address 8). Rather than using directly numeric memory addresses, it is more convenient for humans to associate them with meaningful labels, such as Y or COUNTER. Hence a memory address can be more easily identified by a label, as in ADD Y. Important notice: the labels do not physically exist in the CPU or in memory, because they are  translated to the corresponding numerical addresses by the assembler, which can parse the whole assembly program offline. Yet, as the simulator translates the instructions one by one "on the fly", it is necessary first to <strong>define the labels</strong> by entering them in the grayed column, <strong>before</strong> they can be used in any instruction. 
            </li>
          </Ul>
            <YourImageComponent image={images}/>
          <Description>
            Try it yourself: run the simulator and write some instructions. You can swap from Mnemonic (Assembly) to Binary code just by clicking the Symbolic/Binary button.
          </Description>
          <Text>
              The instructions supported by a CPU can be organized in a few fundamental categories. The most important ones are:
          </Text>
              <Ul className="dark:text-gray-200">
                <li>
                  <strong>Data flow operations</strong>: instructions used to  transfer (store) the contents of a CPU register,
                  or the result of a computation to the primary memory,
                  or to transfer (load) data stored in the primary memory to the CPU,
                  in order to perform a computation on it later.
                  <SmoothScrollButton targetId={"footer"} buttonText={"[1]"} />
                </li>
                <br />
                <li>
                  <strong>Control flow operations</strong>:
                  instructions that modify the order in which individual instructions are executed (instruction are otherwise executed in sequential order,
                  one after the other).
                  in order to perform a computation on it later.
                  <SmoothScrollButton targetId={"footer"} buttonText={"[2]"} />
                </li>
                <br />
                <li>
                  <strong>Arithmetic-logic operations</strong>:
                  instructions that perform arithmetic (addition, subtraction...)
                  and logic operations (and, not...).
                  in order to perform a computation on it later. <SmoothScrollButton targetId={"footer"} buttonText={"[3]"} />
                </li>
              </Ul>
        </Section>

        <Section>
          <Text>
            The following table reports the full set of instructions supported by the simulator, organized according to the above mentioned categories. For each instruction are reported: the opcode binary code in machine language, its assembly (mnemonic) equivalent, and a short informal description.
          </Text>
          <div className="mt-6 xl:mx-40">
            <Table headerTitles={["Data Flow"]} bodyRows={dataFlowRows} />
            <Table headerTitles={["Control Flow"]} bodyRows={controlFlowRows} />
            <Table headerTitles={["Arithmetic-logic"]} bodyRows={arithmeticLogicRows} />
          </div>
        </Section>
      {/* <References references={references} /> */}
    </EBookPage>
  );
}

export default Page5;