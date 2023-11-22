import { Routes, Route } from 'react-router-dom';
import Home from '@components/layout/Home';
import About from '@components/layout/About';
import { NotFound, Maintenance } from '@components/errors/Errors';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7 } from '@pages/pages';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Static */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Pages */}
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />

            {/* Redirect to Maintenance */}
            <Route path="/page8" element={<Maintenance />} />
            <Route path="/page9" element={<Maintenance />} />
            <Route path="/page10" element={<Maintenance />} />

            {/* Errors */}
            <Route path="/*" element={<NotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
