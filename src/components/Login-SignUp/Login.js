import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link,Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { login } from "../../actions/auth";
import { yupResolver } from '@hookform/resolvers/yup';
import {createBrowserHistory} from "history";
import * as Yup from 'yup';

function Login(props) {
    // const[email,setEmail] = useState('');
    // const[password,setPassword] = useState('');
    const history =createBrowserHistory();
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(2, 'Username must be at least 2 characters')
            .max(20, 'Username must not exceed 20 characters'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
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
        dispatch(login(data.username, data.password))
        .then(() => {
          alert('login success');
          //history.push("/profile");
          //window.location.reload();
        })
        .catch(() => {
          
          setLoading(false);
        });
      };

      if (isLoggedIn) {
        return <Navigate  to="/home" />;
      }
  return (
      <>
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 1,
            borderRadius: '16px',
            borderColor: 'secondary.main',
            margin: 5,
            
          }}
        >
          <Typography  variant="h2" color="secondary">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ m: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
            //   onChange={onChangeEmail}
              required
              {...register('username')}
                error={errors.username ? true : false}
            />
            <Typography variant="inherit" color="red">
                {errors.username?.message}
              </Typography>

            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              required
            //   onChange={onChangePassword}
              {...register('password')}
              error={errors.password ? true : false}
            />
            <Typography variant="inherit" color="red">
                {errors.password?.message}
              </Typography>
            <FormControlLabel
              control={<Checkbox value="remember" color='secondary'/>}
              label="Remember me"
            />
            <Button
              type="button"
              variant="contained"
              fullWidth
              size="large"
              color="secondary"
              sx={{ mt: 3, mb: 2,}}
              onClick={handleSubmit(onSubmit)}
            //   disabled={loading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs key={1}>
              <Link to={"#"} >
                  Forgot?
                </Link>
              </Grid>
              <Grid item key={2}>  
                <Link to={"/signup"} >
                  SignUp
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      </>
  );
}

export default Login;