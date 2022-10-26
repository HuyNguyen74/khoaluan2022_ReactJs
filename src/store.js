// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import auth from "./reducers/auth";
import product from './reducers/product';
import message from './reducers/message';
import cart from './reducers/cart'

// const middelware = [thunk];
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(...middelware))
// );
const store = configureStore({
    reducer: {
        auth: auth.reducer,
        product: product.reducer,
        message: message.reducer,
        cart: cart.reducer,
    }
})

export default store;