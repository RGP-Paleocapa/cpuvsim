import { Routes, Route } from 'react-router-dom';
import Home from '@/cpuvsim/components/layout/Home';
import About from '@/cpuvsim/components/layout/About';
import { NotFound, Maintenance } from '@components/errors/Errors';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9 } from '@pages/pages';

const AppRoutes = () => {
    const root = "/cpuvsim"; // Specify the base path
    // const pages = `${root}/pages`; // Create a variable for pages

    return (
        <Routes>
            {/* Static */}
            <Route path={`${root}`} element={<Home />} />
            <Route path={`${root}/about`} element={<About />} />



            {/* Pages */}
            <Route path={`${root}/page1`} element={<Page1 />} />
            <Route path={`${root}/page2`} element={<Page2 />} />
            <Route path={`${root}/page3`} element={<Page3 />} />
            <Route path={`${root}/page4`} element={<Page4 />} />
            <Route path={`${root}/page5`} element={<Page5 />} />
            <Route path={`${root}/page6`} element={<Page6 />} />
            <Route path={`${root}/page7`} element={<Page7 />} />
            <Route path={`${root}/page8`} element={<Page8 />} />
            <Route path={`${root}/page9`} element={<Page9 />} />



            {/* Errors */}
            <Route path={`${root}/*`} element={<NotFound />} />
            <Route path={`${root}/maintenance`} element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
