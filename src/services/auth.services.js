import axios from 'axios';
import axiosClient from './axiosClient';
const API_URL = 'http://localhost:8080/khoaluan/api/';
const register = async (fullname,username, email, password, phone) => {
  
    const response= await axiosClient.post("/signup",{
        name: fullname,
        userName: username,
        email: email,
        pass: password,
        phone: phone
    });
    return response;
};
async function login(username, password) {
  const response = await  axiosClient
    .post( "/login", {
      userName: username,
      pass: password
    });
    console.log('mess',response);
  if (response !== undefined && response !== null && response !== '') {
    localStorage.setItem("user", JSON.stringify(response));
  }
  return response ;
}

const Update = async(id,name,email,phone,username,pass) => {
  const response = await axiosClient
    .post('/updateuser',{
      customerId: id,
      name: name,
      email: email,
      phone: phone,
      userName: username,
      pass: pass,
    });
    if (response !== undefined && response !== null && response !== '') {
      localStorage.setItem("user", JSON.stringify(response));
    }
    console.log('up',response)
    return response;
}
const Order = async(customerId,bills) => {
  console.log('cusId',customerId);
  const response = await axiosClient
    .post(`/order?customerId=${customerId}`,
     bills
    );
 
    return response;
}
const logout =async () =>{
  localStorage.removeItem("user");
  //window.location.reload();
};

export default {
    register,
    login,
    logout,
    Update,
    Order,
};