import { Routes, Route } from 'react-router-dom';
import Home from '@/cpuvsim/components/layout/Home';
import About from '@/cpuvsim/components/layout/About';
import { NotFound, Maintenance } from '@components/errors/Errors';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9 } from '@pages/pages';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Static */}
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />

            {/* Pages */}
            <Route path={`${process.env.PUBLIC_URL}/page1`} element={<Page1 />} />
            <Route path={`${process.env.PUBLIC_URL}/page2`} element={<Page2 />} />
            <Route path={`${process.env.PUBLIC_URL}/page3`} element={<Page3 />} />
            <Route path={`${process.env.PUBLIC_URL}/page4`} element={<Page4 />} />
            <Route path={`${process.env.PUBLIC_URL}/page5`} element={<Page5 />} />
            <Route path={`${process.env.PUBLIC_URL}/page6`} element={<Page6 />} />
            <Route path={`${process.env.PUBLIC_URL}/page7`} element={<Page7 />} />
            <Route path={`${process.env.PUBLIC_URL}/page8`} element={<Page8 />} />
            <Route path={`${process.env.PUBLIC_URL}/page9`} element={<Page9 />} />

            {/* Errors */}
            <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />
            <Route path={`${process.env.PUBLIC_URL}/maintenance`} element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
