import { useFooterStore } from "@/context/useFooterStore";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  useDocumentMetadata('About - CPU E-Book', 'Learn more about our mission and vision.');
  const { setFooterData } = useFooterStore();

  useEffect(() => {
    setFooterData([
      { text: 'Cortinovis , R. and Rajan, R. (2022). Evaluating and improving the Educational CPU Visual Simulator: a sustainable Open Pedagogy approach. Proceedings of the 33rd Annual Workshop of the Psychology of Programming Interest Group, 189-196', link: 'https://www.ppig.org/papers/2022-ppig-33rd-cortinovis/' },
    ]);
  }, [setFooterData]);

  const { t } = useTranslation("about");

  
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 font-bold text-gray-800 dark:text-white">
        {t("title")}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
        {t("subtitle")}
      </p>

      {/* Content Section */}
      <div className="text-lg text-gray-600 dark:text-gray-400 space-y-4">
        <p className="text-justify">
          {t("content")}
        </p>
      </div>

      {/* Prompt and Button for Feedback */}
      <div className="hidden justify-center text-center mt-8 dark:text-gray-400">
        <div className="text-center dark:text-gray-400 border-4 max-w-xl p-4 rounded-xl">
          <p className="mb-4">Do you want to share your thoughts?</p>
          <Link to="/feedback/submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-red-800 dark:hover:bg-red-700">Send Feedback</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
