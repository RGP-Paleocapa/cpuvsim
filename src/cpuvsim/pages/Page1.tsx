import useDocumentMetadata from '../components/UseDocumentMetadata';
import PageSwitch from '../components/HeaderPageSwitch';

const Page1: React.FC = () => {

  useDocumentMetadata('Page 1 - My App', 'This is the first page.');

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <PageSwitch previousPage='cpuvsim/page1' nextPage='cpuvsim/page2'/>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 text-gray-800 dark:text-white">
        Page 1
      </h1>
      <PageSwitch previousPage='cpuvsim' nextPage='cpuvsim/page2'/>
    </div>
  );
};

export default Page1;
