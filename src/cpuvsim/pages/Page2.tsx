import { useTranslation } from 'react-i18next';
import useDocumentMetadata from '../components/UseDocumentMetadata';
import PageSwitch from '../components/HeaderPageSwitch';

const Page2: React.FC = () => {
  useDocumentMetadata('Page 2 - My App', 'This is the second page.');
  const { t } = useTranslation('page2'); // Use 'page2' namespace

  return (
    <div className='dark:text-white text-black'>
      {/* <PageSwitch previousPage='cpuvsim/page1' nextPage='cpuvsim/page2'/> */}
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <PageSwitch previousPage='cpuvsim/page1' nextPage='cpuvsim/page2'/>
    </div>
  );
};

export default Page2;
