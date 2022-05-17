import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import {Update} from '../../actions/auth';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { CardMedia, Container, Paper, Typography } from "@mui/material";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const INITSTATE = {
    
    name:{
        value:'',
        status: false
    },
    email:{
        value:'',
        status: false
    },
    phone:{
        value:'',
        status: false
    },
    pass:{
        value:'',
        status: false
    }
}
const Profile = () =>{
    const { user: currentUser } = useSelector((state) => state.auth);
    const theme = createTheme();
    const [info,setInfo] = useState(INITSTATE);
    const [isUpdate,setIsUpdate]= useState(false);
    const dispatch =useDispatch();
    const onClickEdit = (e) => {
        if( e.target.value ==='phone'){
            setInfo({...info,phone:{...info.phone,status:true}});
        }
        if( e.target.value ==='name'){
            setInfo({...info,name:{...info.name,status:true}});
        }
        if( e.target.value ==='email'){
            setInfo({...info,email:{...info.email,status:true}});
        }
        if( e.target.value ==='pass'){
            setInfo({...info,pass:{...info.pass,status:true}});
        }
    }
    const onClickCancel = (e) => {
        if( e.target.value ==='phone'){
            setInfo({...info,phone:{...info.phone,status:false}});
        }
        if( e.target.value ==='name'){
            setInfo({...info,name:{...info.name,status:false}});
        }
        if( e.target.value ==='email'){
            setInfo({...info,email:{...info.email,status:false}});
        }
        if( e.target.value ==='pass'){
            setInfo({...info,pass:{...info.pass,status:false}});
        }
    }
    const handleChange = (e) => {
        
        if( e.target.id ==='phone'){ 
            setInfo({...info,phone:{...info.phone,value:e.target.value}});
        }
        if( e.target.id ==='name'){
            setInfo({...info,name:{...info.name,value:e.target.value}});
        }
        if( e.target.id ==='email'){
            setInfo({...info,email:{...info.email,value:e.target.value}});
        }
        if( e.target.id ==='pass'){
            setInfo({...info,pass:{...info.pass,value:e.target.value}});
        }
    }
    const handleUpdate = () =>{
        console.log('iddd',currentUser)
        dispatch(Update(currentUser.customerId,info.name.value,info.email.value,info.phone.value,currentUser.userName,info.pass.value))
            .then(()=>{
                setIsUpdate(true);
                alert('update success');
            })
            .catch(()=>{
                setIsUpdate(false);
                alert('update fail');
            });
    }
    useEffect(()=> {
        
        currentUser && setInfo({...info,
            name:{...info.name,value:currentUser.name,status:false},   
            email:{...info.email,value:currentUser.email,status:false},  
            phone:{...info.phone,value:currentUser.phone,status:false},  
            pass:{...info.pass,value:currentUser.pass,status:false},      
        })
        console.log('em',info.name.value)
    },[currentUser,isUpdate]);
    return(
        <>{ currentUser ? 
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        
                        }}
                        border={'2px solid #800080'}
                        borderRadius={1}
                        padding={2}
                        maxWidth={1200}
                        margin={4}
                        width={400}
                    >
                        <Avatar sx={{ bgcolor: deepOrange[500] } }>{currentUser.name[0]}</Avatar>
                        <Typography component="h1" variant="h5" borderBottom={1} marginBottom={4}>
                            Profile
                        </Typography>
                        <Grid
                            container spacing={2}
                            columns={8}
                            marginBottom={2}
                        >
                            <Grid item xs={2}>
                                <Typography align="left">
                                    Name: 
                                </Typography>
                            </Grid>
                            <Grid item xs={4} align='left'>
                                {info.name.status ? 
                                    <TextField
                                        id="name"
                                        value={info.name.value}
                                        onChange={handleChange}
                                    />
                                : <Typography>
                                    {currentUser.name}
                                </Typography>}
                                
                            </Grid>
                            <Grid item xs={2} align='right'>
                                {info.name.status ?
                                    <Button value='name' onClick={onClickCancel}>
                                        cancel
                                    </Button>
                                : <Button variant="contained" value='name' onClick={onClickEdit}>
                                    Edit
                                </Button>}
                                
                            </Grid>

                        </Grid>
                        <Grid
                            container spacing={2}
                            columns={8}
                            marginBottom={2}
                        >
                            <Grid item xs={2}>
                                <Typography align="left">
                                    Email: 
                                </Typography>
                            </Grid>
                            <Grid item xs={4} align='left'>
                                {info.email.status ? 
                                    <TextField
                                        id="email"
                                        value={info.email.value}
                                        onChange={handleChange}
                                    />
                                : <Typography>
                                    {currentUser.email}
                                </Typography>}
                                
                            </Grid>
                            <Grid item xs={2} align='right'>
                                {info.email.status ?
                                    <Button value='email' onClick={onClickCancel}>
                                        cancel
                                    </Button>
                                : <Button variant="contained" value='email' onClick={onClickEdit}>
                                    Edit
                                </Button>}
                                
                            </Grid>

                        </Grid>
                        <Grid
                            container spacing={2}
                            columns={8}
                            marginBottom={2}
                        >
                            <Grid item xs={2}>
                                <Typography align="left" >
                                    Phone: 
                                </Typography>
                            </Grid>
                            <Grid item xs={4} align='left'>
                                {info.phone.status ? 
                                    <TextField
                                        id="phone"
                                        value={info.phone.value}
                                        onChange={handleChange}
                                    />
                                : <Typography>
                                    {currentUser.phone}
                                </Typography>}
                                
                            </Grid>
                            <Grid item xs={2} align='right'>
                                {info.phone.status ?
                                    <Button value='phone' onClick={onClickCancel}>
                                        cancel
                                    </Button>
                                : <Button variant="contained" value='phone' onClick={onClickEdit}>
                                    Edit
                                </Button>}
                                
                            </Grid>

                        </Grid>
                        <Grid
                            container spacing={2}
                            columns={8}
                            marginBottom={2}
                        >
                            <Grid item xs={2}>
                                <Typography align="left">
                                    User: 
                                </Typography>
                            </Grid>
                            <Grid item xs={4} align='left'>
                                <Typography>
                                    {currentUser.userName}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} align='right'>
                               
                            </Grid>

                        </Grid>
                        <Grid
                            container spacing={2}
                            columns={8}
                            marginBottom={2}
                        >
                            <Grid item xs={2}>
                                <Typography align="left">
                                    Pass: 
                                </Typography>
                            </Grid>
                            <Grid item xs={4} align='left'>
                                {info.pass.status ? 
                                    <TextField
                                        id="pass"
                                        value={info.pass.value}
                                        onChange={handleChange}
                                    />
                                : <Typography>
                                    {currentUser.pass}
                                </Typography>}
                                
                            </Grid>
                            <Grid item xs={2} align='right'>
                                {info.pass.status ?
                                    <Button value='pass' onClick={onClickCancel}>
                                        cancel
                                    </Button>
                                : <Button variant="contained" value='pass' onClick={onClickEdit}>
                                    Edit
                                </Button>}
                                
                            </Grid>

                        </Grid>
                        {(info.name.status || info.email.status || info.phone.status || info.pass.status)&&
                            <Button variant="contained" onClick={handleUpdate}>
                                Update
                            </Button>
                        }
                    </Box>
                    
                </Container>
            </ThemeProvider>
        : <Paper 
            elevation={3}
            
            align={'center'}>"Please login before"
        </Paper>
        }
        
        </>
    );
}

export default Profile;