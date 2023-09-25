import { Routes, Route } from 'react-router-dom';
import Home from './cpuvsim/components/static/Home';
import About from './cpuvsim/components/static/About';
import Page1 from './cpuvsim/pages/Page1';
import NotFound from './cpuvsim/components/errors/404';
import Maintenance from './cpuvsim/components/errors/Maintenance';
import Page2 from './cpuvsim/pages/Page2';

const AppRoutes = () => {
    const root = "/cpuvsim"; // Specify the base path
    // const pages = `${root}/pages`; // Create a variable for pages

    return (
        <Routes>
            <Route path={`${root}`} element={<Home />} />
            <Route path={`${root}/about`} element={<About />} />
            {/* Pages */}
            <Route path={`${root}/page1`} element={<Page1 />} />
            <Route path={`${root}/page2`} element={<Page2 />} />
            {/* Catch-all route for 404 errors */}
            <Route path={`${root}/*`} element={<NotFound />} />
            {/* Maintenance page */}
            <Route path={`${root}/maintenance`} element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
