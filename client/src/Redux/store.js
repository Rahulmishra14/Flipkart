import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as thunkDep from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import { getProductDetailsReducer, getProductsReducer } from './Reducers/product-reducer.js';
import { cartReducer } from './Reducers/cart-reducer.js';

const middleWare=[thunkDep.thunk];

// Cake Shop:

const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer
})

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
