import axios from 'axios';
import { API_URL } from '../actions/types';
import axiosClient from './axiosClient';


// const listProduct= async ()=> {
//     try {
//         let res= await axios.get(`${API_URL}/listproduct`);
        
//         if(res.data){
//             alert(res.data)
//             return res.data;
//         }else{
//             alert(res.status);
//             return [];
//         }
//     } catch (error) {
//         alert(error.toString())
//     }
//    // return axios.get("http://localhost:8080/khoaluan/api/listproduct");
    
// }
// export default listProduct;
const productApi ={
    
    getAll:async (params) => {
        const url = '/listproduct';
        const response = await axiosClient.get(url,{params});
        response && localStorage.setItem("products", JSON.stringify(response));
        return  response;
    },
    getCategory: async (params) => {
        const url = '/listtype';
        const response = await axiosClient.get(url,{params});
        console.log('cate2',response);
        response && localStorage.setItem("categories", JSON.stringify(response));
        return  response;
    },
    getHistory: async (usename,pass) => {
        const url = '/history';
        const response = await axiosClient.post(url,{userName: usename, pass: pass});
        console.log('his1',response)
        return  response;
    },
}

export default productApi;