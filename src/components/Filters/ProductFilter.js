import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


import { filterCategories, searchProducts, sortProducts } from '../../actions/product';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { categoriesSelector, filterCategoriesSelector } from '../../selector/selectors';
import { PaginationItem } from '@mui/material';

const ProductFilter = () => {
    const [value,setValue]=useState('');
    const [selects,setSelects] = useState([]);
    const [valueSort,setValueSort]=useState('');

    const dispatch= useDispatch();
    const listCategories= useSelector(categoriesSelector);
    
    
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
            <TextField 
              fullWidth 
              label="Search" 
              id="fullWidth" 
              type='search'
              value={value}
              onChange={handleChange}
              sx={{
                marginTop: 5,
                alignItems: 'center',
                textAlign: 'center',
                
                }}
          />
           <Container maxWidth="sm">
               
            <Stack 
                direction="row" 
                spacing={2}
                marginTop='30px'
                marginBottom={2}
                >
                    
                        {listCategories.map((Category) => (
                            
                                
                            <Button 
                            variant={selects.includes(Category.typeId) ? "contained":"outlined"} 
                            key={Category.typeId} 
                            onClick={handleClick} 
                            value={Category.typeId}
                            
                            >
                                {Category.typeName}</Button>
                            
                            
                            
                        ))}
                    
                    
                </Stack>
                
            </Container>
          
                <Box sx={{ minWidth: 100 }}  >
                        <FormControl className='sort'  >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Sort By
                            </InputLabel>
                            <NativeSelect
                            defaultValue={'none'}
                            inputProps={{
                                name: 'Sortby',
                                id: 'uncontrolled-native',
                            }}
                            variant="standard"
                            onChange={handleSort}
                            >
                            <option value={'name'}>name</option>
                            <option value={'price'}>price</option>
                            <option value={'none'}>none</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    
        </>
    );
}

export default ProductFilter;