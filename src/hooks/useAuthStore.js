import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useGetDataUserQuery,
  useLoginMutation,
  useRegisterMutation,
} from "../store/api/authApi";
import { projectRApi } from "../api";
import {
  onChecking,
  onLogin,
  onLogout,
  authenticated,
  loadedUser,
} from "../store";

export const useAuthStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);
  const [login, loginResult] = useLoginMutation();
  const [register, registerResult] = useRegisterMutation();
  // const dataUser = useGetDataUserQuery();
  // console.log(dataUser);

  //TODO: useState de isLoading

  const startLogin = async (data) => {
    login(data)
      .unwrap()
      .then((fulfilled) => {
        localStorage.setItem("token", fulfilled.token);
        const { email, avatar, id, role, status, username, token } = fulfilled;

        if (status === "pending") {
          dispatch(onLogout());
          return navigate("/auth/confirmEmail");
        }

        dispatch(
          onLogin({
            user: {
              email,
              avatar,
              id,
              role,
              status,
              username,
            },
            token,
          })
        );
        navigate("/", { replace: true });
      });
  };

  const startRegister = async (data) => {
    register(data)
      .unwrap()
      .then(() => {
        dispatch(onLogout());
        navigate("/auth/confirmEmail");
      });
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");

    if (token === null) return dispatch(onLogout());

    dispatch(authenticated(token));
  };

  const onLoadUser = async () => {
    try {
      const { data } = await projectRApi.get("/auth/user");
      dispatch(
        loadedUser({
          email: data.email,
          avatar: data.avatar,
          id: data.id,
          role: data.role,
          status: data.status,
          username: data.username,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(loadedUser("Error fetching user"));
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //propertys
    registerResult,
    loginResult,
    status,
    user,

    //methods
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
    onLoadUser,
  };
};
