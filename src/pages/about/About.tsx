import { useFooter } from "@/context/FooterContext";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";

const About = () => {
  useDocumentMetadata('About - CPU E-Book', 'Learn more about our mission and vision.');
  const { setFooterData } = useFooter();

  useEffect(() => {
    setFooterData([
      { text: 'Cortinovis , R. and Rajan, R. (2022). Evaluating and improving the Educational CPU Visual Simulator: a sustainable Open Pedagogy approach. Proceedings of the 33rd Annual Workshop of the Psychology of Programming Interest Group, 189-196', link: 'https://www.ppig.org/papers/2022-ppig-33rd-cortinovis/' },
    ]);
  }, [setFooterData]);

  
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 font-bold text-gray-800 dark:text-white">
        About Us
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
        Discover the story behind our platform and what drives us.
      </p>

      {/* Image Section */}
      {/* <div className="flex justify-center mb-8">
        <img
          src="/your-about-image.jpg" // Replace with the path to your about image
          alt="About Us"
          className="max-w-full h-auto rounded-lg shadow-lg"
          style={{ maxWidth: '600px' }} // Set a maximum width for the image
        />
      </div> */}

      {/* Content Section */}
      <div className="text-lg text-gray-600 dark:text-gray-400 space-y-4">
        <p>
          This e-book and the associated CPUVSIM software have been developed by students for students,
          as a multiple-years OER-enabled pedagogy project integrated in their more conventional educational activities.
          This strategy aims to reduce the deplorable waste of resources associated with “disposable” traditional assignments, 
          demonstrating the feasibility of a self-sustainable process where students fully engage in iteratively improving and extending open resources,
          developing their professionality while benefiting the commons. These activities,
          carried out in the context of Computing for Social Good, aim to preparing the next generation of computer scientists,
          armed not only with coding skills but also with the power to wield technology for the betterment of society.
        </p>
        <p>
          This e-book, along with the accompanying CPUVSIM software,
          has been created by students for students as part of a multi-year OER-enabled pedagogy project integrated into their traditional educational activities.
          This approach seeks to address the unfortunate waste of resources associated with "disposable" traditional assignments.
          Instead, it demonstrates the feasibility of a self-sustainable process where students actively participate in iteratively improving and extending open resources.
          Through this, they develop their professionalism while contributing to the common good.
          These activities, conducted within the framework of Computing for Social Good,
          aim to prepare the next generation of computer scientists:
          not just equipped with coding skills but also empowered to wield technology for the betterment of society.
        </p>
      </div>
    </div>
  );
}

export default About;
