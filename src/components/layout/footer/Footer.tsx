import Legal from './Legal';
import Authors from './Authors';
import References from './References';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-white dark:bg-slate-800 text-black dark:text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-y-10 md:gap-x-8">
          {/* Dynamic References with possible sub-references */}
          <References />
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
