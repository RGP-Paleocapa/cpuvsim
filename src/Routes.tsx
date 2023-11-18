import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '@/cpuvsim/components/layout/Home';
import About from '@/cpuvsim/components/layout/About';
import { NotFound, Maintenance } from '@components/errors/Errors';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9 } from '@pages/pages';

const AppRoutes = () => {
  // Define the base path for your routes
  const basePath = '/cpuvsim';

  return (
    <Routes>
      {/* Static */}
      <Route path={`${basePath}/`} element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Pages */}
      <Route path={`${basePath}/page1`} element={<Page1 />} />
      <Route path={`${basePath}/page2`} element={<Page2 />} />
      <Route path={`${basePath}/page3`} element={<Page3 />} />
      <Route path={`${basePath}/page4`} element={<Page4 />} />
      <Route path={`${basePath}/page5`} element={<Page5 />} />
      <Route path={`${basePath}/page6`} element={<Page6 />} />
      <Route path={`${basePath}/page7`} element={<Page7 />} />
      <Route path={`${basePath}/page8`} element={<Page8 />} />
      <Route path={`${basePath}/page9`} element={<Page9 />} />

      {/* Errors */}
      <Route path={`${basePath}/*`} element={<NotFound />} />
      <Route path={`${basePath}/maintenance`} element={<Maintenance />} />
    </Routes>
  );
}

export default AppRoutes;
