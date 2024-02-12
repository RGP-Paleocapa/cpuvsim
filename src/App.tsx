import { useEffect } from 'react';
import useAuthStore from './context/useAuthStore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useSessionTimeout from './hooks/useSessionTimeout';

// Import UI components
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import AppRoutes from './routes/Routes';
import ScrollToTopButton from '@/components/utils/ScrollToTopButton';
import ScrollToTop from '@/components/utils/ScrollToTop';
import { FooterProvider } from './context/FooterContext';
import './i18n';

const App = () => {
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // If Firebase user exists, sync with Zustand
        setUser({ email: firebaseUser.email });
      } else {
        // If Firebase user does not exist, clear Zustand
        clearUser();
      }
    });
  }, [setUser, clearUser]);

    useSessionTimeout(1_800_000); // 30 minutes

  // Always call useSessionTimeout but let it decide internally to act or not
  // useSessionTimeout(180000, !!user); // Pass a second argument to indicate if the user is logged in

  return (
    <FooterProvider>
      <div className='bg-slate-100 dark:bg-slate-900 min-h-screen pt-16'>
        <Header />
        <div className="container mx-auto py-8 px-4 sm:px-6 md:px-0">
          <ScrollToTop />
          <AppRoutes />
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </FooterProvider>
  );
};

export default App;
