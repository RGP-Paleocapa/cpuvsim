import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '@/components/utils/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/utils/ErrorFallback';
import ProtectedRoute from './ProtectedRoutes';
import GuestRoute from './GuestRoute';

// Lazy-loaded pages
const Home = lazy(() => import('@/pages/home/Home'));
const About = lazy(() => import('@/pages/about/About'));
const Login = lazy(() => import('@/pages/auth/login'));
const Signup = lazy(() => import('@/pages/auth/signUp'));
const ForgotPassword = lazy(() => import('@/pages/auth/forgot-password'));
const Page1 = lazy(() => import('@/pages/ebooks/page1/ComputersAsGeneralPurpose'));
const Page2 = lazy(() => import('@/pages/ebooks/page2/SimpleBinaryCalculations'));
const Page3 = lazy(() => import('@/pages/ebooks/page3/VonNeumannModel'));
const Page4 = lazy(() => import('@/pages/ebooks/page4/CPUFundamentalFetchDecodeExecute'));
const Page5 = lazy(() => import('@/pages/ebooks/page5/CPUInstructionSet'));
const Page6 = lazy(() => import('@/pages/ebooks/page6/AssemblyAndHighLevelLanguages'));
const Page7 = lazy(() => import('@/pages/ebooks/page7/TranslationOfHighLevelLanguage'));
const Page8 = lazy(() => import('@/pages/ebooks/page8/InteractivePage'));
const SubmitFeedback = lazy(() => import('@/pages/feedback/submitFeedback/SubmitFeedback'));
const ReadFeedback = lazy(() => import('@/pages/feedback/readFeedback/ReadFeedback'));
const Maintenance = lazy(() => import('@/pages/errors/maintenance'));
const NotFound = lazy(() => import('@/pages/errors//notFound'));

// ErrorBoundary + Suspense wrapper
const withBoundary = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Static / Main */}
      <Route path="/" element={withBoundary(Home)} />
      <Route path="/about" element={withBoundary(About)} />

      {/* Auth */}
      <Route path="/auth/login" element={<GuestRoute component={() => withBoundary(Login)} />} />
      <Route path="/auth/signup" element={<GuestRoute component={() => withBoundary(Signup)} />} />
      <Route path="/auth/forgot-password" element={withBoundary(ForgotPassword)} />

      {/* Pages */}
      <Route path="/page1" element={withBoundary(Page1)} />
      <Route path="/page2" element={withBoundary(Page2)} />
      <Route path="/page3" element={withBoundary(Page3)} />
      <Route path="/page4" element={withBoundary(Page4)} />
      <Route path="/page5" element={withBoundary(Page5)} />
      <Route path="/page6" element={withBoundary(Page6)} />
      <Route path="/page7" element={withBoundary(Page7)} />
      <Route path="/page8" element={withBoundary(Page8)} />

      {/* Feedback (Protected) */}
      <Route
        path="/feedback/submit"
        element={<ProtectedRoute component={() => withBoundary(SubmitFeedback)} />}
      />
      <Route
        path="/feedback"
        element={<ProtectedRoute component={() => withBoundary(ReadFeedback)} />}
      />

      {/* Error Routes */}
      <Route path="/maintenance" element={withBoundary(Maintenance)} />
      <Route path="/*" element={withBoundary(NotFound)} />
    </Routes>
  );
};

export default AppRoutes;
