import {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardActions, CardMedia, Container, TextField, Typography } from '@mui/material';


import productApi from '../services/product.services';
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from 'react-router-dom';
import {productsListSelector,totalProductCartSelector,totalPriceCartSelector, listCart} from '../selector/selectors';
import {Link} from 'react-router-dom';
import {addCard,removeCard,updateCard} from '../actions/cart';

const Cart = () =>{
    
    const listCarts =useSelector(listCart); console.log('lissca',listCarts)
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const {search} =useLocation();
    const listProducts = useSelector(productsListSelector);
    const totalPrice= useSelector(totalPriceCartSelector);
    let listpro = listProducts.map( pro => pro);
    let lap =true;
    useEffect(()=>{
        if(!currentUser) alert("please login before")
        if(lap){
            const tam =listpro.filter(pro => {
                return pro.phoneId.toString() === search.split('=')[1];
            });
            let tam2= listCarts.map(cart=> cart);
           
            let check =false;
           console.log('rekkkk')
            if(tam.length>0 ){
                for(let i=0 ; i< tam2.length;i++){
                    if(tam2[i].product.phoneId === tam[0].phoneId)
                    {
                        tam2[i].quantily = tam2[i].quantily +1;
                        check=true;
                        lap= false;
                        break;
                    }
                }
                if(!check){
                    tam2.push({product:tam[0],quantily: 1});
                  
                }
                currentUser && dispatch(addCard(tam2));
            }
        }
        

    },[]);

    const handleChange = (e) =>{
        console.log('change',e.target.id)
        let lc= listCarts.map(c=>c);
        lc.forEach(element => {
            if(element.product.phoneId.toString() === e.target.id ){
                element.product.quantily =e.target.value;
            }
        });
        dispatch(updateCard(lc));
    }
    const onRemove = (e) =>{
        let lc= listCarts.map(c=>c);
       const ds= lc.filter((cart)=> {
            return cart.product.phoneId.toString() !== e.target.id;
        })
        console.log('liss',ds)
        lap=false;
        dispatch(removeCard(ds));
    }
    return(

       <>
        {listCarts.length>0  && currentUser    ? 
            <Container component={'main'} >
                <Typography align='center' borderBottom={2} borderColor='Highlight' margin={4} minWidth={650}>Cart</Typography>
            <TableContainer component={Paper} sx={{margin: 4,alignItems:'center'}}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table" >
                <TableHead>
                
                </TableHead>
                <TableBody>
                {listCarts.map((row) => (
                    <TableRow
                    key={row.product.phoneId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.product.phoneId}
                    </TableCell>
                    <TableCell align="right">
                        <Card
                             key={row.product.phoneId}
                             sx={{
                               width: '120px',
                               float: 'left',
                               marginLeft: 2.5,
                               marginRight: 2.5,
                               marginBottom: 2
                             }}
                        >
                            <CardMedia 
                            image={row.product.img}
                            sx={{width:'100%',height:'150px'}}
                            >
                            </CardMedia>
                            <Typography align='center'>{row.product.phoneName}</Typography>
                            <Typography align='center'>{row.product.rom}</Typography>
                            
                        </Card>
                        

                    </TableCell>
                    <TableCell align="right">Price: {row.product.price}$</TableCell>
                    <TableCell align="right">Quantily: {row.quantily}</TableCell>
                    <TableCell align="right">
                        <TextField type={'number'} 
                            value={row.quantily} 
                            onChange={handleChange}
                            id={row.product.phoneId.toString()}
                             ></TextField>
                    </TableCell>
                    <TableCell align="right"><Button onClick={onRemove} id={row.product.phoneId.toString()}>Remove</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Typography margin={3} variant='button'> Total: {totalPrice}$</Typography>
            <CardActions sx={{display:'flex',margin:3,justifyContent:'space-evenly'}}>
                <Button variant='contained'>
                Payment
                </Button>
                <Link to={'/product'} variant='Button'><Button variant='contained'>Add</Button></Link>
            </CardActions>
            </Container>
            : <> Not found .</>}
        </>
    );
}

export default Cart;