import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Grid, Typography, Link } from "@mui/material";

import { AuthLayout } from "../../layouts";
import { useAuthStore } from "../../hooks/useAuthStore";

export const ConfirmEmailPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  if (user?.status === "active") {
    return navigate("/", { replace: true });
  }

  return (
    <AuthLayout title="Confirm Email">
      <Grid container>
        <Typography variant="text" sx={{ mt: 2 }}>
          Please Go to check your email for the activation of your account!.
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{ mt: 2, mb: 1 }}
        >
          <Link component={RouterLink} color="secondary.main" to="/auth/login">
            Go to Log in!
          </Link>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
