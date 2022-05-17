import {CART_ADD,CART_REMOVE,CART_UPDATE} from '../actions/types';
const initState={
listCart: [],
    totalProduct:0,
    totalPrice: 0,
}

export default function(state=initState,action) {
    const sumPri= ()=>{
        let s=0;
        if(state.listCart.length <=0 ) return 0;
        state.listCart.forEach(value => {
            s= value.quantily*value.product.price + s;
        })
        return s;
    }
    const sumPro= ()=>{
        let s=0;
        if(state.listCart.length <=0 ) return 0;
        state.listCart.forEach(value => {
            s= value.quantily + s;
        })
        console.log('ttong',s);
        return s;
    }
    
    switch(action.type){
        
        case CART_ADD:
            return {
                ...state,
                listCart:action.payload,
                totalProduct: sumPro(),    
                totalPrice:sumPri()
                
            }
        case CART_REMOVE:
                return {
                    ...state,
                    listCart:action.payload,
                    totalProduct: sumPro()   ,
                    totalPrice:sumPri()
                    
                }
                case CART_UPDATE:
                    return {
                        ...state,
                        listCart:action.payload,
                        totalProduct: sumPro(),    
                        totalPrice:sumPri()
                        
                    }
        default: return state
    }
}
