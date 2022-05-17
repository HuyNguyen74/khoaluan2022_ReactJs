import {combineReducers} from 'redux';
import auth from './auth';
import message from './message';
import prdt from './product';
import cart from './cart';

export default combineReducers({
    auth,
    message,
    prdt,
    cart,
});