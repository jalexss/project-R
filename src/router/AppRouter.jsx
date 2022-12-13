import { Routes, Route, Navigate } from "react-router-dom";

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
import { useAuthStore } from "../hooks";
import { useEffect } from "react";
import { RecetaLayout } from "../layouts";
import { useGetDataUserMutation } from "../store/api/authApi";

export const AppRouter = () => {
  const { checkAuthToken, status, user, onLoadUser } = useAuthStore();
  const [getDataUser, result] = useGetDataUserMutation();

  console.log(result);

  useEffect(() => {
    let ignore = false;

    if (ignore) return;

    checkAuthToken();

    if (status === "authenticated" && !user) {
      getDataUser();
      onLoadUser();
    }

    return () => (ignore = true);
  }, [checkAuthToken, status, onLoadUser, user]);

  //TODO Crear loading personalizado
  if (status === "checking") {
    return (
      <RecetaLayout>
        <h1>Loading...</h1>
      </RecetaLayout>
    );
  }

  //const tempStatus2 = "authenticated";
  return (
    <Routes>
      {/* ---- privated routes ---- */}

      <Route
        path="/"
        element={
          <CheckingAuth status={status}>
            <RecetaListPage />
          </CheckingAuth>
        }
      />
      <Route
        path="/receta/create"
        element={
          <CheckingAuth status={status}>
            <RecetaFormPage />
          </CheckingAuth>
        }
      />
      <Route
        path="/receta/:recetaId"
        element={
          <CheckingAuth status={status}>
            <RecetaPage />
          </CheckingAuth>
        }
      />
      {/* TODO: CAMBIAR RecetaPage */}
      <Route
        path="/user/:username/profile"
        element={
          <CheckingAuth status={status}>
            <UserProfilePage />
          </CheckingAuth>
        }
      />

      <Route path="/auth/confirmEmail" element={<ConfirmEmailPage />} />

      {/* public routes */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
