// AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './cpuvsim/components/Home';
import About from './cpuvsim/components/About';
import Page1 from './cpuvsim/pages/Page1';
import Page2 from './cpuvsim/pages/Page2';

const AppRoutes = () => {
    const root = "/cpuvsim";
    const pages = `${root}/pages`;

    return (
        <Routes>
            <Route path={root} element={<Home />} />
            <Route path={`${root}/components/about`} element={<About />} />
            {/* Pages */}
            <Route path={`${pages}/page1`} element={<Page1 />} />
            <Route path={`${pages}/page2`} element={<Page2 />} />
        </Routes>
    );
}

export default AppRoutes;
