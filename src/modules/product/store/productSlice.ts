import {createSlice} from '@reduxjs/toolkit';
import {ProductState} from './index';


export const productSlice=createSlice({
   name:'product',
   initialState:{
      products:[],
      name:localStorage.getItem('product_name')?localStorage.getItem('product_name'):'product'
   },
   reducers:{
       SET_LIST(state,action){
           state.products=action.payload;
       },
       SET_NAME(state,action){
        console.log('set product name',action);
        state.name=action.payload;
        localStorage.setItem('product_name',action.payload);
    }
      
       
   }
})

export const selectName=(state:ProductState)=>state.product.name;
export const {SET_LIST,SET_NAME} = productSlice.actions;
export default  productSlice.reducer;