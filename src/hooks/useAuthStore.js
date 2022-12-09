import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../store/api/authApi";
import axios from "axios";
import { projectRApi } from "../api";
import {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
  authethicated,
} from "../store";

export const useAuthStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);
  const [login, { isLoading, isError, error }] = useLoginMutation();

  //TODO: useState de isLoading

  const startLogin = async (data) => {
    //dispatch(onChecking());
    login(data)
      .unwrap()
      .then((fulfilled) => {
        localStorage.setItem("token", fulfilled.token);
        console.log(fulfilled);
        dispatch(onLogin(fulfilled));
        navigate("/", { replace: true });
      });
    //.catch((rejected) => console.error(rejected));

    // try {
    //   const { data } = await projectRApi.post("/auth", { username, password });
    //   localStorage.setItem("token-init-date", new Date().getTime());

    //   dispatch(
    //     onLogin({
    //       avatar: data.avatar,
    //       id: data.id,
    //       role: data.role,
    //       status: data.status,
    //       username: data.username,
    //     })
    //   );
    //
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     dispatch(onLogout(error.response?.data.msg));

    //     return setTimeout(() => {
    //       dispatch(clearErrorMessage());
    //     }, 5000);
    //   }

    //   dispatch(onLogout("Contact to admin!"));
    //   setTimeout(() => {
    //     dispatch(clearErrorMessage());
    //   }, 5000);
    // }
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

    console.log("checkAuthToken", token);
    if (token === null) return dispatch(onLogout());

    dispatch(authethicated(token));

    // try {
    //   const { data } = await projectRApi.get("/auth/renew");
    //   localStorage.setItem("token", data.token);
    //   //localStorage.setItem("token-init-date", new Date().getTime());

    //   dispatch(
    //     onLogin({
    //       avatar: data.avatar,
    //       id: data.id,
    //       role: data.role,
    //       status: data.status,
    //       username: data.username,
    //       token: data.token,
    //     })
    //   );
    // } catch (error) {
    //   localStorage.clear();
    //   dispatch(onLogout());
    // }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //propertys
    isLoading,
    isError,
    error,
    status,
    user,

    //methods
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
