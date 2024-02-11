import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
    component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
    const adminToken = Cookies.get('token');
    return adminToken === 'demoAdmin' ? <Component /> : <Navigate to="/maintenance" />;
};

export default ProtectedRoute;
