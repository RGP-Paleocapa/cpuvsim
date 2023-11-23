import { Routes, Route } from 'react-router-dom';
// import Cookies from 'js-cookie';
import Home from '@components/layout/Home';
import About from '@components/layout/About';
import { NotFound, Maintenance } from '@errors/Errors';
// import Admin from '@pages/Admin';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7 } from '@pages/pages';

const AppRoutes = () => {
    // const adminToken = Cookies.get('token'); // Retrieve the token from cookies

    return (
        <Routes>
            {/* Static */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/admin" element={<Admin />} /> */}

            {/* Pages */}
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
            {/* <Route 
                path="/page8" 
                element={adminToken === 'admin' ? <Page8 /> : <Maintenance />} 
            /> */}

            {/* Redirect to Maintenance */}
            <Route path="/page9" element={<Maintenance />} />
            <Route path="/page10" element={<Maintenance />} />

            {/* Errors */}
            <Route path="/*" element={<NotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
