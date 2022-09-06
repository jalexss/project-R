
//import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom"

import { useForm } from "react-hook-form";
import { Grid, TextField, Button, Link } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout"
import { passwordLoginValidations, usernameLoginValidations } from "../../helpers/AuthValidations";

export const LoginPage = () => {
  /*
  const location = useLocation();
  console.log(location.pathname.split('/auth/'));
 */  
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

  const helperTextMain = {
    username: 'Enter a username',
    password: 'Enter a password',
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container >
          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField
              required 
              label="Username"
              type="text"
              placeholder='Enter your cool name!' 
              fullWidth
              helperText={!!errors?.username ? errors.username.message : helperTextMain.username}
              error={ !!errors?.username }
              {...register("username", usernameLoginValidations )}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField 
              required
              label="Password" 
              type="password" 
              placeholder='password' 
              fullWidth
              helperText={!!errors?.password ? errors.password.message : helperTextMain.password}
              error={ !!errors?.password }
              {...register( "password", passwordLoginValidations )}
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
              Login
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='space-between' sx={{ mt:2, mb:1}} >
          <Link component={ RouterLink } color='secondary.main' to="/auth/register">
            Create a account
          </Link>
          <Link component={ RouterLink } color='secondary.main' to="/auth/forgot-password">
            Forgot pasword?
          </Link>
        </Grid>

      </form>
    </AuthLayout>
  )
}
