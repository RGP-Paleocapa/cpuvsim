import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
    component: ComponentType;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
    const isAuthenticated = Boolean(Cookies.get('adminAuthToken'));

    // Check if the provided token matches the secure admin token
    return isAuthenticated ? <Component /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;
