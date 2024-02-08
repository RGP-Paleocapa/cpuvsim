import { useFooter } from "@/context/FooterContext";
import useDocumentMetadata from "@hooks/useDocumentMetadata";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  useDocumentMetadata('About - CPU E-Book', 'Learn more about our mission and vision.');
  const { setFooterData } = useFooter();

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
    </div>
  );
}

export default About;
