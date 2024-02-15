import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '@/context/useAuthStore'; // Ensure the import path is correct

// Define the type for the props
interface GuestRouteProps {
  component: React.ElementType;
  // Add any additional props here if needed, such as path or exact
}

const GuestRoute: React.FC<GuestRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthStore();

  // If authenticated, navigate to the root. Otherwise, render the given component.
  return isAuthenticated ? <Navigate to="/feedback" /> : <Component {...rest} />;
};

export default GuestRoute;
