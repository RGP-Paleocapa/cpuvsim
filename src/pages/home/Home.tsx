import useDocumentMetadata from '@hooks/useDocumentMetadata';
import { useEffect } from 'react';
import { useFooter } from '@/context/FooterContext';

const Home = () => {
  const { setFooterData } = useFooter();
  useEffect(() => {
    console.log("Updating footer data from Home");
    setFooterData([
      { text: 'Cortinovis, R. (2021). An educational CPU Visual Simulator, Proceedings of the 32nd Annual Workshop of the Psychology of Programming Interest Group (PPIG).', link: 'https://ppig.org/files/2021-PPIG-32nd-DC-cortinovis.pdf' },
    ]);
  }, [setFooterData]); // Dependencies array ensures this runs only when setFooterData changes

  useDocumentMetadata('HomePage', 'This is the main page.');

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 mt-10 lg:mt-16 text-gray-800 dark:text-white">
        A gentle introduction to the Central Processing Unit and Assembly language
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
        Based on (and in support of) the complementary Educational CPU Visual Simulator (CPUVSIM)
      </p>

      <hr className="flex flex-col my-4 md:my-16 border-t border-gray-300 dark:border-gray-700" />

      <div className="flex-grow px-4">
        <p className="home-discovery-text">
          This e-book aims to illustrate the basics of how a computer works,
          focusing on how a program written in a high-level language ends up being physically executed on a Central Processing Unit (CPU).
          The e-book is intended to be used in the context of an introductory computer science course at high school or undergraduate level.
        </p>
        <p className="home-discovery-text">
          The e-book starts with a concise explanation of the fundamental architecture shared by a wide variety of modern "computers",
          such as desktop computers, mobile phones or car control units.
          This is followed by an explanation of the essential elements of the structure of any CPU,
          and the machine (assembly) language that it can execute.
        </p>
        <p className="home-discovery-text">
          This e-book is built around the Educational CPU Visual Simulator (CPUVSIM) shown on the left,
          which you can access through the 'Simulator' button in the top right corner.
          The e-book is a dynamic document because the simulator is seamlessly integrated with the proposed exercises: by clicking on the
          'Show solution' buttons, the CPUVSIM comes to life, loading the solution for the specific exercise into memory.
          This allows you to experiment directly with the programming exercises presented in the book.
        </p>
        <p className="home-discovery-text">
          The associated CPUVSIM allows users to visualize with detailed animations the execution of assembly language code.
          Its main goal is to support novices in understanding the behavior of the key components of a CPU,
          focusing on how code written in high-level languages is actually executed on the hardware of a computer.
          <br />
          It supports a simplified but representative assembly language of 16 (Data Transfer, Control Flow, Arithmetic-Logic) instructions,
          with immediate and direct addressing modalities. Instructions and numeric data can be inserted and edited directly in RAM.
          It is possible to define “labels” to be used as parameters in jump instructions, or as variable identifiers.
          The speed and level of details of the animations can be controlled by the users. At any time,
          it is possible to switch between symbolic and binary representations.
        </p>
      </div>
    </div>
  );
}

export default Home;
