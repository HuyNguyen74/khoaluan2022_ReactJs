import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardMedia, Container, Typography } from '@mui/material';

import productApi from '../services/product.services';
import { useDispatch, useSelector } from "react-redux";

const History = () =>{
    const [histories,setHistories]= useState([]);
    const { user: currentUser } = useSelector((state) => state.auth);
    useEffect(()=>{
        
        try {
            currentUser !== null &&
            productApi.getHistory(currentUser.userName, currentUser.pass)
            .then((data)=>{
                setHistories(data);
            })
        } catch (error) {
            alert('history faild.')
        }
       
            
    },[currentUser]);

    return(

       <>
        {histories.length >0 ? 
            <Container component={'main'} >
                <Typography align='center' borderBottom={2} borderColor='Highlight' margin={4} minWidth={650}>History</Typography>
            <TableContainer component={Paper} sx={{margin: 4,alignItems:'center'}}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table" >
                <TableHead>
                <TableRow>
                    <TableCell >id</TableCell>
                    <TableCell align="right">Product</TableCell>
                    <TableCell align="right">Quantily</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">BuyDate</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {histories.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">
                        <Card
                             key={row.id}
                             sx={{
                               width: '120px',
                               float: 'left',
                               marginLeft: 2.5,
                               marginRight: 2.5,
                               marginBottom: 2
                             }}
                        >
                            <CardMedia 
                            image={row.img}
                            sx={{width:'100%',height:'150px'}}
                            >
                            </CardMedia>
                        </Card>
                        {row.phoneName}

                    </TableCell>
                    <TableCell align="right">{row.quantily}</TableCell>
                    <TableCell align="right">{row.status? <Typography color={'blue'}>TRUE</Typography>:'FALSE'}</TableCell>
                    <TableCell align="right">{row.buyDate}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </Container>
            : <> Not found .</>}
        </>
    );
}

export default History;