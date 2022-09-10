import { Routes, Route, Navigate } from "react-router-dom"

import { CheckingAuth } from "./CheckingAuth";
import { 
  ConfirmEmailPage, 
  ForgotPasswordPage, 
  LoginPage, 
  RecetaFormPage, 
  RecetaListPage, 
  RecetaPage, 
  RegisterPage, 
  UserProfilePage, 
} from "../pages";

export const AppRouter = () => {
  
  //TODO: const { status, isLoading } = useSelector( state => state.auth );
  // (isLoading) ?  return <isLoadingComponent />  -> useEffect();

  const authStatus = 'authenticated'; // 'authenticated'  / 'checking' 

  return (
    <Routes>
       {/* ---- privated routes ---- */}

      <Route path="/" element={ 
          <CheckingAuth status={ authStatus }>
            <RecetaListPage  /> 
          </CheckingAuth>
        } 
      /> 
      <Route path="/receta/create" element={ 
          <CheckingAuth status={ authStatus }>
            <RecetaFormPage  /> 
          </CheckingAuth>
        } 
      /> 
      <Route path="/user/:username/receta/:recetaId" element={ 
          <CheckingAuth status={ authStatus }>
            <RecetaPage  /> 
          </CheckingAuth>
        } 
      /> 
      {/* TODO: CAMBIAR RecetaPage */}
      <Route path="/user/:username/profile" element={ 
          <CheckingAuth status={ authStatus }>
            <UserProfilePage  /> 
          </CheckingAuth>
        } 
      /> 

      {/* public routes */}  
      <Route path="/auth/login" element={ <LoginPage /> } />
      <Route path="/auth/register" element={ <RegisterPage /> } />
      <Route path="/auth/confirmEmail/:id" element={ <ConfirmEmailPage /> } />
      <Route path="/auth/forgot-password" element={ <ForgotPasswordPage /> } />

      <Route path="*" element={ <Navigate to="/" replace /> } /> 

    </Routes>
  )
}

