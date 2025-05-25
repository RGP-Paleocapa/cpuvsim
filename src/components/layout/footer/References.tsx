import { OrderedList, UnorderedList } from "@/components/features/eBook/typography";
import { useFooterStore, FooterItem } from "@/context/useFooterStore";
import { useTranslation } from "react-i18next";

const References = () => {
  const { footerData } = useFooterStore();
  const { t } = useTranslation();

  const renderSubReferences = (subReferences: FooterItem[], parentIndex: number) => (
      <UnorderedList>
          {subReferences.map((subItem, subIndex) => (
              <li key={`${parentIndex}-${subIndex}`}>
                  <a href={subItem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-inherit dark:hover:text-inherit transition duration-300">
                      {subItem.text}
                  </a>
              </li>
          ))}
      </UnorderedList>
  );

  if (footerData.length === 0) return null;

  return (
      <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-lg mb-2">{t("footer.links.refrences")}:</h2>
          <OrderedList className="mx-20">
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
          </OrderedList>
      </div>
  );
}

export default References;
