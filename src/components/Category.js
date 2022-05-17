import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


import { filterCategories, searchProducts, sortProducts } from '../actions/product';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { categoriesSelector, filterCategoriesSelector } from '../selector/selectors';
import { PaginationItem } from '@mui/material';
import productApi from '../services/product.services';

const Category = () => {
    const [value,setValue]=useState('');
    const [selects,setSelects] = useState([]);
    const [valueSort,setValueSort]=useState('');

    const dispatch= useDispatch();
    const listCategories= useSelector(categoriesSelector);
    
    useEffect(() => {
    //   const fetchProduct = async () =>{
    //       try {
    //           const res = await productApi.getAll();
    //           console.log("data ",res);
    //       } catch (error) {
    //           alert("loi product",error);
    //       }
    //   }
    //   fetchProduct();
    console.log('kokokoko');
    },[])
    const handleChange = (e) =>{
        
        setValue(e.target.value);
        dispatch(searchProducts(e.target.value));
    }

    const handleClick = (e)=>{
        let tam =[...selects];
        
        const value= e.target.value;
        
        if(tam.includes(value)){
            tam= tam.filter((id) => {return id !== value})

        }else{
            tam.push(e.target.value);
        }
   
        setSelects(tam);
        dispatch(filterCategories(tam));
        
        
    }
    const handleSort = (e)=>{
        setValueSort(e.target.value);
        dispatch(sortProducts(e.target.value));
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
      }));

    return (
        <>
    
           <Container maxWidth="sm">
               
            <Stack 
                direction="row" 
                spacing={3}
                marginTop='20px'
                marginBottom={'20px'}
                >
                    
                        {listCategories.map((Category) => (
                            
                                
                            <Button 
                            variant={selects.includes(Category.id) ? "contained":"outlined"} 
                            key={Category.id} 
                            onClick={handleClick} 
                            value={Category.id}
                           
                            >
                                {Category.name}</Button>
                            
                            
                            
                        ))}
                    
                    
                </Stack>
                
            </Container>
          
                
                    
        </>
    );
}

export default Category;