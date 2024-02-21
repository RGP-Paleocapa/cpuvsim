import useFirebaseAuth from '@hooks/useFireAuth'; // Adjust path as necessary
import useSessionTimeout from './hooks/useSessionTimeout';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import AppRoutes from './routes/Routes';
import ScrollToTopButton from '@/components/utils/ScrollToTopButton';
import ScrollToTop from '@/components/utils/ScrollToTop';
import './i18n';
import './trusted-security-policies'
import { useResetScrollOnRouteChange } from './context/useScrollState';

const App = () => {
  useFirebaseAuth(); // Custom hook to manage auth state
  useSessionTimeout(1_800_000); // 30 minutes session timeout
  useResetScrollOnRouteChange();

  return (
      <div className='bg-slate-100 dark:bg-slate-900 min-h-screen pt-16'>
        <Header />
        <div className="container mx-auto py-8 px-4 sm:px-6 md:px-0">
          {/* Istant scroll to top */}
          <ScrollToTop />
          <AppRoutes />
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
  );
};

export default App;
