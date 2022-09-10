import { Navigate } from 'react-router-dom';

export const CheckingAuth = ({ children, status='' }) => {

    if (status === 'authenticated') return children;

    return <Navigate to="/auth/login" replace />
}

