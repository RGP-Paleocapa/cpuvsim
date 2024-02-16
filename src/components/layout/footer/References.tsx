import { Ol, Ul } from "@/components/features/eBook/content";
import { useFooterStore, FooterItem } from "@/context/useFooterStore";
import { useTranslation } from "react-i18next";

const References = () => {
    const { footerData } = useFooterStore();
    const { t } = useTranslation();

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
          <h2 className="font-bold text-lg mb-2">{t("footer.links.refrences")}:</h2>
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
