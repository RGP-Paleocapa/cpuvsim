import useFirebaseAuth from '@hooks/useFireAuth';
import useSessionTimeout from './hooks/useSessionTimeout';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import AppRoutes from './routes/Routes';
import ScrollToTopButton from '@/components/utils/ScrollToTopButton';
import ScrollToTop from '@/components/utils/ScrollToTop';
import './i18n';
import './trusted-security-policies'
import { useResetScrollOnRouteChange } from './context/useScrollState';
import { useEffect, useRef } from 'react';
import { incrementVisitCount } from './services/visitTracker';
import { useGeoLocation } from './hooks/usegGeoLocation';
import GDPRConsentBanner from './components/features/GDPRConsentBanner';

const App = () => {
  useFirebaseAuth(); // Custom hook to manage auth state
  useSessionTimeout(1_800_000); // 30 minutes session timeout
  useResetScrollOnRouteChange();

  const { location } = useGeoLocation();
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (location && !hasIncremented.current) {
      incrementVisitCount(location.country, location.continent);
      hasIncremented.current = true;
    }
  }, [location]);

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
        <GDPRConsentBanner />
      </div>
  );
};

export default App;
