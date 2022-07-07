export const productsListSelector = (state) =>{
    // return state.prdt.productsList
    const results =state.prdt.productsList.filter((product)=>(
        state.prdt.filters.selectType.length > 0 ?
            product.phoneName.toLowerCase().includes(state.prdt.filters.search.toLowerCase()) && state.prdt.filters.selectType.includes(product.type.typeId)
            : product.phoneName.toLowerCase().includes(state.prdt.filters.search.toLowerCase())

    ));

            return results.sort((prd1,prd2)=>{

                if( state.prdt.filters.sort ==='name'){
                    return prd1.phoneName.toLowerCase()=== prd2.phoneName.toLowerCase() ? 0 
                     : prd1.phoneName.toLowerCase()> prd2.phoneName.toLowerCase() ? 1
                     : -1
                }else{
                    if( state.prdt.filters.sort ==='price'){
                        return prd1.price=== prd2.price ? 0 
                         : prd1.price> prd2.price ? 1
                         : -1
                    }else {
                        return 0;
                    }
                }
            });
        
     
    };
export const categoriesSelector = (state) => state.prdt.categories;
export const searchValueSelector = (state) => state.prdt.filters.search;
export const filterCategoriesSelector = (state) => state.prdt.filters.selectType;
export const listCart = (state) => state.cart.listCart;
export const totalProductCartSelector = (state) => state.cart.totalProduct;
export const totalPriceCartSelector = (state) => state.cart.totalPrice;
