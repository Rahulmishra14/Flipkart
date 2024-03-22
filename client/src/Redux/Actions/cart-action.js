import axios from "axios";
import * as actionType from '../Constatns/cart-constants.js';
const URL = "";


// Withdrawing a cake from shelf:

export const addToCart=(id,quantity)=>async(dispatch)=>{
    try {
        const {data}=await axios.get(`${URL}/products/${id}`);
        console.log("Data recccc",data);
        dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}})
    } catch (error) {
        dispatch({type:actionType.ERROR_ADD_TO_CART,payload:error.message})
    }
} 

export const removeFromCart=(id)=>(dispatch)=>{

        dispatch({type:actionType.REMOVE_FROM_CART,payload:id})
} 