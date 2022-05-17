import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Pagination,
  CardMedia,
  
} from '@mui/material';

import { useNavigate,Link } from 'react-router-dom'
import {useSelector} from 'react-redux';
import ProductDetail from './ProductDetail'; 


import ProductFilter from './Filters/ProductFilter'; 
import { productsListSelector } from '../selector/selectors';

const Product = () => {
  const [products, setProducts] = useState([])
  const [page,setPage] =useState(0);
  
  const navigate = useNavigate();
  const listProducts= useSelector(productsListSelector);
  
  useEffect(() =>{
    let tam=listProducts.map(product => product);
    const result=tam.splice(Number(page-1)*8,8);
    setPage(1);
    navigate(`/product?`);
    setProducts(result);
  },[listProducts]);
  useEffect(() =>{
    let tam=listProducts.map(product => product);
    const result=tam.splice(Number(page-1)*8,8);
    
    setProducts(result);
  },[page]);
  
  return (
    <div className='list-products container-fluid'>
      <div className='products'>
        <div className='my-3'>
          <ProductFilter/>
          <Typography 
            align='right' 
            variant='subtitle1' 
            borderBottom={2}
            marginBottom={5}
            >
           Product
          </Typography>

        </div>
        <div className='box-products' >
          {products.map((value) => (
            <Card
              key={value.phoneId}
              sx={{
                width: 230,
                float: 'left',
                marginLeft: 2.5,
                marginRight: 2.5,
                marginBottom: 2
              }}
            >
              <CardMedia 
                image={value.img}
                sx={{width:'100%',height:'290px'}}
                >
                </CardMedia>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  {value.phoneName}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {value.ram}
                </Typography>
                <Typography
                  sx={{ mt: 1.5, textAlign: 'right' }}
                  color='text.secondary'
                >
                  {value.price}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent:'space-around'}}>
                <Link to={`/detail?id=${value.phoneId}`} > Detail</Link>
                <Link to={`/cart?id=${value.phoneId}`} > Add Cart</Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      <div className='pagination'>
        <Stack spacing={1}>
          <Pagination
            count={parseInt(listProducts.length/8 + 1)}
            color='secondary'
            
            page={Number(page)}
            onChange={(event, number) => {
                navigate(`/product?pg=${number}`);
                setPage(number);
            }}
          />
        </Stack>
      </div>
    </div>
  )
}

export default Product;
