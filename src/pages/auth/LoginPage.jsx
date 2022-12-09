import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Grid, TextField, Button, Link, Alert } from "@mui/material";

import { useLoginMutation } from "../../store/api/authApi";
import { AuthLayout } from "../../layouts";
import { useAuthStore } from "../../hooks";
import {
  passwordLoginValidations,
  usernameLoginValidations,
} from "../../helpers/AuthValidations";

const helperTextMain = {
  username: "Enter a username",
  password: "Enter a password",
};

export const LoginPage = () => {
  const { startLogin, isLoading, isError, error } = useAuthStore();
  //const dispatch = useDispatch();
  //const { status, user } = useSelector((state) => state.auth);
  // const [login, { isLoading, isError, error, data: userLogged }] =
  //   useLoginMutation();

  //console.log("fuera de submit", userLogged);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    startLogin(data);
    // login(data)
    //   .unwrap()
    //   .then((fulfilled) => console.log(fulfilled))
    //   .catch((rejected) => console.error(rejected));
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              required
              label="Username"
              type="text"
              placeholder="Enter your cool name!"
              fullWidth
              helperText={
                !!errors?.username
                  ? errors.username.message
                  : helperTextMain.username
              }
              error={!!errors?.username || !!error}
              {...register("username", usernameLoginValidations)}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              required
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              helperText={
                !!errors?.password
                  ? errors.password.message
                  : helperTextMain.password
              }
              error={!!errors?.password}
              {...register("password", passwordLoginValidations)}
            />
          </Grid>
        </Grid>

        <Alert
          severity="error"
          sx={{ mt: 1, display: isError ? "flex" : "none" }}
        >
          {error?.data.msg}
        </Alert>

        <Grid container spacing={1} sx={{ mb: 2, mt: 1 }}>
          <Grid item sm={12}>
            <Button
              type="submit"
              disabled={isLoading}
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{ mt: 2, mb: 1 }}
        >
          <Link
            component={RouterLink}
            color="secondary.main"
            to="/auth/register"
          >
            Create a account
          </Link>
          <Link
            component={RouterLink}
            color="secondary.main"
            to="/auth/forgot-password"
          >
            Forgot pasword?
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
