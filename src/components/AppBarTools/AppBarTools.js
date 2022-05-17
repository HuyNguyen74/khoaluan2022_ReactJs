import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Container from '@mui/material/Container';
import { logout } from "../../actions/auth";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RestoreIcon from '@mui/icons-material/Restore';
import Badge from '@mui/material/Badge';
import { totalProductCartSelector } from "../../selector/selectors";

const AppBarTools = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const totalProduct= useSelector(totalProductCartSelector);
  console.log('total',totalProduct);
  const dispatch = useDispatch();
  const logOut = () =>{
    dispatch(logout())
  }
  return (
    <AppBar position="static" sx={{ bgcolor:'#9c27b0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/home"} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2,color: 'white', display: 'flex' }}
          >
            Home
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            
            <Link to={"/product"} style={{ textDecoration: 'none' }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Product
              </Button>
              </Link>
          </Box>
          <Box>
            
            { currentUser &&
            <>
            <Link to={"/history"} style={{ textDecoration: 'none' }}>
              <IconButton aria-label="Your Cart">
                <RestoreIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
              </IconButton>
            </Link>
            <Link to={"/cart"} style={{ textDecoration: 'none' }}>
              <IconButton aria-label="Your Cart">
                <Badge badgeContent={totalProduct} color="primary">
                <AddShoppingCartIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
                </Badge>
              </IconButton>
            </Link>
              <IconButton aria-label="Your Cart" onClick={logOut}>
                <LogoutIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
              </IconButton>
              </>
              }
              <Link to={currentUser ? "/profile" : "/login"} style={{ textDecoration: 'none' }}>
              <IconButton aria-label="User">
                <PersonIcon  fontSize="large" sx={{ color: '#f3e5f5' }} />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarTools;
