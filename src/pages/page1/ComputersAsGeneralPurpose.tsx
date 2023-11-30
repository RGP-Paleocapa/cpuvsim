import useDocumentMetadata from "@hooks/useDocumentMetadata";
import EBookPage from "@/components/common/eBook/EBook";
import { ImageSlider } from "@common/eBook/images";
import images from "@assets/images/pages/page1";
import Refrences from "@common/eBook/Refrences";
import { Figure } from "@common/eBook/layout";
import { Section, SectionTitle, Description, Text } from "@common/eBook/content";

const Page1 = () => {
  useDocumentMetadata('ComputersAsGeneralPurpose', "This is the first page");
  const imageArray = Object.values(images).slice(0, 6);
  const gridData = [
    {
      bgColor: 'bg-amber-800/75',
      texts: ['C 01000011', 'a 01100001', 't 01110100'],
      description: 'In a computer, a sequence of binary digits can represent a sequence of characters. For instance, the above code may represent the word "Cat".'
    },
    {
      bgColor: 'bg-gray-500',
      texts: ['01000011', '01100001', '01110100'],
      description: 'The same sequence may also represents the 3 numbers "67, 97, 116", or "4.415.860" if considered as a single 24-bit number.'
    },
    {
      bgColor: 'bg-green-900',
      texts: ['01000011', '01100001', '01110100'],
      description: 'In a different context, the same sequence again may represent the above dark shade of blue. Indeed, by considering 67, 97 and 116 as the levels of red, green and blue intensity, these digits represent a color.'
    },
  ]
  const references = [
    {
      text: 'Stored program concept',
      link: 'https://www.javatpoint.com/store-program-control-concept',
    },
    {
      text: 'E-ACTIVE BODY CONTROL suspension system',
      link: '', // Add the link to the main page here
      subReferences: [
        {
          text: 'Video',
          link: 'https://www.youtube.com/watch?v=_sBcHG6HOlw',
        },
        {
          text: 'Wiki',
          link: 'https://en.wikipedia.org/wiki/Active_suspension',
        },
      ],
    },
    {
      text: 'Clothes and shoes as computers',
      link: '', // Add the link to the main page here
      subReferences: [
        {
          text: 'Article 1',
          link: 'https://dl.acm.org/doi/10.1145/2971763.2971784',
        },
        {
          text: 'Article 2',
          link: 'https://www.wired.co.uk/article/smart-shoe-football-analytics-cebit-2017',
        },
        {
          text: 'Video',
          link: 'https://www.youtube.com/watch?v=4_h0sBCiLNo',
        },
        {
          text: 'Connected clothes',
          link: 'https://blog.technavio.com/blog/smart-connected-clothes-fashion-technology',
        },
      ],
    },
  ];      

  return (
    <EBookPage currentPage={1} >
      <Section>
        <SectionTitle>Computers as General-Purpose Machines</SectionTitle>
        <Text>
          We are all familiar with widely popular <b>“general-purpose”</b> computers such as desktops, laptops, or tablets. Yet, modern mobile phones or gaming consoles are computers too, and even disparate devices such as digital cameras, audio players, watches, TV sets, washing machines, cars, drones, or even modern clothes and shoes, all embed computers that are instrumental to support their functionalities.
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
          Despite the huge varieties of computers, every single one of them shares a very similar architecture, and is made out of a physical part (<b>hardware</b>), as well as applications consisting of series of instructions (<b>software</b>).
          <br />
          The main objective of the architecture is to identify the main components and define <b>how</b> they interact with each other.
          <br />
          At the macroscopic level, this generic architecture can be schematized as in the following diagrams.
        </Text>

        <div className="flex flex-wrap justify-center lg:justify-evenly items-center py-8 sm:gap-y-8">
          <img src={images.architecture1.src} alt={images.architecture1.alt} className="w-auto h-64 object-contain mb-4 sm:mb-0" />
          <img src={images.architecture2.src} alt={images.architecture2.alt} className="w-auto h-64 object-contain" />
        </div>

        <div>
          <Text>
            The core component of any computer is the so-called Central Processing Unit (CPU). The CPU reads and executes instructions fetched one by one from primary (or central, or main) memory, processing the data in input and producing data in output. The input data could come, for example, from a keyboard or from a sensor detecting the level of oxygen in the blood of a patient. The output data, for example, could display a picture on a monitor or control the amount of gasoline injected in the engine of a car.
            <br />
            <br />
            Two key reasons have made it possible to use the same architecture for such a wide variety of contexts: the concept of <b>stored program machine</b> and the <b>digital representation</b> of the information.
          </Text>
        </div>
      </Section>

      <Section>
        <SectionTitle>Stored Program Machines</SectionTitle>
        <Text>
          Indeed, before the advent of the modern computer, machines able to carry out computations were already available. Yet <b>each machine was custom-built for a single, specific purpose</b>. A stored program computer, on the contrary, <b>is a machine that stores program instructions in memory</b>. By changing the programs in its memory, the same machine can perform totally different functions.
          <br />
          Modern memories are electronic, magnetic, or optical devices; in the past, program instructions were stored in plugboards or similar mechanisms.
        </Text>
        <Figure>
          <div>
            <img src={images.eniac.src} alt={images.eniac.alt} className="w-full h-96" />
            <Description>
            The ENIAC was the first computing system, designed in the early 1940s, based on a primitive concept of a Stored Program Computer. Here the instructions, or programs, were stored as a combination of paper cards, plug-board wirings, and mechanical switches.
            </Description>
          </div>
          <div>
            <img src={images.modernComputer.src} alt={images.modernComputer.alt} className="w-full h-96" />
              <Description>
                An example of a modern stored-program machine is the personal computer. In these devices, it is possible to easily install/uninstall and execute different applications, in order to support the most disparate functions.
              </Description>
            
          </div>
          <div>
            <img src={images.specialPurposeComputer.src} alt={images.specialPurposeComputer.src} className="w-full h-96" />
            <Description>
                “Special-purpose computers” are computers that have fixed, preinstalled programs, hence predefined supported functions (e.g., medical appliances, calculators, traffic lights...). Yet, they have the same standard architecture as the other type of computers.
            </Description>
          </div>
        </Figure>
      </Section>

      <Section>
        <SectionTitle>Digital (Uniform) Representation of Information</SectionTitle>
        <Text>
          The second reason that made it possible to use the same architecture in many different contexts and applications is the possibility to <b>represent and process different types of information</b>, not only numbers, but also text, audio, images, videos…, uniformly as digits, as discussed in the next session.
        </Text>
        <Figure>
          {gridData.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-start h-full px-4">
              <div className={`${item.bgColor} flex flex-col items-center justify-center w-48 h-48 p-4`}>
                {item.texts.map((text, textIndex) => (
                  <p key={textIndex} className="text-center text-gray-200 text-lg">{text}</p>
                ))}
              </div>
              <div>
                <Description>{item.description}</Description>
              </div>
            </div>
          ))}
        </Figure>
      </Section>
      <Refrences references={references}/>
    </EBookPage>
  );
}

export default Page1;