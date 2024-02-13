import { Routes, Route } from 'react-router-dom';
import { Home, About, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, SubmitFeedback, ReadFeedback, Login, Signup, ForgotPassword } from '@/pages';
import ProtectedRoute from './ProtectedRoutes';
import { Maintenance, NotFound } from '@/pages/errors';
import GuestRoute from './GuestRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Static / Main */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/auth/login" element={<GuestRoute component={Login} />} />
            <Route path="/auth/signup" element={<GuestRoute component={Signup} />} />
            <Route path="/auth/forgot-password" element={<GuestRoute component={ForgotPassword} />} />
            

            {/* Pages */}
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
            <Route path="/page8" element={<Page8 />} />
            <Route path="/page8" element={<Page8 />} />
            {/* <Route path="/page9" element={<ProtectedRoute component={Page9} />} />
            <Route path="/page10" element={<ProtectedRoute component={Page10} />} />
            <Route path="/page11" element={<ProtectedRoute component={AxiosPage} />} />
            <Route path="/page12" element={<ProtectedRoute component={Page12} />} /> */}
            <Route path="/feedback/submit" element={<ProtectedRoute component={SubmitFeedback} />} />
            <Route path="/feedback/read" element={<ProtectedRoute component={ReadFeedback} />} />

            {/* Errors */}
            <Route path="/*" element={<NotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;
