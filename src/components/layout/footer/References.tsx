import { Ol, Ul } from "@/components/common/eBook/content";
import { useFooter } from "@/context/FooterContext";
import { FooterItem } from "@/types/footerTypes";
<<<<<<< HEAD

const References = () => {
    const { footerData } = useFooter();
=======
import { useTranslation } from "react-i18next";

const References = () => {
    const { footerData } = useFooter();
    const { t } = useTranslation();
>>>>>>> source-repo/main

    // Function to render sub references, if any
    const renderSubReferences = (subReferences: FooterItem[]) => (
        <Ul>
        {subReferences.map((subItem, subIndex) => (
            <li key={subIndex}>
            <a href={subItem.link} target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-inherit dark:hover:text-inherit transition duration-300">
                {subItem.text}
            </a>
            </li>
        ))}
        </Ul>
    );

    return (
      <div className="flex flex-col items-center md:items-start">
        {footerData.length > 0 && (
<<<<<<< HEAD
          <h2 className="font-bold text-lg mb-2">References and Helpful Links:</h2>
=======
          <h2 className="font-bold text-lg mb-2">{t("footer.links.refrences")}:</h2>
>>>>>>> source-repo/main
        )}
        {footerData.length > 0 && (
          <Ol className="mx-20">
            {footerData.map((item, index) => (
              <li key={index} className="mb-3">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:text-inherit dark:hover:text-inherit transition duration-300 block p-2"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
                {/* Check for subReferences and render them */}
                {item.subReferences && renderSubReferences(item.subReferences)}
              </li>
            ))}
          </Ol>
        )}
      </div>
    );
}

export default References;