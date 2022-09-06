import { Routes, Route, Navigate } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { RecetaRoutes } from "../recetas/routes/RecetaRoutes";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  
  //TODO: const { status, isLoading } = useSelector( state => state.auth );
  // (isLoading) ?  return <isLoadingComponent />  -> useEffect();

  const authStatus = 'authenticated'; // 'authenticated'  / 'checking' 

  return (
    <Routes>
       {/* ---- privated routes ---- */}
      <Route path="/*" element={ 
          <RequireAuth status={ authStatus }>
            <RecetaRoutes  /> 
          </RequireAuth>
        } 
      /> 

      {/* public routes */}  
      <Route path="/auth/*" element={ <AuthRoutes status={ authStatus }/> } />

      <Route path="/*" element={ <Navigate to="/auth/login" replace /> } />
      
    </Routes>
  )
}

