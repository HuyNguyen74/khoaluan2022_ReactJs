import {CART_ADD,CART_REMOVE,CART_UPDATE} from '../actions/types';
const initState={
listCart: [],
    totalProduct:0,
    totalPrice: 0,
}
const sumPro= (tam)=>{
    let s=0;
    if(tam.length <=0 ) return 0;
    tam.forEach(value => {
        s= value.quantily + s;
    })
    console.log('ttong',s);
    return s;
}
export default  function(state=initState,action) {
 
    switch(action.type){
        
        case CART_ADD:
            return {
                ...state,
                listCart:action.payload,   
            }
        case CART_REMOVE:
            return {
                ...state,
                listCart:action.payload,            
                }
        case CART_UPDATE:
            return {
                ...state,
                listCart:action.payload,          
                }
        case "CART_UPDATE_PRO":
            return {
                ...state,
                totalProduct: action.payload,         
                }
        case "CART_UPDATE_PRI":
            return {
                 ...state,
                totalPrice: action.payload,         
                }
        case "PAYMENT":
            return {
                 ...state,
                listCart: action.payload,         
                }
        default: return state;
    }
}
