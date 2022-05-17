
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import '../style/Homepage.css';
function Home(props) {
    return (
        <>
        <div className='homepage container-fluid'>
      <div className='banner'>
        <div className='banner-title'>
          <p>Phone</p>
        </div>
        
     
      </div>
      <div>
        <Typography 
            color={'#e835c4'}
            variant='h5'
            borderBottom={2}
            marginTop={3}>
            Some product
            </Typography>
        </div>
      <div className='container-card'>
        <div className='overview-card'>
        <div className='card mx-2' style={{width: 310,display:'inline-block'}}>
            <Card
                sx={{
                    width: 280,
                    float: 'left',
                    marginLeft: 2.5,
                    marginRight: 2.5,
                    marginBottom: 1,
                    display: 'inline-block',
                    borderRadius:'5px'

                  }}
                  
            >
                <CardMedia 
                    image='image_dt/ip11.jpg' 
                    sx={{width:'100%',height:'350px',borderRadius:'2px'}}
                    />
                <CardContent>
                    <Typography align='center'>IPHONE</Typography>
                </CardContent>
            </Card>
        </div>
        <div className='card mx-2' style={{width: 310,display:'inline-block'}}>
            <Card
                sx={{
                    width: 280,
                    float: 'left',
                    marginLeft: 2.5,
                    marginRight: 2.5,
                    marginBottom: 1,
                    display: 'inline-block',
                    borderRadius:'5px'
                  }}
                
            >
                <CardMedia 
                    image='image_dt/nkc20.jpg' 
                    sx={{width:'100%',height:'350px',borderRadius:'2px'}}
                    />
                <CardContent>
                    <Typography align='center'>NOKIA</Typography>
                </CardContent>
            </Card>
        </div>
        <div className='card mx-2' style={{width: 310,display:'inline-block'}}>
            <Card
                sx={{
                    width: 280,
                    float: 'left',
                    marginLeft: 2.5,
                    marginRight: 2.5,
                    marginBottom: 1,
                    display: 'inline-block',
                    borderRadius:'5px'
                  }}
                  
            >
                <CardMedia 
                    image='image_dt/opa55.jpg' 
                    sx={{width:'100%',height:'350px',borderRadius:'2px'}}
                    />
                <CardContent>
                    <Typography align='center'>OPPO</Typography>
                </CardContent>
            </Card>
        </div>
        <div className='card mx-2' style={{width: 310,display:'inline-block'}}>
            <Card
                sx={{
                    width: 280,
                    float: 'left',
                    marginLeft: 2.5,
                    marginRight: 2.5,
                    marginBottom: 1,
                    display: 'inline-block',
                    borderRadius:'5px'
                  }}
                  
            >
                <CardMedia 
                    image='image_dt/sss21.jpg' 
                    sx={{width:'100%',height:'350px',borderRadius:'2px'}}
                    />
                <CardContent>
                    <Typography align='center'>SAMSUNG</Typography>
                </CardContent>
            </Card>
        </div>
        <div className='card mx-2' style={{width: 310,display:'inline-block'}}>
            <Card
                sx={{
                    width: 280,
                    float: 'left',
                    marginLeft: 2.5,
                    marginRight: 2.5,
                    marginBottom: 1,
                    display: 'inline-block',
                    borderRadius:'5px'
                  }}
                  
            >
                <CardMedia 
                    image='image_dt/vvv21.jpg' 
                    sx={{width:'100%',height:'350px',borderRadius:'2px'}}
                    />
                <CardContent>
                    <Typography align='center'>VIVO</Typography>
                </CardContent>
            </Card>
        </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default Home;