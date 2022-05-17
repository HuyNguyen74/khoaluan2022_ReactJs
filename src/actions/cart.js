import {CART_ADD,CART_REMOVE,CART_UPDATE} from './types';

export const addCard =(ob)=> {
    console.log('actuon1',ob);
    return {
        type: CART_ADD,
        payload:ob
}
}
export const removeCard =(r)=> {
    console.log('actuon2',r);
    return {
        type: CART_REMOVE,
        payload:r
}
}
export const updateCard =(r)=> {
    console.log('actuon3',r);
    return {
        type: CART_UPDATE,
        payload:r
}
}
export const updateTotalProduct =(r)=> {
    console.log('actuon4',r);
    return {
        type: "CART_UPDATE_PRO",
        payload:r
}
}
export const updateTotalPrice =(r)=> {
    console.log('actuon5',r);
    return {
        type: "CART_UPDATE_PRI",
        payload:r
}
}