import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    const crrUser = localStorage.getItem('crrUser');
    if (crrUser) {
        return <Navigate to={'/home'} />
    }
    return (
        <div className="container-auth-layout">
            <Outlet />
        </div>
    )
}

export default AuthLayout;