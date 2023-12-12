import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/common/eBook/EBook";
import { ImageSlider } from "@common/eBook/images";
import images from "@assets/images/pages/page1";
// import Refrences from "@common/eBook/Refrences";
import { Figure, Section } from "@/components/common/eBook/layout/layout";
import { SectionTitle, Description, Text } from "@common/eBook/content";
import { useFooter } from "@/context/FooterContext";
import { useEffect } from "react";
import data from './data.json';
import SmoothScrollButton from "@/components/common/SmoothScrollButtonProps";

const Page1 = () => {
  useDocumentMetadata('ComputersAsGeneralPurpose', "This is the first page");
  const { setFooterData } = useFooter();
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
  

  return (
    <EBookPage currentPage={1} >
      <Section>
        <SectionTitle>Computers as General-Purpose Machines</SectionTitle>
        <Text>
          We are all familiar with widely popular <b>“general-purpose”</b> computers such as desktops,
          laptops, or tablets. Yet, modern mobile phones or gaming consoles are computers too,
          and even disparate devices such as digital cameras, audio players, watches, TV sets,
          washing machines, cars, drones, or even modern clothes and shoes,
          <SmoothScrollButton targetId="footer" buttonText="[1, 2, 3, 4]" />
          all embed computers that are instrumental to support their functionalities.
        </Text>
      </Section>

      <Section> 
        <SectionTitle>Examples of Computers</SectionTitle>
        <br />
        <ImageSlider images={imageArray} />
      </Section>

      <Section>
        <SectionTitle>Computers' Common Generic Architecture</SectionTitle>
        <Text>
          Despite the huge varieties of computers,
          every single one of them shares a very similar architecture,
          and is made out of a physical part (<b>hardware</b>),
          as well as applications consisting of series of instructions (<b>software</b>).
          <br />
          The main objective of the architecture is to identify the main components and define <b>how</b> they interact with each other.
          <br />
          At the macroscopic level, this generic architecture can be schematized as in the following diagrams.
        </Text>

        <div className="flex flex-wrap justify-center lg:justify-evenly items-center py-8 sm:gap-y-8">
          <img src={images.architecture1.src} alt={images.architecture1.alt} className="w-auto h-[300px] object-contain mb-4 sm:mb-0" />
          <img src={images.architecture2.src} alt={images.architecture2.alt} className="w-auto h-[300px] object-contain" />
        </div>

        <div>
          <Text>
            The core component of any computer is the so-called Central Processing Unit (CPU).
            The CPU reads and executes instructions fetched one by one from primary (or central, or main) memory,
            processing the data in input and producing data in output. The input data could come, for example,
            from a keyboard or from a sensor detecting the level of oxygen in the blood of a patient. The output data,
            for example, could display a picture on a monitor or control the amount of gasoline injected in the engine of a car.
            <br />
            <br />
            Two key reasons have made it possible to use the same architecture for such a wide variety of contexts:
            the concept of
            <SmoothScrollButton targetId="stored-program-machines" buttonText="stored program machines" />
            and the
            <SmoothScrollButton targetId="digital-representation" buttonText="digital representation" />
            of the information.
          </Text>
        </div>
      </Section>

      <Section id="stored-program-machines">
        <SectionTitle>Stored Program Machines</SectionTitle>
        <Text>
          Indeed, before the advent of the modern computer, machines able to carry out computations were already available. Yet <b>each machine was custom-built for a single, specific purpose</b>. A stored program computer, on the contrary, <b>is a machine that stores program instructions in memory</b>. By changing the programs in its memory, the same machine can perform totally different functions.
          <br />
          Modern memories are electronic, magnetic, or optical devices; in the past, program instructions were stored in plugboards or similar mechanisms.
        </Text>
        <Figure>
          <div>
            <img src={images.eniac.src} alt={images.eniac.alt} className="2xl:ml-[20px] w-[400px] h-[300px]" />
            <Description>
            The ENIAC was the first computing system, designed in the early 1940s, based on a primitive concept of a Stored Program Computer. Here the instructions, or programs, were stored as a combination of paper cards, plug-board wirings, and mechanical switches.
            </Description>
          </div>
          <div>
            <img src={images.modernComputer.src} alt={images.modernComputer.alt} className="2xl:ml-[20px] w-[400px] h-[300px]" />
              <Description>
                An example of a modern stored-program machine is the personal computer. In these devices, it is possible to easily install/uninstall and execute different applications, in order to support the most disparate functions.
              </Description>
            
          </div>
          <div>
            <img src={images.specialPurposeComputer.src} alt={images.specialPurposeComputer.src} className="2xl:ml-[20px] w-[400px] h-[300px]" />
            <Description>
                “Special-purpose computers” are computers that have fixed, preinstalled programs, hence predefined supported functions (e.g., medical appliances, calculators, traffic lights...). Yet, they have the same standard architecture as the other type of computers.
            </Description>
          </div>
        </Figure>
      </Section>

      <Section id="digital-representation">
        <SectionTitle>Digital (Uniform) Representation of Information</SectionTitle>
        <Text>
          The second reason that made it possible to use the same architecture in many different contexts and applications is the possibility to <b>represent and process different types of information</b>, not only numbers, but also text, audio, images, videos…, uniformly as digits, as discussed in the next session.
        </Text>
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
      {/* <Refrences references={references}/> */}
    </EBookPage>
  );
}

export default Page1;