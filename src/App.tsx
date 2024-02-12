// import './App.css'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import AppRoutes from './routes/Routes'
import ScrollToTopButton from '@/components/utils/ScrollToTopButton'
import ScrollToTop from '@/components/utils/ScrollToTop'
import { FooterProvider } from './context/FooterContext'
import './i18n';
import { useEffect } from 'react'
import useAuthStore from './context/useAuthStore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import useSessionTimeout from './hooks/useSessionTimeout'

const App = () => {
  const { setUser, clearUser } = useAuthStore();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, update the Zustand store
        setUser({ email: user.email });
      } else {
        // No user is signed in, clear the Zustand store
        clearUser();
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [setUser, clearUser]);

  useSessionTimeout(180000);

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
  )
}

export default App
