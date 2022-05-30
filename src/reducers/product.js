import {SEARCH_PRODUCTS,SORT_PRODUCTS,FILTER_CATEGORY} from '../actions/types';
import productApi from '../services/product.services';

try {
    productApi.getAll();
    productApi.getCategory(); 
} catch (error) {
    console.log(error);
}

const products= JSON.parse(localStorage.getItem('products')) || [] ;
const categories= JSON.parse(localStorage.getItem('categories')) || [];
console.log('products',products);console.log('cate',categories);
const initState={
    filters:{
        search:'',
        selectType:[],
        sort: 'none'
    },
    categories:categories,
    productsList:products
}

export default function(state=initState,action) {

    switch(action.type){
        case SEARCH_PRODUCTS:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload
                }
            }
            case SORT_PRODUCTS:
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        sort: action.payload
                    }
                }
            case FILTER_CATEGORY:
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        selectType: action.payload
                    }
                }
        default: return state
    }
}

