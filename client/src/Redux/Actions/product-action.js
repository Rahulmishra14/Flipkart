import axios from "axios";
import * as actionType from '../Constatns/product-constant.js';
const URL = "";


// Withdrawing a cake from shelf:

export const getProducts=()=>async(dispatch)=>{
    try {
        const {data}=await axios.get(`${URL}/products`);
        // console.log("Data recccc",data);
        dispatch({type:actionType.GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_FAILURE,payload:error.message})
    }
} 

export const getProductDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST})
        const {data}=await axios.get(`${URL}/products/${id}`);
        // console.log("Data recccc",data);
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
    }
} 