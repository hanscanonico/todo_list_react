import type React from 'react';
import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
    Component: React.ComponentType;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component }) => {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" />
    }

    return <Component />
}

export default ProtectedRoute