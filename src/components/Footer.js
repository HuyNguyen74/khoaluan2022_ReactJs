import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Huy Nguyen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <>
    
      <CssBaseline />
      
      <Box
        height={1}
        alignContent={'center'}
        component="footer"
        sx={{
          py: 2,
          px: 1,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        marginTop={4}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align='center'>
            My Website use Reactjs + Spring MVC
          </Typography>
          <Copyright />
        </Container>
      </Box>
    
    </>
  );
}