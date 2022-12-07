import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { projectRApi } from "../api";
import { onChecking, onLogin, onLogout, clearErrorMessage } from "../store";

export const useAuthStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  //TODO: useState de isLoading

  const startLogin = async ({ username, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await projectRApi.post("/auth", { username, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        onLogin({
          avatar: data.avatar,
          id: data.id,
          role: data.role,
          status: data.status,
          username: data.username,
        })
      );
      navigate("/", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(onLogout(error.response?.data.msg));

        return setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 5000);
      }

      dispatch(onLogout("Contact to admin!"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const startRegister = async ({ username, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await projectRApi.post("/auth/new", {
        username,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        onLogin({
          avatar: data.avatar,
          id: data.id,
          role: data.role,
          status: data.status,
          username: data.username,
        })
      );
      navigate("/auth/confirmEmail", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(onLogout(error.response?.data.msg));
        return setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 5000);
      }

      dispatch(onLogout("Contact to admin!"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    console.log("TOKEN EN CHECKAUTHTOKEN", token);

    if (token === null) return dispatch(onLogout());

    try {
      const { data } = await projectRApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        onLogin({
          avatar: data.avatar,
          id: data.id,
          role: data.role,
          status: data.status,
          username: data.username,
        })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //propertys
    errorMessage,
    status,
    user,

    //methods
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
