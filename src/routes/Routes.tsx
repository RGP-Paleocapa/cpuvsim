import { Routes, Route } from 'react-router-dom';
import { NotFound, Maintenance } from '@/components/errors';
import { Home, About, Admin, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10 } from '@/pages';
import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Static / Main */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />

            {/* Pages */}
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
            <Route path="/page8" element={<Page8 />} />
            <Route path="/page9" element={<ProtectedRoute component={Page9} />} />
            <Route path="/page10" element={<ProtectedRoute component={Page10} />} />

            {/* Errors */}
            <Route path="/*" element={<NotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
