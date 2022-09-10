import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "react-hook-form";

import { Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from "../../layouts"
import { emailValidations } from '../../helpers/AuthValidations';

export const ForgotPasswordPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

  const helperTextMain = {
    email: 'Please enter a email.'
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <AuthLayout title="Forgot Password">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container >
          <Typography sx={{ mt: 2 }}>
            Enter your email for check your account!
          </Typography>

          <Grid item xs={ 12 } sx={{ mt: 1 }} >
            <TextField 
              label="Email"
              type="email"
              placeholder='Udyr@example.com' 
              fullWidth
              helperText={!!errors?.email ? errors.email.message : helperTextMain.email}
              error={ !!errors?.email }
              {...register("email", emailValidations )}
            />
          </Grid>
        </Grid>

        <Grid container spacing={ 1 } sx={{ mb: 2, mt: 1 }}>
          <Grid item sm={ 12 }>
            <Button
              type="submit" 
              variant='contained' 
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='space-between' sx={{ mt:2, mb:1}} >
          <Link component={ RouterLink } color='secondary.main' to="/auth/register">
            Create a account
          </Link>
          <Link component={ RouterLink } color='secondary.main' to="/auth/login">
            Go to login
          </Link>
        </Grid>

      </form>
    </AuthLayout>
  )
}
