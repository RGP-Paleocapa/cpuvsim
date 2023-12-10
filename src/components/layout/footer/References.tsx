import { Ol, Ul } from "@/components/common/eBook/content";
import { useFooter } from "@/context/FooterContext";
import { FooterItem } from "@/types/footerTypes";

const References = () => {
    const { footerData } = useFooter();

    // Function to render sub references, if any
    const renderSubReferences = (subReferences: FooterItem[]) => (
        <Ul>
        {subReferences.map((subItem, subIndex) => (
            <li key={subIndex}>
            <a href={subItem.link} target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                {subItem.text}
            </a>
            </li>
        ))}
        </Ul>
    );

    return (
        <div className="flex flex-col items-center md:items-start">
            {footerData.length > 0 && (
              <h2 className="font-bold text-lg mb-2">References and Helpful Links:</h2>
            )}
            {footerData.length > 0 && (
              <Ol className="mx-20">
                {footerData.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
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