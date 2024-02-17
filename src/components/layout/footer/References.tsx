import { Ol, Ul } from "@/components/features/eBook/content";
import { useFooterStore, FooterItem } from "@/context/useFooterStore";
import { useTranslation } from "react-i18next";

const References = () => {
  const { footerData } = useFooterStore();
  const { t } = useTranslation();

  const renderSubReferences = (subReferences: FooterItem[], parentIndex: number) => (
      <Ul>
          {subReferences.map((subItem, subIndex) => (
              <li key={`${parentIndex}-${subIndex}`}>
                  <a href={subItem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-inherit dark:hover:text-inherit transition duration-300">
                      {subItem.text}
                  </a>
              </li>
          ))}
      </Ul>
  );

  if (footerData.length === 0) return null;

  return (
      <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-lg mb-2">{t("footer.links.refrences")}:</h2>
          <Ol className="mx-20">
              {footerData.map((item, index) => (
                  <li key={`${item.text}-${index}`}>
                      {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-inherit dark:hover:text-inherit transition duration-300 block p-2">
                              {item.text}
                          </a>
                      ) : (
                          <span>{item.text}</span>
                      )}
                      {item.subReferences && renderSubReferences(item.subReferences, index)}
                  </li>
              ))}
          </Ol>
      </div>
  );
}

export default References;
