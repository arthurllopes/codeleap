import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const isUserLoggedIn = localStorage.getItem('userData')
    console.log(isUserLoggedIn)
    if (isUserLoggedIn) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    
    return children
}

export default ProtectedRoute