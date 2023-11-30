import EBookPage from "@common/eBook/EBook";
import { Description, Section, SectionTitle, Text, Ul, Table } from "@common/eBook/content";
import images from "@assets/images/pages/page5";
import { YourImageComponent } from "@common/eBook/images";
import References from "@common/eBook/Refrences";
import useDocumentMetadata from "@hooks/useDocumentMetadata";

const Page5 = () => {
  useDocumentMetadata('CPU Instructions Set', "This is the fifth page");
  const references = [
    {
      text: 'Instruction set by Computer Hope (23/10/2021)',
      link: 'https://www.computerhope.com/jargon/i/instset.htm',
    },
    {
      text: 'Instruction Sets: Characteristics and Functions (Download PDF)',
      link: 'https://faculty.tarleton.edu/agapie/documents/cs_343_arch/10_Instruction_Sets_characteristics2.pdf',
    },
    {
      text: 'Data flow operations',
      link: 'https://en.wikipedia.org/wiki/Instruction_set_architecture#Data_handling_and_memory_operations',
    },
    {
      text: 'Control flow operations',
      link: 'https://en.wikipedia.org/wiki/Control_flow',
    },
    {
      text: 'Arithmetic-logic operations',
      link: 'https://en.wikipedia.org/wiki/Arithmetic_logic_unit#Arithmetic_operations',
    },
  ];
  const bodyRows = [
    ["00000001 | 00001000", "ADD 8", "Add content of memory cell number 8 into the Accumulator"],
    ["00010001 | 00001000", "ADD #8", "Add number 8 into the Accumulator"],
    ["00000001 | 00001000", "ADD Y", "Add content of memory cell tagged as Y into the Accumulator"],
    ];
  const dataFlowRows = [
    ["LOD X", "00000101", "Load content of Memory Location X (or number #X) into the Accumulator."],
    ["LOD #X", "00010101", "Load content of Memory Location X (or number #X) into the Accumulator."],
    ["STO Y", "00000110", "Store the value of the Accumulator into Memory Location Y."],
  ];
  const controlFlowRows = [
    ["JMP P", "00001101", "Unconditional jump to the instruction at location P."],
    ["JZ P", "00001110", "Jump on Zero: if Flag Z is set, go to instruction number P, otherwise go to the next instruction."],
    ["JNZ P", "00001100", "Jump on Not Zero: if Flag Z is cleared, go to instruction number P, otherwise, go to the next instruction."],
    ["JN P", "00000111", "Jump on Negative: if Flag N is set, go to instruction number P, otherwise go to the next instruction."],
    ["JNN P", "00001000", "Jump on Not Negative: if Flag N is cleared, go to instruction number P, otherwise go to the next instruction."],
    ["NOP", "00000000", "No operation, go to next instruction."],
    ["HLT", "00001111", "Halt execution."],
  ];
  const arithmeticLogicRows = [
    ["ADD X", "00000001", "Add content of Memory Location X (or number #X) to the Accumulator. Flags are updated."],
    ["ADD #X", "00010001", "Add content of Memory Location X (or number #X) to the Accumulator. Flags are updated."],
    ["SUB X", "00000010", "Subtract content of Memory Location X (or number #X) from the Accumulator. Flags are updated."],
    ["SUB #X", "00010010", "Subtract content of Memory Location X (or number #X) from the Accumulator. Flags are updated."],
    ["MUL X", "00000011", "Multiply the Accumulator by the content of Memory Location X (or number #X). Flags are updated."],
    ["MUL #X", "00010011", "Multiply the Accumulator by the content of Memory Location X (or number #X). Flags are updated."],
    ["DIV X", "00000100", "Divide the Accumulator by the content of Memory Location X (or number #X). Flags are updated."],
    ["DIV #X", "00010100", "Divide the Accumulator by the content of Memory Location X (or number #X). Flags are updated."],
    ["AND X", "00001001", "Bitwise AND between the Accumulator and the content of Memory Location X (or number #X). Flags are updated."],
    ["AND #X", "00011001", "Bitwise AND between the Accumulator and the content of Memory Location X (or number #X). Flags are updated."],
    ["NOT X", "00001010", "Bitwise NOT of the content of Memory Location X (or number #X). The result is stored in the Accumulator."],
    ["NOT #X", "00011010", "Bitwise NOT of the content of Memory Location X (or number #X). The result is stored in the Accumulator."],
    ["CMP X", "00001011", "Subtract content of Memory Location X (or number #X) from the Accumulator. Flags are updated, but the content of the Accumulator is not modified."],
    ["CMP #X", "00011011", "Subtract content of Memory Location X (or number #X) from the Accumulator. Flags are updated, but the content of the Accumulator is not modified."],
  ];      

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
                  <strong>Data flow operations</strong>: instructions used to  transfer (store) the contents of a CPU register, or the result of a computation to the primary memory, or to transfer (load) data stored in the primary memory to the CPU, in order to perform a computation on it later.
                </li>
                <br />
                <li>
                  <strong>Control flow operations</strong>: instructions that modify the order in which individual instructions are executed (instruction are otherwise executed in sequential order, one after the other). 
                </li>
                <br />
                <li>
                  <strong>Arithmetic-logic operations</strong>: instructions that perform arithmetic (addition, subtraction...) and logic operations (and, not...).
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
      <References references={references} />
    </EBookPage>
  );
}

export default Page5;