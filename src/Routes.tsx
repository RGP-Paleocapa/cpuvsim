import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './cpuvsim/components/Home';
import About from './cpuvsim/components/About';
import Page1 from './cpuvsim/pages/Page1';
import NotFound from './cpuvsim/components/errors/404';
import Maintenance from './cpuvsim/components/Maintenance';

const AppRoutes = () => {
    const root = "/cpuvsim";
    // const pages = `${root}/pages`;

    return (
        <Routes>
            <Route path={root} element={<Home />} />
            <Route path={`${root}/about`} element={<About />} />
            {/* Pages */}
            <Route path={`${root}/page1`} element={<Page1 />} />
            <Route path={`${root}/page2`} element={<Navigate to={`${root}/maintenance`} />} />
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<NotFound />} />
            {/* Maintenance page */}
            <Route path={`${root}/maintenance`} element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
