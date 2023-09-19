// AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Page1 from './pages/Page1';
import Home from './components/Home';
import Page2 from './pages/Page2';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Pages */}
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    );
}

export default AppRoutes;
