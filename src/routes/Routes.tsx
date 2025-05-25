import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import GuestRoute from './GuestRoute';
import { FullPageLoader } from '@/components/utils/loading';
import { withBoundary } from '@/components/utils/withBoundary';

// Reverted from `delayedLazy` to `React.lazy` for simplicity.
// If needed, delayedLazy can be reintroduced for testing UI delays or staggered UX.
const Home = React.lazy(() => import('@/pages/home/Home'));
const About = React.lazy(() => import('@/pages/about/About'));
const Login = React.lazy(() => import('@/pages/auth/login'));
const Signup = React.lazy(() => import('@/pages/auth/signUp'));
const ForgotPassword = React.lazy(() => import('@/pages/auth/forgot-password'));
const Page1 = React.lazy(() => import('@/pages/ebooks/page1/ComputersAsGeneralPurpose'));
const Page2 = React.lazy(() => import('@/pages/ebooks/page2/SimpleBinaryCalculations'));
const Page3 = React.lazy(() => import('@/pages/ebooks/page3/VonNeumannModel'));
const Page4 = React.lazy(() => import('@/pages/ebooks/page4/CPUFundamentalFetchDecodeExecute'));
const Page5 = React.lazy(() => import('@/pages/ebooks/page5/CPUInstructionSet'));
const Page6 = React.lazy(() => import('@/pages/ebooks/page6/AssemblyAndHighLevelLanguages'));
const Page7 = React.lazy(() => import('@/pages/ebooks/page7/TranslationOfHighLevelLanguage'));
const Page8 = React.lazy(() => import('@/pages/ebooks/page8/InteractivePage'));
const SubmitFeedback = React.lazy(() => import('@/pages/feedback/submitFeedback/SubmitFeedback'));
const ReadFeedback = React.lazy(() => import('@/pages/feedback/readFeedback/ReadFeedback'));
const Maintenance = React.lazy(() => import('@/pages/errors/maintenance'));
const NotFound = React.lazy(() => import('@/pages/errors/notFound'));

const wrap = (
  lazyComponent: React.LazyExoticComponent<(React.ComponentType)>,
  loader?: React.ReactNode
): JSX.Element => {
  const Wrapped = withBoundary(lazyComponent, { loader });
  return <Wrapped />;
}

const AppRoutes = () => {
  return (
    <Routes>
      {/* Static / Main */}
      <Route path="/" element={wrap(Home, <FullPageLoader />)} />
      <Route path="/about" element={wrap(About, <FullPageLoader />)} />

      {/* Auth */}
      <Route path="/auth/login" element={<GuestRoute component={() => wrap(Login, <FullPageLoader />)} />} />
      <Route path="/auth/signup" element={<GuestRoute component={() => wrap(Signup, <FullPageLoader />)} />} />
      <Route path="/auth/forgot-password" element={wrap(ForgotPassword, <FullPageLoader />)} />

      {/* eBook Pages */}
      <Route path="/page1" element={wrap(Page1, <FullPageLoader />)} />
      <Route path="/page2" element={wrap(Page2, <FullPageLoader />)} />
      <Route path="/page3" element={wrap(Page3, <FullPageLoader />)} />
      <Route path="/page4" element={wrap(Page4, <FullPageLoader />)} />
      <Route path="/page5" element={wrap(Page5, <FullPageLoader />)} />
      <Route path="/page6" element={wrap(Page6, <FullPageLoader />)} />
      <Route path="/page7" element={wrap(Page7, <FullPageLoader />)} />
      <Route path="/page8" element={wrap(Page8, <FullPageLoader />)} />

      {/* Feedback (Protected) */}
      <Route path="/feedback/submit" element={<ProtectedRoute component={() => wrap(SubmitFeedback, <FullPageLoader />)} />} />
      <Route path="/feedback" element={<ProtectedRoute component={() => wrap(ReadFeedback, <FullPageLoader />)} />} />

      {/* Error Routes */}
      <Route path="/maintenance" element={wrap(Maintenance)} />
      <Route path="/*" element={wrap(NotFound)} />
    </Routes>
  );
};

export default AppRoutes;
