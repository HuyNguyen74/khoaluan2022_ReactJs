import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    SET_MESSAGE
} from './types';
import AuthService from '../services/auth.services';
export const signup = (fullname,username, email, password, phone) => (dispatch) =>{
    console.log(fullname,username, email, password,phone)
    return AuthService.register(fullname,username ,email ,password,phone).then(
        (response) => {
            console.log('status',response)
            if(response){
                dispatch({
                    type: REGISTER_SUCCESS,
                });
                return Promise.resolve();
            }else{
                alert("error register server");
                dispatch({
                    type: REGISTER_FAIL,
                    payload:response.message,
                });
                return Promise.reject();
            }
            
            

           
        },
        (error) => {
            const message = 
            (error.response && 
            error.response.data && 
            error.response.data.message) ||
            error.message ||
            error.toString();
            dispatch({
                type: REGISTER_FAIL,
              });
              dispatch({
                type: SET_MESSAGE,
                payload: message,
              });
              return Promise.reject();
        }
    );
};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password) .then(
        (data) => {
            console.log("user: ",data);
            if( data !== undefined && data !== null && data !==''&&data.userName !== null){
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: data}
                });
                return Promise.resolve();
            }else{
                alert("login fail in server");
                dispatch({
                    type: LOGIN_FAIL,
                    
                });
                return Promise.reject();
            }
            
            
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            dispatch({
              type: LOGIN_FAIL,
            });
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
            return Promise.reject();
        }
    )
}

export const Update = (id,name,email,phone,username,pass) => (dispatch) => {
    return AuthService.Update(id,name,email,phone,username,pass) .then(
        (data) => {
            console.log("user update: ",data);
            if( (data !== undefined && data !== null && data !=='') && ((data.userName !== null)) ){
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: data}
                });
                return Promise.resolve();
            }else{
                
               
                return Promise.reject();
            }
            
            
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            dispatch({
              type: LOGIN_FAIL,
            });
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
            return Promise.reject();
        }
    )
}
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};