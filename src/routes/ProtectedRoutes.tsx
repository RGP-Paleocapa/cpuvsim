import React, { ComponentType } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
    const adminToken = Cookies.get('token');
    return adminToken === 'demoAdmin' ? <Component /> : <Navigate to="/maintenance" />;
};

export default ProtectedRoute;
