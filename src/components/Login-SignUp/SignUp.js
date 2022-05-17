import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link,Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup } from "../../actions/auth";

import * as Yup from 'yup';

function SignUp(props) {
  
    const [isSignUp,setIsSignUp] = useState(false)
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
      fullname: Yup.string().required('Fullname is required')
        .min(4,"FullName must be at least 4 characters"),
      username: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      phone: Yup.string()
        .required('Phone is required ')
        .min(9,'Phone Number must >9')
        .max(10,'Phone number must <= 10'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      });
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

    const onSubmit = data => {
        dispatch(signup(data.fullname,data.username, data.email, data.password,data.phone))
          .then((response) => {
            console.log('res',response);
              // if(response.data){
              //   setIsSignUp(true);
              //   alert("ok");
              // }else{
              //   setIsSignUp(false);
              //   alert("fail");
              // }
              setIsSignUp(true);
              
              
            })
          .catch(() => {
              
              setIsSignUp(false);
            });
      };
 
      if (isSignUp) {
        alert("Register success.");
        return <Navigate  to="/login" />;
      }
    
     
    
      return (
        <>
        
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: 2,
                borderRadius: '16px',
                borderColor: 'secondary.main'
              }}
            >
              <Typography variant="h2" color="secondary">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="fullname"
                      label="Full Name"
                      name="fullname"
                      autoComplete="family-name"
                      {...register('fullname')}
                       error={errors.fullname ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.fullname?.message}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="User Name"
                      name="username"
                      autoComplete="family-name"
                      {...register('username')}
                    error={errors.username ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                   {errors.username?.message}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      {...register('email')}
                        error={errors.email ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.email?.message}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="phone"
                      label="phone"
                      type="phone"
                      id="phone"
                      autoComplete="new-phone"
                      {...register('phone')}
                    error={errors.phone ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.phone?.message}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      {...register('password')}
                    error={errors.password ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.password?.message}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Re-Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      {...register('confirmPassword')}
                      error={errors.confirmPassword ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.confirmPassword?.message}
                    </Typography>
                  </Grid>

                </Grid>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Login
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
          </>
      );
}

export default SignUp;