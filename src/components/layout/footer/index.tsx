import Legal from './Legal';
import Authors from './Authors';
import References from './References';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative bg-white dark:bg-slate-800 text-black dark:text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col md:flex-row justify-center md:items-start items-center gap-y-10 md:gap-x-8">
          <References />
          <Authors />
        </section>
        <Legal />
      </div>
    </footer>
  );
};

export default Footer;
