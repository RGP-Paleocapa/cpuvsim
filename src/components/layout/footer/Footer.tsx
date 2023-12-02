import { useFooter } from '@/context/FooterContext';
import { FooterItem } from '@/types/footerTypes';
import { Ol, Ul } from '../../common/eBook/content';
import Legal from './Legal';
import Authors from './Authors';

const Footer: React.FC = () => {
  const { footerData } = useFooter(); // footerData is an array of FooterItem

  // Function to render sub references, if any
  const renderSubReferences = (subReferences: FooterItem[]) => (
    <Ul>
      {subReferences.map((subItem, subIndex) => (
        <li key={subIndex}>
          <a href={subItem.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
            {subItem.text}
          </a>
        </li>
      ))}
    </Ul>
  );

  return (
    <footer id="footer" className="bg-white dark:bg-slate-800 text-black dark:text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-y-4 md:gap-x-8">
          {/* Dynamic References with possible sub-references */}
          <div className="flex flex-col items-center">
            {footerData.length > 0 && (
              <h4 className="font-bold text-lg mb-2">References and Helpful Links:</h4>
            )}
            {footerData.length > 0 && (
              <Ol>
                {footerData.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <a
                        href={item.link}
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

          {/* Authors */}
          <Authors />
        </div>

        {/* Copyright and Creative Commons License */}
        <Legal />
      </div>
    </footer>
  );
};

export default Footer;
