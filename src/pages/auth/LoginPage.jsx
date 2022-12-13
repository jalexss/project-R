import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Grid,
  TextField,
  Button,
  Link,
  Alert,
  CircularProgress,
} from "@mui/material";

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
  const { startLogin, loginResult } = useAuthStore();
  const { isLoading, isError, error } = loginResult;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    startLogin(data);
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
              error={!!errors?.password || !!error}
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

        <Grid container sx={{ mb: 2, mt: 1, position: "relative" }}>
          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            fullWidth
          >
            Login
          </Button>
          {isLoading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
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
