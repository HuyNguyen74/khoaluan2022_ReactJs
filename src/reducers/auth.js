// import{
//     REGISTER_SUCCESS,
//     REGISTER_FAIL,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     LOGOUT,
// } from '../actions/types';
// const user = JSON.parse(localStorage.getItem('user'));

// const initialState = user ? {isLoggedIn: true,user} : {isLoggedIn: false , user:null};
// export default function (state = initialState, action){
    
//     const {type, payload} = action;
//     switch (type) {
//         case REGISTER_SUCCESS :
//             return{
//                 ...state,
//                 isLoggedIn: false
//             };
//         case REGISTER_FAIL :
//             return{
//                 ...state,
//                 isLoggedIn: false
//             }
//         case LOGIN_SUCCESS :
//             return{
//                 ...state,
//                 isLoggedIn: true,
//                 user: payload.user
//             }
//         case LOGIN_FAIL :
//             return{
//                 ...state,
//                 isLoggedIn: false,
//                 user: null
//             }
//         case LOGOUT :
//             return {
//                 ...state,
//                 isLoggedIn: false,
//                 user : null
//             }
//         default:
//             return state;
//     }
// }
import { createSlice } from '@reduxjs/toolkit';
const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {isLoggedIn: true,user} : {isLoggedIn: false , user:null};
export default createSlice ({
    name: 'auth',
    initialState: initialState,
    reducers:{
        REGISTER_SUCCESS: (state,action) => {
            state.isLoggedIn = false;
        },
        REGISTER_FAIL: (state,action) => {
            state.isLoggedIn = false;
        },
        LOGIN_SUCCESS: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        LOGIN_FAIL: (state,action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        LOGOUT: (state,action) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});