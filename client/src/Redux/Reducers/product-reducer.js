import * as actiontype from "../Constatns/product-constant.js";

// Cake Shop Keeper:
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actiontype.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actiontype.GET_PRODUCT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer=(state={product:{}},action)=>{
  switch (action.type) {
    case actiontype.GET_PRODUCT_DETAILS_REQUEST:
      return {loader:true}
    case actiontype.GET_PRODUCT_DETAILS_SUCCESS:
      return {loader:false,product:action.payload}
    case actiontype.GET_PRODUCT_DETAILS_FAIL:
      return {loader:false,error:action.payload}
    case actiontype.GET_PRODUCT_DETAILS_RESET:
      return {product:{}}
    default:
      return state;
  }
}
