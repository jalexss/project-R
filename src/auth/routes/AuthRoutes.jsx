import { Routes, Route, Navigate } from 'react-router-dom'
import { ForgotPasswordPage, ConfirmEmailPage, LoginPage, RegisterPage } from '../pages'
 
export const AuthRoutes = () => {

    return (
        <Routes>
        
            <Route path="login" element={ <LoginPage/> } />
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="confirmEmail:id" element={ <ConfirmEmailPage /> } />
            <Route path="forgot-password" element={ <ForgotPasswordPage /> } />
            
            <Route path="/*" element={ <Navigate to="/auth/login"/> } />
        
        </Routes>
    )
}

