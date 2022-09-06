import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"

import { useForm } from "react-hook-form";
import { Grid, TextField, Button, Link } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout"
import { emailValidations, passwordValidations, usernameValidations } from "../../helpers/AuthValidations";


export const RegisterPage = () => {

  const { 
    register, 
    handleSubmit,
    watch, 
    formState: { errors } 
  } = useForm({ mode: 'onChange'});

  const helperTextMain = {
    username: 'Username must be greater than 3. Must be less than 20.',
    email: 'Email is required.',
    password: 'Password Should be an Uppercase letter and a number',
    confirmPassword: 'Copy and paste you password!?.'
  }


  //Save change in password and confirm password
  let passwordValue = watch('password');

  const confirmPasswordValidations = {
    required: "confirm your password",
    validate: value => value === passwordValue || 'Passwords do not match!.'
  }

  const onSubmit = (data) => {
    console.log(data);
  }
 
  return (
    <AuthLayout title="Register" >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container >
          
          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField 
              label="Username"
              type="text"
              placeholder='Enter your cool name!.' 
              fullWidth
              helperText={!!errors?.username ? errors.username.message : helperTextMain.username}
              error={ !!errors?.username }
              {...register("username", usernameValidations )}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField 
              label="Email"
              type="email"
              placeholder='Nami@example.com' 
              fullWidth
              helperText={!!errors?.email ? errors.email.message : helperTextMain.email}
              error={ !!errors?.email }
              {...register("email", emailValidations )}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField 
              label="Password"
              type="password"
              placeholder='You should use a good password!.' 
              fullWidth
              helperText={!!errors?.password ? errors.password.message : helperTextMain.password}
              error={ !!errors?.password }
              {...register("password", passwordValidations)}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }} >
            <TextField 
              label="Confirm Password" 
              type="password" 
              placeholder='Enter your password again!.' 
              fullWidth
              helperText={!!errors?.confirmPassword ? errors.confirmPassword.message : helperTextMain.confirmPassword}
              error={ !!errors?.confirmPassword }
              {...register( "confirmPassword", confirmPasswordValidations )}
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
          <Link component={ RouterLink } color='secondary.main' to="/auth/login">
            Already Account?
          </Link>
          <Link component={ RouterLink } color='secondary.main' to="/auth/forgot-password">
            Forgot pasword?
          </Link>
        </Grid>

      </form>
    </AuthLayout>
  )
}